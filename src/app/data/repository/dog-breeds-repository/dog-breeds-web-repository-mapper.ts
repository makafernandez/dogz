import { DogBreedsModel } from './../../../core/domain/dog-breeds-model';
import { DogBreedsWebEntity } from './dog-breeds-web-entity';
import { Mapper } from '../../../core/base/mapper';

export class DogBreedsWebRepositoryMapper extends Mapper <DogBreedsWebEntity, DogBreedsModel> {
	mapFrom(param): DogBreedsModel {
		return {
			name: param,
			checked: false
		};
	}

	mapTo(param: DogBreedsModel): DogBreedsWebEntity {
		return {
			message: param.name
		};
	}
}
