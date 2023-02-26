import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './views/contact/contact.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { 
    path: 'about',
    loadChildren: () => import('./views/about/about.module').then(m => m.AboutModule)
  },
  { 
    path: 'experience',
    loadChildren: () => import('./views/experience/experience.module').then(m => m.ExperienceModule)
  },
  { 
    path: 'contact',
    component: ContactComponent
    // loadChildren: () => import('./views/contact/contact.module').then(m => m.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
