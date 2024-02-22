import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { Chance } from 'chance';
import { Category } from './../models/category/entities/category.entity';
import randomIntFromInterval from '../common/utils/randomIntFromInterval';
const chance = new Chance();

export class Category1634604346230 implements MigrationInterface {
  public async up(): Promise<void> {
    console.log('category-start');
    const promises: Promise<any>[] = [];
    for (let i = 0; i < 10; i++) {
      const category = {
        name: chance.name(),
        description: chance.sentence({ words: randomIntFromInterval(8, 12) }),
      };
      promises.push(
        new Promise(async (resolve) => {
          const categoryC = getRepository(Category).create(category);

          resolve(await getRepository(Category).save(categoryC));
        }),
      );
    }

    console.log(`category-${promises.length}`);
    await Promise.all(promises);
    console.log(`category-end`);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('category');
  }
}
