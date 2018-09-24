import { HttpClient } from '@angular/common/http';
// import { HttpClient } from './../http-client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Hero } from '../../../shared/models/hero.model';

@Injectable()
export class HeroesService {

    private heroesUrl = '/api/heroes';

    constructor(private http: HttpClient) {
        this.http = http;
    }

    loadHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl)
            .pipe(
                tap((heroes: Hero[]) => console.log('fetched heroes')),
                catchError(this.handleError<Hero[]>('load tags', []))
            );
    }

    createHero(hero: Hero): Observable<Hero> {
        return this.http.post<Hero>(this.heroesUrl, hero)
            .pipe(
                tap((hero: Hero) => console.log('detched hero')),
                catchError(this.handleError<Hero>('create hero'))
            );
    }

    editHero(hero: Hero): Observable<Hero> {
        return this.http.put<Hero>(this.heroesUrl, hero)
            .pipe(
                tap((hero: Hero) => console.log('fetched hero')),
                catchError(this.handleError<Hero>('edit hero'))
            );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //   this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}
