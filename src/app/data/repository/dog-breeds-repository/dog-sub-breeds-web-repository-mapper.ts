import { DogSubBreedsModel } from '../../../core/domain/dog-sub-breeds.model';
import { DogBreedsWebEntity } from './dog-breeds-web-entity';
import { Mapper } from '../../../core/base/mapper';

export class DogSubBreedsWebRepositoryMapper extends Mapper <DogBreedsWebEntity, DogSubBreedsModel> {
	mapFrom(param): DogSubBreedsModel {
		const { sub, breed } = param;
		return {
			name: sub,
			breed,
			checked: false
		};
	}
}
