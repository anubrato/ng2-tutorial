import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1>'
})
export class AppComponent {
    private title: string = 'Angular2 First Steps';
}
