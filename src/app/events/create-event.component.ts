import { Component} from '@angular/core'
import {Router} from '@angular/router'

@Component({
     template: 
     `
    <h1>New Event</h1>
    <div class="col-md-6">
        <h3>[Create Event form ...coming soon]</h3>
        <br/>
        <br/>
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="submit" 
        (click)="cancel()"
        class="btn btn-default">Cancel</button>
    </div>
        `
})

export class CreateEventComponent{

    constructor(private route: Router){

    }

    cancel(){
        this.route.navigate(['/events'])
    }
}