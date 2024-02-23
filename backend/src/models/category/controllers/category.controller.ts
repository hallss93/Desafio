import {
  Controller,
  Delete,
  Get,
  Param,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { CategoryService } from '../../category/category.service';
import { CategoryPagination } from '../interfaces/category.dto';

import { PaginationInterceptor } from '../../../common/interceptors/pagination.interceptor';
import { DeleteResult } from 'typeorm';

@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('/')
  @UseInterceptors(PaginationInterceptor)
  @ApiOkResponse({ type: CategoryPagination, isArray: true })
  async getCategoryList(
    @Query('skip') skip: number,
    @Query('take') take: number,
  ): Promise<CategoryPagination[]> {
    return this.categoryService.findAllCategories(skip, take);
  }

  @Delete('/:id')
  deleteCategory(@Param('id') id: number): Promise<DeleteResult> {
    return this.categoryService.delete(id);
  }
}
