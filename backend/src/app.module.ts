import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EasyconfigModule } from 'nestjs-easyconfig';
import {
  AcceptLanguageResolver,
  I18nJsonParser,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';
import * as path from 'path';
import { CategoryModule } from './models/category/category.module';
import { Category } from './models/category/entities/category.entity';
import { PathResolver } from './path.resolver';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Log } from './models/log/entities/logs.entity';

@Module({
  imports: [
    EasyconfigModule.register({}),
    I18nModule.forRoot({
      fallbackLanguage: 'pt-BR',
      parser: I18nJsonParser,
      parserOptions: {
        path: path.join(__dirname, '/i18n/'),
      },
      resolvers: [
        PathResolver,
        { use: QueryResolver, options: ['lang', 'locale', 'l'] },
        AcceptLanguageResolver,
      ],
    }),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION,
      charset: 'utf8mb4',
      logging: process.env.NODE_ENV !== 'production',
      logger: 'file',
      host: process.env.TYPEORM_HOST,
      port: process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [Category, Log],
      ssl: false,
      synchronize: process.env.NODE_ENV !== 'production',
      migrations: ['dist/migrations/*{.ts,.js}'],
      migrationsTableName: 'migrations_typeorm',
      migrationsRun: process.env.NODE_ENV !== 'production',
    }),
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
