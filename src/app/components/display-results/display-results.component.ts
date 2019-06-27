import { Component, OnInit, Optional, Input } from '@angular/core';
import { SharedService } from 'src/app/services/sharedService/shared.service';
import { WelcomeComponent } from '../welcome/welcome.component';
import { ToolBarComponent } from '../tool-bar/tool-bar.component';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-display-results',
  templateUrl: './display-results.component.html',
  styleUrls: ['./display-results.component.css']
})
export class DisplayResultsComponent implements OnInit {
  imgList: Array<string> = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.imageList
      .subscribe((response: any) => {
        console.log(response);
        this.imgList.push(response);
      });
  }
}

