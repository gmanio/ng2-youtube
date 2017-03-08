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
import * as import0 from '../../../../../app/app/youtube/player/player.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/router/src/router_state';
import * as import9 from './player.component.css.ngstyle';
import * as import10 from '@angular/core/src/change_detection/change_detection_util';
var Wrapper_PlayerComponent = (function () {
    function Wrapper_PlayerComponent(p0, p1) {
        this._changed = false;
        this.context = new import0.PlayerComponent(p0, p1);
    }
    Wrapper_PlayerComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_PlayerComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_PlayerComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_PlayerComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_PlayerComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_PlayerComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_PlayerComponent;
}());
export { Wrapper_PlayerComponent };
var renderType_PlayerComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_PlayerComponent_Host0 = (function (_super) {
    __extends(View_PlayerComponent_Host0, _super);
    function View_PlayerComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_PlayerComponent_Host0, renderType_PlayerComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_PlayerComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_PlayerComponent0(this.viewUtils, this, 0, this._el_0);
        this._PlayerComponent_0_3 = new Wrapper_PlayerComponent(this.injectorGet(import8.ActivatedRoute, this.parentIndex), this.compView_0.ref);
        this.compView_0.create(this._PlayerComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._PlayerComponent_0_3.context);
    };
    View_PlayerComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.PlayerComponent) && (0 === requestNodeIndex))) {
            return this._PlayerComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_PlayerComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._PlayerComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_PlayerComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_PlayerComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_PlayerComponent_Host0;
}(import1.AppView));
export var PlayerComponentNgFactory = new import7.ComponentFactory('ng-component', View_PlayerComponent_Host0, import0.PlayerComponent);
var styles_PlayerComponent = [import9.styles];
var renderType_PlayerComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_PlayerComponent, {});
var View_PlayerComponent0 = (function (_super) {
    __extends(View_PlayerComponent0, _super);
    function View_PlayerComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_PlayerComponent0, renderType_PlayerComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
        _this._expr_15 = import10.UNINITIALIZED;
        return _this;
    }
    View_PlayerComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'wrap_youtube_player'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'layer-player_close'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'button', new import3.InlineArray2(2, 'class', 'btn_player-close mdl-button mdl-js-button mdl-button--icon'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'i', new import3.InlineArray2(2, 'class', 'material-icons'), null);
        this._text_7 = this.renderer.createText(this._el_6, 'clear', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_9 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'id', 'youtube_player'), null);
        this._text_12 = this.renderer.createText(this._el_11, '\n        ', null);
        this._text_13 = this.renderer.createText(this._el_11, '\n    ', null);
        this._text_14 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_4, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_4));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._text_14
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_PlayerComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_15 = !this.context.isPlayerOpen;
        if (import3.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setElementProperty(this._el_0, 'hidden', currVal_15);
            this._expr_15 = currVal_15;
        }
    };
    View_PlayerComponent0.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.hide() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_PlayerComponent0.prototype.handleEvent_4 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.hide() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_PlayerComponent0;
}(import1.AppView));
export { View_PlayerComponent0 };
