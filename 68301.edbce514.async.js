"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[68301],{368301:function($n,Q,e){e.r(Q);var sn=e(97857),v=e.n(sn),dn=e(168400),a=e.n(dn),un=e(667294),vn=e(605071),q=e(65630),$=e(693967),l=e.n($),nn=e(385956),E=e(785893),j,en,tn,fn=(0,q.kc)(function(N){var u=N.token,A=N.css,_=u.antCls;return{toc:A(j||(j=a()([`
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: 12px;
        }
      }
    `])),_,_),tocWrapper:A(en||(en=a()([`
      position: fixed;
      top: `,`px;
      inset-inline-end: 0;
      width: 160px;
      margin: 0 0 12px 0;
      padding: 8px 0;
      padding-inline: 4px 8px;
      backdrop-filter: blur(8px);
      border-radius: `,`px;
      box-sizing: border-box;
      z-index: 1000;

      .toc-debug {
        color: `,`;

        &:hover {
          color: `,`;
        }
      }

      > div {
        box-sizing: border-box;
        width: 100%;
        max-height: calc(100vh - 40px) !important;
        margin: 0 auto;
        overflow: auto;
        padding-inline: 4px;
      }

      @media only screen and (max-width: `,`px) {
        display: none;
      }
    `])),u.headerHeight+u.contentMarginTop,u.borderRadius,u.purple6,u.purple5,u.screenLG),articleWrapper:A(tn||(tn=a()([`
      padding: 0 170px 32px 64px;

      &.rtl {
        padding: 0 64px 144px 170px;
      }

      @media only screen and (max-width: `,`px) {
        &,
        &.rtl {
          padding: 0 48px;
        }
      }
    `])),u.screenLG)}}),hn=function(u){var A=u.showDebug,_=u.debugDemos,C=_===void 0?[]:_,gn=fn(),K=gn.styles,U=(0,q.Fg)(),W=(0,nn.useRouteMeta)(),T=(0,nn.useTabMeta)(),mn=function(f){var x;return{href:"#".concat(f.id),title:f.title,key:f.id,children:(x=f.children)===null||x===void 0?void 0:x.filter(function(S){return A||!C.includes(S.id)}).map(function(S){return{key:S.id,href:"#".concat(S.id),title:(0,E.jsx)("span",{className:l()(C.includes(S.id)&&"toc-debug"),children:S==null?void 0:S.title})}})}},pn=(0,un.useMemo)(function(){return((T==null?void 0:T.toc)||W.toc).reduce(function(B,f){if(f.depth===2)B.push(v()({},f));else if(f.depth===3){var x=B[B.length-1];x&&(x.children=x.children||[],x.children.push(v()({},f)))}return B},[])},[T==null?void 0:T.toc,W.toc]);return W.frontmatter.toc?(0,E.jsx)("section",{className:K.tocWrapper,children:(0,E.jsx)(vn.Z,{className:K.toc,affix:!1,targetOffset:U.anchorTop,showInkInFixed:!0,items:pn.map(mn)})}):null};Q.default=hn},605071:function($n,Q,e){e.d(Q,{Z:function(){return Xn}});var sn=e(97857),v=e.n(sn),dn=e(9783),a=e.n(dn),un=e(719632),vn=e.n(un),q=e(805574),$=e.n(q),l=e(667294),nn=e(693967),E=e.n(nn),j=e(656790),en=e(517423),tn=e(982673),fn=e(658192),hn=e(252901),N=e(73287),u=e(670544),A=l.createContext(void 0),_=A,C=e(785893),gn=function(n){var t=n.href,o=n.title,i=n.prefixCls,h=n.children,O=n.className,M=n.target,g=n.replace,z=l.useContext(_),m=z||{},P=m.registerLink,X=m.unregisterLink,H=m.scrollTo,Z=m.onClick,rn=m.activeLink,b=m.direction;l.useEffect(function(){return P==null||P(t),function(){X==null||X(t)}},[t]);var Cn=function(G){g&&(G.preventDefault(),window.location.replace(t)),Z==null||Z(G,{title:o,href:t}),H==null||H(t)};if(!1)var R;var an=l.useContext(N.E_),F=an.getPrefixCls,I=F("anchor",i),L=rn===t,xn=E()("".concat(I,"-link"),O,a()({},"".concat(I,"-link-active"),L)),An=E()("".concat(I,"-link-title"),a()({},"".concat(I,"-link-title-active"),L));return(0,C.jsxs)("div",{className:xn,children:[(0,C.jsx)("a",{className:An,href:t,title:typeof o=="string"?o:"",target:M,onClick:Cn,children:o}),b!=="horizontal"?h:null]})},K=gn,U=e(900210),W=e(548073),T=e(286665),mn=e(986943),pn=function(n){var t,o,i=n.componentCls,h=n.holderOffsetBlock,O=n.motionDurationSlow,M=n.lineWidthBold,g=n.colorPrimary,z=n.lineType,m=n.colorSplit,P=n.calc;return a()({},"".concat(i,"-wrapper"),(o={marginBlockStart:P(h).mul(-1).equal(),paddingBlockStart:h},a()(o,i,v()(v()({},(0,W.Wf)(n)),{},a()({position:"relative",paddingInlineStart:M},"".concat(i,"-link"),(t={paddingBlock:n.linkPaddingBlock,paddingInline:"".concat((0,U.unit)(n.linkPaddingInlineStart)," 0"),"&-title":v()(v()({},W.vS),{},{position:"relative",display:"block",marginBlockEnd:n.anchorTitleBlock,color:n.colorText,transition:"all ".concat(n.motionDurationSlow),"&:only-child":{marginBlockEnd:0}})},a()(t,"&-active > ".concat(i,"-link-title"),{color:n.colorPrimary}),a()(t,"".concat(i,"-link"),{paddingBlock:n.anchorPaddingBlockSecondary}),t)))),a()(o,"&:not(".concat(i,"-wrapper-horizontal)"),a()({},i,a()({"&::before":{position:"absolute",insetInlineStart:0,top:0,height:"100%",borderInlineStart:"".concat((0,U.unit)(M)," ").concat(z," ").concat(m),content:'" "'}},"".concat(i,"-ink"),a()({position:"absolute",insetInlineStart:0,display:"none",transform:"translateY(-50%)",transition:"top ".concat(O," ease-in-out"),width:M,backgroundColor:g},"&".concat(i,"-ink-visible"),{display:"inline-block"})))),a()(o,"".concat(i,"-fixed ").concat(i,"-ink ").concat(i,"-ink"),{display:"none"}),o))},B=function(n){var t,o=n.componentCls,i=n.motionDurationSlow,h=n.lineWidthBold,O=n.colorPrimary;return a()({},"".concat(o,"-wrapper-horizontal"),a()({position:"relative","&::before":{position:"absolute",left:{_skip_check_:!0,value:0},right:{_skip_check_:!0,value:0},bottom:0,borderBottom:"".concat((0,U.unit)(n.lineWidth)," ").concat(n.lineType," ").concat(n.colorSplit),content:'" "'}},o,(t={overflowX:"scroll",position:"relative",display:"flex",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},a()(t,"".concat(o,"-link:first-of-type"),{paddingInline:0}),a()(t,"".concat(o,"-ink"),{position:"absolute",bottom:0,transition:"left ".concat(i," ease-in-out, width ").concat(i," ease-in-out"),height:h,backgroundColor:O}),t)))},f=function(n){return{linkPaddingBlock:n.paddingXXS,linkPaddingInlineStart:n.padding}},x=(0,T.I$)("Anchor",function(d){var n=d.fontSize,t=d.fontSizeLG,o=d.paddingXXS,i=d.calc,h=(0,mn.TS)(d,{holderOffsetBlock:o,anchorPaddingBlockSecondary:i(o).div(2).equal(),anchorTitleBlock:i(n).div(14).mul(3).equal(),anchorBallSize:i(t).div(2).equal()});return[pn(h),B(h)]},f);function S(){return window}function bn(d,n){if(!d.getClientRects().length)return 0;var t=d.getBoundingClientRect();return t.width||t.height?n===window?(n=d.ownerDocument.documentElement,t.top-n.clientTop):t.top-n.getBoundingClientRect().top:t.top}var In=/#([\S ]+)$/,Kn=function(n){var t,o,i=n.rootClassName,h=n.prefixCls,O=n.className,M=n.style,g=n.offsetTop,z=n.affix,m=z===void 0?!0:z,P=n.showInkInFixed,X=P===void 0?!1:P,H=n.children,Z=n.items,rn=n.direction,b=rn===void 0?"vertical":rn,Cn=n.bounds,R=n.targetOffset,an=n.onClick,F=n.onChange,I=n.getContainer,L=n.getCurrentAnchor,xn=n.replace;if(!1)var An;var Bn=l.useState([]),G=$()(Bn,2),on=G[0],On=G[1],Hn=l.useState(null),Mn=$()(Hn,2),V=Mn[0],Zn=Mn[1],Sn=l.useRef(V),Rn=l.useRef(null),yn=l.useRef(null),En=l.useRef(!1),ln=l.useContext(N.E_),Fn=ln.direction,w=ln.anchor,Gn=ln.getTargetContainer,Vn=ln.getPrefixCls,y=Vn("anchor",h),jn=(0,u.Z)(y),Jn=x(y,jn),Ln=$()(Jn,3),Yn=Ln[0],Qn=Ln[1],qn=Ln[2],J=(t=I!=null?I:Gn)!==null&&t!==void 0?t:S,kn=JSON.stringify(on),ne=(0,j.zX)(function(r){on.includes(r)||On(function(c){return[].concat(vn()(c),[r])})}),ee=(0,j.zX)(function(r){on.includes(r)&&On(function(c){return c.filter(function(s){return s!==r})})}),te=function(){var c,s=(c=Rn.current)===null||c===void 0?void 0:c.querySelector(".".concat(y,"-link-title-active"));if(s&&yn.current){var k=yn.current.style,p=b==="horizontal";k.top=p?"":"".concat(s.offsetTop+s.clientHeight/2,"px"),k.height=p?"":"".concat(s.clientHeight,"px"),k.left=p?"".concat(s.offsetLeft,"px"):"",k.width=p?"".concat(s.clientWidth,"px"):"",p&&(0,en.Z)(s,{scrollMode:"if-needed",block:"nearest"})}},re=function(c){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,k=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5,p=[],Pn=J();if(c.forEach(function(D){var Y=In.exec(D==null?void 0:D.toString());if(Y){var zn=document.getElementById(Y[1]);if(zn){var wn=bn(zn,Pn);wn<s+k&&p.push({link:D,top:wn})}}}),p.length){var cn=p.reduce(function(D,Y){return Y.top>D.top?Y:D});return cn.link}return""},_n=(0,j.zX)(function(r){if(Sn.current!==r){var c=typeof L=="function"?L(r):r;Zn(c),Sn.current=c,F==null||F(r)}}),Tn=l.useCallback(function(){if(!En.current){var r=re(on,R!==void 0?R:g||0,Cn);_n(r)}},[kn,R,g]),Nn=l.useCallback(function(r){_n(r);var c=In.exec(r);if(c){var s=document.getElementById(c[1]);if(s){var k=J(),p=(0,tn.Z)(k,!0),Pn=bn(s,k),cn=p+Pn;cn-=R!==void 0?R:g||0,En.current=!0,(0,fn.Z)(cn,{getContainer:J,callback:function(){En.current=!1}})}}},[R,g]),ae=E()(Qn,qn,jn,i,"".concat(y,"-wrapper"),(o={},a()(o,"".concat(y,"-wrapper-horizontal"),b==="horizontal"),a()(o,"".concat(y,"-rtl"),Fn==="rtl"),o),O,w==null?void 0:w.className),oe=E()(y,a()({},"".concat(y,"-fixed"),!m&&!X)),ie=E()("".concat(y,"-ink"),a()({},"".concat(y,"-ink-visible"),V)),le=v()(v()({maxHeight:g?"calc(100vh - ".concat(g,"px)"):"100vh"},w==null?void 0:w.style),M),ce=function r(c){return Array.isArray(c)?c.map(function(s){return(0,l.createElement)(K,v()(v()({replace:xn},s),{},{key:s.key}),b==="vertical"&&r(s.children))}):null},Wn=(0,C.jsx)("div",{ref:Rn,className:ae,style:le,children:(0,C.jsxs)("div",{className:oe,children:[(0,C.jsx)("span",{className:ie,ref:yn}),"items"in n?ce(Z):H]})});l.useEffect(function(){var r=J();return Tn(),r==null||r.addEventListener("scroll",Tn),function(){r==null||r.removeEventListener("scroll",Tn)}},[kn]),l.useEffect(function(){typeof L=="function"&&_n(L(Sn.current||""))},[L]),l.useEffect(function(){te()},[b,L,kn,V]);var se=l.useMemo(function(){return{registerLink:ne,unregisterLink:ee,scrollTo:Nn,activeLink:V,onClick:an,direction:b}},[V,an,Nn,b]);return Yn((0,C.jsx)(_.Provider,{value:se,children:m?(0,C.jsx)(hn.Z,{offsetTop:g,target:J,children:Wn}):Wn}))},Un=Kn,Dn=Un;Dn.Link=K;var Xn=Dn}}]);
