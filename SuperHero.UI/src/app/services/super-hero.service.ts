import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { evirnonment } from '../evirnonment';

@Injectable({
  providedIn: 'root',
})
export class SuperHeroService {
  private url = 'SuperHero';

  constructor(private http: HttpClient) {}

  public getSuperHeroes(): Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>(`${evirnonment.apiUrl}/${this.url}`);
  }

  public updateSuperHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.put<SuperHero[]>(
      `${evirnonment.apiUrl}/${this.url}`,
      hero
    );
  }

  public createSuperHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.post<SuperHero[]>(
      `${evirnonment.apiUrl}/${this.url}`,
      hero
    );
  }

  public deleteSuperHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.delete<SuperHero[]>(
      `${evirnonment.apiUrl}/${this.url}/${hero.id}`
    );
  }
}
