import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BeerModel } from './BeerModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 
  constructor(private http:HttpClient) { }
  public getBeers(){
   return this.http.get<BeerModel[]>("https://api.openbrewerydb.org/breweries");
  }
}





