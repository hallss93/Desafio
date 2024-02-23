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
  name: string;

  @Column({ nullable: true })
  @ApiProperty()
  @IsString()
  description: string;

  @Column({ nullable: false })
  @ApiProperty()
  @IsInt()
  @ManyToOne(() => Category, (u) => u.id)
  @JoinColumn({ name: 'category' })
  category: number;

  toResponseObject(): ProductRO {
    const { id, name, description, category } = this;
    const responseObject: ProductRO = {
      id,
      name,
      description,
      category,
    };

    return responseObject;
  }
}
