import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'product-list',
    template: require('./product-list.component.html')
})
export class ProductListComponent implements OnInit{
    public products: Product[];

    constructor(private http: Http) {
        http.get('/api/Product').subscribe(result => {
            this.products = result.json().data;
        });
    }

    ngOnInit() {
    }

    deleteProduct(productId: number) {
        console.log("deleted");
        this.http.delete('/api/Product/'+ productId).subscribe(result => {
            console.log("deleted");
            console.log(this.products);
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
