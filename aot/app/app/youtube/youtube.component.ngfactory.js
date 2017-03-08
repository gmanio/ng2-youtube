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
import * as import0 from '../../../../app/app/youtube/youtube.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/router/src/router';
import * as import9 from './youtube.component.css.shim.ngstyle';
import * as import10 from '../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import11 from '../../../node_modules/@angular/router/src/directives/router_link_active.ngfactory';
import * as import12 from '@angular/core/src/linker/query_list';
import * as import13 from '../../../node_modules/@angular/common/src/directives/ng_style.ngfactory';
import * as import14 from '@angular/core/src/linker/view_container';
import * as import15 from '@angular/core/src/change_detection/change_detection_util';
import * as import16 from '@angular/router/src/router_state';
import * as import17 from '@angular/common/src/location/location_strategy';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import20 from '@angular/common/src/directives/ng_style';
import * as import21 from '@angular/router/src/directives/router_link';
import * as import22 from '@angular/router/src/directives/router_link_active';
import * as import23 from '../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import24 from '../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import25 from '../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import26 from '../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import27 from '../../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import28 from '@angular/core/src/linker/template_ref';
import * as import29 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import30 from '@angular/router/src/router_outlet_map';
import * as import31 from '@angular/core/src/linker/component_factory_resolver';
import * as import32 from '@angular/forms/src/directives/default_value_accessor';
import * as import33 from '@angular/forms/src/directives/control_value_accessor';
import * as import34 from '@angular/forms/src/directives/ng_model';
import * as import35 from '@angular/forms/src/directives/ng_control';
import * as import36 from '@angular/forms/src/directives/ng_control_status';
import * as import37 from '@angular/common/src/directives/ng_for';
import * as import38 from '@angular/router/src/directives/router_outlet';
var Wrapper_YoutubeComponent = (function () {
    function Wrapper_YoutubeComponent(p0, p1) {
        this._changed = false;
        this.context = new import0.YoutubeComponent(p0, p1);
    }
    Wrapper_YoutubeComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_YoutubeComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_YoutubeComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_YoutubeComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_YoutubeComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'window:googleApiClientReady')) {
            var pd_sub_0 = (this.context.ngOnInit() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    Wrapper_YoutubeComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_YoutubeComponent;
}());
export { Wrapper_YoutubeComponent };
var renderType_YoutubeComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_YoutubeComponent_Host0 = (function (_super) {
    __extends(View_YoutubeComponent_Host0, _super);
    function View_YoutubeComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_YoutubeComponent_Host0, renderType_YoutubeComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_YoutubeComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_YoutubeComponent0(this.viewUtils, this, 0, this._el_0);
        this._YoutubeComponent_0_3 = new Wrapper_YoutubeComponent(this.compView_0.ref, this.injectorGet(import8.Router, this.parentIndex));
        this.compView_0.create(this._YoutubeComponent_0_3.context);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'googleApiClientReady', 'window'), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), [disposable_0]);
        return new import7.ComponentRef_(0, this, this._el_0, this._YoutubeComponent_0_3.context);
    };
    View_YoutubeComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.YoutubeComponent) && (0 === requestNodeIndex))) {
            return this._YoutubeComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_YoutubeComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._YoutubeComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_YoutubeComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_YoutubeComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_YoutubeComponent_Host0.prototype.handleEvent_0 = function (eventName, $event) {
        this.compView_0.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._YoutubeComponent_0_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_YoutubeComponent_Host0;
}(import1.AppView));
export var YoutubeComponentNgFactory = new import7.ComponentFactory('ng-component', View_YoutubeComponent_Host0, import0.YoutubeComponent);
var styles_YoutubeComponent = [import9.styles];
var View_YoutubeComponent1 = (function (_super) {
    __extends(View_YoutubeComponent1, _super);
    function View_YoutubeComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_YoutubeComponent1, renderType_YoutubeComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._map_21 = import3.pureProxy1(function (p0) {
            return { 'background-image': p0 };
        });
        _this._expr_22 = import15.UNINITIALIZED;
        return _this;
    }
    View_YoutubeComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', new import3.InlineArray2(2, 'class', 'video_item show'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'a', new import3.InlineArray2(2, 'routerLinkActive', 'active'), null);
        this._RouterLinkWithHref_2_3 = new import10.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import8.Router, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import16.ActivatedRoute, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import17.LocationStrategy, this.parentView.parentIndex));
        this._RouterLinkActive_2_4 = new import11.Wrapper_RouterLinkActive(this.parentView.parentView.injectorGet(import8.Router, this.parentView.parentIndex), new import18.ElementRef(this._el_2), this.renderer, this.parentView.ref);
        this._query_RouterLink_2_0 = new import12.QueryList();
        this._query_RouterLinkWithHref_2_1 = new import12.QueryList();
        this._text_3 = this.renderer.createText(this._el_2, '\n                        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'bg_video'), null);
        this._NgStyle_4_3 = new import13.Wrapper_NgStyle(this.parentView.parentView.injectorGet(import19.KeyValueDiffers, this.parentView.parentIndex), new import18.ElementRef(this._el_4), this.renderer);
        this._text_5 = this.renderer.createText(this._el_4, '\n                            ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray2(2, 'class', 'description'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n                                ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'span', new import3.InlineArray2(2, 'class', 'ellipsis'), null);
        this._text_9 = this.renderer.createText(this._el_8, '', null);
        this._text_10 = this.renderer.createText(this._el_6, '\n                                ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_6, 'div', new import3.InlineArray2(2, 'class', 'bg_description'), null);
        this._text_12 = this.renderer.createText(this._el_6, '\n                            ', null);
        this._text_13 = this.renderer.createText(this._el_4, '\n                        ', null);
        this._text_14 = this.renderer.createText(this._el_2, '\n                    ', null);
        this._text_15 = this.renderer.createText(this._el_0, '\n                ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._text_15
        ]), [disposable_0]);
        return null;
    };
    View_YoutubeComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import20.NgStyle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._NgStyle_4_3.context;
        }
        if (((token === import21.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._RouterLinkWithHref_2_3.context;
        }
        if (((token === import22.RouterLinkActive) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._RouterLinkActive_2_4.context;
        }
        return notFoundResult;
    };
    View_YoutubeComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = import3.inlineInterpolate(1, './player/', this.context.$implicit.id.videoId, '');
        this._RouterLinkWithHref_2_3.check_routerLink(currVal_2_0_0, throwOnChange, false);
        this._RouterLinkWithHref_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        var currVal_2_1_0 = 'active';
        this._RouterLinkActive_2_4.check_routerLinkActive(currVal_2_1_0, throwOnChange, false);
        this._RouterLinkActive_2_4.ngDoCheck(this, this._el_2, throwOnChange);
        var currVal_4_0_0 = this._map_21((('url(' + this.context.$implicit.snippet.thumbnails.high.url) + ')'));
        this._NgStyle_4_3.check_ngStyle(currVal_4_0_0, throwOnChange, false);
        this._NgStyle_4_3.ngDoCheck(this, this._el_4, throwOnChange);
        if (!throwOnChange) {
            if (this._query_RouterLink_2_0.dirty) {
                this._query_RouterLink_2_0.reset([]);
                this._RouterLinkActive_2_4.context.links = this._query_RouterLink_2_0;
                this._query_RouterLink_2_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_2_1.dirty) {
                this._query_RouterLinkWithHref_2_1.reset([this._RouterLinkWithHref_2_3.context]);
                this._RouterLinkActive_2_4.context.linksWithHrefs = this._query_RouterLinkWithHref_2_1;
                this._query_RouterLinkWithHref_2_1.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_2_4.context.ngAfterContentInit();
            }
        }
        this._RouterLinkWithHref_2_3.checkHost(this, this, this._el_2, throwOnChange);
        var currVal_22 = import3.inlineInterpolate(1, '', this.context.$implicit.snippet.title, '');
        if (import3.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this.renderer.setText(this._text_9, currVal_22);
            this._expr_22 = currVal_22;
        }
    };
    View_YoutubeComponent1.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_2_3.ngOnDestroy();
        this._RouterLinkActive_2_4.ngOnDestroy();
    };
    View_YoutubeComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_YoutubeComponent1.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_2_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_YoutubeComponent1;
}(import1.AppView));
var renderType_YoutubeComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_YoutubeComponent, {});
var View_YoutubeComponent0 = (function (_super) {
    __extends(View_YoutubeComponent0, _super);
    function View_YoutubeComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_YoutubeComponent0, renderType_YoutubeComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
        _this._expr_150 = import15.UNINITIALIZED;
        _this._expr_151 = import15.UNINITIALIZED;
        return _this;
    }
    View_YoutubeComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'mdl-layout mdl-js-layout mdl-layout--fixed-header has-drawer'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'nav_youtube mdl-layout__header'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray8(8, 'aria-expanded', 'false', 'class', 'mdl-layout__drawer-button', 'role', 'button', 'tabindex', '0'), null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_4, 'i', new import3.InlineArray2(2, 'class', 'material-icons'), null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right mdl-textfield--full-width'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n            ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'label', new import3.InlineArray4(4, 'class', 'mdl-button mdl-js-button mdl-button--icon', 'for', 'search-field'), null);
        this._text_11 = this.renderer.createText(this._el_10, '\n                ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_10, 'i', new import3.InlineArray2(2, 'class', 'material-icons'), null);
        this._text_13 = this.renderer.createText(this._el_12, 'search', null);
        this._text_14 = this.renderer.createText(this._el_10, '\n            ', null);
        this._text_15 = this.renderer.createText(this._el_8, '\n            ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_8, 'div', new import3.InlineArray2(2, 'class', 'mdl-textfield__expandable-holder'), null);
        this._text_17 = this.renderer.createText(this._el_16, '\n                ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_16, 'input', new import3.InlineArray8(6, 'class', 'mdl-textfield__input inp_search', 'id', 'search-field', 'type', 'text'), null);
        this._DefaultValueAccessor_18_3 = new import23.Wrapper_DefaultValueAccessor(this.renderer, new import18.ElementRef(this._el_18));
        this._NG_VALUE_ACCESSOR_18_4 = [this._DefaultValueAccessor_18_3.context];
        this._NgModel_18_5 = new import24.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_18_4);
        this._NgControl_18_6 = this._NgModel_18_5.context;
        this._NgControlStatus_18_7 = new import25.Wrapper_NgControlStatus(this._NgControl_18_6);
        this._text_19 = this.renderer.createText(this._el_16, '\n            ', null);
        this._text_20 = this.renderer.createText(this._el_8, '\n        ', null);
        this._text_21 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_22 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'mdl-layout__drawer'), null);
        this._text_24 = this.renderer.createText(this._el_23, '\n        ', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_23, 'nav', new import3.InlineArray2(2, 'class', 'mdl-navigation'), null);
        this._text_26 = this.renderer.createText(this._el_25, '\n            ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_25, 'div', new import3.InlineArray2(2, 'class', 'logo_gman'), null);
        this._text_28 = this.renderer.createText(this._el_27, '\n                ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_27, 'i', import3.EMPTY_INLINE_ARRAY, null);
        this._text_30 = this.renderer.createText(this._el_29, 'g', null);
        this._el_31 = import3.createRenderElement(this.renderer, this._el_27, 'i', import3.EMPTY_INLINE_ARRAY, null);
        this._text_32 = this.renderer.createText(this._el_31, 'm', null);
        this._el_33 = import3.createRenderElement(this.renderer, this._el_27, 'i', import3.EMPTY_INLINE_ARRAY, null);
        this._text_34 = this.renderer.createText(this._el_33, 'a', null);
        this._el_35 = import3.createRenderElement(this.renderer, this._el_27, 'i', import3.EMPTY_INLINE_ARRAY, null);
        this._text_36 = this.renderer.createText(this._el_35, 'n', null);
        this._text_37 = this.renderer.createText(this._el_27, '\n            ', null);
        this._text_38 = this.renderer.createText(this._el_25, '\n            ', null);
        this._el_39 = import3.createRenderElement(this.renderer, this._el_25, 'div', new import3.InlineArray2(2, 'class', 'sort_description'), null);
        this._text_40 = this.renderer.createText(this._el_39, '\n                ', null);
        this._el_41 = import3.createRenderElement(this.renderer, this._el_39, 'span', new import3.InlineArray2(2, 'class', 'txt'), null);
        this._text_42 = this.renderer.createText(this._el_41, '', null);
        this._text_43 = this.renderer.createText(this._el_39, '\n            ', null);
        this._text_44 = this.renderer.createText(this._el_25, '\n            ', null);
        this._el_45 = import3.createRenderElement(this.renderer, this._el_25, 'a', new import3.InlineArray2(2, 'class', 'mdl-navigation__link'), null);
        this._text_46 = this.renderer.createText(this._el_45, '\n                ', null);
        this._el_47 = import3.createRenderElement(this.renderer, this._el_45, 'i', new import3.InlineArray4(4, 'class', 'mdl-color-text--blue-grey-400 material-icons', 'role', 'presentation'), null);
        this._text_48 = this.renderer.createText(this._el_47, 'people', null);
        this._text_49 = this.renderer.createText(this._el_45, '\n                ', null);
        this._el_50 = import3.createRenderElement(this.renderer, this._el_45, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_51 = this.renderer.createText(this._el_50, 'ViewCount', null);
        this._text_52 = this.renderer.createText(this._el_45, '\n            ', null);
        this._text_53 = this.renderer.createText(this._el_25, '\n            ', null);
        this._el_54 = import3.createRenderElement(this.renderer, this._el_25, 'a', new import3.InlineArray2(2, 'class', 'mdl-navigation__link'), null);
        this._text_55 = this.renderer.createText(this._el_54, '\n                ', null);
        this._el_56 = import3.createRenderElement(this.renderer, this._el_54, 'i', new import3.InlineArray4(4, 'class', 'mdl-color-text--blue-grey-400 material-icons', 'role', 'presentation'), null);
        this._text_57 = this.renderer.createText(this._el_56, 'stars', null);
        this._text_58 = this.renderer.createText(this._el_54, '\n                ', null);
        this._el_59 = import3.createRenderElement(this.renderer, this._el_54, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_60 = this.renderer.createText(this._el_59, 'Rating', null);
        this._text_61 = this.renderer.createText(this._el_54, '\n            ', null);
        this._text_62 = this.renderer.createText(this._el_25, '\n            ', null);
        this._el_63 = import3.createRenderElement(this.renderer, this._el_25, 'a', new import3.InlineArray2(2, 'class', 'mdl-navigation__link'), null);
        this._text_64 = this.renderer.createText(this._el_63, '\n                ', null);
        this._el_65 = import3.createRenderElement(this.renderer, this._el_63, 'i', new import3.InlineArray4(4, 'class', 'mdl-color-text--blue-grey-400 material-icons', 'role', 'presentation'), null);
        this._text_66 = this.renderer.createText(this._el_65, 'playlist_add_check', null);
        this._text_67 = this.renderer.createText(this._el_63, '\n                ', null);
        this._el_68 = import3.createRenderElement(this.renderer, this._el_63, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_69 = this.renderer.createText(this._el_68, 'Relevance', null);
        this._text_70 = this.renderer.createText(this._el_63, '\n            ', null);
        this._text_71 = this.renderer.createText(this._el_25, '\n            ', null);
        this._el_72 = import3.createRenderElement(this.renderer, this._el_25, 'a', new import3.InlineArray2(2, 'class', 'mdl-navigation__link'), null);
        this._text_73 = this.renderer.createText(this._el_72, '\n                ', null);
        this._el_74 = import3.createRenderElement(this.renderer, this._el_72, 'i', new import3.InlineArray4(4, 'class', 'mdl-color-text--blue-grey-400 material-icons', 'role', 'presentation'), null);
        this._text_75 = this.renderer.createText(this._el_74, 'date_range', null);
        this._text_76 = this.renderer.createText(this._el_72, '\n                ', null);
        this._el_77 = import3.createRenderElement(this.renderer, this._el_72, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_78 = this.renderer.createText(this._el_77, 'Date', null);
        this._text_79 = this.renderer.createText(this._el_72, '\n            ', null);
        this._text_80 = this.renderer.createText(this._el_25, '\n            ', null);
        this._el_81 = import3.createRenderElement(this.renderer, this._el_25, 'a', new import3.InlineArray2(2, 'class', 'mdl-navigation__link'), null);
        this._text_82 = this.renderer.createText(this._el_81, '\n                ', null);
        this._el_83 = import3.createRenderElement(this.renderer, this._el_81, 'i', new import3.InlineArray4(4, 'class', 'mdl-color-text--blue-grey-400 material-icons', 'role', 'presentation'), null);
        this._text_84 = this.renderer.createText(this._el_83, 'movie', null);
        this._text_85 = this.renderer.createText(this._el_81, '\n                ', null);
        this._el_86 = import3.createRenderElement(this.renderer, this._el_81, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_87 = this.renderer.createText(this._el_86, 'VideoCount', null);
        this._text_88 = this.renderer.createText(this._el_81, '\n            ', null);
        this._text_89 = this.renderer.createText(this._el_25, '\n            ', null);
        this._el_90 = import3.createRenderElement(this.renderer, this._el_25, 'a', new import3.InlineArray2(2, 'class', 'mdl-navigation__link'), null);
        this._text_91 = this.renderer.createText(this._el_90, '\n                ', null);
        this._el_92 = import3.createRenderElement(this.renderer, this._el_90, 'i', new import3.InlineArray4(4, 'class', 'mdl-color-text--blue-grey-400 material-icons', 'role', 'presentation'), null);
        this._text_93 = this.renderer.createText(this._el_92, 'subtitles', null);
        this._text_94 = this.renderer.createText(this._el_90, '\n                ', null);
        this._el_95 = import3.createRenderElement(this.renderer, this._el_90, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_96 = this.renderer.createText(this._el_95, 'Title', null);
        this._text_97 = this.renderer.createText(this._el_90, '\n            ', null);
        this._text_98 = this.renderer.createText(this._el_25, '\n        ', null);
        this._text_99 = this.renderer.createText(this._el_23, '\n    ', null);
        this._text_100 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_101 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'mdl-layout__content'), null);
        this._text_102 = this.renderer.createText(this._el_101, '\n        ', null);
        this._el_103 = import3.createRenderElement(this.renderer, this._el_101, 'div', new import3.InlineArray2(2, 'class', 'ct_youtube'), null);
        this._text_104 = this.renderer.createText(this._el_103, '\n            ', null);
        this._el_105 = import3.createRenderElement(this.renderer, this._el_103, 'ul', new import3.InlineArray2(2, 'class', 'list_video'), null);
        this._text_106 = this.renderer.createText(this._el_105, '\n                ', null);
        this._anchor_107 = this.renderer.createTemplateAnchor(this._el_105, null);
        this._vc_107 = new import14.ViewContainer(107, 105, this, this._anchor_107);
        this._TemplateRef_107_5 = new import28.TemplateRef_(this, 107, this._anchor_107);
        this._NgFor_107_6 = new import26.Wrapper_NgFor(this._vc_107.vcRef, this._TemplateRef_107_5, this.parentView.injectorGet(import29.IterableDiffers, this.parentIndex), this.ref);
        this._text_108 = this.renderer.createText(this._el_105, '\n            ', null);
        this._text_109 = this.renderer.createText(this._el_103, '\n        ', null);
        this._text_110 = this.renderer.createText(this._el_101, '\n        ', null);
        this._el_111 = import3.createRenderElement(this.renderer, this._el_101, 'div', new import3.InlineArray2(2, 'class', 'mdl-typography--text-center'), null);
        this._text_112 = this.renderer.createText(this._el_111, '\n            ', null);
        this._el_113 = import3.createRenderElement(this.renderer, this._el_111, 'button', new import3.InlineArray2(2, 'class', 'btn_more_content mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect'), null);
        this._text_114 = this.renderer.createText(this._el_113, '\n                ', null);
        this._el_115 = import3.createRenderElement(this.renderer, this._el_113, 'i', new import3.InlineArray2(2, 'class', 'material-icons'), null);
        this._text_116 = this.renderer.createText(this._el_115, 'add', null);
        this._text_117 = this.renderer.createText(this._el_113, '\n            ', null);
        this._text_118 = this.renderer.createText(this._el_111, '\n        ', null);
        this._text_119 = this.renderer.createText(this._el_101, '\n    ', null);
        this._text_120 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_121 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'video_loading'), null);
        this._text_122 = this.renderer.createText(this._el_121, '\n        ', null);
        this._el_123 = import3.createRenderElement(this.renderer, this._el_121, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_124 = this.renderer.createText(this._el_123, '\n            ', null);
        this._el_125 = import3.createRenderElement(this.renderer, this._el_123, 'div', new import3.InlineArray2(2, 'class', 'c1'), null);
        this._text_126 = this.renderer.createText(this._el_123, '\n            ', null);
        this._el_127 = import3.createRenderElement(this.renderer, this._el_123, 'div', new import3.InlineArray2(2, 'class', 'c2'), null);
        this._text_128 = this.renderer.createText(this._el_123, '\n            ', null);
        this._el_129 = import3.createRenderElement(this.renderer, this._el_123, 'div', new import3.InlineArray2(2, 'class', 'c3'), null);
        this._text_130 = this.renderer.createText(this._el_123, '\n            ', null);
        this._el_131 = import3.createRenderElement(this.renderer, this._el_123, 'div', new import3.InlineArray2(2, 'class', 'c4'), null);
        this._text_132 = this.renderer.createText(this._el_123, '\n        ', null);
        this._text_133 = this.renderer.createText(this._el_121, '\n        ', null);
        this._el_134 = import3.createRenderElement(this.renderer, this._el_121, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_135 = this.renderer.createText(this._el_134, 'loading', null);
        this._text_136 = this.renderer.createText(this._el_121, '\n    ', null);
        this._text_137 = this.renderer.createText(this._el_0, '\n', null);
        this._text_138 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_139 = import3.createRenderElement(this.renderer, parentRenderNode, 'router-outlet', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_139 = new import14.ViewContainer(139, null, this, this._el_139);
        this._RouterOutlet_139_5 = new import27.Wrapper_RouterOutlet(this.parentView.injectorGet(import30.RouterOutletMap, this.parentIndex), this._vc_139.vcRef, this.parentView.injectorGet(import31.ComponentFactoryResolver, this.parentIndex), null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_10, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_10));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_18, new import3.InlineArray8(8, 'ngModelChange', null, 'keypress', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_18));
        this._NgModel_18_5.subscribe(this, this.eventHandler(this.handleEvent_18), true);
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_45, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_45));
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_54, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_54));
        var disposable_4 = import3.subscribeToRenderElement(this, this._el_63, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_63));
        var disposable_5 = import3.subscribeToRenderElement(this, this._el_72, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_72));
        var disposable_6 = import3.subscribeToRenderElement(this, this._el_81, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_81));
        var disposable_7 = import3.subscribeToRenderElement(this, this._el_90, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_90));
        var disposable_8 = import3.subscribeToRenderElement(this, this._el_113, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_113));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._text_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._text_43,
            this._text_44,
            this._el_45,
            this._text_46,
            this._el_47,
            this._text_48,
            this._text_49,
            this._el_50,
            this._text_51,
            this._text_52,
            this._text_53,
            this._el_54,
            this._text_55,
            this._el_56,
            this._text_57,
            this._text_58,
            this._el_59,
            this._text_60,
            this._text_61,
            this._text_62,
            this._el_63,
            this._text_64,
            this._el_65,
            this._text_66,
            this._text_67,
            this._el_68,
            this._text_69,
            this._text_70,
            this._text_71,
            this._el_72,
            this._text_73,
            this._el_74,
            this._text_75,
            this._text_76,
            this._el_77,
            this._text_78,
            this._text_79,
            this._text_80,
            this._el_81,
            this._text_82,
            this._el_83,
            this._text_84,
            this._text_85,
            this._el_86,
            this._text_87,
            this._text_88,
            this._text_89,
            this._el_90,
            this._text_91,
            this._el_92,
            this._text_93,
            this._text_94,
            this._el_95,
            this._text_96,
            this._text_97,
            this._text_98,
            this._text_99,
            this._text_100,
            this._el_101,
            this._text_102,
            this._el_103,
            this._text_104,
            this._el_105,
            this._text_106,
            this._anchor_107,
            this._text_108,
            this._text_109,
            this._text_110,
            this._el_111,
            this._text_112,
            this._el_113,
            this._text_114,
            this._el_115,
            this._text_116,
            this._text_117,
            this._text_118,
            this._text_119,
            this._text_120,
            this._el_121,
            this._text_122,
            this._el_123,
            this._text_124,
            this._el_125,
            this._text_126,
            this._el_127,
            this._text_128,
            this._el_129,
            this._text_130,
            this._el_131,
            this._text_132,
            this._text_133,
            this._el_134,
            this._text_135,
            this._text_136,
            this._text_137,
            this._text_138,
            this._el_139
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5,
            disposable_6,
            disposable_7,
            disposable_8
        ]);
        return null;
    };
    View_YoutubeComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import32.DefaultValueAccessor) && (18 === requestNodeIndex))) {
            return this._DefaultValueAccessor_18_3.context;
        }
        if (((token === import33.NG_VALUE_ACCESSOR) && (18 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_18_4;
        }
        if (((token === import34.NgModel) && (18 === requestNodeIndex))) {
            return this._NgModel_18_5.context;
        }
        if (((token === import35.NgControl) && (18 === requestNodeIndex))) {
            return this._NgControl_18_6;
        }
        if (((token === import36.NgControlStatus) && (18 === requestNodeIndex))) {
            return this._NgControlStatus_18_7.context;
        }
        if (((token === import28.TemplateRef) && (107 === requestNodeIndex))) {
            return this._TemplateRef_107_5;
        }
        if (((token === import37.NgFor) && (107 === requestNodeIndex))) {
            return this._NgFor_107_6.context;
        }
        if (((token === import38.RouterOutlet) && (139 === requestNodeIndex))) {
            return this._RouterOutlet_139_5.context;
        }
        return notFoundResult;
    };
    View_YoutubeComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._DefaultValueAccessor_18_3.ngDoCheck(this, this._el_18, throwOnChange);
        var currVal_18_1_0 = this.context.query;
        this._NgModel_18_5.check_model(currVal_18_1_0, throwOnChange, false);
        this._NgModel_18_5.ngDoCheck(this, this._el_18, throwOnChange);
        this._NgControlStatus_18_7.ngDoCheck(this, this._el_18, throwOnChange);
        var currVal_107_0_0 = this.context.videos;
        this._NgFor_107_6.check_ngForOf(currVal_107_0_0, throwOnChange, false);
        this._NgFor_107_6.ngDoCheck(this, this._anchor_107, throwOnChange);
        this._RouterOutlet_139_5.ngDoCheck(this, this._el_139, throwOnChange);
        this._vc_107.detectChangesInNestedViews(throwOnChange);
        this._vc_139.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatus_18_7.checkHost(this, this, this._el_18, throwOnChange);
        var currVal_150 = import3.inlineInterpolate(1, 'Sort by ', this.context.order, '');
        if (import3.checkBinding(throwOnChange, this._expr_150, currVal_150)) {
            this.renderer.setText(this._text_42, currVal_150);
            this._expr_150 = currVal_150;
        }
        var currVal_151 = !this.context.isLoading;
        if (import3.checkBinding(throwOnChange, this._expr_151, currVal_151)) {
            this.renderer.setElementProperty(this._el_121, 'hidden', currVal_151);
            this._expr_151 = currVal_151;
        }
    };
    View_YoutubeComponent0.prototype.destroyInternal = function () {
        this._vc_107.destroyNestedViews();
        this._vc_139.destroyNestedViews();
        this._NgModel_18_5.ngOnDestroy();
        this._RouterOutlet_139_5.ngOnDestroy();
    };
    View_YoutubeComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 107)) {
            return new View_YoutubeComponent1(this.viewUtils, this, 107, this._anchor_107, this._vc_107);
        }
        return null;
    };
    View_YoutubeComponent0.prototype.handleEvent_10 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onSearch($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_YoutubeComponent0.prototype.handleEvent_18 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_18_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.query = $event) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'keypress')) {
            var pd_sub_1 = (this.context.onSearch($event) !== false);
            result = (pd_sub_1 && result);
        }
        return result;
    };
    View_YoutubeComponent0.prototype.handleEvent_45 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClickedSort('viewCount') !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_YoutubeComponent0.prototype.handleEvent_54 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClickedSort('rating') !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_YoutubeComponent0.prototype.handleEvent_63 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClickedSort('relevance') !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_YoutubeComponent0.prototype.handleEvent_72 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClickedSort('date') !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_YoutubeComponent0.prototype.handleEvent_81 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClickedSort('videoCount') !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_YoutubeComponent0.prototype.handleEvent_90 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClickedSort('title') !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_YoutubeComponent0.prototype.handleEvent_113 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onLoadMoreContent() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_YoutubeComponent0;
}(import1.AppView));
export { View_YoutubeComponent0 };
