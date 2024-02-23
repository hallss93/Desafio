import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import Count from '../../common/interfaces/Count';
import { Product } from './entities/product.entity';
import { ProductRO } from './interfaces/product.ro';
import { ProductDto } from './interfaces/product.dto';

@Injectable()
export class ProductService {
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
  ): Promise<Count<Product> | any> {
    return this.productRepository.findAndCount({
      relations: ['category'],
      take: size,
      skip: page * size,
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

  public async create(product: ProductDto): Promise<Product | any> {
    const newProduct = this.productRepository.create(product);
    await newProduct.save();
    return newProduct.toResponseObject();
  }

  public async update(
    id: number,
    newValue: ProductDto,
  ): Promise<ProductRO | null> {
    const product = await this.productRepository.findOneOrFail(id);
    if (!product.id) {
      // tslint:disable-next-line:no-console
      console.error("product doesn't exist");
    }
    const newProduct = this.productRepository.create(newValue);
    await this.productRepository.update(id, newProduct);
    const find = await this.productRepository.findOne(id);
    return find.toResponseObject();
  }

  public delete(id: number): Promise<DeleteResult> {
    return this.productRepository.delete(id);
  }
}
