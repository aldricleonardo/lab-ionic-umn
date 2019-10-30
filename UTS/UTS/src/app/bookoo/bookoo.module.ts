import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BookooPage } from './bookoo.page';
import { BookooRoutingModule } from './bookoo-routing.module';

const routes: Routes = [
  {
    path: '',
    component: BookooPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookooRoutingModule
  ],
  declarations: [BookooPage]
})
export class BookooPageModule {}
