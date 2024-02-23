import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly description: string;
  @ApiProperty()
  readonly image?: string;
}

export class ProductPagination {
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
