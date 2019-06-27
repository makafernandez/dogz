import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DogsService } from 'src/app/services/dogsService/dogs.service';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/services/sharedService/shared.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  @Output() eventClicked = new EventEmitter<Event>();
  panelOpenState = false;
  breeds: any[] = [];
  subBreedsList = [];
  imgList: string[] = [];
  loading = false;

  constructor(
    private sharedService: SharedService,
    private dogsService: DogsService
  ) {}

  ngOnInit() {
    this.loadBreedList();
  }

  /**
   *
   *
   * @date 2019-06-27
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
        this.breeds = Object.keys(response.message);
        this.loading = false;
      });
  }

  /**
   *
   * @date 2019-06-27
   * @param {string} breed
   * @param {number} num
   * @memberof ToolsComponent
   */
  searchByBreed(breed: string, num: number) {
    this.loading = true;
    this.dogsService.searchBreed(breed, num).subscribe(response => {
      this.imgList = response.message;
      this.loading = false;
      this.addSharedImgList(this.imgList);
    });
  }

  /**
   * @description Captura los click 
   * @author makafernandez
   * @date 2019-06-27
   * @param {*} event
   * @param {*} breed
   * @memberof ToolsComponent
   */
  onChange(event: any, breed: any) {
    this.eventClicked.emit(event);
    if (event.checked) {
      this.searchByBreed(breed, 10);
    } else {
      console.log('deselecciona');
      for (breed in this.imgList) {
        
      }
      let index = this.imgList.indexOf(breed);
      console.log(index);
      
    }
  }

  addSharedImgList(data) {
    this.sharedService.setImageList(data);
    this.imgList = [];
  }
}
