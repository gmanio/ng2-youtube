var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as import0 from '../../../../app/app/etc/pagenotfound.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/change_detection/change_detection_util';
var Wrapper_PageNotFoundComponent = (function () {
    function Wrapper_PageNotFoundComponent() {
        this._changed = false;
        this.context = new import0.PageNotFoundComponent();
    }
    Wrapper_PageNotFoundComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_PageNotFoundComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_PageNotFoundComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_PageNotFoundComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_PageNotFoundComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_PageNotFoundComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_PageNotFoundComponent;
}());
export { Wrapper_PageNotFoundComponent };
var renderType_PageNotFoundComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_PageNotFoundComponent_Host0 = (function (_super) {
    __extends(View_PageNotFoundComponent_Host0, _super);
    function View_PageNotFoundComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_PageNotFoundComponent_Host0, renderType_PageNotFoundComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_PageNotFoundComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_PageNotFoundComponent0(this.viewUtils, this, 0, this._el_0);
        this._PageNotFoundComponent_0_3 = new Wrapper_PageNotFoundComponent();
        this.compView_0.create(this._PageNotFoundComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._PageNotFoundComponent_0_3.context);
    };
    View_PageNotFoundComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.PageNotFoundComponent) && (0 === requestNodeIndex))) {
            return this._PageNotFoundComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_PageNotFoundComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._PageNotFoundComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_PageNotFoundComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_PageNotFoundComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_PageNotFoundComponent_Host0;
}(import1.AppView));
export var PageNotFoundComponentNgFactory = new import7.ComponentFactory('ng-component', View_PageNotFoundComponent_Host0, import0.PageNotFoundComponent);
var styles_PageNotFoundComponent = [];
var renderType_PageNotFoundComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_PageNotFoundComponent, {});
var View_PageNotFoundComponent0 = (function (_super) {
    __extends(View_PageNotFoundComponent0, _super);
    function View_PageNotFoundComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_PageNotFoundComponent0, renderType_PageNotFoundComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
        _this._expr_12 = import8.UNINITIALIZED;
        return _this;
    }
    View_PageNotFoundComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n        ', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, '\n            ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'h3', import3.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, 'Angular2 Router', null);
        this._text_5 = this.renderer.createText(this._el_1, '\n            ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_1, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, ' Sorry.. Something is wrong. ', null);
        this._text_8 = this.renderer.createText(this._el_1, '\n            ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_1, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_9, '', null);
        this._text_11 = this.renderer.createText(this._el_1, '\n        ', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11
        ]), null);
        return null;
    };
    View_PageNotFoundComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_12 = import3.inlineInterpolate(1, '', this.context.title, '');
        if (import3.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setText(this._text_10, currVal_12);
            this._expr_12 = currVal_12;
        }
    };
    return View_PageNotFoundComponent0;
}(import1.AppView));
export { View_PageNotFoundComponent0 };
