import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryCardModel } from '../../models/country-card.model';

@Injectable({
  providedIn: 'root'
})
export class LanguagesIntegrationService  {

  constructor(private _http: HttpClient) { }

  public GetLanguages() : Observable<CountryCardModel[]> {
    return this._http.get<CountryCardModel[]>('https://localhost:44349/api/languages');
  }

  public DeleteLanguages(id : number) {
    return this._http.delete(`https://localhost:44349/api/languages/${id}`);
  }
}
