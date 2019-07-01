import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SharedService {
  private images = new BehaviorSubject([]);
  imageList = this.images.asObservable();

  setImageList(images) {
    this.images.next(images);
  }
}
