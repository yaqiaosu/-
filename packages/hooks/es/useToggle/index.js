import{useState as t,useMemo as e,useCallback as o}from"react";function r(r=!1,f){const[n,s]=t(r),a=e(()=>void 0!==f?f:"boolean"==typeof r&&!r,[r,f]),i=o(()=>{s(t=>t===r?a:r)},[r,a]),c=o(t=>{s(t)},[]),g=o(()=>{s(r)},[r]),l=o(()=>{s(a)},[a]);return[n,e(()=>({toggle:i,set:c,setLeft:g,setRight:l}),[i,c,g,l])]}export{r as default};
//# sourceMappingURL=index.js.map
