/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var CustomLibService = /** @class */ (function () {
    function CustomLibService(http) {
        this.http = http;
        this.apiUrl = "https://reqres.in/api/users?page=2";
    }
    /**
     * @return {?}
     */
    CustomLibService.prototype.getData = /**
     * @return {?}
     */
    function () {
        return this.http.get("" + this.apiUrl);
    };
    CustomLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CustomLibService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ CustomLibService.ngInjectableDef = i0.defineInjectable({ factory: function CustomLibService_Factory() { return new CustomLibService(i0.inject(i1.HttpClient)); }, token: CustomLibService, providedIn: "root" });
    return CustomLibService;
}());
export { CustomLibService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWxpYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY3VzdG9tLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tbGliLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFBOzs7QUFHaEQ7SUFNRSwwQkFBb0IsSUFBZTtRQUFmLFNBQUksR0FBSixJQUFJLENBQVc7UUFEbEIsV0FBTSxHQUFHLG9DQUFvQyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFeEMsa0NBQU87OztJQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFHLElBQUksQ0FBQyxNQUFRLENBQUMsQ0FBQztJQUV6QyxDQUFDOztnQkFYRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUxRLFVBQVU7OzsyQkFEbkI7Q0FnQkMsQUFaRCxJQVlDO1NBVFksZ0JBQWdCOzs7Ozs7SUFFM0Isa0NBQStEOzs7OztJQUNuRCxnQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCdcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tTGliU2VydmljZSB7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBhcGlVcmwgPSBcImh0dHBzOi8vcmVxcmVzLmluL2FwaS91c2Vycz9wYWdlPTJcIjsgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwQ2xpZW50KSB7IH1cblxuICBnZXREYXRhKCl7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5hcGlVcmx9YCk7XG5cbiAgfVxufVxuIl19