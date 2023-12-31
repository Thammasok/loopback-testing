import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PgDataSource} from '../datasources';
import {Cargo, CargoRelations} from '../models';

export class CargoRepository extends DefaultCrudRepository<
  Cargo,
  typeof Cargo.prototype.id,
  CargoRelations
> {
  constructor(@inject('datasources.postgresql') dataSource: PgDataSource) {
    super(Cargo, dataSource);
  }
}
