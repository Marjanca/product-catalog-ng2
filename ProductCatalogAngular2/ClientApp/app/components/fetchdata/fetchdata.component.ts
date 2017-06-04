import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'fetchdata',
    template: require('./fetchdata.component.html')
})
export class FetchDataComponent {
    public products: Product[];

    constructor(http: Http) {
        http.get('/api/Product').subscribe(result => {
            this.products = result.json().data;
        });
    }
}

interface Product {
    ProductID: number;
    Name: string;
    Color: string;
    Price: number;
    Quantity: number;
    MadeIn: string;
    Tags: string;
}
