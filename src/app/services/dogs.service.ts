import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DogsService {
  url = 'https://dog.ceo/api';
  allBreeds = '/breeds/list/all';
  bySubBreed = '/breed/hound/list';
  randomImgs = '/breeds/image/random/50';

  constructor(private http: HttpClient) { }

  searchBreed(breed, num = 10) {
    const data = this.http.get(`${this.url}/breed/${breed}/images/random/${num}`);
    if (data[message]) {
      return data.message;
    };
  }
}
