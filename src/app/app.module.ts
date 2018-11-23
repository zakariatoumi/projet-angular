import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { TestDateComponent } from './test-date/test-date.component';
import { EventComponent } from './event/event.component';
import { ChangingPropertiesWithEventsComponent } from './changing-properties-with-events/changing-properties-with-events.component';
import { KeyboardInputEventsComponent } from './keyboard-input-events/keyboard-input-events.component';

const routes:Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'ajouter' , component:AjouterComponent},
  {path:'test' , component:TestComponent},
  {path:'test-date' , component:TestDateComponent},
  {path:'appEvent' , component:EventComponent},
  {path:'ChangingPropertiesWithEvents' , component:ChangingPropertiesWithEventsComponent},
  {path:'KeyboardInputEventsComponent' , component:KeyboardInputEventsComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AjouterComponent,
    TestComponent,
    TestDateComponent,
    EventComponent,
    ChangingPropertiesWithEventsComponent,
    KeyboardInputEventsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
