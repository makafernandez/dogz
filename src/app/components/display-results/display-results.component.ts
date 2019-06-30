import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/sharedService/shared.service';

@Component({
  selector: 'app-display-results',
  templateUrl: './display-results.component.html',
  styleUrls: ['./display-results.component.css']
})
export class DisplayResultsComponent implements OnInit {
  imgList: any[] = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.imageList
      .subscribe((response: any) => {
        let list = [];
        list.push(response);
        this.imgList = list;
        list = [];
      });
  }
}

