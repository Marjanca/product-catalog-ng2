import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
    
    constructor(private http: Http, private route: ActivatedRoute, private location: Location) {
    }
    
    getProducts(): Observable<any> {
        return this.http.get('/api/Product');
    }

    getProduct(productId: number): any {
        return this.http.get('/api/Product/' + productId);
    }

    addProduct(product: any) {
        console.log("adding product...");
        let body = JSON.stringify(product);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers }); 
        this.http.post('/api/Product', body, options).subscribe(() => {
            this.location.back();
        });
    }

    editProduct(product: any, productId: number) {
        let body = JSON.stringify(product);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers }); 
        this.http.put('/api/Product/'+ productId, body, options).subscribe(() => {
            this.location.back();
        });
    }

    deleteProduct(productId: number): any {
        return this.http.delete('/api/Product/' + productId);
    }
}