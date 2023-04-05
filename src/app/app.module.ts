import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CarComponent } from './components/car/car.component';
import { CounterComponent } from './components/counter/counter.component';
import { MycustompipePipe } from './pipes/mycustompipe.pipe';
import { ImageComponent } from './components/image/image.component';
import { FormsModule } from '@angular/forms';
import { InputCarComponent } from './components/input-car/input-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CounterComponent,
    MycustompipePipe,
    ImageComponent,
    InputCarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
