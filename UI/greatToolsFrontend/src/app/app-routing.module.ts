import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',redirectTo:'tools',pathMatch:'full'
  },
  {
    path:'tools',
    loadChildren:() =>import('./modules/core/core/core.module').then(core=>core.CoreModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
