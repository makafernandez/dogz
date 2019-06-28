import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

/**
 * @description Sends requests to the Dog API and returns the responses to the front.
 * @author makafernandez
 * @date 2019-06-27
 * @export
 */
@Injectable({
  providedIn: 'root'
})
export class DogsService {
  url = 'https://dog.ceo/api';
  allBreeds = '/breeds/list/all';
  allSubBreed = '/breed/hound/list';


  constructor(private http: HttpClient) { }

  getBreedsList(): Observable<any> {
    return this.http
      .get(`${this.url}${this.allBreeds}`)
      .pipe(take(1));
  }

  getSubBreedsList(breed: string): Observable<any> {
    return this.http
      .get(`${this.url}/breed/${breed}/list`)
      .pipe(take(1), map(sub => {
        debugger;
        return {
          name: breed,
          subBreed: sub || []
        };
      }));
  }

  getBreedImg(breed: string, num = 10): Observable<any> {
    return this.http
      .get(`${this.url}/breed/${breed}/images/random/${num}`)
      .pipe(take(1));
  }

  getSubBreedImg(breed: string, subBreed: string, num = 10): Observable<any> {
    return this.http
      .get(`${this.url}/breed/${breed}/${subBreed}/images/random/${num}`)
      .pipe(take(1));
  }
}
