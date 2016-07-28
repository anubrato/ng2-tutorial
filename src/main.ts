import {bootstrap} from '@angular/platform-browser-dynamic';

import {AppComponent} from './app/app.component';

import './styles.css';

bootstrap(AppComponent).catch(error => console.log(error));
