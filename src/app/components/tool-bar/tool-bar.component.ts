import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { DogsService } from 'src/app/services/dogsService/dogs.service';
import { SharedService } from 'src/app/services/sharedService/shared.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})

export class ToolBarComponent implements OnInit {
  events: string[] = [];
  opened: boolean;
  options: FormGroup;
  public clickedEvent: Event;
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;
  @Output() imgList = [];

  constructor(private dogsService: DogsService, fb: FormBuilder, sharedService: SharedService) {
    this.options = fb.group({
      bottom: 0,
      fixed: true,
      top: 0
    });
  }

  ngOnInit() {}
}
