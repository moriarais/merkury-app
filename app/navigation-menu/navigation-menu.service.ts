import { Injectable } from '@angular/core';

@Injectable()
export class NavigationMenuService {
    getNavigationMenuListItems(): string[] {
        return ['Home', 'Workflow', 'Statistics', 'Calendar', 'Users', 'Settings'];
    }

    setIconsList(): {} {
        return {
            'Home': 'home',
            'Workflow': 'view_agenda',
            'Statistics': 'trending_up',
            'Calendar': 'assignment',
            'Users': 'people',
            'Settings': 'settings'
        };
    }
}