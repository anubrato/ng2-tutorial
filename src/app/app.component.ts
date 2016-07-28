import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: require('./app.component.tpl')
})
export class AppComponent {
    private title: string = 'Angular2 First Steps';
}
