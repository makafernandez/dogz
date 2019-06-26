import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { DogsService } from 'src/app/services/dogsService/dogs.service';

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

  constructor(private dogsService: DogsService, fb: FormBuilder) {
    this.options = fb.group({
      bottom: 0,
      fixed: true,
      top: 0
    });
  }

  close() {
    this.sidenav.close();
  }

  searchByBreed(breed, num) {
    this.dogsService.searchBreed(breed, num).subscribe({
      next(response) {
        this.imgList = response;
      },
      error(err) {
        console.error('Error: ' + err);
      },
      complete() {
        console.log('Completed');
      }
    });
  }

  childEventClicked(event: Event) {
    this.clickedEvent = event;
    console.log('Hice click en tool-bar!');
  }

  ngOnInit() {}
}
