import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Like, Repository } from 'typeorm';
import Count from '../../common/interfaces/Count';
import { Product } from './entities/product.entity';
import { ProductRO } from './interfaces/product.ro';
import { ProductDto } from './interfaces/product.dto';

@Injectable()
export class ProductService {
  AWS_S3_BUCKET = 'demo-nest';
  s3 = new AWS.S3({
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  });

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  /**
   * It returns a promise of a count of products or any
   * @param {number} page - number - The number of records to page.
   * @param {number} size - number of records to return
   * @returns Promise<Count<Product> | any>
   */
  public findAllProducts(
    page: number,
    size: number,
    query: string,
    order: 'ASC' | 'DESC',
    orderBy: keyof Product,
  ): Promise<Count<Product> | any> {
    let where = {};
    if (query)
      where = [
        {
          title: Like(`%${query}%`),
        },
        {
          brand: Like(`%${query}%`),
        },
      ];
    return this.productRepository.findAndCount({
      relations: ['category'],
      take: size,
      skip: page * size,
      where,
      order: {
        [orderBy]: order.toUpperCase(),
      },
    });
  }

  /**
   * It finds a product by its id
   * @param {number} id - number - The id of the product we want to find.
   * @returns A ProductRO object
   */
  public async findById(id: number): Promise<ProductRO | null> {
    return (await this.productRepository.findOneOrFail(id)).toResponseObject();
  }

  public async create(product: ProductDto, file): Promise<Product | any> {
    console.log(product);
    const object: Product = product as Product;
    if (file) {
      try {
        const aws_image_object = await this.uploadFile(file);

        object.image = aws_image_object.Location;
      } catch (e) {
        console.log(e);
      }
    }

    const newProduct = this.productRepository.create({
      ...object,
    });
    await newProduct.save();
    return newProduct.toResponseObject();
  }

  public async update(
    id: number,
    newValue: ProductDto,
    file,
  ): Promise<ProductRO | null> {
    const product = await this.productRepository.findOneOrFail(id);
    if (!product.id) {
      // tslint:disable-next-line:no-console
      console.error("product doesn't exist");
    }

    const object: Product = newValue as Product;
    if (file) {
      try {
        const aws_image_object = await this.uploadFile(file);

        object.image = aws_image_object.Location;
      } catch (e) {
        console.log(e);
      }
    }

    const newProduct = this.productRepository.create(object);
    await this.productRepository.update(id, newProduct);
    const find = await this.productRepository.findOne(id);
    return find.toResponseObject();
  }

  public delete(id: number): Promise<DeleteResult> {
    return this.productRepository.delete(id);
  }

  async uploadFile(file) {
    const { originalname } = file;

    return await this.s3_upload(
      file.buffer,
      this.AWS_S3_BUCKET,
      originalname,
      file.mimetype,
    );
  }
  async s3_upload(file, bucket, name, mimetype) {
    const params = {
      Bucket: bucket,
      Key: String(name),
      Body: file,
      ACL: 'public-read',
      ContentType: mimetype,
      ContentDisposition: 'inline',
      CreateBucketConfiguration: {
        LocationConstraint: 'ap-south-1',
      },
    };

    try {
      return await this.s3.upload(params).promise();
    } catch (e) {
      console.log(e);
    }
  }
}
