import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Meteo {
  request_state: Number;
  request_key: string;
  message: string;
  model_run: string;
  source: string;
}

@Injectable({
  providedIn: 'root'
})
export class InfoClimatService {

  url = "https://www.infoclimat.fr/public-api/gfs/json?_ll=48.85341,2.3488&_auth=BB4EE1MtU3EHKlBnVyEDKlU9BjMLfVVyAn5RMgxpBXgDaFc2AmJSNARqA35TfAA2AC1VNgw3V2dROgV9CXtXNgRuBGhTOFM0B2hQNVd4AyhVewZnCytVcgJpUTYMfwVnA2JXNgJ%2FUjMEbAN%2FU2EANwA7VSoMLFduUTUFYAltVzEEZgRmUzlTOAduUC1XeAMxVWEGZwsyVWgCZFFlDGUFMANgVzYCY1I5BGwDf1NrADIAMFUxDDNXalE2BWsJe1crBB4EE1MtU3EHKlBnVyEDKlUzBjgLYA%3D%3D&_c=d129a52e8bc5d44c25337be098c0835d"

  constructor(private http: HttpClient) { }

  request(): Observable<Meteo> {
    return this.http.get<Meteo>(this.url)
  }
}