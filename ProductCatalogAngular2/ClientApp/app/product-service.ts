import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class ProductService {
    
    constructor(private http: Http, private route: ActivatedRoute, private location: Location) {
    }

    addProduct(product: any) {
        console.log("adding product...");
        let body = JSON.stringify(product);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers }); 
        this.http.post('/api/Product', body, options).subscribe(result => {
            this.location.back();
        });
    }
}