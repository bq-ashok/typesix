import { Injectable, Component, NgModule, defineInjectable, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomLibService {
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
/** @nocollapse */ CustomLibService.ngInjectableDef = defineInjectable({ factory: function CustomLibService_Factory() { return new CustomLibService(inject(HttpClient)); }, token: CustomLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomLibComponent {
    /**
     * @param {?} libService
     */
    constructor(libService) {
        this.libService = libService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.libService.getData().subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.values = response['data'];
            console.log('values of library', this.values.toString());
        }));
    }
}
CustomLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-custom-lib',
                template: `
    <p>
      custom-lib works!
    </p>
  `
            }] }
];
/** @nocollapse */
CustomLibComponent.ctorParameters = () => [
    { type: CustomLibService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomLibModule {
}
CustomLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CustomLibComponent],
                imports: [CommonModule, HttpClientModule],
                exports: [CustomLibComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CustomLibService, CustomLibComponent, CustomLibModule };

//# sourceMappingURL=custom-lib.js.map