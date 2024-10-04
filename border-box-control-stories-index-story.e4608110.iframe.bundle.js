"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[3953],{"./packages/icons/build-module/library/link-off.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M17.031 4.703 15.576 4l-1.56 3H14v.03l-2.324 4.47H9.5V13h1.396l-1.502 2.889h-.95a3.694 3.694 0 0 1 0-7.389H10V7H8.444a5.194 5.194 0 1 0 0 10.389h.17L7.5 19.53l1.416.719L15.049 8.5h.507a3.694 3.694 0 0 1 0 7.39H14v1.5h1.556a5.194 5.194 0 0 0 .273-10.383l1.202-2.304Z"})})},"./packages/icons/build-module/library/link.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})})},"./packages/components/src/grid/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>grid_component});var context_connect=__webpack_require__("./packages/components/src/context/context-connect.ts"),component=__webpack_require__("./packages/components/src/view/component.tsx"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),use_context_system=__webpack_require__("./packages/components/src/context/use-context-system.js");const ALIGNMENTS={bottom:{alignItems:"flex-end",justifyContent:"center"},bottomLeft:{alignItems:"flex-start",justifyContent:"flex-end"},bottomRight:{alignItems:"flex-end",justifyContent:"flex-end"},center:{alignItems:"center",justifyContent:"center"},spaced:{alignItems:"center",justifyContent:"space-between"},left:{alignItems:"center",justifyContent:"flex-start"},right:{alignItems:"center",justifyContent:"flex-end"},stretch:{alignItems:"stretch"},top:{alignItems:"flex-start",justifyContent:"center"},topLeft:{alignItems:"flex-start",justifyContent:"flex-start"},topRight:{alignItems:"flex-start",justifyContent:"flex-end"}};var use_responsive_value=__webpack_require__("./packages/components/src/utils/use-responsive-value.ts"),config_values=__webpack_require__("./packages/components/src/utils/config-values.js"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");function useGrid(props){const{align,alignment,className,columnGap,columns=2,gap=3,isInline=!1,justify,rowGap,rows,templateColumns,templateRows,...otherProps}=(0,use_context_system.y)(props,"Grid"),columnsAsArray=Array.isArray(columns)?columns:[columns],column=(0,use_responsive_value.V)(columnsAsArray),rowsAsArray=Array.isArray(rows)?rows:[rows],row=(0,use_responsive_value.V)(rowsAsArray),gridTemplateColumns=templateColumns||!!columns&&`repeat( ${column}, 1fr )`,gridTemplateRows=templateRows||!!rows&&`repeat( ${row}, 1fr )`,cx=(0,use_cx.I)();return{...otherProps,className:(0,react.useMemo)((()=>{const alignmentProps=function getAlignmentProps(alignment){return alignment?ALIGNMENTS[alignment]:{}}(alignment),gridClasses=(0,emotion_react_browser_esm.iv)({alignItems:align,display:isInline?"inline-grid":"grid",gap:`calc( ${config_values.Z.gridBase} * ${gap} )`,gridTemplateColumns:gridTemplateColumns||void 0,gridTemplateRows:gridTemplateRows||void 0,gridRowGap:rowGap,gridColumnGap:columnGap,justifyContent:justify,verticalAlign:isInline?"middle":void 0,...alignmentProps},"","");return cx(gridClasses,className)}),[align,alignment,className,columnGap,cx,gap,gridTemplateColumns,gridTemplateRows,isInline,justify,rowGap])}}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedGrid(props,forwardedRef){const gridProps=useGrid(props);return(0,jsx_runtime.jsx)(component.Z,{...gridProps,ref:forwardedRef})}UnconnectedGrid.displayName="UnconnectedGrid";const Grid=(0,context_connect.Iq)(UnconnectedGrid,"Grid"),grid_component=Grid;try{Grid.displayName="Grid",Grid.__docgenInfo={description:"`Grid` is a primitive layout component that can arrange content in a grid configuration.\n\n```jsx\nimport {\n\t__experimentalGrid as Grid,\n\t__experimentalText as Text\n} from `@wordpress/components`;\n\nfunction Example() {\n\treturn (\n\t\t<Grid columns={ 3 }>\n\t\t\t<Text>Code</Text>\n\t\t\t<Text>is</Text>\n\t\t\t<Text>Poetry</Text>\n\t\t</Grid>\n\t);\n}\n```",displayName:"Grid",props:{align:{defaultValue:null,description:"Adjusts the block alignment of children.",name:"align",required:!1,type:{name:"AlignItems"}},alignment:{defaultValue:null,description:"Adjusts the horizontal and vertical alignment of children.",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"stretch"'},{value:'"bottomLeft"'},{value:'"bottomRight"'},{value:'"topLeft"'},{value:'"topRight"'},{value:'"spaced"'}]}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},columns:{defaultValue:{value:"2"},description:"Adjusts the number of columns of the `Grid`.",name:"columns",required:!1,type:{name:"ResponsiveCSSValue<number>"}},columnGap:{defaultValue:null,description:"Adjusts the `grid-column-gap`.",name:"columnGap",required:!1,type:{name:"GridColumnGap<string | number>"}},gap:{defaultValue:{value:"3"},description:"Gap between each child.",name:"gap",required:!1,type:{name:"number"}},isInline:{defaultValue:null,description:"Changes the CSS display from `grid` to `inline-grid`.",name:"isInline",required:!1,type:{name:"boolean"}},justify:{defaultValue:null,description:"Adjusts the inline alignment of children.",name:"justify",required:!1,type:{name:"JustifyContent"}},rowGap:{defaultValue:null,description:"Adjusts the `grid-row-gap`.",name:"rowGap",required:!1,type:{name:"GridRowGap<string | number>"}},rows:{defaultValue:null,description:"Adjusts the number of rows of the `Grid`.",name:"rows",required:!1,type:{name:"ResponsiveCSSValue<number>"}},templateColumns:{defaultValue:null,description:"Adjusts the CSS grid `template-columns`.",name:"templateColumns",required:!1,type:{name:"GridTemplateColumns<string | number>"}},templateRows:{defaultValue:null,description:"Adjusts the CSS grid `template-rows`.",name:"templateRows",required:!1,type:{name:"GridTemplateRows<string | number>"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "select" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | ... 516 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/grid/component.tsx#Grid"]={docgenInfo:Grid.__docgenInfo,name:"Grid",path:"packages/components/src/grid/component.tsx#Grid"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/border-box-control/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>index_story});var react=__webpack_require__("./node_modules/react/index.js"),src_button=__webpack_require__("./packages/components/src/button/index.tsx"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),use_merge_refs=__webpack_require__("./packages/compose/build-module/hooks/use-merge-refs/index.js"),library_link=__webpack_require__("./packages/icons/build-module/library/link.js"),link_off=__webpack_require__("./packages/icons/build-module/library/link-off.js"),tooltip=__webpack_require__("./packages/components/src/tooltip/index.tsx"),component=__webpack_require__("./packages/components/src/view/component.tsx"),context_connect=__webpack_require__("./packages/components/src/context/context-connect.ts"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),rtl=__webpack_require__("./packages/components/src/utils/rtl.js"),colors_values=__webpack_require__("./packages/components/src/utils/colors-values.js"),config_values=__webpack_require__("./packages/components/src/utils/config-values.js");const borderBoxControl=(0,emotion_react_browser_esm.iv)("",""),wrapper={name:"bjn8wh",styles:"position:relative"},borderBoxStyleWithFallback=border=>{const{color=colors_values.D.gray[200],style="solid",width=config_values.Z.borderWidth}=border||{};return`${color} ${!!width&&"0"!==width||!!color?style||"solid":style} ${width!==config_values.Z.borderWidth?`clamp(1px, ${width}, 10px)`:width}`},centeredBorderControl={name:"1nwbfnf",styles:"grid-column:span 2;margin:0 auto"};var use_context_system=__webpack_require__("./packages/components/src/context/use-context-system.js"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");function useBorderBoxControlLinkedButton(props){const{className,size="default",...otherProps}=(0,use_context_system.y)(props,"BorderBoxControlLinkedButton"),cx=(0,use_cx.I)();return{...otherProps,className:(0,react.useMemo)((()=>cx((size=>(0,emotion_react_browser_esm.iv)("position:absolute;top:","__unstable-large"===size?"8px":"3px",";",(0,rtl.b)({right:0})()," line-height:0;",""))(size),className)),[className,cx,size])}}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BorderBoxControlLinkedButton=(props,forwardedRef)=>{const{className,isLinked,...buttonProps}=useBorderBoxControlLinkedButton(props),label=isLinked?(0,build_module.__)("Unlink sides"):(0,build_module.__)("Link sides");return(0,jsx_runtime.jsx)(tooltip.ZP,{text:label,children:(0,jsx_runtime.jsx)(component.Z,{className,children:(0,jsx_runtime.jsx)(src_button.ZP,{...buttonProps,size:"small",icon:isLinked?library_link.Z:link_off.Z,iconSize:24,"aria-label":label,ref:forwardedRef})})})};BorderBoxControlLinkedButton.displayName="BorderBoxControlLinkedButton";const border_box_control_linked_button_component=(0,context_connect.Iq)(BorderBoxControlLinkedButton,"BorderBoxControlLinkedButton");function useBorderBoxControlVisualizer(props){const{className,value,size="default",...otherProps}=(0,use_context_system.y)(props,"BorderBoxControlVisualizer"),cx=(0,use_cx.I)();return{...otherProps,className:(0,react.useMemo)((()=>cx(((borders,size)=>(0,emotion_react_browser_esm.iv)("position:absolute;top:","__unstable-large"===size?"20px":"15px",";right:","__unstable-large"===size?"39px":"29px",";bottom:","__unstable-large"===size?"20px":"15px",";left:","__unstable-large"===size?"39px":"29px",";border-top:",borderBoxStyleWithFallback(borders?.top),";border-bottom:",borderBoxStyleWithFallback(borders?.bottom),";",(0,rtl.b)({borderLeft:borderBoxStyleWithFallback(borders?.left)})()," ",(0,rtl.b)({borderRight:borderBoxStyleWithFallback(borders?.right)})(),";",""))(value,size),className)),[cx,className,value,size]),value}}const BorderBoxControlVisualizer=(props,forwardedRef)=>{const{value,...otherProps}=useBorderBoxControlVisualizer(props);return(0,jsx_runtime.jsx)(component.Z,{...otherProps,ref:forwardedRef})};BorderBoxControlVisualizer.displayName="BorderBoxControlVisualizer";const border_box_control_visualizer_component=(0,context_connect.Iq)(BorderBoxControlVisualizer,"BorderBoxControlVisualizer");var border_control_component=__webpack_require__("./packages/components/src/border-control/border-control/component.tsx"),grid_component=__webpack_require__("./packages/components/src/grid/component.tsx");function useBorderBoxControlSplitControls(props){const{className,colors=[],enableAlpha=!1,enableStyle=!0,size="default",__experimentalIsRenderedInSidebar=!1,...otherProps}=(0,use_context_system.y)(props,"BorderBoxControlSplitControls"),cx=(0,use_cx.I)(),classes=(0,react.useMemo)((()=>cx((size=>(0,emotion_react_browser_esm.iv)("position:relative;flex:1;width:","__unstable-large"===size?void 0:"80%",";",""))(size),className)),[cx,className,size]);return{...otherProps,centeredClassName:(0,react.useMemo)((()=>cx(centeredBorderControl,className)),[cx,className]),className:classes,colors,enableAlpha,enableStyle,rightAlignedClassName:(0,react.useMemo)((()=>cx((0,emotion_react_browser_esm.iv)((0,rtl.b)({marginLeft:"auto"})(),";",""),className)),[cx,className]),size,__experimentalIsRenderedInSidebar}}const BorderBoxControlSplitControls=(props,forwardedRef)=>{const{centeredClassName,colors,disableCustomColors,enableAlpha,enableStyle,onChange,popoverPlacement,popoverOffset,rightAlignedClassName,size="default",value,__experimentalIsRenderedInSidebar,...otherProps}=useBorderBoxControlSplitControls(props),[popoverAnchor,setPopoverAnchor]=(0,react.useState)(null),popoverProps=(0,react.useMemo)((()=>popoverPlacement?{placement:popoverPlacement,offset:popoverOffset,anchor:popoverAnchor,shift:!0}:void 0),[popoverPlacement,popoverOffset,popoverAnchor]),sharedBorderControlProps={colors,disableCustomColors,enableAlpha,enableStyle,isCompact:!0,__experimentalIsRenderedInSidebar,size},mergedRef=(0,use_merge_refs.Z)([setPopoverAnchor,forwardedRef]);return(0,jsx_runtime.jsxs)(grid_component.Z,{...otherProps,ref:mergedRef,gap:4,children:[(0,jsx_runtime.jsx)(border_box_control_visualizer_component,{value,size}),(0,jsx_runtime.jsx)(border_control_component.Z,{className:centeredClassName,hideLabelFromVision:!0,label:(0,build_module.__)("Top border"),onChange:newBorder=>onChange(newBorder,"top"),__unstablePopoverProps:popoverProps,value:value?.top,...sharedBorderControlProps}),(0,jsx_runtime.jsx)(border_control_component.Z,{hideLabelFromVision:!0,label:(0,build_module.__)("Left border"),onChange:newBorder=>onChange(newBorder,"left"),__unstablePopoverProps:popoverProps,value:value?.left,...sharedBorderControlProps}),(0,jsx_runtime.jsx)(border_control_component.Z,{className:rightAlignedClassName,hideLabelFromVision:!0,label:(0,build_module.__)("Right border"),onChange:newBorder=>onChange(newBorder,"right"),__unstablePopoverProps:popoverProps,value:value?.right,...sharedBorderControlProps}),(0,jsx_runtime.jsx)(border_control_component.Z,{className:centeredClassName,hideLabelFromVision:!0,label:(0,build_module.__)("Bottom border"),onChange:newBorder=>onChange(newBorder,"bottom"),__unstablePopoverProps:popoverProps,value:value?.bottom,...sharedBorderControlProps})]})};BorderBoxControlSplitControls.displayName="BorderBoxControlSplitControls";const border_box_control_split_controls_component=(0,context_connect.Iq)(BorderBoxControlSplitControls,"BorderBoxControlSplitControls");var base_control_styles=__webpack_require__("./packages/components/src/base-control/styles/base-control-styles.ts"),visually_hidden_component=__webpack_require__("./packages/components/src/visually-hidden/component.tsx");const UNITED_VALUE_REGEX=/^([\d.\-+]*)\s*(fr|cm|mm|Q|in|pc|pt|px|em|ex|ch|rem|lh|vw|vh|vmin|vmax|%|cap|ic|rlh|vi|vb|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx|svw|lvw|dvw|svh|lvh|dvh|svi|lvi|dvi|svb|lvb|dvb|svmin|lvmin|dvmin|svmax|lvmax|dvmax)?$/;const sides=["top","right","bottom","left"],borderProps=["color","style","width"],isEmptyBorder=border=>!border||!borderProps.some((prop=>void 0!==border[prop])),hasSplitBorders=(border={})=>Object.keys(border).some((side=>-1!==sides.indexOf(side))),hasMixedBorders=borders=>{if(!hasSplitBorders(borders))return!1;const shorthandBorders=sides.map((side=>getShorthandBorderStyle(borders?.[side])));return!shorthandBorders.every((border=>border===shorthandBorders[0]))},getShorthandBorderStyle=(border,fallbackBorder)=>{if(isEmptyBorder(border))return fallbackBorder;const{color:fallbackColor,style:fallbackStyle,width:fallbackWidth}=fallbackBorder||{},{color=fallbackColor,style=fallbackStyle,width=fallbackWidth}=border;return[width,!!width&&"0"!==width||!!color?style||"solid":style,color].filter(Boolean).join(" ")},getMostCommonUnit=values=>function mode(values){if(0===values.length)return;const map={};let currentMode,maxCount=0;return values.forEach((value=>{map[value]=void 0===map[value]?1:map[value]+1,map[value]>maxCount&&(currentMode=value,maxCount=map[value])})),currentMode}(values.map((value=>void 0===value?void 0:function parseCSSUnitValue(toParse){const matched=toParse.trim().match(UNITED_VALUE_REGEX);if(!matched)return[void 0,void 0];const[,num,unit]=matched;let numParsed=parseFloat(num);return numParsed=Number.isNaN(numParsed)?void 0:numParsed,[numParsed,unit]}(`${value}`)[1])).filter((value=>void 0!==value)));function useBorderBoxControl(props){const{className,colors=[],onChange,enableAlpha=!1,enableStyle=!0,size="default",value,__experimentalIsRenderedInSidebar=!1,__next40pxDefaultSize,...otherProps}=(0,use_context_system.y)(props,"BorderBoxControl"),computedSize="default"===size&&__next40pxDefaultSize?"__unstable-large":size,mixedBorders=hasMixedBorders(value),splitBorders=hasSplitBorders(value),linkedValue=splitBorders?(borders=>{if(!borders)return;const colors=[],styles=[],widths=[];sides.forEach((side=>{colors.push(borders[side]?.color),styles.push(borders[side]?.style),widths.push(borders[side]?.width)}));const allColorsMatch=colors.every((value=>value===colors[0])),allStylesMatch=styles.every((value=>value===styles[0])),allWidthsMatch=widths.every((value=>value===widths[0]));return{color:allColorsMatch?colors[0]:void 0,style:allStylesMatch?styles[0]:void 0,width:allWidthsMatch?widths[0]:getMostCommonUnit(widths)}})(value):value,splitValue=splitBorders?value:(border=>{if(border&&!isEmptyBorder(border))return{top:border,right:border,bottom:border,left:border}})(value),hasWidthValue=!isNaN(parseFloat(`${linkedValue?.width}`)),[isLinked,setIsLinked]=(0,react.useState)(!mixedBorders),cx=(0,use_cx.I)(),classes=(0,react.useMemo)((()=>cx(borderBoxControl,className)),[cx,className]),linkedControlClassName=(0,react.useMemo)((()=>cx((0,emotion_react_browser_esm.iv)("flex:1;",(0,rtl.b)({marginRight:"24px"})(),";",""))),[cx]),wrapperClassName=(0,react.useMemo)((()=>cx(wrapper)),[cx]);return{...otherProps,className:classes,colors,disableUnits:mixedBorders&&!hasWidthValue,enableAlpha,enableStyle,hasMixedBorders:mixedBorders,isLinked,linkedControlClassName,onLinkedChange:newBorder=>{if(!newBorder)return onChange(void 0);if(!mixedBorders||(border=newBorder)&&borderProps.every((prop=>void 0!==border[prop])))return onChange(isEmptyBorder(newBorder)?void 0:newBorder);var border;const changes=((original,updated)=>{const diff={};return original.color!==updated.color&&(diff.color=updated.color),original.style!==updated.style&&(diff.style=updated.style),original.width!==updated.width&&(diff.width=updated.width),diff})(linkedValue,newBorder),updatedBorders={top:{...value?.top,...changes},right:{...value?.right,...changes},bottom:{...value?.bottom,...changes},left:{...value?.left,...changes}};if(hasMixedBorders(updatedBorders))return onChange(updatedBorders);const filteredResult=isEmptyBorder(updatedBorders.top)?void 0:updatedBorders.top;onChange(filteredResult)},onSplitChange:(newBorder,side)=>{const updatedBorders={...splitValue,[side]:newBorder};hasMixedBorders(updatedBorders)?onChange(updatedBorders):onChange(newBorder)},toggleLinked:()=>setIsLinked(!isLinked),linkedValue,size:computedSize,splitValue,wrapperClassName,__experimentalIsRenderedInSidebar}}const BorderLabel=props=>{const{label,hideLabelFromVision}=props;return label?hideLabelFromVision?(0,jsx_runtime.jsx)(visually_hidden_component.Z,{as:"label",children:label}):(0,jsx_runtime.jsx)(base_control_styles.ar,{children:label}):null},UnconnectedBorderBoxControl=(props,forwardedRef)=>{const{className,colors,disableCustomColors,disableUnits,enableAlpha,enableStyle,hasMixedBorders,hideLabelFromVision,isLinked,label,linkedControlClassName,linkedValue,onLinkedChange,onSplitChange,popoverPlacement,popoverOffset,size,splitValue,toggleLinked,wrapperClassName,__experimentalIsRenderedInSidebar,...otherProps}=useBorderBoxControl(props),[popoverAnchor,setPopoverAnchor]=(0,react.useState)(null),popoverProps=(0,react.useMemo)((()=>popoverPlacement?{placement:popoverPlacement,offset:popoverOffset,anchor:popoverAnchor,shift:!0}:void 0),[popoverPlacement,popoverOffset,popoverAnchor]),mergedRef=(0,use_merge_refs.Z)([setPopoverAnchor,forwardedRef]);return(0,jsx_runtime.jsxs)(component.Z,{className,...otherProps,ref:mergedRef,children:[(0,jsx_runtime.jsx)(BorderLabel,{label,hideLabelFromVision}),(0,jsx_runtime.jsxs)(component.Z,{className:wrapperClassName,children:[isLinked?(0,jsx_runtime.jsx)(border_control_component.Z,{className:linkedControlClassName,colors,disableUnits,disableCustomColors,enableAlpha,enableStyle,onChange:onLinkedChange,placeholder:hasMixedBorders?(0,build_module.__)("Mixed"):void 0,__unstablePopoverProps:popoverProps,shouldSanitizeBorder:!1,value:linkedValue,withSlider:!0,width:"__unstable-large"===size?"116px":"110px",__experimentalIsRenderedInSidebar,size}):(0,jsx_runtime.jsx)(border_box_control_split_controls_component,{colors,disableCustomColors,enableAlpha,enableStyle,onChange:onSplitChange,popoverPlacement,popoverOffset,value:splitValue,__experimentalIsRenderedInSidebar,size}),(0,jsx_runtime.jsx)(border_box_control_linked_button_component,{onClick:toggleLinked,isLinked,size})]})]})};UnconnectedBorderBoxControl.displayName="UnconnectedBorderBoxControl";const BorderBoxControl=(0,context_connect.Iq)(UnconnectedBorderBoxControl,"BorderBoxControl"),border_box_control_component=BorderBoxControl;try{BorderBoxControl.displayName="BorderBoxControl",BorderBoxControl.__docgenInfo={description:"An input control for the color, style, and width of the border of a box. The\nborder can be customized as a whole, or individually for each side of the box.\n\n```jsx\nimport { BorderBoxControl } from '@wordpress/components';\nimport { __ } from '@wordpress/i18n';\n\nconst colors = [\n\t{ name: 'Blue 20', color: '#72aee6' },\n\t// ...\n];\n\nconst MyBorderBoxControl = () => {\n\tconst defaultBorder = {\n\t\tcolor: '#72aee6',\n\t\tstyle: 'dashed',\n\t\twidth: '1px',\n\t};\n\tconst [ borders, setBorders ] = useState( {\n\t\ttop: defaultBorder,\n\t\tright: defaultBorder,\n\t\tbottom: defaultBorder,\n\t\tleft: defaultBorder,\n\t} );\n\tconst onChange = ( newBorders ) => setBorders( newBorders );\n\n\treturn (\n\t\t<BorderBoxControl\n\t\t\tcolors={ colors }\n\t\t\tlabel={ __( 'Borders' ) }\n\t\t\tonChange={ onChange }\n\t\t\tvalue={ borders }\n\t\t/>\n\t);\n};\n```",displayName:"BorderBoxControl",props:{colors:{defaultValue:{value:"[]"},description:"Array with the colors to be shown. When displaying multiple color palettes\nto choose from, the format of the array changes from an array of colors\nobjects, to an array of color palettes.",name:"colors",required:!1,type:{name:"PaletteObject[] | ColorObject[]"}},__experimentalIsRenderedInSidebar:{defaultValue:{value:"false"},description:"Whether this is rendered in the sidebar.",name:"__experimentalIsRenderedInSidebar",required:!1,type:{name:"boolean"}},disableCustomColors:{defaultValue:null,description:"This toggles the ability to choose custom colors.",name:"disableCustomColors",required:!1,type:{name:"boolean"}},enableAlpha:{defaultValue:{value:"true"},description:"This controls whether the alpha channel will be offered when selecting\ncustom colors.",name:"enableAlpha",required:!1,type:{name:"boolean"}},hideLabelFromVision:{defaultValue:null,description:"Provides control over whether the label will only be visible to\nscreen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"If provided, a label will be generated using this as the content.",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"'default'"},description:"Size of the control.",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"__unstable-large"'}]}},enableStyle:{defaultValue:{value:"true"},description:"This controls whether to support border style selection.",name:"enableStyle",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:'A callback function invoked when any border value is changed. The value\nreceived may be a "flat" border object, one that has properties defining\nindividual side borders, or `undefined`.',name:"onChange",required:!0,type:{name:"(value: AnyBorder) => void"}},popoverPlacement:{defaultValue:null,description:"The position of the color popovers compared to the control wrapper.",name:"popoverPlacement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"left-end"'},{value:'"left-start"'},{value:'"right-end"'},{value:'"right-start"'},{value:'"top-end"'},{value:'"top-start"'},{value:'"bottom-end"'},{value:'"bottom-start"'},{value:'"overlay"'}]}},popoverOffset:{defaultValue:null,description:"The space between the popover and the control wrapper.",name:"popoverOffset",required:!1,type:{name:"number"}},value:{defaultValue:null,description:'An object representing the current border configuration.\n\nThis may be a "flat" border where the object has `color`, `style`, and\n`width` properties or a "split" border which defines the previous\nproperties but for each side; `top`, `right`, `bottom`, and `left`.',name:"value",required:!0,type:{name:"AnyBorder"}},__next40pxDefaultSize:{defaultValue:{value:"false"},description:"Start opting into the larger default height that will become the default size in a future version.",name:"__next40pxDefaultSize",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/border-box-control/border-box-control/component.tsx#BorderBoxControl"]={docgenInfo:BorderBoxControl.__docgenInfo,name:"BorderBoxControl",path:"packages/components/src/border-box-control/border-box-control/component.tsx#BorderBoxControl"})}catch(__react_docgen_typescript_loader_error){}const index_story={title:"Components/BorderBoxControl",component:border_box_control_component,argTypes:{onChange:{action:"onChange"},value:{control:{type:null}}},parameters:{sourceLink:"packages/components/src/border-box-control",badges:[],controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},Default=(props=>{const{onChange,...otherProps}=props,[borders,setBorders]=(0,react.useState)(),onChangeMerged=newBorders=>{setBorders(newBorders),onChange(newBorders)};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(border_box_control_component,{...otherProps,onChange:onChangeMerged,value:borders}),(0,jsx_runtime.jsx)("hr",{style:{marginTop:"100px",borderColor:"#ddd",borderStyle:"solid",borderBottom:"none"}}),(0,jsx_runtime.jsx)("p",{style:{color:"#aaa",fontSize:"0.9em"},children:"The BorderBoxControl is intended to be used within a component that will provide reset controls. The button below is only for convenience."}),(0,jsx_runtime.jsx)(src_button.ZP,{variant:"primary",onClick:()=>onChangeMerged(void 0),children:"Reset"})]})}).bind({});Default.args={colors:[{name:"Blue 20",color:"#72aee6"},{name:"Blue 40",color:"#3582c4"},{name:"Red 40",color:"#e65054"},{name:"Red 70",color:"#8a2424"},{name:"Yellow 10",color:"#f2d675"},{name:"Yellow 40",color:"#bd8600"}],label:"Borders",enableStyle:!0},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"props => {\n  const {\n    onChange,\n    ...otherProps\n  } = props;\n  const [borders, setBorders] = useState<(typeof props)['value']>();\n  const onChangeMerged: ComponentProps<typeof BorderBoxControl>['onChange'] = newBorders => {\n    setBorders(newBorders);\n    onChange(newBorders);\n  };\n  return <>\n            <BorderBoxControl {...otherProps} onChange={onChangeMerged} value={borders} />\n            <hr style={{\n      marginTop: '100px',\n      borderColor: '#ddd',\n      borderStyle: 'solid',\n      borderBottom: 'none'\n    }} />\n            <p style={{\n      color: '#aaa',\n      fontSize: '0.9em'\n    }}>\n                The BorderBoxControl is intended to be used within a component\n                that will provide reset controls. The button below is only for\n                convenience.\n            </p>\n            <Button variant=\"primary\" onClick={() => onChangeMerged(undefined)}>\n                Reset\n            </Button>\n        </>;\n}",...Default.parameters?.docs?.source}}}}}]);