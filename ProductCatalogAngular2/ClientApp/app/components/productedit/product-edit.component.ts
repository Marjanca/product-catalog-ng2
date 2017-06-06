import { Component, OnInit, Input, Output } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';


@Component({
    selector: 'product-edit',
    template: require('./product-edit.component.html')
})
export class ProductEditComponent implements OnInit{
    productId: number;
    currentProduct: Product;

    constructor(private http: Http, private route: ActivatedRoute, private location: Location) {
    }

    ngOnInit() {
       this.route.queryParams.subscribe(params => {
            this.productId = params['productId'];
        });
       this.http.get('/api/Product/'+ this.productId).subscribe(result => {
            this.currentProduct = result.json();
            console.log(this.currentProduct);
        });
    }

    editItem() {
        let body = JSON.stringify(this.currentProduct);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers }); 
        this.http.put('/api/Product/'+ this.productId, body, options).subscribe(result => {
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
