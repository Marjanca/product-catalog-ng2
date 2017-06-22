import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ProductService } from '../../product-service';

@Component({
    selector: 'product-list',
    template: require('./product-list.component.html'),
    styles: [require('./product-list.component.css')]
})
export class ProductListComponent implements OnInit{
    public products: Product[];

    constructor(private http: Http, private productService: ProductService) {
        this.productService.getProducts().subscribe(result => {
            this.products = result.json().data;
        });
    }

    ngOnInit() {
    }

    deleteProduct(productId: number) {
       this.productService.deleteProduct(productId).subscribe(() => {
            this.products.forEach((p:any, i:number) => {
                if (p.ProductID === productId) { 
                    this.products.splice(i, 1);
                }
            });
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
}
