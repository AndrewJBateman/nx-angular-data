import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Data } from '@nx-angular-data/api-interfaces';

const ENDPOINT = 'http://localhost:3333/api/datas'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get<Data[]>(ENDPOINT)
  }

  find(id: string) {
    return this.http.get<Data>(ENDPOINT + `/${id}`)
  }

  create(data: Data) {
    return this.http.post(ENDPOINT, data);
  }

  update(data: Data) {
    return this.http.put(ENDPOINT + `/${data.id}`, data);
  }

  delete(data: Data) {
    return this.http.delete(ENDPOINT + `/${data.id}`);
  }
}
