import {service} from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,
  param,
  post,
  requestBody,
  response,
} from '@loopback/rest';
import {Cargo} from '../models';
import {CargoRepository} from '../repositories';
import {CargoService} from '../services';

export class CargoController {
  constructor(
    @repository(CargoRepository)
    public cargoRepository: CargoRepository,
    @service(CargoService)
    public cargoService: CargoService,
  ) {}

  @get('/cargos/count')
  @response(200, {
    description: 'Cargo model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(@param.where(Cargo) where?: Where<Cargo>): Promise<Count> {
    return this.cargoRepository.count(where);
  }

  @get('/cargos')
  @response(200, {
    description: 'Array of Cargo model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Cargo, {includeRelations: true}),
        },
      },
    },
  })
  async find(@param.filter(Cargo) filter?: Filter<Cargo>): Promise<Cargo[]> {
    return this.cargoRepository.find(filter);
  }

  @get('/cargos/{id}')
  @response(200, {
    description: 'Cargo model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Cargo, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Cargo, {exclude: 'where'})
    filter?: FilterExcludingWhere<Cargo>,
  ): Promise<Cargo> {
    return this.cargoRepository.findById(id, filter);
  }

  @post('/cargos/payload')
  @response(200, {
    description: 'Cargo model instance',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          title: 'Payload Response',
          properties: {
            result: {type: 'boolean'},
          },
        },
      },
    },
  })
  async checkPayload(
    @requestBody() payload: {cargoId: number; weight: number},
  ): Promise<object> {
    // get cargo in controller and check in service
    // const cargo = await this.cargoRepository.findById(payload.cargoId);

    // const result = this.cargoService.checkPayload(
    //   {min: cargo.min, max: cargo.max},
    //   payload.weight,
    // );

    // get & check payload in service
    const result = await this.cargoService.checkPayloadByCargoId(
      payload.cargoId,
      payload.weight,
    );
    return {
      result,
    };
  }
}
