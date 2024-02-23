import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { CategoryService } from '../../category/category.service';
import { CategoryDto, CategoryPagination } from '../interfaces/category.dto';

import { PaginationInterceptor } from '../../../common/interceptors/pagination.interceptor';
import { DeleteResult } from 'typeorm';
import { CategoryRO } from '../interfaces/category.ro';
import { Category } from '../entities/category.entity';

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

  @Get('/:id')
  getCategory(@Param('id') id: number): Promise<CategoryRO> {
    return this.categoryService.findByIdStore(id);
  }

  @Post('/')
  postCategory(@Body(ValidationPipe) category: Category): Promise<CategoryDto> {
    return this.categoryService.create(category);
  }

  @Put('/:id')
  updateCategory(
    @Param('id') id: number,
    @Body(ValidationPipe) category: Category,
  ): Promise<CategoryRO> {
    return this.categoryService.update(id, category);
  }

  @Delete('/:id')
  deleteCategory(@Param('id') id: number): Promise<DeleteResult> {
    return this.categoryService.delete(id);
  }
}
