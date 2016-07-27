import {RouterConfig} from '@angular/router';
import {nsProvideRouter} from 'nativescript-angular/router';
import {SearchPage} from './pages/search/search.component';

export const routes: RouterConfig = [
    { path: '', component: SearchPage }
];

export const APP_ROUTER_PROVIDERS = [
    nsProvideRouter(routes, {})
];
