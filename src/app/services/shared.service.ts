import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Doctor } from '../models/doctormodel';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:8080/API/read.php";

  headers: any;

  myheader: any;

  
  constructor(private http: HttpClient) { }

   messageSource = new  BehaviorSubject("a");
  currentMessage = this.messageSource.asObservable();


  changeMessage(message: string) {
    this.messageSource.next(message)
    // console.log("changeMessage() called. message: " + message)
    }


  getDocList(params: any): Observable<Doctor> {
    console.log("getDocList() called. params:" + params);
    this.headers = new HttpHeaders().set('specialty', params)
    console.log("headers: " + this.headers);
    return this.http.get<Doctor>(this.APIUrl, {'headers': this.headers})
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  handleError(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

}
