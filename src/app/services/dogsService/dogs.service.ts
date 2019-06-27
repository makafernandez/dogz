import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  url = 'https://dog.ceo/api';
  allBreeds = '/breeds/list/all';
  // bySubBreed = '/breed/hound/list';
  randomImgs = '/breeds/image/random/';

  constructor(private http: HttpClient) {}

  getBreedsList(): Observable<any> {
    return this.http.get(`${this.url}${this.allBreeds}`).pipe(take(1));
  }

  getRandomImgs(num = 10): Observable<any> {
    return this.http.get(`${this.url}${this.randomImgs}${num}`).pipe(take(1));
  }

  searchBreed(breed, num = 10): Observable<any> {
    return this.http
      .get(`${this.url}/breed/${breed}/images/random/${num}`)
      .pipe(take(1));
  }
}
