import { InputField } from './../../models/input-field.model';
import { Hero } from './../../models/hero.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-create-hero',
    templateUrl: './create-hero.component.html',
    styleUrls: ['./create-hero.component.scss']
})
export class CreateHeroComponent implements OnInit {

    @Input() tags: string[];
    @Input() heroId: number;
    @Output() newHero: EventEmitter<Hero> = new EventEmitter<Hero>();
    formGroup: FormGroup;
    inputs: InputField[] = [];
    isDisabled: boolean;
    heroTags: string[];

    constructor(private formBuilder: FormBuilder) {
        this.formGroup = this.formBuilder.group({
            name: ['', [ Validators.required ]],
            realName: ['', [ Validators.required ]]
        });
    }

    ngOnInit() {
        this.initInputs();
    }

    initInputs() {
        this.inputs = [
            new InputField( 'name', 'Name', 'name', 'text', null ),
            new InputField( 'realName', 'Real name', 'realName', 'text', null ),
        ];
    }

    addTag(tags: string[]) {
        this.heroTags = tags;
    }

    createHero() {
        const hero: Hero = {
            id: this.heroId + 1,
            name: this.inputs[0].value,
            alterEgo: this.inputs[1].value,
            synopsis: null,
            likes: null,
            tags: this.tags ? this.tags : null
        };
        this.newHero.emit(hero);
    }

}
