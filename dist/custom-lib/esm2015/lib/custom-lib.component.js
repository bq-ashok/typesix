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
export class CustomLibComponent {
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
if (false) {
    /** @type {?} */
    CustomLibComponent.prototype.values;
    /**
     * @type {?}
     * @private
     */
    CustomLibComponent.prototype.libService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jdXN0b20tbGliLyIsInNvdXJjZXMiOlsibGliL2N1c3RvbS1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDOzs7O0FBQ3RELHdCQU1DOzs7SUFMQyx1QkFBVzs7SUFDWCwwQkFBZ0I7O0lBQ2hCLCtCQUFvQjs7SUFDcEIsOEJBQW1COztJQUNuQiwyQkFBZTs7QUFXakIsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUc3QixZQUFvQixVQUE2QjtRQUE3QixlQUFVLEdBQVYsVUFBVSxDQUFtQjtJQUFJLENBQUM7Ozs7SUFFdEQsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUzs7OztRQUFFLENBQUMsUUFBd0IsRUFBRSxFQUFFO1lBQ2hFLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1FBQzFELENBQUMsRUFBRSxDQUFBO0lBQ0wsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7R0FJVDthQUVGOzs7O1lBaEJPLGdCQUFnQjs7OztJQWtCdEIsb0NBQTJCOzs7OztJQUVmLHdDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0N1c3RvbUxpYlNlcnZpY2V9IGZyb20gJy4vY3VzdG9tLWxpYi5zZXJ2aWNlJztcbmludGVyZmFjZSBkYXRhVHlwZXMge1xuICBpZDogbnVtYmVyLFxuICBlbWFpbCA6ICBzdHJpbmcsXG4gIGZpcnN0X25hbWUgOiBzdHJpbmcsXG4gIGxhc3RfbmFtZSA6IHN0cmluZyxcbiAgYXZhdGFyIDogc3RyaW5nXG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY3VzdG9tLWxpYicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBjdXN0b20tbGliIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21MaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgdmFsdWVzOiBkYXRhVHlwZXNbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxpYlNlcnZpY2UgOiBDdXN0b21MaWJTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxpYlNlcnZpY2UuZ2V0RGF0YSgpLnN1YnNjcmliZSggKHJlc3BvbnNlIDogQXJyYXk8T2JqZWN0PikgPT57XG4gICAgICB0aGlzLnZhbHVlcyA9IHJlc3BvbnNlWydkYXRhJ107XG4gICAgICBjb25zb2xlLmxvZygndmFsdWVzIG9mIGxpYnJhcnknLCB0aGlzLnZhbHVlcy50b1N0cmluZygpKVxuICAgIH0gKVxuICB9XG5cbn1cbiJdfQ==