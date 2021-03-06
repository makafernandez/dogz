import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DogsService } from 'src/app/services/dogsService/dogs.service';
import { tap } from 'rxjs/operators';
import { SharedService } from 'src/app/services/sharedService/shared.service';
/**
 * Implements checkboxes functionality.
 *
 * @class ToolsComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  @Output() eventClicked = new EventEmitter<Event>();
  panelOpenState = false;
  breeds = [];
  subBreeds = [];
  imgList = [];
  subImgList = [];
  filteredList = [];
  loading = false;
  /**
   * Creates an instance of ToolsComponent.
   * @param {SharedService} sharedService
   * @param {DogsService} dogsService
   * @memberof ToolsComponent
   */
  constructor(
    private sharedService: SharedService,
    private dogsService: DogsService
  ) { }

  ngOnInit() {
    this.loadBreedList();
  }
  /**
   * Subscribes to Dogs Service, and returns a list with all the breeds.
   * Adds a 'checked' property to each breed to be used by the checkboxes.
   *
   * @memberof ToolsComponent
   */
  loadBreedList() {
    this.dogsService
      .getBreedsList()
      .pipe(
        tap(() => {
          this.loading = true;
        })
      )
      .subscribe(response => {
        const obj = Object.keys(response.message);
        this.breeds = obj.map(breed => {
          return { name: breed, checked: false };
        });
        this.loading = false;
      });
  }
  /**
   * Subscribes to Dogs Service, and returns a list
   *
   * @param {*} breed
   * @memberof ToolsComponent
   */
  loadSubBreedList(breed) {
    this.dogsService
      .getSubBreedsList(breed)
      .pipe(
        tap(() => {
          this.loading = true;
        })
      )
      .subscribe(response => {
        let obj = response.message.map(sub => {
          return { name: sub, breed, checked: false };
        });
        this.subBreeds.push(obj);
        this.loading = false;
      });
  }
  /**
   * Listens to change events in checkboxes, if a checkbox is checked
   * calls the search methods. If a checkbox is unchecked, it will call
   * the uncheck method.
   *
   * @param {*} event
   * @param {string} breed
   * @param {string} subBreed
   * @memberof ToolsComponent
   */
  onChange(event: any, breed: string, subBreed: string) {
    if (event.checked) {
      if (subBreed) {
        this.searchBySubBreed(breed, subBreed, 10);
      } else {
        this.searchByBreed(breed, 10);
        this.loadSubBreedList(breed);
      }
    } else if (!event.checked) {
      if (subBreed) {
        this.uncheck(subBreed, 'subBreed');
      } else {
        this.uncheck(breed, 'breed');
      }
    }
  }
  /**
   * Filters the results when a checkbox is unchecked.
   *
   * @param {string} breedName
   * @param {string} type
   * @memberof ToolsComponent
   */
  uncheck(breedName: string, type: string) {
    if (type === 'breed') {
      this.filteredList = this.imgList.filter(breed => breed.name !== breedName);
      this.imgList = this.filteredList;
    } else if (type === 'subBreed') {
      this.filteredList = this.subImgList.filter(breed => breed.name !== breedName);
      this.subImgList = this.filteredList;
    }
    this.addSharedImgList(this.filteredList);
  }

  /**
   * Subscribes to Dogs Service and returns a list of images urls of a particular breed.
   *
   * @param {*} breed
   * @param {*} num
   * @memberof ToolsComponent
   */
  searchByBreed(breed, num) {
    this.loading = true;
    this.dogsService.getBreedImg(breed, num).subscribe(response => {
      this.subImgList = [];
      this.imgList.push(response);
      this.loading = false;
      this.addSharedImgList(this.imgList);
    });
  }
  /**
   * Subscribes to Dogs Service and returns a list of images urls of a particular sub-breed.
   *
   * @param {string} breed
   * @param {string} subBreed
   * @param {number} num
   * @memberof ToolsComponent
   */
  searchBySubBreed(breed: string, subBreed: string, num: number) {
    this.loading = true;
    this.dogsService
      .getSubBreedImg(breed, subBreed, num)
      .subscribe(response => {
        this.imgList = [];
        this.subImgList.push(response);
        this.loading = false;
        this.addSharedImgList(this.subImgList);
      });
  }
  /**
   * Stores data in the Shared Service, to become available for other components.
   *
   * @param {*} data
   * @memberof ToolsComponent
   */
  addSharedImgList(data: any) {
    this.sharedService.setImageList(data);
  }
}
