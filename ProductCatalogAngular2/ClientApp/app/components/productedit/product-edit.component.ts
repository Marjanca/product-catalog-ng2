import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product-service';
import Productmodel = require("../../product.model");
import Product = Productmodel.Product;

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
