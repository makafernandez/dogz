import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './presentation/components/welcome/welcome.component';


const routes: Routes = [
  { path: 'web', component: WelcomeComponent },
  /*{
    path: 'web',
    loadChildren: () => import('./presentation/presentation.module').then(mod => mod.PresentationModule)
  },*/
  {
    path: '',
    redirectTo: '/web',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
