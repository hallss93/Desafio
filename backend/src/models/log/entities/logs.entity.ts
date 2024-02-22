import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsNotEmpty, MinLength } from 'class-validator';
import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { LogRO } from '../interfaces/logs.ro';
import { CreatedUpdatedEntity } from './../../../common/models/entities/created-updated.entity';

@Entity()
export class Log extends CreatedUpdatedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: new Date().toISOString() })
  @ApiProperty()
  @IsDateString({})
  @IsNotEmpty({})
  date: string;

  @Column({ length: 5000 })
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3)
  description: string;

  /**
   * It returns an object with the same properties as the Log entity
   * @returns The response object is being returned.
   */
  toResponseObject(): LogRO {
    const { id, date, description } = this;
    const responseObject: LogRO = {
      id,
      date,
      description,
    };

    return responseObject;
  }

  @BeforeInsert()
  /**
   * The function is asynchronous, so it returns a promise. The promise resolves when the date is set
   */
  async setDate() {
    this.date = new Date().toISOString();
  }
}
