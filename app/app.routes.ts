import { provideRouter, RouterConfig }  from '@angular/router';

import { ContentComponent } from './pages/content/content.component';


const routes: RouterConfig = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: ContentComponent },
    { path: 'workflow', component: ContentComponent },
    { path: 'statistics', component: ContentComponent },
    { path: 'calendar', component: ContentComponent },
    { path: 'users', component: ContentComponent },
    { path: 'settings', component: ContentComponent }
];

export const myRouterProviders = [
    provideRouter(routes)
];

