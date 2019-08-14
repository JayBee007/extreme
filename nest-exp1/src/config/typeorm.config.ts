import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfg: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'idea',
  logging: true,
  synchronize: true,
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
};
