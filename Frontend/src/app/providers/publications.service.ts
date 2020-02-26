import { Injectable } from '@angular/core';
import { Publication } from '../entity/publication';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

  lista: Publication[] = [];
  constructor(private httpClient: HttpClient) {

  }

  searchAll(): Promise<Publication[]> {
    return this.httpClient.get<Publication[]>("http://localhost:8100/publications").toPromise();
  }

  searchOne(id: number): Promise<Publication> {
    return this.httpClient.get<Publication>(`http://localhost:8100/publications/${id}`).toPromise();
  }

  insert(Publications: Publication): Promise<Publication> {
    return this.httpClient.post<Publication>("http://localhost:8100/publications", Publications).toPromise();
  }

  delete(Publications: Publication): Promise<Publication> {
    return this.httpClient.delete<Publication>(`http://localhost:8100/publications/${Publications.id}`).toPromise();
  }

  save(Publications: Publication): Promise<Publication> {
    return this.httpClient.put<Publication>(`http://localhost:8100/publications/${Publications.id}`, Publications).toPromise();
  }
}
