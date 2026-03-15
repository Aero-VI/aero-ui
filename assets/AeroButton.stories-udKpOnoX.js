import{s as e}from"./iframe-BNBClhDV.js";import{t}from"./react-MN4UAHB-.js";import{t as n}from"./jsx-runtime-CgbeOjk4.js";import"./useForkRef-BdHdntxE.js";import{n as r,t as i}from"./IconButton-CKcp_-gQ.js";import{t as a}from"./Button-SMy_W3JX.js";e(t(),1);var o=n(),s={sm:`small`,md:`medium`,lg:`large`};function c({variant:e=`primary`,size:t=`md`,loading:n=!1,disabled:c=!1,onClick:l,children:u,startIcon:d,endIcon:f,fullWidth:p=!1,type:m=`button`,className:h,ariaLabel:g}){let _=s[t],v=c||n;if(e===`icon`)return(0,o.jsx)(i,{onClick:l,disabled:v,size:_,className:h,"aria-label":g,type:m,children:n?(0,o.jsx)(r,{size:16,sx:{color:`#9aa0a6`}}):u});let{muiVariant:y,sx:b}={primary:{muiVariant:`contained`,sx:{backgroundColor:`#1a73e8`,color:`#ffffff`,borderRadius:`18px`,textTransform:`none`,fontFamily:`'Google Sans', Roboto, sans-serif`,fontWeight:500,"&:hover":{backgroundColor:`#1765cc`},"&:disabled":{backgroundColor:`rgba(26,115,232,0.4)`,color:`rgba(255,255,255,0.6)`}}},secondary:{muiVariant:`outlined`,sx:{borderColor:`#1a73e8`,color:`#1a73e8`,borderRadius:`18px`,textTransform:`none`,fontFamily:`'Google Sans', Roboto, sans-serif`,fontWeight:500,"&:hover":{borderColor:`#1765cc`,backgroundColor:`rgba(26,115,232,0.04)`}}},text:{muiVariant:`text`,sx:{color:`#8ab4f8`,borderRadius:`18px`,textTransform:`none`,fontFamily:`'Google Sans', Roboto, sans-serif`,fontWeight:500,background:`none`,"&:hover":{backgroundColor:`rgba(138,180,248,0.08)`}}}}[e];return(0,o.jsx)(a,{variant:y,size:_,disabled:v,onClick:l,startIcon:!n&&d?d:void 0,endIcon:!n&&f?f:void 0,fullWidth:p,type:m,className:h,"aria-label":g,sx:b,children:n?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{size:16,sx:{color:`inherit`,mr:u?1:0}}),u]}):u})}c.__docgenInfo={description:``,methods:[],displayName:`AeroButton`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'text' | 'icon'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'text'`},{name:`literal`,value:`'icon'`}]},description:`Visual style variant`,defaultValue:{value:`'primary'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`Size preset`,defaultValue:{value:`'md'`,computed:!1}},loading:{required:!1,tsType:{name:`boolean`},description:`Shows a circular spinner and disables interaction`,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Disables the button`,defaultValue:{value:`false`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: MouseEvent<HTMLButtonElement>) => void`,signature:{arguments:[{type:{name:`MouseEvent`,elements:[{name:`HTMLButtonElement`}],raw:`MouseEvent<HTMLButtonElement>`},name:`event`}],return:{name:`void`}}},description:`Click handler`},children:{required:!1,tsType:{name:`ReactNode`},description:`Button label / content`},startIcon:{required:!1,tsType:{name:`ReactNode`},description:`Optional leading icon (React element, e.g. <EditOutlined />)`},endIcon:{required:!1,tsType:{name:`ReactNode`},description:`Optional trailing icon`},fullWidth:{required:!1,tsType:{name:`boolean`},description:`Full width (100%) — used for Sign In button in login form`,defaultValue:{value:`false`,computed:!1}},type:{required:!1,tsType:{name:`union`,raw:`'button' | 'submit' | 'reset'`,elements:[{name:`literal`,value:`'button'`},{name:`literal`,value:`'submit'`},{name:`literal`,value:`'reset'`}]},description:`HTML button type attribute`,defaultValue:{value:`'button'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class name`},ariaLabel:{required:!1,tsType:{name:`string`},description:`aria-label for accessibility`}}};var l={component:c,title:`Primitives/AeroButton`},u={args:{variant:`primary`,children:`Send`}},d={args:{variant:`secondary`,children:`Cancel`}},f={args:{variant:`text`,children:`Learn more`}},p={args:{variant:`primary`,loading:!0,children:`Sending...`}},m={args:{variant:`primary`,disabled:!0,children:`Disabled`}},h={args:{variant:`primary`,fullWidth:!0,children:`Full Width Button`}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Send'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Cancel'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    children: 'Learn more'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    loading: true,
    children: 'Sending...'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    fullWidth: true,
    children: 'Full Width Button'
  }
}`,...h.parameters?.docs?.source}}};var g=[`Primary`,`Secondary`,`Text`,`Loading`,`Disabled`,`FullWidth`];export{m as Disabled,h as FullWidth,p as Loading,u as Primary,d as Secondary,f as Text,g as __namedExportsOrder,l as default};