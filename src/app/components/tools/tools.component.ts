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
  subBreeds = [];
  imgList: string[] = [];
  loading = false;

  constructor(
    private sharedService: SharedService,
    private dogsService: DogsService
  ) { }

  ngOnInit() {
    this.loadBreedList();
  }

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

  loadSubBreedList(breed) {
    this.dogsService
      .getSubBreedsList(breed)
      .pipe(
        tap(() => {
          this.loading = true;
        })
      )
      .subscribe(response => {
        debugger;
        this.subBreeds = response || [];
        this.loading = false;
        console.log(this.subBreeds);
      });
  }

  searchByBreed(breed: string, num: number) {
    this.loading = true;
    this.dogsService.getBreedImg(breed, num).subscribe(response => {
      this.imgList = response.message;
      this.loading = false;
      this.addSharedImgList(this.imgList);
    });
  }

  searchBySubBreed(breed: string, subBreed: string, num: number) {
    this.loading = true;
    this.dogsService.getSubBreedImg(breed, subBreed, num).subscribe(response => {
      this.imgList = response.message;
      this.loading = false;
      this.addSharedImgList(this.imgList);
    });
  }

  onChange(event: any, breed: string, subBreed: string) {
    this.eventClicked.emit(event);
    if (event.checked) {
      if (subBreed) {
        this.searchBySubBreed(breed, subBreed, 10);
        debugger;
      } else {
        this.searchByBreed(breed, 10);
        this.loadSubBreedList(breed);
      }
    } else {
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
