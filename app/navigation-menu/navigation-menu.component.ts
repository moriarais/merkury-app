import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


import { NavigationMenuService } from './navigation-menu.service';

@Component({
    moduleId: module.id,
    selector: 'navigation-menu',
    templateUrl: './navigation-menu.component.html',
    styleUrls: ['./navigation-menu.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [NavigationMenuService]
})
export class NavigationMenuComponent {

    sideMenuList: string[];
    openResponsiveNavgiation: boolean;
    selectedItem: string;
    iconsList: {};

    constructor(private navigationMenuService: NavigationMenuService) {
        this.openResponsiveNavgiation = false;
        this.selectedItem = 'Home';
    }

    getNavigationMenuListItems(): void {
        this.sideMenuList = this.navigationMenuService.getNavigationMenuListItems();
    }

    ngOnInit(): void {
        this.getNavigationMenuListItems();
        // set the key value array for icons list
        this.iconsList = this.navigationMenuService.setIconsList();
    }

    onSelect(item): void {
        this.selectedItem = item;
        this.responsiveNavigationClick();
    }

    responsiveNavigationClick(): void {
        this.openResponsiveNavgiation = !this.openResponsiveNavgiation;
    }

}