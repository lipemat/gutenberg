"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[4836],{"./packages/compose/build-module/hooks/use-drop-zone/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useDropZone});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_ref_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/compose/build-module/hooks/use-ref-effect/index.js");function useFreshRef(value){const ref=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();return ref.current=value,ref}function useDropZone({dropZoneElement,isDisabled,onDrop:_onDrop,onDragStart:_onDragStart,onDragEnter:_onDragEnter,onDragLeave:_onDragLeave,onDragEnd:_onDragEnd,onDragOver:_onDragOver}){const onDropRef=useFreshRef(_onDrop),onDragStartRef=useFreshRef(_onDragStart),onDragEnterRef=useFreshRef(_onDragEnter),onDragLeaveRef=useFreshRef(_onDragLeave),onDragEndRef=useFreshRef(_onDragEnd),onDragOverRef=useFreshRef(_onDragOver);return(0,_use_ref_effect__WEBPACK_IMPORTED_MODULE_1__.Z)((elem=>{if(isDisabled)return;const element=null!=dropZoneElement?dropZoneElement:elem;let isDragging=!1;const{ownerDocument}=element;function maybeDragStart(event){isDragging||(isDragging=!0,ownerDocument.addEventListener("dragend",maybeDragEnd),ownerDocument.addEventListener("mousemove",maybeDragEnd),onDragStartRef.current&&onDragStartRef.current(event))}function onDragEnter(event){event.preventDefault(),element.contains(event.relatedTarget)||onDragEnterRef.current&&onDragEnterRef.current(event)}function onDragOver(event){!event.defaultPrevented&&onDragOverRef.current&&onDragOverRef.current(event),event.preventDefault()}function onDragLeave(event){(function isElementInZone(targetToCheck){const{defaultView}=ownerDocument;if(!(targetToCheck&&defaultView&&targetToCheck instanceof defaultView.HTMLElement&&element.contains(targetToCheck)))return!1;let elementToCheck=targetToCheck;do{if(elementToCheck.dataset.isDropZone)return elementToCheck===element}while(elementToCheck=elementToCheck.parentElement);return!1})(event.relatedTarget)||onDragLeaveRef.current&&onDragLeaveRef.current(event)}function onDrop(event){event.defaultPrevented||(event.preventDefault(),event.dataTransfer&&event.dataTransfer.files.length,onDropRef.current&&onDropRef.current(event),maybeDragEnd(event))}function maybeDragEnd(event){isDragging&&(isDragging=!1,ownerDocument.removeEventListener("dragend",maybeDragEnd),ownerDocument.removeEventListener("mousemove",maybeDragEnd),onDragEndRef.current&&onDragEndRef.current(event))}return element.dataset.isDropZone="true",element.addEventListener("drop",onDrop),element.addEventListener("dragenter",onDragEnter),element.addEventListener("dragover",onDragOver),element.addEventListener("dragleave",onDragLeave),ownerDocument.addEventListener("dragenter",maybeDragStart),()=>{delete element.dataset.isDropZone,element.removeEventListener("drop",onDrop),element.removeEventListener("dragenter",onDragEnter),element.removeEventListener("dragover",onDragOver),element.removeEventListener("dragleave",onDragLeave),ownerDocument.removeEventListener("dragend",maybeDragEnd),ownerDocument.removeEventListener("mousemove",maybeDragEnd),ownerDocument.removeEventListener("dragenter",maybeDragStart)}}),[isDisabled,dropZoneElement])}},"./packages/compose/build-module/hooks/use-ref-effect/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useRefEffect});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useRefEffect(callback,dependencies){const cleanupRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node=>{node?cleanupRef.current=callback(node):cleanupRef.current&&cleanupRef.current()}),dependencies)}},"./packages/dom/build-module/data-transfer.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getFilesFromDataTransfer(dataTransfer){const files=Array.from(dataTransfer.files);return Array.from(dataTransfer.items).forEach((item=>{const file=item.getAsFile();file&&!files.find((({name,type,size})=>name===file.name&&type===file.type&&size===file.size))&&files.push(file)})),files}__webpack_require__.d(__webpack_exports__,{f:()=>getFilesFromDataTransfer})},"./packages/icons/build-module/icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function Icon({icon,size=24,...props},ref){return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon,{width:size,height:size,...props,ref})}))},"./packages/icons/build-module/library/upload.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z"})})},"./packages/primitives/build-module/svg/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cd:()=>Circle,G:()=>G,UL:()=>Rect,Wj:()=>SVG,x1:()=>Line,y$:()=>Path});var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_wordpress_element__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Circle=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("circle",props),G=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("g",props),Line=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("line",props),Path=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path",props),Rect=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect",props),SVG=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({className,isPressed,...props},ref)=>{const appliedProps={...props,className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)(className,{"is-pressed":isPressed})||void 0,"aria-hidden":!0,focusable:!1};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{...appliedProps,ref})}));SVG.displayName="SVG"},"./packages/components/src/drop-zone/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>index_story});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),react=__webpack_require__("./node_modules/react/index.js"),icon=__webpack_require__("./packages/icons/build-module/icon/index.js"),upload=__webpack_require__("./packages/icons/build-module/library/upload.js"),data_transfer=__webpack_require__("./packages/dom/build-module/data-transfer.js"),use_drop_zone=__webpack_require__("./packages/compose/build-module/hooks/use-drop-zone/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function DropZoneComponent({className,label,onFilesDrop,onHTMLDrop,onDrop,...restProps}){const[isDraggingOverDocument,setIsDraggingOverDocument]=(0,react.useState)(),[isDraggingOverElement,setIsDraggingOverElement]=(0,react.useState)(),[type,setType]=(0,react.useState)(),ref=(0,use_drop_zone.Z)({onDrop(event){const files=event.dataTransfer?(0,data_transfer.f)(event.dataTransfer):[],html=event.dataTransfer?.getData("text/html");html&&onHTMLDrop?onHTMLDrop(html):files.length&&onFilesDrop?onFilesDrop(files):onDrop&&onDrop(event)},onDragStart(event){setIsDraggingOverDocument(!0);let _type="default";event.dataTransfer?.types.includes("text/html")?_type="html":(event.dataTransfer?.types.includes("Files")||(event.dataTransfer?(0,data_transfer.f)(event.dataTransfer):[]).length>0)&&(_type="file"),setType(_type)},onDragEnd(){setIsDraggingOverDocument(!1),setType(void 0)},onDragEnter(){setIsDraggingOverElement(!0)},onDragLeave(){setIsDraggingOverElement(!1)}}),classes=(0,clsx.Z)("components-drop-zone",className,{"is-active":(isDraggingOverDocument||isDraggingOverElement)&&("file"===type&&onFilesDrop||"html"===type&&onHTMLDrop||"default"===type&&onDrop),"has-dragged-out":!isDraggingOverElement,"is-dragging-over-document":isDraggingOverDocument,"is-dragging-over-element":isDraggingOverElement,[`is-dragging-${type}`]:!!type});return(0,jsx_runtime.jsx)("div",{...restProps,ref,className:classes,children:(0,jsx_runtime.jsx)("div",{className:"components-drop-zone__content",children:(0,jsx_runtime.jsxs)("div",{className:"components-drop-zone__content-inner",children:[(0,jsx_runtime.jsx)(icon.Z,{icon:upload.Z,className:"components-drop-zone__content-icon"}),(0,jsx_runtime.jsx)("span",{className:"components-drop-zone__content-text",children:label||(0,build_module.__)("Drop files to upload")})]})})})}DropZoneComponent.displayName="DropZoneComponent";const drop_zone=DropZoneComponent;try{DropZoneComponent.displayName="DropZoneComponent",DropZoneComponent.__docgenInfo={description:"`DropZone` is a component creating a drop zone area taking the full size of its parent element. It supports dropping files, HTML content or any other HTML drop event.\n\n```jsx\nimport { DropZone } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyDropZone = () => {\n  const [ hasDropped, setHasDropped ] = useState( false );\n\n  return (\n    <div>\n      { hasDropped ? 'Dropped!' : 'Drop something here' }\n      <DropZone\n        onFilesDrop={ () => setHasDropped( true ) }\n        onHTMLDrop={ () => setHasDropped( true ) }\n        onDrop={ () => setHasDropped( true ) }\n      />\n    </div>\n  );\n}\n```",displayName:"DropZoneComponent",props:{className:{defaultValue:null,description:"A CSS `class` to give to the wrapper element.",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:{value:"`__( 'Drop files to upload' )`"},description:"A string to be shown within the drop zone area.",name:"label",required:!1,type:{name:"string"}},onDrop:{defaultValue:null,description:"The function is generic drop handler called if the `onFilesDrop` or `onHTMLDrop` are not called.\nIt receives the drop `event` object as an argument.",name:"onDrop",required:!1,type:{name:"(event: DragEvent) => void"}},onFilesDrop:{defaultValue:null,description:"The function is called when dropping a file into the `DropZone`.\nIt receives an array of dropped files as an argument.",name:"onFilesDrop",required:!1,type:{name:"(files: File[]) => void"}},onHTMLDrop:{defaultValue:null,description:"The function is called when dropping HTML into the `DropZone`.\nIt receives the HTML being dropped as an argument.",name:"onHTMLDrop",required:!1,type:{name:"(html: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/drop-zone/index.tsx#DropZoneComponent"]={docgenInfo:DropZoneComponent.__docgenInfo,name:"DropZoneComponent",path:"packages/components/src/drop-zone/index.tsx#DropZoneComponent"})}catch(__react_docgen_typescript_loader_error){}const index_story={component:drop_zone,title:"Components/DropZone",parameters:{sourceLink:"packages/components/src/drop-zone",badges:[],actions:{argTypesRegex:"^on.*"},controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},Template=props=>(0,jsx_runtime.jsxs)("div",{style:{background:"lightgray",padding:16},children:["Drop something here",(0,jsx_runtime.jsx)(drop_zone,{...props})]});Template.displayName="Template";const Default=Template.bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"props => {\n  return <div style={{\n    background: 'lightgray',\n    padding: 16\n  }}>\n            Drop something here\n            <DropZone {...props} />\n        </div>;\n}",...Default.parameters?.docs?.source}}}}}]);