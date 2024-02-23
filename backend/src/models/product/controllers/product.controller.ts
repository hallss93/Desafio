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

import { ProductService } from '../../product/product.service';
import { ProductDto, ProductPagination } from '../interfaces/product.dto';

import { PaginationInterceptor } from '../../../common/interceptors/pagination.interceptor';
import { DeleteResult } from 'typeorm';
import { ProductRO } from '../interfaces/product.ro';
import { Product } from '../entities/product.entity';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/')
  @UseInterceptors(PaginationInterceptor)
  @ApiOkResponse({ type: ProductPagination, isArray: true })
  async getProductList(
    @Query('page') page: number,
    @Query('size') size: number,
  ): Promise<ProductPagination[]> {
    console.log(size)
    return this.productService.findAllProducts(page, size);
  }

  @Get('/:id')
  getProduct(@Param('id') id: number): Promise<ProductRO> {
    return this.productService.findById(id);
  }

  @Post('/')
  postProduct(@Body(ValidationPipe) product: Product): Promise<ProductDto> {
    return this.productService.create(product);
  }

  @Put('/:id')
  updateProduct(
    @Param('id') id: number,
    @Body(ValidationPipe) product: Product,
  ): Promise<ProductRO> {
    return this.productService.update(id, product);
  }

  @Delete('/:id')
  deleteProduct(@Param('id') id: number): Promise<DeleteResult> {
    return this.productService.delete(id);
  }
}
