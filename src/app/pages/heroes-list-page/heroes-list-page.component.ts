import { TagsService } from './../../core/services/tags/tags.service';
import { Hero } from './../../shared/models/hero.model';
import { HeroesService } from './../../core/services/heroes/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-list-page',
  templateUrl: './heroes-list-page.component.html',
  styleUrls: ['./heroes-list-page.component.scss']
})
export class HeroesListPageComponent implements OnInit {

    heroes: Hero[];
    tags: string[];
    tagsFilter: string[] = [];
    heroId: number;

    private subs: Subscription[] = [];
    constructor(private heroesService: HeroesService, private tagsService: TagsService, private router: Router) { }

    ngOnInit() {
        this.loadHeroes();
        this.loadTags();
    }

    loadHeroes() {
        this.heroesService.loadHeroes().subscribe(heroes => {
            if (heroes) {
                this.heroes = heroes;
                this.heroId = this.heroes.reduce((prev, current) => (prev.id > current.id) ? prev : current).id;
            }
        });
    }

    loadTags() {
        this.tagsService.loadTags().subscribe(tags => {
            if (tags) {
                this.tags = tags;
            }
        });
    }

    createHero(hero: Hero) {
        console.log(hero);
    }

    showHeroDetail(heroId: number) {
        console.log(heroId);
        this.router.navigate(['hero', heroId]);
    }

}
