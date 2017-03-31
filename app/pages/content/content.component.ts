import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class ContentComponent { 

   location: Location;
    imagesContentList: {};
    
constructor(location: Location) { 
        this.location = location;   

    }
    
getImage(sectionName: string){
    return '../../assets/images/'+sectionName+'.png'
}
       
    
}