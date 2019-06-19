/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { CustomLibService } from './custom-lib.service';
/**
 * @record
 */
function dataTypes() { }
if (false) {
    /** @type {?} */
    dataTypes.prototype.id;
    /** @type {?} */
    dataTypes.prototype.email;
    /** @type {?} */
    dataTypes.prototype.first_name;
    /** @type {?} */
    dataTypes.prototype.last_name;
    /** @type {?} */
    dataTypes.prototype.avatar;
}
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
export { CustomLibComponent };
if (false) {
    /** @type {?} */
    CustomLibComponent.prototype.values;
    /**
     * @type {?}
     * @private
     */
    CustomLibComponent.prototype.libService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jdXN0b20tbGliLyIsInNvdXJjZXMiOlsibGliL2N1c3RvbS1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDOzs7O0FBQ3RELHdCQU1DOzs7SUFMQyx1QkFBVzs7SUFDWCwwQkFBZ0I7O0lBQ2hCLCtCQUFvQjs7SUFDcEIsOEJBQW1COztJQUNuQiwyQkFBZTs7QUFFakI7SUFZRSw0QkFBb0IsVUFBNkI7UUFBN0IsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7SUFBSSxDQUFDOzs7O0lBRXRELHFDQUFROzs7SUFBUjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUUsVUFBQyxRQUF3QjtZQUM1RCxLQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtRQUMxRCxDQUFDLEVBQUUsQ0FBQTtJQUNMLENBQUM7O2dCQW5CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLGtEQUlUO2lCQUVGOzs7O2dCQWhCTyxnQkFBZ0I7O0lBNkJ4Qix5QkFBQztDQUFBLEFBckJELElBcUJDO1NBWlksa0JBQWtCOzs7SUFDN0Isb0NBQTJCOzs7OztJQUVmLHdDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0N1c3RvbUxpYlNlcnZpY2V9IGZyb20gJy4vY3VzdG9tLWxpYi5zZXJ2aWNlJztcbmludGVyZmFjZSBkYXRhVHlwZXMge1xuICBpZDogbnVtYmVyLFxuICBlbWFpbCA6ICBzdHJpbmcsXG4gIGZpcnN0X25hbWUgOiBzdHJpbmcsXG4gIGxhc3RfbmFtZSA6IHN0cmluZyxcbiAgYXZhdGFyIDogc3RyaW5nXG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY3VzdG9tLWxpYicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBjdXN0b20tbGliIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21MaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgdmFsdWVzOiBkYXRhVHlwZXNbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxpYlNlcnZpY2UgOiBDdXN0b21MaWJTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxpYlNlcnZpY2UuZ2V0RGF0YSgpLnN1YnNjcmliZSggKHJlc3BvbnNlIDogQXJyYXk8T2JqZWN0PikgPT57XG4gICAgICB0aGlzLnZhbHVlcyA9IHJlc3BvbnNlWydkYXRhJ107XG4gICAgICBjb25zb2xlLmxvZygndmFsdWVzIG9mIGxpYnJhcnknLCB0aGlzLnZhbHVlcy50b1N0cmluZygpKVxuICAgIH0gKVxuICB9XG5cbn1cbiJdfQ==