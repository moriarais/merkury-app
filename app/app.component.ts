import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

/** Nested Component */
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        NavigationMenuComponent,
        HeaderMenuComponent
    ]
})
export class AppComponent { }
