import { Tag } from './../../models/tag.model';
import { FormControl } from '@angular/forms';
import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, startWith } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';

@Component({
    selector: 'app-add-tag-hero',
    templateUrl: './add-tag-hero.component.html',
    styleUrls: ['./add-tag-hero.component.scss']
})
export class AddTagHeroComponent implements OnInit {

    @Input() allTags: Tag[];
    // Отдаем родителю все выбранные теги
    @Output() emitTags: EventEmitter<Tag[]> = new EventEmitter<Tag[]>();
    // Отдаем родителю тег, которого не было в списке тегов для его добавления в общий список,
    // потому что angular-in-memory-web-api некорректно добавляет в массив с новыми данными в существующий массив
    @Output() emitTag: EventEmitter<Tag> = new EventEmitter<Tag>();
    @Output() removeNewTag: EventEmitter<Tag> = new EventEmitter<Tag>();
    @ViewChild('tagInput') tagInput: ElementRef;
    tags: Tag[] = [];
    maxTagId: number;
    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = false;
    separatorKeysCodes: number[] = [ENTER, COMMA];
    tagCtrl = new FormControl();
    filteredTags: Observable<Tag[]>;
    newTag: Tag;

    constructor() {
        this.filteredTags = this.tagCtrl.valueChanges.pipe(
            startWith(null),
            map((tag: Tag | null) => tag ? this.filterTag(tag) : this.allTags.slice()));
    }

    ngOnInit() {
        this.findMaxTagId();
    }

    addTag(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;
        if ((value || '').trim()) {
            this.newTag = { id: this.maxTagId += 1, name: value.trim() };
            this.emitTag.emit(this.newTag);
            // Добавляем новый тег в общий список тегов для созданного героя
            this.tags.push(this.newTag);
            this.outputTags();
        }

        if (input) {
            input.value = '';
        }

        this.tagCtrl.setValue(null);
    }

    removeTag(tag: Tag): void {
        const index = this.tags.findIndex(item => item.name === tag.name);
        this.deleteNewTag(tag);
        if (index >= 0) {
            this.tags.splice(index, 1);
            this.outputTags();
        }
    }

    selectedTag(event: MatAutocompleteSelectedEvent): void {
        this.tags.push({ id: this.findTagId(event.option.viewValue), name: event.option.viewValue });
        this.outputTags();
        this.tagInput.nativeElement.value = '';
        this.tagCtrl.setValue(null);
    }

    outputTags() {
        this.emitTags.emit(this.tags);
    }

    /**
     * Удаление нового тега
     */
    private deleteNewTag(tag: Tag) {
        for (let i = 0; i < this.allTags.length; i++) {
            for (let j = 0; j < this.tags.length; j++) {
                if (this.allTags[i].id !== this.tags[j].id && this.tags[j].id === tag.id) {
                    this.removeNewTag.emit(tag);
                }
            }
        }
    }

    private findTagId(tag: string): number {
        return this.allTags.find(item => item.name === tag).id;
    }

    /**
     *
     * @param tag - тег, может быть принимать 2 типа: Tag - если пользователь выбрал тег из выпадающего списка тегов и
     * тип string, если пользователь решил вбить тег, которого нет в списке
     */
    private filterTag(tag: Tag | string): Tag[] {
        const filterValue = typeof tag === 'string' ? tag.toLowerCase() : tag.name.toLowerCase();
        return this.allTags.filter(item => item.name.toLowerCase().indexOf(filterValue) === 0);
    }

    private findMaxTagId() {
        this.maxTagId = this.allTags.reduce((prev, current) => (prev.id > current.id) ? prev : current).id;
    }

}
