import {Component, OnInit} from '@angular/core'
import {EventService} from './shared/event.service'
import {ToastrService} from '../common/toastr.service'
import { IEvent } from './shared/event.model';


@Component({
template: `
<div>
    <h1>Upcoming Events</h1>
    <hr/>
    <div class="row">
        <div class="col-md-5" *ngFor="let event of events">
            <event-thumbnail 
            (click) = "handleThumbnailClick(event.name)"
             [event]= event></event-thumbnail>
        </div>
    </div>
</div>
`
})

export class EventListComponent implements OnInit {
    events: IEvent[]
    constructor(private eventService: EventService, private toastrService: ToastrService){
    }

    ngOnInit(){
        this.eventService.getEvents().subscribe(events => {this.events = events});

    }

    handleThumbnailClick(name){
        this.toastrService.success(name)
    }
}