import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'

import {
  EventListComponent, 
  EventThumbNailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventService,
  EventRouteActivator,
  EventListResolver

} from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import {ToastrService} from './common/toastr.service'
import {appRoutes} from './routes'
import { Error404Component } from './errors/404.components';
import { AuthService } from './user/auth.service';

@NgModule({
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent, 
    EventListComponent, 
    EventThumbNailComponent, 
    NavBarComponent, 
    EventDetailsComponent, 
    CreateEventComponent, 
    Error404Component
  ],
  providers:[
    EventService, 
    ToastrService, 
    EventRouteActivator, 
    EventListResolver, 
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
