import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { SharedService } from 'src/app/services/sharedService/shared.service';
import { DogsService } from 'src/app/services/dogsService/dogs.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})

export class ToolsComponent implements OnInit {
  @Output() eventClicked = new EventEmitter<Event>();
  panelOpenState = false;
  breeds = [];
  subBreedsList = [];
  imgList = [];
  loading = false;

  constructor(private sharedService: SharedService, private dogsService: DogsService) { }

  ngOnInit() {
    this.loadBreedList();
  }

  loadBreedList() {
    this.loading = true;
    this.dogsService.getBreedsList().pipe(tap(() => this.loading = true))
      .subscribe({
        next(response) {
          this.breeds = Object.keys(response.message);
          this.loading = false;
          console.log(this.breeds);
        },
        error(err) {
          console.error('Error: ' + err);
        }
      }).tap(() => this.loading = false);
  }

  searchByBreed(breed: string, num: number) {
    this.loading = true;
    this.dogsService.searchBreed(breed, num).subscribe({
      next(response) {
        this.imgList = response.message;
        this.loading = false;
      },
      error(err) {
        console.error('Error: ' + err);
      },
      complete() {
        console.log('Completed');
      }
    });
  }

  onChange(event: Event): void {
    this.eventClicked.emit(event);
    this.searchByBreed(event.source.name, 10);
  }

  addData() {
    this.sharedService.insertData(this.data);
    this.data = '';
  }
}
