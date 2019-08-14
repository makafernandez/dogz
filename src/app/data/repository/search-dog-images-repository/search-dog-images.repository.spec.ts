import { SearchDogImagesRepository } from './search-dog-images.repository';
import { TestBed } from '@angular/core/testing';

describe('SearchDogImagesRepository', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: SearchDogImagesRepository = TestBed.get(SearchDogImagesRepository);
		expect(service).toBeTruthy();
	});
});
