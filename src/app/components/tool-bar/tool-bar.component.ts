import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})

export class ToolBarComponent implements OnInit {
  events: string[] = [];
  opened: boolean;
  options: FormGroup;
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      bottom: 0,
      fixed: true,
      top: 0
    });
  }

  close() {
    this.sidenav.close();
  }

  ngOnInit() {}
}
