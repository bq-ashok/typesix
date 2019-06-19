/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class CustomLibService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.apiUrl = "https://reqres.in/api/users?page=2";
    }
    /**
     * @return {?}
     */
    getData() {
        return this.http.get(`${this.apiUrl}`);
    }
}
CustomLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CustomLibService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ CustomLibService.ngInjectableDef = i0.defineInjectable({ factory: function CustomLibService_Factory() { return new CustomLibService(i0.inject(i1.HttpClient)); }, token: CustomLibService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomLibService.prototype.apiUrl;
    /**
     * @type {?}
     * @private
     */
    CustomLibService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWxpYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY3VzdG9tLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tbGliLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFBOzs7QUFNaEQsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUczQixZQUFvQixJQUFlO1FBQWYsU0FBSSxHQUFKLElBQUksQ0FBVztRQURsQixXQUFNLEdBQUcsb0NBQW9DLENBQUM7SUFDeEIsQ0FBQzs7OztJQUV4QyxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBRXpDLENBQUM7OztZQVhGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUxRLFVBQVU7Ozs7Ozs7O0lBUWpCLGtDQUErRDs7Ozs7SUFDbkQsZ0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbUxpYlNlcnZpY2Uge1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgYXBpVXJsID0gXCJodHRwczovL3JlcXJlcy5pbi9hcGkvdXNlcnM/cGFnZT0yXCI7IFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cENsaWVudCkgeyB9XG5cbiAgZ2V0RGF0YSgpe1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuYXBpVXJsfWApO1xuXG4gIH1cbn1cbiJdfQ==