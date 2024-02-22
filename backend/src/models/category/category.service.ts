import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Count from './../../common/interfaces/Count';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}
  public findAll(skip: number, take: number): Promise<Count<Category> | any> {
    return this.categoryRepository.findAndCount({ take, skip });
  }

  /**
   * It returns a promise of a count of categories or any
   * @param {number} skip - number - The number of records to skip.
   * @param {number} take - number of records to return
   * @returns Promise<Count<Category> | any>
   */
  public findAllCategories(
    skip: number,
    take: number,
  ): Promise<Count<Category> | any> {
    return this.categoryRepository.findAndCount({
      take,
      skip,
    });
  }

}
