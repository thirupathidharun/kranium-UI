import { Injectable } from '@angular/core';
// import * as Rx from 'rxjs';
import { BehaviorSubject, Subject, Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class CommonService {

    isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    pageTitle = new Subject();

    // get isLogged() {
    //     return this.isAuthenticated.asObservable();
    // }

    signIn(inputData): Observable<any> {
        this.isAuthenticated.next(true);
        return this.isAuthenticated;
    }
}
