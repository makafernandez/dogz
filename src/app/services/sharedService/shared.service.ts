import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class SharedService {
  sharedImgList = [];

  insertImgList(data: string[]) {
    this.sharedImgList.unshift(data);
    console.log('Data compartida');
  }

  getImgList() {
    return this.sharedImgList;
  }
}
