import { Tag } from './../../models/tag.model';
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

    @Input() tags: Tag[];
    @Input() heroId: number;
    @Output() newHero: EventEmitter<Hero> = new EventEmitter<Hero>();
    @Output() emitTag: EventEmitter<Tag> = new EventEmitter<Tag>();
    @Output() emitRemoveNewTag: EventEmitter<Tag> = new EventEmitter<Tag>();
    formGroup: FormGroup;
    inputs: InputField[] = [];
    isDisabled: boolean;
    heroTags: Tag[];

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

    addTagsForHero(tags: Tag[]) {
        this.heroTags = tags;
    }

    createNewTag(tag: Tag) {
        this.emitTag.emit(tag);
    }

    createHero() {
        const hero: Hero = {
            id: this.heroId + 1,
            avatar: 'assets/images/heroes/default.png',
            name: this.inputs[0].value,
            alterEgo: this.inputs[1].value,
            synopsis: null,
            likes: 0,
            tagIds: this.heroTags ? this.buildNewTagsIds() : null
        };
        this.newHero.emit(hero);
    }

    removeNewTag(tag: Tag) {
        this.emitRemoveNewTag.emit(tag);
    }

    private buildNewTagsIds(): number[] {
        const tagsIds: number[] = [];
        for (let i = 0; i < this.heroTags.length; i++) {
            tagsIds.push(this.heroTags[i].id);
        }
        return tagsIds;
    }

}
