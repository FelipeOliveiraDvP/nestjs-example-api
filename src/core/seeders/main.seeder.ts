import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager, runSeeder } from 'typeorm-extension';
import { FeatureSeeder } from './features.seeder';

export class MainSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factory: SeederFactoryManager,
  ): Promise<void> {
    await runSeeder(dataSource, FeatureSeeder);
  }
}
