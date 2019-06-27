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

  searchByBreed(breed: string, num: number) {
    this.loading = true;
    this.dogsService.searchBreed(breed, num).subscribe(response => {
      this.imgList = response.message;
      this.loading = false;
    });
    this.addSharedImgList(this.imgList);
  }

  onChange(event: Event, breed) {
    this.eventClicked.emit(event);
    this.searchByBreed(breed, 10);
  }

  addSharedImgList(data) {
    this.sharedService.insertImgList(data);
    this.imgList = [];
  }
}
