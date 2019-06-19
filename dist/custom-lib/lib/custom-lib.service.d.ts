import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class CustomLibService {
    private http;
    private readonly apiUrl;
    constructor(http: HttpClient);
    getData(): Observable<Object>;
}
