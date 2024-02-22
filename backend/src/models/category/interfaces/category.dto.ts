import { ApiProperty } from '@nestjs/swagger';

export class CategoryDto {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly description: string;
}

export class CategoryPagination {
  @ApiProperty()
  statusCode: number;
  @ApiProperty()
  @ApiProperty()
  @ApiProperty()
  pagination: {
    page: number;
    size: number;
    totalItems: number;
    totalPages: number;
    nextPage: number | null;
    previousPage: number | null;
  };
}
