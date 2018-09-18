import { InputField } from './../../models/input-field.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-input-field',
    templateUrl: './input-field.component.html',
    styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {

    @Input() model: InputField;
    @Input() form: FormGroup;
    control: FormControl;

    constructor() { }

    ngOnInit() {
        this.control = <FormControl>this.form.controls[this.model.controlName];
    }

}
