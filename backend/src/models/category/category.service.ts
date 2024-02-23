import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import Count from './../../common/interfaces/Count';
import { Category } from './entities/category.entity';
import { CategoryRO } from './interfaces/category.ro';
import { CategoryDto } from './interfaces/category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  /**
   * It returns a promise of a count of categories or any
   * @param {number} page - number - The number of records to page.
   * @param {number} size - number of records to return
   * @returns Promise<Count<Category> | any>
   */
  public findAllCategories(
    page: number,
    size: number,
  ): Promise<Count<Category> | any> {
    return this.categoryRepository.findAndCount({
      take: size,
      skip: page * size,
    });
  }

  /**
   * It finds a category by its id
   * @param {number} id - number - The id of the category we want to find.
   * @returns A CategoryRO object
   */
  public async findById(id: number): Promise<CategoryRO | null> {
    return (await this.categoryRepository.findOneOrFail(id)).toResponseObject();
  }

  public async create(category: CategoryDto): Promise<Category | any> {
    const newCategory = this.categoryRepository.create(category);
    await newCategory.save();
    return newCategory.toResponseObject();
  }

  public async update(
    id: number,
    newValue: CategoryDto,
  ): Promise<CategoryRO | null> {
    const category = await this.categoryRepository.findOneOrFail(id);
    if (!category.id) {
      // tslint:disable-next-line:no-console
      console.error("category doesn't exist");
    }
    const newCategory = this.categoryRepository.create(newValue);
    await this.categoryRepository.update(id, newCategory);
    const find = await this.categoryRepository.findOne(id);
    return find.toResponseObject();
  }

  public delete(id: number): Promise<DeleteResult> {
    return this.categoryRepository.delete(id);
  }
}
