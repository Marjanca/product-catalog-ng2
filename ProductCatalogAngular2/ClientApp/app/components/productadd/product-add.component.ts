import { Component, OnInit, Input, Output } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';


@Component({
    selector: 'product-add',
    template: require('./product-add.component.html')
})
export class ProductAddComponent implements OnInit{
    productId: number;
    currentProduct: Product;

    constructor(private http: Http, private route: ActivatedRoute, private location: Location) {
    }

    ngOnInit() {
        this.currentProduct = new Product();
    }

    addItem() {
        let body = JSON.stringify(this.currentProduct);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers }); 
        this.http.post('/api/Product', body, options).subscribe(result => {
                this.location.back();
        });
    }
}

export class Product {
    productID: number;
    name: string;
    color: string;
    price: number;
    quantity: number;
    madeIn: string;
    tags: string;

    constructor(){
    }
}
