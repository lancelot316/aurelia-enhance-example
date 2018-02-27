import { bindable } from 'aurelia-framework';

@bindable('message')
export class ShowMessage {
    constructor() {
        this.message = '';
    }
}