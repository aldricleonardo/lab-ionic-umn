import { BookooPage } from './bookoo.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'tabs',
        component: BookooPage,
        children: [
            {
                path: 'utama',
                children: [
                    {
                        path: '',
                        loadChildren: './utama/utama.module#UtamaPageModule'
                    }
                ]
            },
            {
                path: 'favorit',
                children: [
                    {
                        path: '',
                        loadChildren: './favorit/favorit.module#FavoritPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/bookoo/tabs/utama',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/bookoo/tabs/utama',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BookooRoutingModule{}