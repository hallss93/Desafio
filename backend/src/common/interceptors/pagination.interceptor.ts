import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PaginationInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { query } = request;
    const newSize = query.size && !isNaN(query.size) ? Number(query.size) : 10;
    const newPage = query.page && !isNaN(query.page) ? Number(query.page) : 0;

    return next.handle().pipe(
      map((data) => {
        const totalPages = Math.ceil(data[1] / newSize);
        return {
          statusCode: context.switchToHttp().getResponse().statusCode,
          data: data[0],
          pagination: {
            page: newPage,
            size: newSize,
            totalItems: data[1],
            totalPages,
            nextPage: (newPage + 1) * newSize < data[1] ? newPage + 1 : null,
            previousPage: newPage > 0 ? newPage - 1 : null,
          },
        };
      }),
    );
  }
}
