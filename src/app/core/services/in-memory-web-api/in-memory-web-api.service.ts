import { Tags } from './../../../api/tags';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { HeroesData } from '../../../api/heroes';

@Injectable()
export class InMemoryWebApiService implements InMemoryDbService {

    constructor() { }

    createDb() {
        const heroes = HeroesData;
        const tags = Tags;
        return { heroes, tags };
    }
}
