import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DogsService } from './dogs.service';

describe('DogsServiceService', () => {
  // We declare the variables that we'll use for the Test Controller and for our Service
  let httpTestingController: HttpTestingController;
  let service: DogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [], // Components
      providers: [DogsService], // Service
      imports: [HttpClientTestingModule] // Modules
    }).compileComponents();

    // Injects service (which imports the HttpClient) and the Test Controller
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(DogsService);
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
          bulldog: [
            'boston',
            'english',
            'french'
          ],
          bullterrier: [
            'staffordshire'
          ],
          cairn: [],
          cattledog: [
            'australian'
          ],
          dachshund: [],
          dalmatian: [],
          dane: [
            'great'
          ]
        },
        status: 'success'
      };

      // Subscribe to service and define expected response
      service.getBreedsList()
        .subscribe(response => {
          expect(response).toEqual(mockBreedList);
        });

      const req = httpTestingController.expectOne(
        'https://dog.ceo/api/breeds/list/all'
      );
      expect(req.request.method).toBe('GET');

      req.flush(mockBreedList);
    });
  });

  describe('#getSubBreedsList', () => {
    it('returned Observable should match the right data', () => {
      // Mock data
      const mockBreedList = {
        message: [
          'afghan',
          'basset',
          'blood',
          'english',
          'ibizan',
          'walker'
        ],
        status: 'success'
      };

      // Subscribe to service and define expected response
      service.getSubBreedsList('bulldog')
        .subscribe(response => {
          expect(response).toEqual(mockBreedList);
        });

      const req = httpTestingController.expectOne(
        'https://dog.ceo/api/breed/bulldog/list'
      );
      expect(req.request.method).toBe('GET');

      req.flush(mockBreedList);
    });
  });

  describe('#getBreedImg', () => {
    it('returned Observable should match the right data', () => {
      // Mock data
      const mockBreedImgList = {
        message: [
          'https://images.dog.ceo/breeds/hound-afghan/n02088094_1259.jpg',
          'https://images.dog.ceo/breeds/hound-afghan/n02088094_5927.jpg',
          'https://images.dog.ceo/breeds/hound-basset/n02088238_5239.jpg'
        ],
        status: 'success'
      };

      // Subscribe to service and define expected response
      service.getBreedImg('hound')
        .subscribe(response => {
          expect(response.name).toEqual('hound');
          expect(response.url[0]).toEqual('https://images.dog.ceo/breeds/hound-afghan/n02088094_1259.jpg');
        });

      const req = httpTestingController.expectOne(
        'https://dog.ceo/api/breed/hound/images/random/10'
      );
      expect(req.request.method).toBe('GET');

      req.flush(mockBreedImgList);
    });
  });
});
