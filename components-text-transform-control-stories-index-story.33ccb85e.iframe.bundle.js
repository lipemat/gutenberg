"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[5194],{"./packages/components/build-module/icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>icon});var react=__webpack_require__("./node_modules/react/index.js"),svg=__webpack_require__("./packages/primitives/build-module/svg/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const dashicon=function Dashicon({icon,className,size=20,style={},...extraProps}){const iconClass=["dashicon","dashicons","dashicons-"+icon,className].filter(Boolean).join(" "),styles={...20!=size?{fontSize:`${size}px`,width:`${size}px`,height:`${size}px`}:{},...style};return(0,jsx_runtime.jsx)("span",{className:iconClass,style:styles,...extraProps})};const icon=function Icon({icon=null,size="string"==typeof icon?20:24,...additionalProps}){if("string"==typeof icon)return(0,jsx_runtime.jsx)(dashicon,{icon,size,...additionalProps});if((0,react.isValidElement)(icon)&&dashicon===icon.type)return(0,react.cloneElement)(icon,{...additionalProps});if("function"==typeof icon)return(0,react.createElement)(icon,{size,...additionalProps});if(icon&&("svg"===icon.type||icon.type===svg.Wj)){const appliedProps={...icon.props,width:size,height:size,...additionalProps};return(0,jsx_runtime.jsx)(svg.Wj,{...appliedProps})}return(0,react.isValidElement)(icon)?(0,react.cloneElement)(icon,{size,...additionalProps}):icon}},"./packages/components/build-module/popover/utils.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{CK:()=>getReferenceElement,KF:()=>positionToPlacement,d9:()=>placementToMotionAnimationProps,sw:()=>computePopoverPosition});const POSITION_TO_PLACEMENT={bottom:"bottom",top:"top","middle left":"left","middle right":"right","bottom left":"bottom-end","bottom center":"bottom","bottom right":"bottom-start","top left":"top-end","top center":"top","top right":"top-start","middle left left":"left","middle left right":"left","middle left bottom":"left-end","middle left top":"left-start","middle right left":"right","middle right right":"right","middle right bottom":"right-end","middle right top":"right-start","bottom left left":"bottom-end","bottom left right":"bottom-end","bottom left bottom":"bottom-end","bottom left top":"bottom-end","bottom center left":"bottom","bottom center right":"bottom","bottom center bottom":"bottom","bottom center top":"bottom","bottom right left":"bottom-start","bottom right right":"bottom-start","bottom right bottom":"bottom-start","bottom right top":"bottom-start","top left left":"top-end","top left right":"top-end","top left bottom":"top-end","top left top":"top-end","top center left":"top","top center right":"top","top center bottom":"top","top center top":"top","top right left":"top-start","top right right":"top-start","top right bottom":"top-start","top right top":"top-start",middle:"bottom","middle center":"bottom","middle center bottom":"bottom","middle center left":"bottom","middle center right":"bottom","middle center top":"bottom"},positionToPlacement=position=>{var _POSITION_TO_PLACEMEN;return null!==(_POSITION_TO_PLACEMEN=POSITION_TO_PLACEMENT[position])&&void 0!==_POSITION_TO_PLACEMEN?_POSITION_TO_PLACEMEN:"bottom"},PLACEMENT_TO_ANIMATION_ORIGIN={top:{originX:.5,originY:1},"top-start":{originX:0,originY:1},"top-end":{originX:1,originY:1},right:{originX:0,originY:.5},"right-start":{originX:0,originY:0},"right-end":{originX:0,originY:1},bottom:{originX:.5,originY:0},"bottom-start":{originX:0,originY:0},"bottom-end":{originX:1,originY:0},left:{originX:1,originY:.5},"left-start":{originX:1,originY:0},"left-end":{originX:1,originY:1},overlay:{originX:.5,originY:.5}},placementToMotionAnimationProps=placement=>{const translateProp=placement.startsWith("top")||placement.startsWith("bottom")?"translateY":"translateX",translateDirection=placement.startsWith("top")||placement.startsWith("left")?1:-1;return{style:PLACEMENT_TO_ANIMATION_ORIGIN[placement],initial:{opacity:0,scale:0,[translateProp]:2*translateDirection+"em"},animate:{opacity:1,scale:1,[translateProp]:0},transition:{duration:.1,ease:[0,0,.2,1]}}};const getReferenceElement=({anchor,anchorRef,anchorRect,getAnchorRect,fallbackReferenceElement})=>{var _referenceElement;let referenceElement=null;return anchor?referenceElement=anchor:!function isTopBottom(anchorRef){return!!anchorRef?.top}(anchorRef)?!function isRef(anchorRef){return!!anchorRef?.current}(anchorRef)?anchorRef?referenceElement=anchorRef:anchorRect?referenceElement={getBoundingClientRect:()=>anchorRect}:getAnchorRect?referenceElement={getBoundingClientRect(){var _rect$x,_rect$y,_rect$width,_rect$height;const rect=getAnchorRect(fallbackReferenceElement);return new window.DOMRect(null!==(_rect$x=rect.x)&&void 0!==_rect$x?_rect$x:rect.left,null!==(_rect$y=rect.y)&&void 0!==_rect$y?_rect$y:rect.top,null!==(_rect$width=rect.width)&&void 0!==_rect$width?_rect$width:rect.right-rect.left,null!==(_rect$height=rect.height)&&void 0!==_rect$height?_rect$height:rect.bottom-rect.top)}}:fallbackReferenceElement&&(referenceElement=fallbackReferenceElement.parentElement):referenceElement=anchorRef.current:referenceElement={getBoundingClientRect(){const topRect=anchorRef.top.getBoundingClientRect(),bottomRect=anchorRef.bottom.getBoundingClientRect();return new window.DOMRect(topRect.x,topRect.y,topRect.width,bottomRect.bottom-topRect.top)}},null!==(_referenceElement=referenceElement)&&void 0!==_referenceElement?_referenceElement:null},computePopoverPosition=c=>null===c||Number.isNaN(c)?void 0:Math.round(c)},"./packages/components/build-module/shortcut/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=function Shortcut(props){const{shortcut,className}=props;if(!shortcut)return null;let displayText,ariaLabel;return"string"==typeof shortcut&&(displayText=shortcut),null!==shortcut&&"object"==typeof shortcut&&(displayText=shortcut.display,ariaLabel=shortcut.ariaLabel),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className,"aria-label":ariaLabel,children:displayText})}},"./packages/components/build-module/toggle-group-control/toggle-group-control-option-icon/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_toggle_group_control_option_base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/build-module/toggle-group-control/toggle-group-control-option-base/component.js"),_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/build-module/icon/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.forwardRef)((function UnforwardedToggleGroupControlOptionIcon(props,ref){const{icon,label,...restProps}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_toggle_group_control_option_base__WEBPACK_IMPORTED_MODULE_1__.Z,{...restProps,isIcon:!0,"aria-label":label,showTooltip:!0,ref,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icon__WEBPACK_IMPORTED_MODULE_2__.Z,{icon})})}))},"./packages/components/build-module/tooltip/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});var _ariakit_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/2D53SX6Q.js"),_ariakit_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/AXRBYZQP.js"),_ariakit_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/tooltip/tooltip-anchor.js"),_ariakit_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/tooltip/tooltip.js"),_ariakit_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js"),clsx__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/deprecated/build-module/index.js"),_shortcut__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./packages/components/build-module/shortcut/index.js"),_popover_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/popover/utils.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TooltipInternalContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createContext)({isNestedInTooltip:!1}),TOOLTIP_DELAY=700,CONTEXT_VALUE={isNestedInTooltip:!0};const Tooltip=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function UnforwardedTooltip(props,ref){const{children,className,delay=TOOLTIP_DELAY,hideOnClick=!0,placement,position,shortcut,text,...restProps}=props,{isNestedInTooltip}=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(TooltipInternalContext),baseId=(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.Z)(Tooltip,"tooltip"),describedById=text||shortcut?baseId:void 0,isOnlyChild=1===_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Children.count(children);let computedPlacement;void 0!==placement?computedPlacement=placement:void 0!==position&&(computedPlacement=(0,_popover_utils__WEBPACK_IMPORTED_MODULE_3__.KF)(position),(0,_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4__.Z)("`position` prop in wp.components.tooltip",{since:"6.4",alternative:"`placement` prop"})),computedPlacement=computedPlacement||"bottom";const tooltipStore=_ariakit_react__WEBPACK_IMPORTED_MODULE_5__._({placement:computedPlacement,showTimeout:delay}),mounted=(0,_ariakit_react__WEBPACK_IMPORTED_MODULE_6__.Kw)(tooltipStore,"mounted");return isNestedInTooltip?isOnlyChild?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ariakit_react__WEBPACK_IMPORTED_MODULE_7__.u,{...restProps,render:children}):children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TooltipInternalContext.Provider,{value:CONTEXT_VALUE,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ariakit_react__WEBPACK_IMPORTED_MODULE_8__.e,{onClick:hideOnClick?tooltipStore.hide:void 0,store:tooltipStore,render:isOnlyChild?function addDescribedById(element){return describedById&&mounted?(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(element,{"aria-describedby":describedById}):element}(children):void 0,ref,children:isOnlyChild?void 0:children}),isOnlyChild&&(text||shortcut)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ariakit_react__WEBPACK_IMPORTED_MODULE_9__.u,{...restProps,className:(0,clsx__WEBPACK_IMPORTED_MODULE_10__.Z)("components-tooltip",className),unmountOnHide:!0,gutter:4,id:describedById,overflowPadding:.5,store:tooltipStore,children:[text,shortcut&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shortcut__WEBPACK_IMPORTED_MODULE_11__.Z,{className:text?"components-tooltip__shortcut":"",shortcut})]})]})})),__WEBPACK_DEFAULT_EXPORT__=Tooltip},"./packages/compose/build-module/hooks/use-merge-refs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useMergeRefs});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function assignRef(ref,value){"function"==typeof ref?ref(value):ref&&ref.hasOwnProperty("current")&&(ref.current=value)}function useMergeRefs(refs){const element=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(),isAttachedRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),didElementChangeRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),previousRefsRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),currentRefsRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(refs);return currentRefsRef.current=refs,(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{!1===didElementChangeRef.current&&!0===isAttachedRef.current&&refs.forEach(((ref,index)=>{const previousRef=previousRefsRef.current[index];ref!==previousRef&&(assignRef(previousRef,null),assignRef(ref,element.current))})),previousRefsRef.current=refs}),refs),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{didElementChangeRef.current=!1})),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value=>{assignRef(element,value),didElementChangeRef.current=!0,isAttachedRef.current=null!==value;const refsToAssign=value?currentRefsRef.current:previousRefsRef.current;for(const ref of refsToAssign)assignRef(ref,value)}),[])}},"./packages/icons/build-module/library/format-capitalize.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M7.1 6.8L3.1 18h1.6l1.1-3h4.3l1.1 3h1.6l-4-11.2H7.1zm-.8 6.8L8 8.9l1.7 4.7H6.3zm14.5-1.5c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.2-.6-1.9-.6-.5 0-.9.1-1.4.3-.4.2-.8.5-1.1.8V6h-1.4v12h1.3l.2-1c.2.4.6.6 1 .8.4.2.9.3 1.4.3.7 0 1.2-.2 1.8-.5.5-.4 1-.9 1.3-1.5.3-.6.5-1.3.5-2.1-.1-.6-.2-1.3-.5-1.9zm-1.7 4c-.4.5-.9.8-1.6.8s-1.2-.2-1.7-.7c-.4-.5-.7-1.2-.7-2.1 0-.9.2-1.6.7-2.1.4-.5 1-.7 1.7-.7s1.2.3 1.6.8c.4.5.6 1.2.6 2 .1.8-.2 1.4-.6 2z"})})},"./packages/icons/build-module/library/format-lowercase.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M11 16.8c-.1-.1-.2-.3-.3-.5v-2.6c0-.9-.1-1.7-.3-2.2-.2-.5-.5-.9-.9-1.2-.4-.2-.9-.3-1.6-.3-.5 0-1 .1-1.5.2s-.9.3-1.2.6l.2 1.2c.4-.3.7-.4 1.1-.5.3-.1.7-.2 1-.2.6 0 1 .1 1.3.4.3.2.4.7.4 1.4-1.2 0-2.3.2-3.3.7s-1.4 1.1-1.4 2.1c0 .7.2 1.2.7 1.6.4.4 1 .6 1.8.6.9 0 1.7-.4 2.4-1.2.1.3.2.5.4.7.1.2.3.3.6.4.3.1.6.1 1.1.1h.1l.2-1.2h-.1c-.4.1-.6 0-.7-.1zM9.2 16c-.2.3-.5.6-.9.8-.3.1-.7.2-1.1.2-.4 0-.7-.1-.9-.3-.2-.2-.3-.5-.3-.9 0-.6.2-1 .7-1.3.5-.3 1.3-.4 2.5-.5v2zm10.6-3.9c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.2-.6-1.9-.6-.5 0-.9.1-1.4.3-.4.2-.8.5-1.1.8V6h-1.4v12h1.3l.2-1c.2.4.6.6 1 .8.4.2.9.3 1.4.3.7 0 1.2-.2 1.8-.5.5-.4 1-.9 1.3-1.5.3-.6.5-1.3.5-2.1-.1-.6-.2-1.3-.5-1.9zm-1.7 4c-.4.5-.9.8-1.6.8s-1.2-.2-1.7-.7c-.4-.5-.7-1.2-.7-2.1 0-.9.2-1.6.7-2.1.4-.5 1-.7 1.7-.7s1.2.3 1.6.8c.4.5.6 1.2.6 2s-.2 1.4-.6 2z"})})},"./packages/icons/build-module/library/format-uppercase.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M6.1 6.8L2.1 18h1.6l1.1-3h4.3l1.1 3h1.6l-4-11.2H6.1zm-.8 6.8L7 8.9l1.7 4.7H5.3zm15.1-.7c-.4-.5-.9-.8-1.6-1 .4-.2.7-.5.8-.9.2-.4.3-.9.3-1.4 0-.9-.3-1.6-.8-2-.6-.5-1.3-.7-2.4-.7h-3.5V18h4.2c1.1 0 2-.3 2.6-.8.6-.6 1-1.4 1-2.4-.1-.8-.3-1.4-.6-1.9zm-5.7-4.7h1.8c.6 0 1.1.1 1.4.4.3.2.5.7.5 1.3 0 .6-.2 1.1-.5 1.3-.3.2-.8.4-1.4.4h-1.8V8.2zm4 8c-.4.3-.9.5-1.5.5h-2.6v-3.8h2.6c1.4 0 2 .6 2 1.9.1.6-.1 1-.5 1.4z"})})},"./packages/icons/build-module/library/reset.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M7 11.5h10V13H7z"})})},"./node_modules/deepmerge/dist/cjs.js":module=>{var isMergeableObject=function isMergeableObject(value){return function isNonNullObject(value){return!!value&&"object"==typeof value}(value)&&!function isSpecial(value){var stringValue=Object.prototype.toString.call(value);return"[object RegExp]"===stringValue||"[object Date]"===stringValue||function isReactElement(value){return value.$$typeof===REACT_ELEMENT_TYPE}(value)}(value)};var REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function cloneUnlessOtherwiseSpecified(value,options){return!1!==options.clone&&options.isMergeableObject(value)?deepmerge(function emptyTarget(val){return Array.isArray(val)?[]:{}}(value),value,options):value}function defaultArrayMerge(target,source,options){return target.concat(source).map((function(element){return cloneUnlessOtherwiseSpecified(element,options)}))}function getKeys(target){return Object.keys(target).concat(function getEnumerableOwnPropertySymbols(target){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(target).filter((function(symbol){return Object.propertyIsEnumerable.call(target,symbol)})):[]}(target))}function propertyIsOnObject(object,property){try{return property in object}catch(_){return!1}}function mergeObject(target,source,options){var destination={};return options.isMergeableObject(target)&&getKeys(target).forEach((function(key){destination[key]=cloneUnlessOtherwiseSpecified(target[key],options)})),getKeys(source).forEach((function(key){(function propertyIsUnsafe(target,key){return propertyIsOnObject(target,key)&&!(Object.hasOwnProperty.call(target,key)&&Object.propertyIsEnumerable.call(target,key))})(target,key)||(propertyIsOnObject(target,key)&&options.isMergeableObject(source[key])?destination[key]=function getMergeFunction(key,options){if(!options.customMerge)return deepmerge;var customMerge=options.customMerge(key);return"function"==typeof customMerge?customMerge:deepmerge}(key,options)(target[key],source[key],options):destination[key]=cloneUnlessOtherwiseSpecified(source[key],options))})),destination}function deepmerge(target,source,options){(options=options||{}).arrayMerge=options.arrayMerge||defaultArrayMerge,options.isMergeableObject=options.isMergeableObject||isMergeableObject,options.cloneUnlessOtherwiseSpecified=cloneUnlessOtherwiseSpecified;var sourceIsArray=Array.isArray(source);return sourceIsArray===Array.isArray(target)?sourceIsArray?options.arrayMerge(target,source,options):mergeObject(target,source,options):cloneUnlessOtherwiseSpecified(source,options)}deepmerge.all=function deepmergeAll(array,options){if(!Array.isArray(array))throw new Error("first argument should be an array");return array.reduce((function(prev,next){return deepmerge(prev,next,options)}),{})};var deepmerge_1=deepmerge;module.exports=deepmerge_1},"./node_modules/fast-deep-equal/es6/index.js":module=>{module.exports=function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(a instanceof Map&&b instanceof Map){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;for(i of a.entries())if(!equal(i[1],b.get(i[0])))return!1;return!0}if(a instanceof Set&&b instanceof Set){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(a[i]!==b[i])return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){var key=keys[i];if(!equal(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}},"./packages/components/node_modules/@ariakit/react-core/esm/__chunks/DYHFBFEH.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useRadioStore});var UVQLZ7T5=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/UVQLZ7T5.js"),_2GXGCHW6=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js"),D7EIQZAU=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/D7EIQZAU.js"),EQQLU3CG=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js"),PBFD2E7P=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js"),_3YLGPPWQ=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js");function createRadioStore(_a={}){var _a2,props=(0,_3YLGPPWQ.S0)(_a,[]);const syncState=null==(_a2=props.store)?void 0:_a2.getState(),composite=(0,D7EIQZAU.t)((0,_3YLGPPWQ.EZ)((0,_3YLGPPWQ.ih)({},props),{focusLoop:(0,PBFD2E7P.LS)(props.focusLoop,null==syncState?void 0:syncState.focusLoop,!0)})),initialState=(0,_3YLGPPWQ.EZ)((0,_3YLGPPWQ.ih)({},composite.getState()),{value:(0,PBFD2E7P.LS)(props.value,null==syncState?void 0:syncState.value,props.defaultValue,null)}),radio=(0,EQQLU3CG.MT)(initialState,composite,props.store);return(0,_3YLGPPWQ.EZ)((0,_3YLGPPWQ.ih)((0,_3YLGPPWQ.ih)({},composite),radio),{setValue:value=>radio.setState("value",value)})}function useRadioStore(props={}){const[store,update]=(0,_2GXGCHW6.oR)(createRadioStore,props);return function useRadioStoreProps(store,update,props){return store=(0,UVQLZ7T5.b)(store,update,props),(0,_2GXGCHW6.XS)(store,props,"value","setValue"),store}(store,update,props)}},"./packages/components/node_modules/@ariakit/react-core/esm/__chunks/K7FXVWIT.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Radio,x:()=>useRadio});var _SOKV3TSX_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/SOKV3TSX.js"),_3CCTMYB6_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/3CCTMYB6.js"),_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js"),_2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js"),_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js"),_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");var useRadio=(0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__.Bi)((function useRadio2(_a){var _b=_a,{store,name,value,checked}=_b,props=(0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.S0)(_b,["store","name","value","checked"]);const context=(0,_SOKV3TSX_js__WEBPACK_IMPORTED_MODULE_3__.Wh)();store=store||context;const id=(0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__.Me)(props.id),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),isChecked=(0,_2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_5__.Kw)(store,(state=>null!=checked?checked:function getIsChecked(value,storeValue){if(void 0!==storeValue)return null!=value&&null!=storeValue?storeValue===value:!!storeValue}(value,null==state?void 0:state.value)));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(!id)return;if(!isChecked)return;(null==store?void 0:store.getState().activeId)===id||null==store||store.setActiveId(id)}),[store,isChecked,id]);const onChangeProp=props.onChange,nativeRadio=function isNativeRadio(tagName,type){return"input"===tagName&&(!type||"radio"===type)}((0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__.O)(ref,"input"),props.type),disabled=(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__.EE)(props),[propertyUpdated,schedulePropertyUpdate]=(0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__.NW)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const element=ref.current;element&&(nativeRadio||(void 0!==isChecked&&(element.checked=isChecked),void 0!==name&&(element.name=name),void 0!==value&&(element.value=`${value}`)))}),[propertyUpdated,nativeRadio,isChecked,name,value]);const onChange=(0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__.zX)((event=>{if(disabled)return event.preventDefault(),void event.stopPropagation();nativeRadio||(event.currentTarget.checked=!0,schedulePropertyUpdate()),null==onChangeProp||onChangeProp(event),event.defaultPrevented||null==store||store.setValue(value)})),onClickProp=props.onClick,onClick=(0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__.zX)((event=>{null==onClickProp||onClickProp(event),event.defaultPrevented||nativeRadio||onChange(event)})),onFocusProp=props.onFocus,onFocus=(0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__.zX)((event=>{if(null==onFocusProp||onFocusProp(event),event.defaultPrevented)return;if(!nativeRadio)return;if(!store)return;const{moves,activeId}=store.getState();moves&&(id&&activeId!==id||onChange(event))}));return props=(0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.EZ)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.ih)({id,role:nativeRadio?void 0:"radio",type:nativeRadio?"radio":void 0,"aria-checked":isChecked},props),{ref:(0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__.qq)(ref,props.ref),onChange,onClick,onFocus}),props=(0,_3CCTMYB6_js__WEBPACK_IMPORTED_MODULE_7__.E)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.ih)({store,clickOnEnter:!nativeRadio},props)),(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__.Nq)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.ih)({name:nativeRadio?name:void 0,value:nativeRadio?value:void 0,checked:isChecked},props))})),Radio=(0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__.X$)((0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__.Gp)((function Radio2(props){const htmlProps=useRadio(props);return(0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__.az)("input",htmlProps)})))},"./packages/components/node_modules/@ariakit/react-core/esm/__chunks/SOKV3TSX.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hz:()=>useRadioProviderContext,Wh:()=>useRadioContext,o:()=>RadioScopedContextProvider});var _WENSINUV_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/WENSINUV.js"),ctx=(0,__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js").re)([_WENSINUV_js__WEBPACK_IMPORTED_MODULE_1__.Lq],[_WENSINUV_js__WEBPACK_IMPORTED_MODULE_1__.al]),useRadioContext=ctx.useContext,useRadioProviderContext=(ctx.useScopedContext,ctx.useProviderContext),RadioScopedContextProvider=(ctx.ContextProvider,ctx.ScopedContextProvider)},"./packages/components/node_modules/@ariakit/react-core/esm/radio/radio-group.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>RadioGroup});var _chunks_SOKV3TSX_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/SOKV3TSX.js"),_chunks_TW35PKTK_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/TW35PKTK.js"),_chunks_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js"),_chunks_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js"),_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),useRadioGroup=(0,_chunks_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__.Bi)((function useRadioGroup2(_a){var _b=_a,{store}=_b,props=(0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.S0)(_b,["store"]);const context=(0,_chunks_SOKV3TSX_js__WEBPACK_IMPORTED_MODULE_3__.Hz)();return store=store||context,(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__.kG)(store,!1),props=(0,_chunks_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_5__.OJ)(props,(element=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunks_SOKV3TSX_js__WEBPACK_IMPORTED_MODULE_3__.o,{value:store,children:element})),[store]),props=(0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.ih)({role:"radiogroup"},props),props=(0,_chunks_TW35PKTK_js__WEBPACK_IMPORTED_MODULE_6__.Q)((0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.ih)({store},props))})),RadioGroup=(0,_chunks_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__.Gp)((function RadioGroup2(props){const htmlProps=useRadioGroup(props);return(0,_chunks_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__.az)("div",htmlProps)}))},"./packages/block-editor/src/components/text-transform-control/stories/index.story.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>index_story});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),library_reset=__webpack_require__("./packages/icons/build-module/library/reset.js"),format_uppercase=__webpack_require__("./packages/icons/build-module/library/format-uppercase.js"),format_lowercase=__webpack_require__("./packages/icons/build-module/library/format-lowercase.js"),format_capitalize=__webpack_require__("./packages/icons/build-module/library/format-capitalize.js"),component=__webpack_require__("./packages/components/build-module/toggle-group-control/toggle-group-control/component.js"),toggle_group_control_option_icon_component=__webpack_require__("./packages/components/build-module/toggle-group-control/toggle-group-control-option-icon/component.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TEXT_TRANSFORMS=[{label:(0,build_module.__)("None"),value:"none",icon:library_reset.Z},{label:(0,build_module.__)("Uppercase"),value:"uppercase",icon:format_uppercase.Z},{label:(0,build_module.__)("Lowercase"),value:"lowercase",icon:format_lowercase.Z},{label:(0,build_module.__)("Capitalize"),value:"capitalize",icon:format_capitalize.Z}];function TextTransformControl({className,value,onChange}){return(0,jsx_runtime.jsx)(component.Z,{isDeselectable:!0,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:(0,build_module.__)("Letter case"),className:(0,clsx.Z)("block-editor-text-transform-control",className),value,onChange:newValue=>{onChange(newValue===value?void 0:newValue)},children:TEXT_TRANSFORMS.map((option=>(0,jsx_runtime.jsx)(toggle_group_control_option_icon_component.Z,{value:option.value,icon:option.icon,label:option.label},option.value)))})}TextTransformControl.displayName="TextTransformControl",TextTransformControl.__docgenInfo={description:"Control to facilitate text transform selections.\n\n@param {Object}   props           Component props.\n@param {string}   props.className Class name to add to the control.\n@param {string}   props.value     Currently selected text transform.\n@param {Function} props.onChange  Handles change in text transform selection.\n\n@return {Element} Text transform control.",methods:[],displayName:"TextTransformControl"};const index_story={title:"BlockEditor/TextTransformControl",component:TextTransformControl,argTypes:{onChange:{action:"onChange"}},parameters:{sourceLink:"packages/block-editor/src/components/text-transform-control",badges:[]}},Template=({onChange,...args})=>{const[value,setValue]=(0,react.useState)();return(0,jsx_runtime.jsx)(TextTransformControl,{...args,onChange:(...changeArgs)=>{onChange(...changeArgs),setValue(...changeArgs)},value})};Template.displayName="Template";const Default=Template.bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  onChange,\n  ...args\n}) => {\n  const [value, setValue] = useState();\n  return <TextTransformControl {...args} onChange={(...changeArgs) => {\n    onChange(...changeArgs);\n    setValue(...changeArgs);\n  }} value={value} />;\n}",...Default.parameters?.docs?.source}}}}}]);