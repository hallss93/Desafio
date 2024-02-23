import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ProductService } from '../../product/product.service';
import { ProductDto, ProductPagination } from '../interfaces/product.dto';

import { FileInterceptor } from '@nestjs/platform-express';
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
    console.log(size);
    return this.productService.findAllProducts(page, size);
  }

  @Get('/:id')
  getProduct(@Param('id') id: number): Promise<ProductRO> {
    return this.productService.findById(id);
  }

  @Post('/')
  @UseInterceptors(FileInterceptor('image'))
  postProduct(
    @Body() product: Product,
    @UploadedFile() image: Express.Multer.File,
  ): Promise<ProductDto> {
    return this.productService.create(product, image);
  }

  @Put('/:id')
  @UseInterceptors(FileInterceptor('image'))
  updateProduct(
    @Param('id') id: number,
    @Body() product: Product,
    @UploadedFile() image: Express.Multer.File,
  ): Promise<ProductRO> {
    return this.productService.update(id, product, image);
  }

  @Delete('/:id')
  deleteProduct(@Param('id') id: number): Promise<DeleteResult> {
    return this.productService.delete(id);
  }
}
