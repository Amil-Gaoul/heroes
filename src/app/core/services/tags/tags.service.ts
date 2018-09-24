import { Tag } from './../../../shared/models/tag.model';
// import { HttpClient } from './../http-client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TagsService {

    private tagsUrl = '/api/tags';

    constructor(private http: HttpClient) {
        this.http = http;
    }

    loadTags(): Observable<Tag[]> {
        return this.http.get<Tag[]>(this.tagsUrl)
            .pipe(
                tap((tags: Tag[]) => console.log('fetched tags')),
                catchError(this.handleError<Tag[]>('load tags', []))
            );
    }

    addTag(tag: Tag): Observable<Tag> {
        return this.http.post(this.tagsUrl, tag)
            .pipe(
                tap((tags: Tag) => console.log('add tag')),
                catchError(this.handleError<Tag>('add tag'))
            );
    }

    deleteTag(tag: Tag): Observable<Tag> {
        return this.http.delete<Tag>(this.tagsUrl)
            .pipe(
                tap((tag: Tag) => console.log('delete tag')),
                catchError(this.handleError<Tag>('delete tag'))
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
