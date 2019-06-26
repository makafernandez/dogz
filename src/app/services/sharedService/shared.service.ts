import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private imgList = new BehaviorSubject();
  currentImageResults = this.imgList.asObservable();

  constructor() {}

  getImageList(imgSrcList: Array<string>) {
    this.imgList.next(imgSrcList);
  }
}
