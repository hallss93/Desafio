import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryRO } from '../../category/interfaces/category.ro';
import { CreatedUpdatedEntity } from './../../../common/models/entities/created-updated.entity';
import { Product } from 'src/models/product/entities/product.entity';

@Entity()
export class Category extends CreatedUpdatedEntity {
  @PrimaryGeneratedColumn()
  @OneToOne(() => Product, (t) => t.category)
  id: number;

  @Column()
  @ApiProperty()
  @IsString()
  name: string;

  @Column({ nullable: true })
  @ApiProperty()
  @IsString()
  description: string;

  toResponseObject(): CategoryRO {
    const { id, name, description } = this;
    const responseObject: CategoryRO = {
      id,
      name,
      description,
    };

    return responseObject;
  }
}
