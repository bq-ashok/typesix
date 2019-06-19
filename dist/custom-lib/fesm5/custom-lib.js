import { Injectable, Component, NgModule, defineInjectable, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ CustomLibService.ngInjectableDef = defineInjectable({ factory: function CustomLibService_Factory() { return new CustomLibService(inject(HttpClient)); }, token: CustomLibService, providedIn: "root" });
    return CustomLibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomLibComponent = /** @class */ (function () {
    function CustomLibComponent(libService) {
        this.libService = libService;
    }
    /**
     * @return {?}
     */
    CustomLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.libService.getData().subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.values = response['data'];
            console.log('values of library', _this.values.toString());
        }));
    };
    CustomLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-custom-lib',
                    template: "\n    <p>\n      custom-lib works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    CustomLibComponent.ctorParameters = function () { return [
        { type: CustomLibService }
    ]; };
    return CustomLibComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomLibModule = /** @class */ (function () {
    function CustomLibModule() {
    }
    CustomLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CustomLibComponent],
                    imports: [CommonModule, HttpClientModule],
                    exports: [CustomLibComponent]
                },] }
    ];
    return CustomLibModule;
}());

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