"use strict";(self.webpackChunkgraphify_chart=self.webpackChunkgraphify_chart||[]).push([["472"],{1922:function(e,n,t){t.r(n),t.d(n,{default:()=>d});var r=t(5893),c=t(65),s=t(7294),a=t(459);let i=function(){let e=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let n=new a.Stage(e.current),t=new a.Rect(n,{x:0,y:0}),r=new a.Rect(n,{x:50,y:50,fillStyle:"green"}),c=new a.Rect(n,{x:100,y:100,fillStyle:"pink"}),s=new a.Group(n,{draggable:!0});s.appendChild(r,c),n.appendChild(t,s)},[]),(0,r.jsx)("div",{ref:e,style:{height:500}})};var l=t(92);function p(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre"},(0,c.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"group分组",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#group分组",children:"#"}),"Group分组"]}),"\n",(0,r.jsxs)(n.p,{children:["在",(0,r.jsx)(n.code,{children:"graphify-chart"}),"的定义中，",(0,r.jsx)(n.code,{children:"Stage"}),"中的节点都是扁平化的，所有的节点都是兄弟节点。但有些时候我们需要对某些元素进行统一处理，所以我们引入了",(0,r.jsx)(n.code,{children:"Group"}),"分组的概念。"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Group"}),"可以把所有的子节点当作一个整体操作。例如下面的例子，我们把绿色和粉色的矩形放进",(0,r.jsx)(n.code,{children:"Group"}),"里，当我们对分组进行拖拽时，分组里的子节点也会跟着一起移动。\n示例如下："]}),"\n",(0,r.jsxs)(l.Z,{isMobile:"false",demoId:"_design_group_1",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",meta:"preview",children:"import {useEffect,useState,useRef} from 'react';\nimport {Stage,Rect,Group} from 'graphify-chart';\nfunction App() {\n  const chartRef = useRef(null);\n  useEffect(() => {\n    const stage = new Stage(chartRef.current);\n    const rect = new Rect(stage,{x:0,y:0});\n    const rect2 = new Rect(stage,{x:50,y:50,fillStyle:'green'});\n    const rect3 = new Rect(stage,{x:100,y:100,fillStyle:'pink'});\n    const group = new Group(stage,{draggable:true})\n    group.appendChild(rect2,rect3)\n    stage.appendChild(rect,group)\n  },[])\n  \n  return ( <div ref={chartRef} style={{height:500}} ></div>)\n}\nexport default App;\n"})}),(0,r.jsx)(i,{})]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(p,e)})):p(e)}let d=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["design%2Fgroup.mdx"]={toc:[],title:"Group分组",headingTitle:"Group分组",frontmatter:{}}}}]);