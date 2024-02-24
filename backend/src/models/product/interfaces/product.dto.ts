import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  readonly title: string;
  @ApiProperty()
  readonly price: number;
  @ApiProperty()
  readonly discountPercentage: number;
  @ApiProperty()
  readonly brand: string;
  @ApiProperty()
  readonly description: string;
  @ApiProperty()
  readonly image?: string;
  @ApiProperty()
  readonly category: number;
}

export class ProductPagination {
  @ApiProperty()
  statusCode: number;
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
