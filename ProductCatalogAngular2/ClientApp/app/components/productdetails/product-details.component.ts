import { Component, OnInit, Input, Output } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'product-details',
    template: require('./product-details.component.html')
})
export class ProductDetailsComponent implements OnInit{
    productId: number;
    currentProduct: Product;

    constructor(private http: Http, private route: ActivatedRoute) {
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
