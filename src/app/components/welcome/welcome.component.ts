import { Component, OnInit } from '@angular/core';
import { DogsService } from 'src/app/services/dogsService/dogs.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  results = [];

  constructor(private dogsService: DogsService) { }

  ngOnInit() { }

}
