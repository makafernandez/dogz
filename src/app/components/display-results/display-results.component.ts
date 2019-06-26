import { Component, OnInit } from '@angular/core';
import { DogsService } from 'src/app/services/dogs.service';

@Component({
  selector: 'app-display-results',
  templateUrl: './display-results.component.html',
  styleUrls: ['./display-results.component.css']
})
export class DisplayResultsComponent implements OnInit {
  imgList = [];


  constructor(private dogsService: DogsService ) {}

  ngOnInit() {
    this.searchByBreed('hound');
    console.log(this.imgList);
  }

  searchByBreed(breed) {
    this.dogsService.searchBreed(breed)
      .subscribe((data: []) => this.imgList = [
          data
      ]);
  }
}
