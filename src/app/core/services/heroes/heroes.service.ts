import { HttpClient } from './../http-client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../../../shared/models/hero.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroesService {

    private heroesUrl = '/app/api/heroes.json';

    constructor(private http: HttpClient) {
        this.http = http;
    }

    loadHeroes(): Observable<Hero[]> {
        return this.http.get(this.heroesUrl)
            .map(heroes => heroes.json())
            .catch((error: Response): any => {
                return this.handleError;
            });
    }

    // createHero() {
    //     return this.http.post()
    // }

    // loadAllHeroes(): Observable<Hero[]> {
    //     return
    // }

    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            errMsg = `${error.status} - ${error.statusText || ''}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    }

}
