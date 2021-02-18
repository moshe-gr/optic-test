import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GlassesComponent } from './components/glasses/glasses.component';
import { TypeComponent } from './components/type/type.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { FinalComponent } from './components/final/final.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GlassesComponent,
    TypeComponent,
    OrderFormComponent,
    FinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
