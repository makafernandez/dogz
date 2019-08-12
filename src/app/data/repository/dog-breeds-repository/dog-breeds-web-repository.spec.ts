import { DogBreedsWebRepository } from './dog-breeds-web-repository';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

fdescribe('DogBreedsWebRepository', () => {
	let httpTestingController: HttpTestingController;
	let service: DogBreedsWebRepository;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [], // Components
			providers: [DogBreedsWebRepository], // Service
			imports: [HttpClientTestingModule] // Modules
		}).compileComponents();

		// Injects service (which imports the HttpClient) and the Test Controller
		httpTestingController = TestBed.get(HttpTestingController);
		service = TestBed.get(DogBreedsWebRepository);
	});

	afterEach(() => {
		// Verify that there are no pending HTTP requests
		httpTestingController.verify();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	describe('#getBreedsList', () => {
		it('returned Observable should match the right data', () => {
			// Mock data
			const mockBreedList = {
				message: {
					affenpinscher: [],
					african: [],
					briard: [],
				},
				status: 'success'
			};

			// Subscribe to service and define expected response
			service.getBreedsList()
				.subscribe(response => {
					expect(response).toEqual([
						{ name: 'affenpinscher', checked: false },
						{ name: 'african', checked: false },
						{ name: 'briard', checked: false }
					]);
				});

			const req = httpTestingController.expectOne(
				'https://dog.ceo/api/breeds/list/all'
			);
			expect(req.request.method).toBe('GET');

			req.flush(mockBreedList);
		});
	});
});
