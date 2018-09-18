import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpClient {

    private headers = new Headers();

    constructor(private http: Http) {
    }

    public get(url: string): Observable<any> {
        return this.http.get(url, {
            headers: this.headers
        });
    }

    public post(url: string, data: any): Observable<any> {
        return this.http.post(url, data, {
            headers: this.headers
        });
    }

    public delete(url: string): Observable<any> {
        return this.http.delete(url, {
            headers: this.headers
        });
    }

    public put(url: string, data: any): Observable<any> {
        return this.http.put(url, data, {
            headers: this.headers
        });
    }

}
