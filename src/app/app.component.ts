import { HeroesService } from './core/services/heroes/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    options: string[] = [];

    constructor(private heroesService: HeroesService) { }

    ngOnInit() {
        this.initAutoCompleteField();
    }

    initAutoCompleteField() {
        this.heroesService.loadHeroes().subscribe(data => {
            for (let i = 0; i < data.length; i++) {
                this.options.push(data[i].name);
            }
        });
    }

}
