import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'product-list',
    template: require('./product-list.component.html')
})
export class ProductListComponent implements OnInit{
    public products: Product[];

    constructor(http: Http) {
        http.get('/api/Product').subscribe(result => {
            this.products = result.json().data;
        });
    }

    ngOnInit() {
    }
}
interface Product {
    productID: number;
    name: string;
    color: string;
    price: number;
    quantity: number;
    madeIn: string;
    tags: string;
}
