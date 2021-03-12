import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CreditCard, NuevaCreditCard } from '../models/creditcard';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
  
  private creditCard: CreditCard = { id: "", name: "", money: 0};
  private service: string = environment.baseUrl + "CreditCard";

  constructor(private http: HttpClient) { }

  getCreditCards(): Observable<CreditCard> {
    const url = this.service;
    return this.http.get<CreditCard>( url );
  }

  getCreditCardByID(id: string): Observable<CreditCard> {
    const url = `${this.service}/${id}`
    return this.http.get( url );
  }

  postCreditCard( data: any ):Observable<any> {
    const url = this.service;
    return this.http.post( url, data )
  }

  deleteProduct(id: string): Observable<any> {
    const url = `${this.service}/${id}`
    return this.http.delete(url);
  }
}