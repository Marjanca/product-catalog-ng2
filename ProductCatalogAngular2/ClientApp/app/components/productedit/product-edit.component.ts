import { Component, OnInit, Input, Output } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { ProductService } from '../../product-service';


@Component({
    selector: 'product-edit',
    template: require('./product-edit.component.html')
})
export class ProductEditComponent implements OnInit{
    productId: number;
    product: Product;
    productService: ProductService;

    constructor(private http: Http, private route: ActivatedRoute, productService: ProductService) {
        this.productService = productService;
    }

    ngOnInit() {
       this.route.queryParams.subscribe(params => {
            this.productId = params['productId'];
        });
       this.http.get('/api/Product/'+ this.productId).subscribe(result => {
            this.product = result.json();
        });
    }

    editProduct() {
        this.productService.editProduct(this.product, this.productId);
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
}
