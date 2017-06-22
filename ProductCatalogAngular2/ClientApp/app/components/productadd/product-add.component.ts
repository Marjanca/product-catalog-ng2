import { Component, OnInit} from '@angular/core';
import { ProductService } from '../../product-service';

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

export class Product {
    productID: number;
    name: string;
    color: string;
    price: number;
    quantity: number;
    madeIn: string;
    tags: string;

}
