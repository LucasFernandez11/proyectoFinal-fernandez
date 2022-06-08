import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { People } from './people.model';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  baseUrl = 'http://localhost:3000/people';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(people: People): Observable<People> {
    return this.http.post<People>(this.baseUrl, people).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(err: any): Observable<any> {
    this.showMessage('Ocorreu um erro! Por favor, tente novamente', true);
    return EMPTY;
  }

  read(): Observable<People[]> {
    return this.http.get<People[]>(this.baseUrl);
  }

  readById(id: number): Observable<People> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<People>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(people: People): Observable<People> {
    const url = `${this.baseUrl}/${people.id}`
    return this.http.put<People>(url,people).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<People> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<People>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }
}
