"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[1656],{"./packages/block-editor/src/components/block-draggable/draggable-chip.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>BlockDraggableChip});var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/i18n/build-module/index.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/build-module/flex/flex/component.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/flex/flex-item/component.js"),_wordpress_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/icons/build-module/library/drag-handle.js"),_block_icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/block-editor/src/components/block-icon/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function BlockDraggableChip({count,icon,isPattern,fadeWhenDisabled}){const patternLabel=isPattern&&(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pattern");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"block-editor-block-draggable-chip-wrapper",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"block-editor-block-draggable-chip","data-testid":"block-draggable-chip",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Z,{justify:"center",className:"block-editor-block-draggable-chip__content",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Z,{children:icon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_block_icon__WEBPACK_IMPORTED_MODULE_4__.Z,{icon}):patternLabel||(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.gB)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._n)("%d block","%d blocks",count),count)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_block_icon__WEBPACK_IMPORTED_MODULE_4__.Z,{icon:_wordpress_icons__WEBPACK_IMPORTED_MODULE_5__.Z})}),fadeWhenDisabled&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Z,{className:"block-editor-block-draggable-chip__disabled",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"block-editor-block-draggable-chip__disabled-icon"})})]})})})}BlockDraggableChip.displayName="BlockDraggableChip",BlockDraggableChip.__docgenInfo={description:"",methods:[],displayName:"BlockDraggableChip"}},"./packages/block-editor/src/components/block-icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_wordpress_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/build-module/icon/index.js"),_wordpress_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/icons/build-module/library/block-default.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function BlockIcon({icon,showColors=!1,className,context}){"block-default"===icon?.src&&(icon={src:_wordpress_icons__WEBPACK_IMPORTED_MODULE_1__.Z});const renderedIcon=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Z,{icon:icon&&icon.src?icon.src:icon,context}),style=showColors?{backgroundColor:icon&&icon.background,color:icon&&icon.foreground}:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style,className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("block-editor-block-icon",className,{"has-colors":showColors}),children:renderedIcon})}BlockIcon.displayName="BlockIcon";const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.memo)(BlockIcon);BlockIcon.__docgenInfo={description:"",methods:[],displayName:"BlockIcon",props:{showColors:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./packages/components/build-module/icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>icon});var react=__webpack_require__("./node_modules/react/index.js"),svg=__webpack_require__("./packages/primitives/build-module/svg/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const dashicon=function Dashicon({icon,className,size=20,style={},...extraProps}){const iconClass=["dashicon","dashicons","dashicons-"+icon,className].filter(Boolean).join(" "),styles={...20!=size?{fontSize:`${size}px`,width:`${size}px`,height:`${size}px`}:{},...style};return(0,jsx_runtime.jsx)("span",{className:iconClass,style:styles,...extraProps})};const icon=function Icon({icon=null,size="string"==typeof icon?20:24,...additionalProps}){if("string"==typeof icon)return(0,jsx_runtime.jsx)(dashicon,{icon,size,...additionalProps});if((0,react.isValidElement)(icon)&&dashicon===icon.type)return(0,react.cloneElement)(icon,{...additionalProps});if("function"==typeof icon)return(0,react.createElement)(icon,{size,...additionalProps});if(icon&&("svg"===icon.type||icon.type===svg.Wj)){const appliedProps={...icon.props,width:size,height:size,...additionalProps};return(0,jsx_runtime.jsx)(svg.Wj,{...appliedProps})}return(0,react.isValidElement)(icon)?(0,react.cloneElement)(icon,{size,...additionalProps}):icon}},"./packages/icons/build-module/library/block-default.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M19 8h-1V6h-5v2h-2V6H6v2H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm.5 10c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-8c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v8z"})})},"./packages/icons/build-module/library/drag-handle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M8 7h2V5H8v2zm0 6h2v-2H8v2zm0 6h2v-2H8v2zm6-14v2h2V5h-2zm0 8h2v-2h-2v2zm0 6h2v-2h-2v2z"})})},"./node_modules/deepmerge/dist/cjs.js":module=>{var isMergeableObject=function isMergeableObject(value){return function isNonNullObject(value){return!!value&&"object"==typeof value}(value)&&!function isSpecial(value){var stringValue=Object.prototype.toString.call(value);return"[object RegExp]"===stringValue||"[object Date]"===stringValue||function isReactElement(value){return value.$$typeof===REACT_ELEMENT_TYPE}(value)}(value)};var REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function cloneUnlessOtherwiseSpecified(value,options){return!1!==options.clone&&options.isMergeableObject(value)?deepmerge(function emptyTarget(val){return Array.isArray(val)?[]:{}}(value),value,options):value}function defaultArrayMerge(target,source,options){return target.concat(source).map((function(element){return cloneUnlessOtherwiseSpecified(element,options)}))}function getKeys(target){return Object.keys(target).concat(function getEnumerableOwnPropertySymbols(target){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(target).filter((function(symbol){return Object.propertyIsEnumerable.call(target,symbol)})):[]}(target))}function propertyIsOnObject(object,property){try{return property in object}catch(_){return!1}}function mergeObject(target,source,options){var destination={};return options.isMergeableObject(target)&&getKeys(target).forEach((function(key){destination[key]=cloneUnlessOtherwiseSpecified(target[key],options)})),getKeys(source).forEach((function(key){(function propertyIsUnsafe(target,key){return propertyIsOnObject(target,key)&&!(Object.hasOwnProperty.call(target,key)&&Object.propertyIsEnumerable.call(target,key))})(target,key)||(propertyIsOnObject(target,key)&&options.isMergeableObject(source[key])?destination[key]=function getMergeFunction(key,options){if(!options.customMerge)return deepmerge;var customMerge=options.customMerge(key);return"function"==typeof customMerge?customMerge:deepmerge}(key,options)(target[key],source[key],options):destination[key]=cloneUnlessOtherwiseSpecified(source[key],options))})),destination}function deepmerge(target,source,options){(options=options||{}).arrayMerge=options.arrayMerge||defaultArrayMerge,options.isMergeableObject=options.isMergeableObject||isMergeableObject,options.cloneUnlessOtherwiseSpecified=cloneUnlessOtherwiseSpecified;var sourceIsArray=Array.isArray(source);return sourceIsArray===Array.isArray(target)?sourceIsArray?options.arrayMerge(target,source,options):mergeObject(target,source,options):cloneUnlessOtherwiseSpecified(source,options)}deepmerge.all=function deepmergeAll(array,options){if(!Array.isArray(array))throw new Error("first argument should be an array");return array.reduce((function(prev,next){return deepmerge(prev,next,options)}),{})};var deepmerge_1=deepmerge;module.exports=deepmerge_1},"./node_modules/fast-deep-equal/es6/index.js":module=>{module.exports=function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(a instanceof Map&&b instanceof Map){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;for(i of a.entries())if(!equal(i[1],b.get(i[0])))return!1;return!0}if(a instanceof Set&&b instanceof Set){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(a[i]!==b[i])return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){var key=keys[i];if(!equal(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}},"./packages/block-editor/src/components/block-draggable/stories/index.story.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_default:()=>_default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _draggable_chip__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/block-editor/src/components/block-draggable/draggable-chip.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"BlockEditor/BlockDraggable",parameters:{sourceLink:"packages/block-editor/src/components/block-draggable",badges:[]}},_default=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{margin:"24px 0",position:"relative"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_draggable_chip__WEBPACK_IMPORTED_MODULE_1__.Z,{count:2})});_default.displayName="_default",_default.parameters={..._default.parameters,docs:{..._default.parameters?.docs,source:{originalSource:"() => {\n  // Create a wrapper box for the absolutely-positioned child component.\n  const wrapperStyle = {\n    margin: '24px 0',\n    position: 'relative'\n  };\n  return <div style={wrapperStyle}>\n            <BlockDraggableChip count={2} />\n        </div>;\n}",..._default.parameters?.docs?.source}}}}}]);