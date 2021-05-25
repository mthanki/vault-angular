import { HttpClient, HttpErrorResponse, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { 

  }

  get(segment: String, options: any): Observable<any> {
    return this.http.get(`${environment.url}/${segment}`, options).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  post(segment: String, data: any): Observable<any> {
    return this.http.post(`${environment.url}/${segment}`, data).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  patch(segment: String, data: any): Observable<any> {
    return this.http.patch(`${environment.url}/${segment}`, data).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  delete(segment: String, data: any): Observable<any> {
    return this.http.delete(`${environment.url}/${segment}`, data).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  showErrorSnackBar(error: string){
    this._snackBar.open(error, '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      this.showErrorSnackBar((error.error.message));

      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
