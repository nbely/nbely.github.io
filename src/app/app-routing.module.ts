import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './views/contact/contact.component';
import { IntroductionComponent } from './views/introduction/introduction.component';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
