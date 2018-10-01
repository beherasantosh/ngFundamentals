import {Component, Input  } from '@angular/core'
import { IEvent } from './shared';

@Component({
    selector: 'event-thumbnail', 
    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div [ngSwitch]="event.time">
            Time: {{event.time}}
                <span *ngSwitchCase="'8:00 am'">Morning</span>
        </div>
        <div>Price: \${{event.price}}</div>
        <div>
            <span>Location: {{event.location.address}}</span>
            <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
        </div>
    </div>
    `,
    styles:[
        `
        .thumbnail { min-height: 210px;}
        .pad-left {margin-left: 10px;}
        .well div {color: #bbb;}
        `
    ]
})

export class EventThumbNailComponent{
   @Input() event: IEvent
   
 
}