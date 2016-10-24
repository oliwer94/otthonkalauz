import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CardComponent } from './card/card.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ServicesComponent } from './services/services.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CardlistComponent } from './cardlist/cardlist.component';

import { Ng2CompleterModule } from "ng2-completer";
import {Ng2PaginationModule} from 'ng2-pagination';
import { GmapComponent } from './gmap/gmap.component'; 


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CardComponent,    
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    SearchbarComponent,
    ServicesComponent,
    WelcomeComponent,
    CardlistComponent,
    GmapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,Ng2PaginationModule,Ng2CompleterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
