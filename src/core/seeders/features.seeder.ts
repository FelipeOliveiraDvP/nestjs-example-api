import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Feature } from '../entities';

export class FeatureSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factory: SeederFactoryManager,
  ): Promise<void> {
    // TODO: Fix uuid not generated
    const featureRepository = dataSource.getRepository(Feature);

    await featureRepository
      .createQueryBuilder()
      .insert()
      .into(Feature)
      .values([{ name: 'Usuários' }])
      .execute();
  }
}
