import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class StartupService {

    constructor(private http: Http) { }

    load(): Promise<any> {
        return this.http.get('https://drinks-api.herokuapp.com/api/drinks/random').toPromise()
    }
}