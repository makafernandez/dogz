import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SharedService } from './shared.service';

describe('SharedService', () => {
  // Declare the variables that we'll use for the Test Controller and for our Service
  let httpTestingController: HttpTestingController;
  let service: SharedService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [], // Components
      providers: [SharedService], // Service
      imports: [HttpClientTestingModule] // Modules
    }).compileComponents();

    // Injects service (which imports the HttpClient) and the Test Controller
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(SharedService);
  }));

  afterEach(() => {
    // Verify that there are no pending HTTP requests
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#setImageList', () => {
    it('returned Observable should match the right data', () => {
      // Mock data
      const mockImgList = [
        {
          name: 'keeshond',
          url: [
            'https://images.dog.ceo/breeds/keeshond/n02112350_10085.jpg',
            'https://images.dog.ceo/breeds/keeshond/n02112350_1199.jpg',
            'https://images.dog.ceo/breeds/keeshond/n02112350_4122.jpg'
          ]
        },
        {
          name: 'setter',
          url: [
            'https://images.dog.ceo/breeds/setter/n02112350_10085.jpg',
            'https://images.dog.ceo/breeds/setter/n02112350_1199.jpg',
            'https://images.dog.ceo/breeds/setter/n02112350_4122.jpg'
          ]
        }
      ];

      // Set mock data to service
      service.setImageList(mockImgList);

      // Subscribe to service and define expected response
      service.imageList
        .subscribe(response => {
          expect(response[0].name).toEqual('keeshond');
          expect(response[0].url[0]).toEqual(
            'https://images.dog.ceo/breeds/keeshond/n02112350_10085.jpg'
          );

          expect(response[1].name).toEqual('setter');
          expect(response[1].url[2]).toEqual(
            'https://images.dog.ceo/breeds/setter/n02112350_4122.jpg'
          );
        });
    });
  });
});
