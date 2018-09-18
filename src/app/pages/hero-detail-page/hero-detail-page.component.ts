import { Hero } from './../../shared/models/hero.model';
import { HeroesService } from './../../core/services/heroes/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-hero-detail-page',
    templateUrl: './hero-detail-page.component.html',
    styleUrls: ['./hero-detail-page.component.scss']
})
export class HeroDetailPageComponent implements OnInit {

    heroId: number;
    hero: Hero;

    constructor(private route: ActivatedRoute, private heroesService: HeroesService) {
        this.route.params.subscribe((params: Params) => {
            this.heroId = +params['id'];
            console.log(this.heroId);
        });
    }

    ngOnInit() {
        this.getHero();
    }

    getHero() {
        this.heroesService.loadHeroes().subscribe(heroes => {
            if (heroes) {
                this.hero = heroes.filter(hero => hero.id === this.heroId)[0];
            }
        });
    }

}
