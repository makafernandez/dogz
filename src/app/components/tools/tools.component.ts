import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DogsService } from 'src/app/services/dogsService/dogs.service';
import { tap } from 'rxjs/operators';
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
  imgList = [];
  loading = false;

  constructor(
    private sharedService: SharedService,
    private dogsService: DogsService
  ) {}

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
        const obj = Object.keys(response.message);
        this.breeds = obj.map(breed => {
          return { name: breed, checked: false };
        });
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
        this.subBreeds = response.message.map(sub => {
          return { name: sub, checked: true };
        });

        this.loading = false;
      });
  }

  onChange(event: any, breed: string, subBreed: string) {
    if (event.checked) {
      if (subBreed) {
        this.searchBySubBreed(breed, subBreed, 10);
      } else {
        this.searchByBreed(breed, 10);
        this.loadSubBreedList(breed);
      }
    } else {
      for (let i = 0; i < this.imgList.length; i++) {
        if (this.imgList[i].name === breed) {
          this.imgList.splice(i, 1);
        }
      }
    }
  }

  searchByBreed(breed, num) {
    this.loading = true;
    this.dogsService.getBreedImg(breed, num).subscribe(response => {
      this.imgList.push(response);
      this.loading = false;
      this.addSharedImgList(this.imgList);
    });
  }

  searchBySubBreed(breed: string, subBreed: string, num: number) {
    this.loading = true;
    this.dogsService
      .getSubBreedImg(breed, subBreed, num)
      .subscribe(response => {
        this.imgList.push(response);
        this.loading = false;
        this.addSharedImgList(this.imgList);
      });
  }

  addSharedImgList(data) {
    this.sharedService.setImageList(data);
  }
}
