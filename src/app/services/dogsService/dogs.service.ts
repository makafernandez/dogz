import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

/**
 * Sends requests to the Dog API and returns the responses
 * to the client.
 *
 */
@Injectable({
  providedIn: 'root'
})
export class DogsService {
  url = 'https://dog.ceo/api';
  allBreeds = '/breeds/list/all';
  allSubBreed = '/breed/hound/list';
  /**
   * Creates an instance of DogsService.
   * @param {HttpClient} http
   * @memberof DogsService
   */
  constructor(private http: HttpClient) { }
  /**
   * Gets a list with all the breeds and sub-breeds
   *
   * @returns {Observable<any>}
   * @memberof DogsService
   */
  getBreedsList(): Observable<any> {
    return this.http.get(`${this.url}${this.allBreeds}`).pipe(take(1));
  }
  /**
   * Gets a list of all the sub-breeds, from a particular breed.
   *
   * @param {string} breed
   * @returns {Observable<any>}
   * @memberof DogsService
   */
  getSubBreedsList(breed: string): Observable<any> {
    return this.http.get(`${this.url}/breed/${breed}/list`).pipe(take(1));
  }
  /**
   * Gets a list of random image urls from a particular breed.
   * By default, it will return a list of 10 elements, unless
   * a different number is passed as a parameter.
   *
   * @param {string} breed
   * @param {number} [num=10]
   * @returns {Observable<any>}
   * @memberof DogsService
   */
  getBreedImg(breed: string, num = 10): Observable<any> {
    return this.http
      .get(`${this.url}/breed/${breed}/images/random/${num}`)
      .pipe(
        take(1),
        map(img => {
          const { message } = img as any;
          return {
            name: breed,
            url: message
          };
        })
      );
  }
  /**
   * Get a list of random image urls from a particular sub-breed,
   * By default, it will return a list of 10 elements, unless
   * a different number is passed as a parameter.
   *
   * @param {string} breed
   * @param {string} subBreed
   * @param {number} [num=10]
   * @returns {Observable<any>}
   * @memberof DogsService
   */
  getSubBreedImg(breed: string, subBreed: string, num = 10): Observable<any> {
    return this.http
      .get(`${this.url}/breed/${breed}/${subBreed}/images/random/${num}`)
      .pipe(
        take(1),
        map(img => {
          const { message } = img as any;
          return {
            name: breed,
            url: message
          };
        })
      );
  }
}
