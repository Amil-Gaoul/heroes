import { Router } from '@angular/router';
import { Hero } from './shared/models/hero.model';
import { HeroesService } from './core/services/heroes/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    options: string[] = [];
    heroes: Hero[];

    constructor(private heroesService: HeroesService, private router: Router) { }

    ngOnInit() {
        this.initAutoCompleteField();
    }

    initAutoCompleteField() {
        this.heroesService.loadHeroes().subscribe(data => {
            this.heroes = data;
            for (let i = 0; i < this.heroes.length; i++) {
                this.options.push(this.heroes[i].name);
            }
        });
    }

    navToHero(nameHero: string) {
        let hero: Hero;
        hero = this.heroes.filter(h => h.name === nameHero)[0];
        this.router.navigate(['hero', hero.id]);
    }

}
