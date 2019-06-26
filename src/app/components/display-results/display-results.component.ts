import { Component, OnInit, Optional, Input } from '@angular/core';
import { SharedService } from 'src/app/services/sharedService/shared.service';
import { WelcomeComponent } from '../welcome/welcome.component';
import { ToolBarComponent } from '../tool-bar/tool-bar.component';

@Component({
  selector: 'app-display-results',
  templateUrl: './display-results.component.html',
  styleUrls: ['./display-results.component.css']
})
export class DisplayResultsComponent implements OnInit {
  //@Input() imgList = ToolBarComponent;
  imgList: Array<string> = [];

  constructor(private shared: SharedService) {}

  ngOnInit() {
    this.shared.currentImageResults.subscribe(imgList => this.imgList = imgList);
  }
}
