import { Component, OnInit, Input } from '@angular/core';
import { DisplayResultsComponent } from '../display-results/display-results.component';

@Component({
  selector: 'app-results-item',
  templateUrl: './results-item.component.html',
  styleUrls: ['./results-item.component.css']
})
export class ResultsItemComponent implements OnInit {
  @Input() img: DisplayResultsComponent;
  @Input() breed: DisplayResultsComponent;
  @Input() subBreed: DisplayResultsComponent;

  constructor() {}

  ngOnInit() {}
}
