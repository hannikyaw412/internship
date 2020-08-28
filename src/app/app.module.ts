import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingerModule } from '../app/singer/singer.module';
import { WriterModule } from '../app/writer/writer.module';
import { AlbumModule } from '../app/album/album.module';
import { BandModule } from '../app/band/band.module';
import { ProductionModule } from '../app/production/production.module';
import { SongsModule } from '../app/songs/songs.module';
import { StudioModule } from '../app/studio/studio.module';
import { SingerService } from './singer/singer.service';
import { AlbumRoutingModule } from './album/album-routing.module';
import { SingerRoutingModule } from './singer/singer-routing.module';
import { BandRoutingModule } from './band/band-routing.module';
import { SongsRoutingModule } from './songs/songs-routing.module';
import { StudioRoutingModule } from './studio/studio-routing.module';
import { WriterRoutingModule } from './writer/writer-routing.module';
import { WriterService } from './writer/writer.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { MatSelectModule } from '@angular/material/select';
import { HomeRoutingModule } from './home/home-routing.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SingerModule,
    WriterModule,
    FormsModule,
    ReactiveFormsModule,
    AlbumModule,
    BandModule,
    ProductionModule,
    SongsModule,
    StudioModule,
    AlbumRoutingModule,
    SingerRoutingModule,
    BandRoutingModule,
    SongsRoutingModule,
    StudioRoutingModule,
    WriterRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HomeRoutingModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
