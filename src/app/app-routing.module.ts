import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';



export const routes: Routes = [
 // {
    //path: '', component: AppComponent, children: [
      { path: '', redirectTo: 'singer', pathMatch: 'full' },

      {
        path: 'singer',
        loadChildren: () => import('./singer/singer.module').then(m => m.SingerModule)
      },

      {
        path: 'album',
        loadChildren: () => import('./album/album.module').then(m => m.AlbumModule)
      },

      {
        path: 'band',
        loadChildren: () => import('./band/band.module').then(m => m.BandModule)
      },

      {
        path: 'production',
        loadChildren: () => import('./production/production.module').then(m => m.ProductionModule)
      },

      {
        path: 'songs',
        loadChildren: () => import('./songs/songs.module').then(m => m.SongsModule)
      },

      {
        path: 'studio',
        loadChildren: () => import('./studio/studio.module').then(m => m.StudioModule)
      },

      {
        path: 'writer',
        loadChildren: () => import('./writer/writer.module').then(m => m.WriterModule)
      },

   // ]
  //}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
