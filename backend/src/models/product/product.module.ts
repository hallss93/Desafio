import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductService } from '../product/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../product/entities/product.entity';
import { LogsModule } from '../log/logs.module';
import { LogMiddleware } from '../../common/middleware/logs.middleware';
import { ProductController } from './controllers/product.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), LogsModule],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LogMiddleware).forRoutes('*');
  }
}
