import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'header-menu',
    templateUrl: './header-menu.component.html',
    styleUrls: ['./header-menu.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class HeaderMenuComponent {

    constructor() { }

    ngOnInit(): void {

    }

}