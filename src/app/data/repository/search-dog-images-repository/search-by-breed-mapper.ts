import { Mapper } from '../../../core/base/mapper';
import { SearchByBreedEntity } from './search-by-breed-entity';
import { SearchByBreedModel } from 'src/app/core/domain/search-by-breed.model';

export class SearchByBreedMapper extends Mapper <SearchByBreedEntity, SearchByBreedModel> {
	mapFrom(param): SearchByBreedModel {
		const { breed, url } = param;
		return {
			name: breed,
			url
		};
	}
}

