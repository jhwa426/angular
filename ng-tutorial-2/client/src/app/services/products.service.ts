import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { PaginationParams, Products } from "../../type";

@Injectable({
    providedIn: 'root'
})


export class ProductsService {

    constructor(private apiService: ApiService) { }

    // Declare get products through api
    getProducts = (url: string, params: PaginationParams): Observable<Products> => {
        return this.apiService.get(url, {
            params,
            responseType: "json",
        });
    }

}
