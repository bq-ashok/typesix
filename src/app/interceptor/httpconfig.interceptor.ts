import { Injectable} from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    
    intercept(request : HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>  {


        request = request.clone({ headers: request.headers.set('Authorization', 'Bearer' + 'TokenValie')});

        if(!request.headers.has('Content-type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        return next.handle(request).pipe(catchError(err => {

            if(err.status === 401) {
                console.log('401 status')
                // logout / sessiontimeout process initiating
            }
            const error =  err.error.errorMessage || err.statusText ;
            return throwError(error);
        }),
        map((event : HttpEvent<any>) => {
            if(event instanceof HttpResponse) {
                console.log('event :::::: ', event);
            }
            return event;
        })
        );

    }

}

