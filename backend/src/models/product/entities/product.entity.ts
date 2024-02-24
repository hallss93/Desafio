import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductRO } from '../../product/interfaces/product.ro';
import { CreatedUpdatedEntity } from '../../../common/models/entities/created-updated.entity';
import { Category } from 'src/models/category/entities/category.entity';

@Entity()
export class Product extends CreatedUpdatedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  @IsString()
  title: string;

  @Column({ nullable: false, default: 0 })
  @ApiProperty()
  @IsInt()
  price: number;

  @Column({ nullable: false, default: 0 })
  @ApiProperty()
  @IsInt()
  discountPercentage: number;

  @Column({ nullable: false, default: '' })
  @ApiProperty()
  @IsString()
  brand: string;

  @Column({ nullable: true })
  @ApiProperty()
  @IsString()
  description: string;

  @Column({ nullable: true })
  @ApiProperty()
  @IsString()
  image: string;

  @Column({ nullable: false })
  @ApiProperty()
  @IsInt()
  @ManyToOne(() => Category, (u) => u.id)
  @JoinColumn({ name: 'category' })
  category: number;

  toResponseObject(): ProductRO {
    const {
      id,
      title,
      price,
      discountPercentage,
      brand,
      description,
      image,
      category,
    } = this;
    const responseObject: ProductRO = {
      id,
      title,
      price,
      discountPercentage,
      brand,
      description,
      image,
      category,
    };

    return responseObject;
  }
}
