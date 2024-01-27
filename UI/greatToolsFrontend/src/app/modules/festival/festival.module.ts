import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFestivalComponent } from './dynamic-festival/dynamic-festival.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateFestivalComponent } from './create-festival/create-festival.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowFestivalComponent } from './show-festival/show-festival.component';
const routes: Routes = [
  {
    path: 'show/:festName',
    component: DynamicFestivalComponent,
  },
  {
    path: 'create',
    component: CreateFestivalComponent,
  },
];

@NgModule({
  declarations: [
    DynamicFestivalComponent,
    CreateFestivalComponent,
    ShowFestivalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class FestivalModule {}
