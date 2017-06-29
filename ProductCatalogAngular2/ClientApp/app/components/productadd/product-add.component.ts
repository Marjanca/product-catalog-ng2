import { Component, OnInit} from '@angular/core';
import { ProductService } from '../../product-service';
import Productmodel = require("../../product.model");
import Product = Productmodel.Product;

@Component({
    selector: 'product-add',
    template: require('./product-add.component.html')
})
export class ProductAddComponent implements OnInit{
    productId: number;
    product: Product;
    productService: ProductService;

    constructor(productService: ProductService) {
        this.productService = productService;
    }

    ngOnInit() {
        this.product = new Product();
    }

    addProduct() {
        this.productService.addProduct(this.product);
    }
 
}
