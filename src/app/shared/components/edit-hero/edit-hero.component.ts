import { FieldType } from './../../models/Enums/field-type.enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InputField } from './../../models/input-field.model';
import { Hero } from './../../models/hero.model';
import { Tag } from './../../models/tag.model';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-edit-hero',
    templateUrl: './edit-hero.component.html',
    styleUrls: ['./edit-hero.component.scss']
})
export class EditHeroComponent implements OnInit {

    @Input() hero: Hero;
    @Input() tags: Tag[];
    @Output() emitEditHero: EventEmitter<Hero> = new EventEmitter<Hero>();
    @Output() emitTag: EventEmitter<Tag> = new EventEmitter<Tag>();
    @Output() emitRemoveNewTag: EventEmitter<Tag> = new EventEmitter<Tag>();
    inputs: InputField[];
    formGroup: FormGroup;
    heroTags: Tag[] = [];
    fieldType: any;

    constructor(private formBuilder: FormBuilder, private ref: ChangeDetectorRef) {
        this.fieldType = FieldType;
    }

    ngOnInit() {
        this.inputs = [
            new InputField( 'name', 'Name', 'name', 'text', this.fieldType.input, this.hero.name ),
            new InputField( 'realName', 'Real name', 'realName', 'text', this.fieldType.input, this.hero.alterEgo ),
            new InputField( 'synopsis', 'Synopsis', 'synopsis', null, this.fieldType.textarea, this.hero.synopsis )
        ];
        this.formGroup = this.formBuilder.group({
            name: ['', [ Validators.required ]],
            realName: ['', [ Validators.required ]],
            synopsis: ['']
        });
        this.initHeroTags();
        this.ref.detectChanges();
    }

    initHeroTags() {
        for (let i = 0; i < this.hero.tagIds.length; i++) {
            for (let j = 0; j < this.tags.length; j++) {
                if (this.hero.tagIds[i] === this.tags[j].id) {
                    this.heroTags.push(this.tags[j]);
                }
            }
        }
    }

    createNewTag(tag: Tag) {
        this.emitTag.emit(tag);
    }

    addTagsForHero(tags: Tag[]) {
        this.heroTags = tags;
    }

    editHero() {
        const hero: Hero = {
            id: this.hero.id,
            avatar: this.hero.avatar,
            name: this.inputs[0].value,
            alterEgo: this.inputs[1].value,
            synopsis: this.inputs[2].value,
            likes: this.hero.likes,
            tagIds: this.heroTags ? this.buildNewTagsIds() : null
        };
        this.emitEditHero.emit(hero);
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
