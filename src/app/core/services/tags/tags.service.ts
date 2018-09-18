import { HttpClient } from './../http-client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class TagsService {

    private tagsUrl = '/app/api/tags.json';

    constructor(private http: HttpClient) {
        this.http = http;
    }

    loadTags(): Observable<string[]> {
        return this.http.get(this.tagsUrl)
            .map(tags => tags.json())
            .catch((error: Response): any => {
                return this.handleError;
            });
    }

    // addTag() {
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
