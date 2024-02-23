import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { Chance } from 'chance';
import { Product } from './../models/product/entities/product.entity';
import randomIntFromInterval from '../common/utils/randomIntFromInterval';
import { Category } from 'src/models/category/entities/category.entity';
const chance = new Chance();

export class Product1635843985654 implements MigrationInterface {
  public async up(): Promise<void> {
    console.log('Product-start');
    const promises: Promise<any>[] = [];
    const categoryCount = await getRepository(Category).count();
    for (let j = 1; j <= categoryCount; j++) {
      for (let i = 0; i < 10; i++) {
        const product = {
          category: j,
          image:
            'https://demo-nest.s3.amazonaws.com/6cc10c7605fcca23cfdae7cd8701ce23.jpg',
          name: chance.name(),
          description: chance.sentence({ words: randomIntFromInterval(8, 12) }),
        };
        promises.push(
          new Promise(async (resolve) => {
            const ProductC = getRepository(Product).create(product);

            resolve(await getRepository(Product).save(ProductC));
          }),
        );
      }
    }

    console.log(`Product-${promises.length}`);
    await Promise.all(promises);
    console.log(`Product-end`);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('Product');
  }
}
