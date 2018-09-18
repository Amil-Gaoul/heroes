import { HeroesService } from './../../core/services/heroes/heroes.service';
import { Hero } from './../../shared/models/hero.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

    heroes: Hero[];
    customHeroes: any;

    constructor(private heroesService: HeroesService) { }

    ngOnInit() {
        this.loadHeroes();
    }

    loadHeroes() {
        this.heroesService.loadHeroes().subscribe(data => {
            console.log(data);
            if (data) {
                const heroes = this.sortHeroes(data);
                this.customHeroes = this.getRows(heroes);
                console.log(this.customHeroes);
            }
        });
    }

    private sortHeroes(heroes: Hero[]): Hero[] {
        heroes.sort((a, b) => {
            if (a.likes < b.likes) {
                return 1;
            } else if (a.likes > b.likes) {
                return -1;
            } else {
                return 0;
            }
        });
        return heroes;
    }

    private getRows(items: Hero[]): Array<any> {
        const rowsArr = [];
        for (let i = 0; i < items.length; i += 3) {
            const row = [];
            for (let x = 0; x < 3; x++) {
                const value = items[i + x];
                if (!value) {
                    break;
                }
                row.push(value);
            }
            rowsArr.push(row);
        }
        return rowsArr;
    }

}
