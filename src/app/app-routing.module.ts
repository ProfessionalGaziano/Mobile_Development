import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'carte',
    loadChildren: () => import('./carte/carte.module').then( m => m.CartePageModule)
  },
  {
    path: 'card-services',
    loadChildren: () => import('./card-services/card-services.module').then( m => m.CardServicesPageModule)
  },
  {
    path: 'card-list',
    loadChildren: () => import('./card-list/card-list.module').then( m => m.CardListPageModule)
  },
  {
    path: 'carte',
    loadChildren: () => import('./carte/carte.module').then( m => m.CartePageModule)
  },
  {
    path: 'espansioni',
    loadChildren: () => import('./espansioni/espansioni.module').then( m => m.EspansioniPageModule)
  },
  
  {
    path: 'tab1',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  },   
  {
    path: 'profilo',
    loadChildren: () => import('./profilo/profilo.module').then( m => m.ProfiloPageModule)
  },

];



@NgModule({
  
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
