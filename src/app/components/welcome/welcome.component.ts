import { Component, OnInit } from '@angular/core';
import { DogsService } from 'src/app/services/dogsService/dogs.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  results = [];

  constructor(private dogsService: DogsService) {}

  ngOnInit() {}

  getRandomPics() {
    this.dogsService
      .getRandomImgs(10)
      /*.subscribe(data => {
        this.imgList = data;
      });*/
      .subscribe({
        next(response) {
          console.log(response.message);
          this.results = response.message;
        },
        error(err) {
          console.error('Error: ' + err);
        },
        complete() {
          console.log('Completed');
        }
      });
  }
}
