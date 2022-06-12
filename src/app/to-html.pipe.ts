import { Pipe, PipeTransform } from '@angular/core';
import {toHTML} from '@portabletext/to-html';

@Pipe({ name: 'toHTML' })
export class ToHTMLPipe implements PipeTransform {
    constructor() {}

    transform(value: any): string {
        return toHTML(value);
    }
}
