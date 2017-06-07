import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/productlist/product-list.component';
import { ProductDetailsComponent } from './components/productdetails/product-details.component';
import { ProductEditComponent } from './components/productedit/product-edit.component';
import { ProductAddComponent } from './components/productadd/product-add.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        ProductListComponent,
        HomeComponent,
        ProductDetailsComponent,
        ProductEditComponent,
        ProductAddComponent
    ],
    imports: [
        FormsModule,
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            { path: 'product-list', component: ProductListComponent },
            { path: 'product-details', component: ProductDetailsComponent },
            { path: 'product-edit', component: ProductEditComponent },
            { path: 'product-add', component: ProductAddComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
