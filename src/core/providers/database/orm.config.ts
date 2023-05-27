import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';

// TODO: Add settings to migrations
export const getTypeOrmModuleOptions = (): TypeOrmModuleOptions => {
  const dbOptions: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT) || 3306,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    synchronize: true,
    autoLoadEntities: true,
    entities: [__dirname + '/../../entities/**/*.entity.{js,ts}'],
  };

  return dbOptions;
};

export const getDataSourceOptions = (): DataSourceOptions => {
  const options: DataSourceOptions = {
    ...getTypeOrmModuleOptions(),
  } as DataSourceOptions;

  Object.assign(options, {} as Partial<DataSourceOptions>);

  return options;
};

export default new DataSource(getDataSourceOptions());
