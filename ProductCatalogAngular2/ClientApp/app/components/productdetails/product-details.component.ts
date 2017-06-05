import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'product-details',
    template: require('./product-details.component.html')
})
export class ProductDetailsComponent implements OnInit{
    @Input() productId: string;
    public currentProduct: Product;

    constructor(private http: Http) {
    }

    ngOnInit() {
    }

    openDetails(){
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
}
