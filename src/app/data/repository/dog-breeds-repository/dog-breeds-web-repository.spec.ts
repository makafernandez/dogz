import { DogBreedsWebRepository } from './dog-breeds-web-repository';
import { TestBed } from '@angular/core/testing';

describe('DogBreedsWebRepository', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: DogBreedsWebRepository = TestBed.get(DogBreedsWebRepository);
		expect(service).toBeTruthy();
	});
});
