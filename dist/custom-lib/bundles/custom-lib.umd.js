(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('custom-lib', ['exports', '@angular/core', '@angular/common', '@angular/common/http'], factory) :
    (factory((global['custom-lib'] = {}),global.ng.core,global.ng.common,global.ng.common.http));
}(this, (function (exports,i0,common,i1) { 'use strict';

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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CustomLibService.ctorParameters = function () {
            return [
                { type: i1.HttpClient }
            ];
        };
        /** @nocollapse */ CustomLibService.ngInjectableDef = i0.defineInjectable({ factory: function CustomLibService_Factory() { return new CustomLibService(i0.inject(i1.HttpClient)); }, token: CustomLibService, providedIn: "root" });
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
                this.libService.getData().subscribe(( /**
                 * @param {?} response
                 * @return {?}
                 */function (response) {
                    _this.values = response['data'];
                    console.log('values of library', _this.values.toString());
                }));
            };
        CustomLibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-custom-lib',
                        template: "\n    <p>\n      custom-lib works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        CustomLibComponent.ctorParameters = function () {
            return [
                { type: CustomLibService }
            ];
        };
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
            { type: i0.NgModule, args: [{
                        declarations: [CustomLibComponent],
                        imports: [common.CommonModule, i1.HttpClientModule],
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

    exports.CustomLibService = CustomLibService;
    exports.CustomLibComponent = CustomLibComponent;
    exports.CustomLibModule = CustomLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=custom-lib.umd.js.map