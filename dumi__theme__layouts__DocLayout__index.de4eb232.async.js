"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[40367],{361446:function(In,G,t){var sn=t(805574),D=t.n(sn),fn=t(719632),v=t.n(fn),T=t(667294),X=t(844183),vn=t(566254),l=t(385956),c=t(472638),y=t(438746),k=t(785893),tn=function(){var nn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=(0,l.useFullSidebarData)(),r=(0,y.Z)(),h=r.pathname,e=r.search,bn=(0,l.useSidebarData)(),rn=nn.before,dn=nn.after,An=(0,T.useMemo)(function(){var kn,J=v()(bn!=null?bn:[]);if(h.startsWith("/docs/spec")){var Tn=J.splice(0,1);J.push.apply(J,v()(Tn))}if(h.startsWith("/docs/react")){var mn,V=(mn=Object.entries(d).find(function(z){var b=D()(z,1),B=b[0];return B.startsWith("/changelog")}))===null||mn===void 0?void 0:mn[1];V&&J.splice(1,0,V[0])}if(h.startsWith("/changelog")){var Q,$=(Q=Object.entries(d).find(function(z){var b=D()(z,1),B=b[0];return B.startsWith("/docs/react")}))===null||Q===void 0?void 0:Q[1];$&&(J.unshift($[0]),J.push.apply(J,v()($.slice(1))))}var R=function(b){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return b&&B&&(0,k.jsx)(X.Z,{color:b==="New"?"success":"processing",bordered:!1,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2},children:b.replace("VERSION",vn.Z)})};return(kn=J==null?void 0:J.reduce(function(z,b){if(b!=null&&b.title)if(h.startsWith("/docs/spec")){var B,an,yn=b.children.reduce(function(f,m){var s,x,w=(s=(x=m.frontmatter)===null||x===void 0?void 0:x.type)!==null&&s!==void 0?s:"default";return f[w]||(f[w]=[]),f[w].push(m),f},{}),cn=[];cn.push.apply(cn,v()((B=(an=yn.default)===null||an===void 0?void 0:an.map(function(f){return{label:(0,k.jsxs)(c.Z,{to:"".concat(f.link).concat(e),children:[rn,f==null?void 0:f.title,dn]}),key:f.link.replace(/(-cn$)/g,"")}}))!==null&&B!==void 0?B:[])),Object.entries(yn).forEach(function(f){var m=D()(f,2),s=m[0],x=m[1];s!=="default"&&cn.push({type:"group",label:s,key:s,children:x==null?void 0:x.map(function(w){return{label:(0,k.jsxs)(c.Z,{to:"".concat(w.link).concat(e),children:[rn,w==null?void 0:w.title,dn]}),key:w.link.replace(/(-cn$)/g,"")}})})}),z.push({label:b==null?void 0:b.title,key:b==null?void 0:b.title,children:cn})}else{var En;z.push({type:"group",label:b==null?void 0:b.title,key:b==null?void 0:b.title,children:(En=b.children)===null||En===void 0?void 0:En.map(function(f){var m,s;return{label:(0,k.jsxs)(c.Z,{to:"".concat(f.link).concat(e),style:{display:"flex",alignItems:"center"},children:[rn,(0,k.jsx)("span",{children:f==null?void 0:f.title},"english"),(0,k.jsx)("span",{className:"chinese",children:(m=f.frontmatter)===null||m===void 0?void 0:m.subtitle},"chinese"),R((s=f.frontmatter)===null||s===void 0?void 0:s.tag,!rn&&!dn),dn]}),key:f.link.replace(/(-cn$)/g,"")}})})}else{var Y=b.children||[];Y.every(function(f){var m;return f==null||(m=f.frontmatter)===null||m===void 0?void 0:m.date})&&Y.sort(function(f,m){var s,x;return((s=f.frontmatter)===null||s===void 0?void 0:s.date)>((x=m.frontmatter)===null||x===void 0?void 0:x.date)?-1:1}),z.push.apply(z,v()(Y.map(function(f){return{label:(0,k.jsxs)(c.Z,{to:"".concat(f.link).concat(e),style:{display:"flex",alignItems:"center"},children:[rn,f==null?void 0:f.title,R(f.frontmatter.tag,!rn&&!dn),dn]}),key:f.link.replace(/(-cn$)/g,"")}})))}return z},[]))!==null&&kn!==void 0?kn:[]},[bn,d,h,e,nn]);return[An,h]};G.Z=tn},148050:function(In,G,t){t.r(G),t.d(G,{default:function(){return tn}});var sn=t(168400),D=t.n(sn),fn=t(667294),v=t(639389),T=t.n(v),X=t(65630),vn=t(879587),l=t(785893),c,y="https://github.com/ant-design/ant-design/edit/master/",k=(0,X.kc)(function(on){var nn=on.token,d=on.css,r=nn.colorIcon,h=nn.colorText,e=nn.iconCls;return{editButton:d(c||(c=D()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: 6px;

        `,` {
          display: block;
          color: `,`;
          font-size: 16px;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }
    `])),e,r,h)}});function tn(on){var nn=on.title,d=on.filename,r=k(),h=r.styles;return(0,l.jsx)(vn.Z,{title:nn,children:(0,l.jsx)("a",{className:h.editButton,href:"".concat(y).concat(d),target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)(v.EditOutlined,{})})})}},70569:function(In,G,t){t.r(G),t.d(G,{default:function(){return bo}});var sn=t(805574),D=t.n(sn),fn=t(693967),v=t.n(fn),T=t(727484),X=t.n(T),vn=t(533852),l=t(385956),c=t(667294),y=t(715778),k=t(75529),tn=t(302559),on=t(438746),nn=t(168400),d=t.n(nn),r=t(370917),h=t(65630),e=t(785893),bn,rn={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},dn=function(){var n=(0,h.Fg)(),o=function u(g){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return p<=10?`
.palette-`.concat(g,"-").concat(p,` {
  background: `).concat(n["".concat(g,"-").concat(p)],`;
}
`).concat(u(g,p+1),`
    `):""},i=function u(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return g<=13?`
.palette-gray-`.concat(g,` {
  background: `).concat(rn[g],`;
}
`).concat(u(g+1),`
    `):""};return(0,e.jsx)(r.xB,{styles:(0,r.iv)(bn||(bn=d()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-right: 0;
              }

              .main-color-item {
                margin-right: 0;

                &:hover {
                  margin-right: -8px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 20px;
            font-size: 20px;
            text-align: center;
          }

          &-picker {
            margin: 24px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-left: 16px;
              font-size: 14px;
              font-family: Consolas, sans-serif;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-left: 16px;
              color: `,`;
              font-size: 13px;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }

              &-dark {
                margin-left: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-right: 4px;
            padding: 0 12px;
            font-size: 14px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all 0.2s;

            &:first-child {
              border-radius: 4px 4px 0 0;
            }

            &:last-child {
              border-radius: 0 0 4px 4px;
            }

            &:hover {
              margin-right: -8px;
              border-radius: 0 4px 4px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all 0.3s;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all 0.3s;
          }
        }

        .color-title {
          margin: 0 0 24px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: 14px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: 32px 28px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-right: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: 4px 4px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: 8px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),n.colorError,o("blue"),o("purple"),o("cyan"),o("green"),o("magenta"),o("red"),o("volcano"),o("orange"),o("gold"),o("yellow"),o("lime"),o("geekblue"),i())})},An=dn,kn,J=function(){return(0,e.jsx)(r.xB,{styles:(0,r.iv)(kn||(kn=d()([`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          font-size: 0;
          line-height: inherit;
          text-align: right;
          padding-inline-end: 4px;
          margin-inline-start: -24px;

          [data-direction='rtl'] & {
            float: right;
          }

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            font-size: 20px;
            content: '#';
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    `])))})},Tn,mn=function(){var a=(0,h.Fg)();return(0,e.jsx)(r.xB,{styles:(0,r.iv)(Tn||(Tn=d()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src: url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),a.colorText,a.fontSize,a.fontFamily,a.lineHeight,a.colorBgContainer)})},V,Q=function(){var a=(0,h.Fg)(),n=a.anchorTop;return(0,e.jsx)(r.xB,{styles:(0,r.iv)(V||(V=d()([`
      body,
      div,
      dl,
      dt,
      dd,
      ul,
      ol,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      pre,
      code,
      form,
      fieldset,
      legend,
      input,
      textarea,
      p,
      blockquote,
      th,
      td,
      hr,
      button,
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        margin: 0;
        padding: 0;
      }

      ul,
      ol {
        list-style: none;
      }

      img {
        vertical-align: middle;
        border-style: none;
      }

      [id] {
        scroll-margin-top: `,`px;
      }

      [data-prefers-color='dark'] {
        color-scheme: dark;
      }

      [data-prefers-color='light'] {
        color-scheme: light;
      }
    `])),n)})},$=t(510274),R,z=function(){var n=(0,h.Fg)(),o=n.antCls,i=n.colorPrimary;return(0,e.jsx)(r.xB,{styles:(0,r.iv)(R||(R=d()([`
        .markdown {
          color: `,`;
          font-size: 14px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
        }

        .markdown > a > img,
        .markdown > img {
          display: block;
          margin: 0 auto;
        }

        .markdown p > img {
          margin: 34px auto;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
          max-width: 1024px;
          display: block;
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: 8px;
          margin-bottom: 20px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-left: 12px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: 16px;
        }

        .markdown h5 {
          font-size: 14px;
        }

        .markdown h6 {
          font-size: 12px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: 24px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: circle;

          .rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: 3px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background: #f5f5f5;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: 12px 20px;
            font-size: 13px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 20px;
            color: #aaa;
            font-size: 30px;
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-right: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-left: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-right: 0.8em;
            padding-left: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-left: 8px;
          opacity: 0;
          transition: opacity 0.3s;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-left: 8px;
          text-decoration: none;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: 16px;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: 12px 24px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all 0.3s;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: `,`;
                font-weight: 600;
                white-space: nowrap;
              }

              &:nth-child(2) {
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: 8px;
            margin-bottom: 8px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: 16px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),n.colorText,n.colorTextHeading,n.fontFamily,n.colorTextHeading,n.fontFamily,n.colorSplit,o,o,n.siteMarkdownCodeBg,n.colorSplit,n.codeFamily,n.siteMarkdownCodeBg,n.borderRadius,n.colorText,Math.max(n.fontSize-1,12),n.siteMarkdownCodeBg,n.borderRadius,n.colorTextSecondary,n.colorSplit,n.colorSplit,o,n.colorTextSecondary,n.colorText,n.colorSplit,n.colorSplit,n.colorSplit,n.colorSplit,Math.max(n.fontSize-1,12),n.codeFamily,n.lineHeight,n.colorSplit,n.colorText,n.magenta7,Math.max(n.fontSize-1,12),Math.max(n.fontSize-1,12),Math.max(n.fontSize-1,12),o,o,o,i,new $.C(i).setAlpha(.75).toHex8String(),o,o,n.colorWhite,o,new $.C(i).setAlpha(.75).toHexString(),o,o,new $.C(i).setAlpha(.75).toHexString(),o,o,o,o,new $.C(i).setAlpha(.6).toHexString(),o,o,o)})},b=z,B,an=function(){var a=(0,h.Fg)();return(0,e.jsx)(r.xB,{styles:(0,r.iv)(B||(B=d()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: 16px 32px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: black;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 1.5;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: 16px 0;
          padding: 12px 20px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: #f5f5f5;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),a.colorText,a.fontSize,a.borderRadius)})},yn,cn=function(){var n=(0,h.Fg)(),o=n.antCls,i=n.iconCls;return(0,e.jsx)(r.xB,{styles:(0,r.iv)(yn||(yn=d()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: 100%;
          margin: 0 0 16px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all 0.2s;

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
            > .demo {
              overflow: auto;
            }
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: 20px;
            cursor: pointer;
            opacity: 0.75;
            transition: all 0.3s;
            margin-inline-start: 12px;

            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: 16px;

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: 12px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: 6px;

            `,` {
              color: `,`;
              transition: all 0.3s;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: 12px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            overflow: auto;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-child) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: 12px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity 0.3s;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: 14px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
              padding: 12px 16px;
              font-size: 13px;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),n.colorBgContainer,n.colorSplit,n.borderRadiusLG,n.colorText,n.colorBgContainer,n.colorBgContainer,n.borderRadiusLG,n.borderRadiusLG,n.colorPrimary,n.colorBgContainer,n.borderRadius,n.borderRadius,n.colorText,n.fontSize,i,n.colorTextSecondary,n.colorText,o,o,n.colorText,n.colorSplit,n.fontSize,n.borderRadius,n.borderRadius,n.colorSplit,o,o,n.borderRadius,n.borderRadius,n.colorBgContainer,n.colorSplit,n.colorSplit,n.colorTextSecondary,n.colorText,i,n.colorBgContainer,i,n.green6,n.colorBgContainer,n.purple3,n.purple6,o)})},En=cn,Y,f=function(){var a=(0,h.Fg)(),n=a.antCls,o=a.iconCls;return(0,e.jsx)(r.xB,{styles:(0,r.iv)(Y||(Y=d()([`
        ul.anticons-list {
          margin: 10px 0;
          overflow: hidden;
          direction: ltr;
          list-style: none;

          li {
            position: relative;
            float: left;
            width: 16.66%;
            height: 100px;
            margin: 3px 0;
            padding: 10px 0 0;
            overflow: hidden;
            color: #555;
            text-align: center;
            list-style: none;
            background-color: inherit;
            border-radius: 4px;
            cursor: pointer;
            transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

            .rtl & {
              margin: 3px 0;
              padding: 10px 0 0;
            }

            `,` {
              margin: 12px 0 8px;
              font-size: 36px;
              transition: transform 0.3s ease-in-out;
              will-change: transform;
            }

            .anticon-class {
              display: block;
              font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              white-space: nowrap;
              text-align: center;
              transform: scale(0.83);

              `,`-badge {
                transition: color 0.3s ease-in-out;
              }
            }

            &:hover {
              color: #fff;
              background-color: `,`;

              `,` {
                transform: scale(1.4);
              }

              `,`-badge {
                color: #fff;
              }
            }

            &.TwoTone:hover {
              background-color: #8ecafe;
            }

            &.copied:hover {
              color: rgba(255, 255, 255, 0.2);
            }

            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              line-height: 110px;
              text-align: center;
              background: #1677ff;
              opacity: 0;
              transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
              content: 'Copied!';
            }

            &.copied::after {
              opacity: 1;
            }
          }
        }

        .copied-code {
          padding: 2px 4px;
          font-size: 12px;
          background: #f5f5f5;
          border-radius: 2px;
        }
      `])),o,n,a.colorPrimary,o,n)})},m,s=function(){var a=(0,h.Fg)(),n=a.iconCls;return(0,e.jsx)(r.xB,{styles:(0,r.iv)(m||(m=d()([`
        .icon-pic-searcher {
          display: inline-block;
          margin: 0 8px;

          .icon-pic-btn {
            color: `,`;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .icon-pic-preview {
          width: 66px;
          height: 66px;
          margin-top: 10px;
          padding: 8px;
          text-align: center;
          border: 1px solid `,`;
          border-radius: 4px;

          > img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .icon-pic-search-result {
          min-height: 50px;
          padding: 0 10px;

          > .result-tip {
            padding: 10px 0;
            color: `,`;
          }

          > table {
            width: 100%;

            .col-icon {
              width: 80px;
              padding: 10px 0;

              > `,` {
                font-size: 30px;

                :hover {
                  color: `,`;
                }
              }
            }
          }
        }
      `])),a.colorIcon,a.colorIconHover,a.colorBorder,a.colorTextSecondary,n,a.colorLinkHover)})},x,w=function(){return(0,e.jsx)(r.xB,{styles:(0,r.iv)(x||(x=d()([`
      /* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

      .browser-mockup {
        position: relative;
        border-top: 2em solid rgba(230, 230, 230, 0.7);
        border-radius: 3px 3px 0 0;
        box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
      }

      .browser-mockup::before {
        position: absolute;
        top: -1.25em;
        left: 1em;
        display: block;
        width: 0.5em;
        height: 0.5em;
        background-color: #f44;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
        content: '';
      }

      .browser-mockup.with-tab::after {
        position: absolute;
        top: -2em;
        left: 5.5em;
        display: block;
        width: 20%;
        height: 0;
        border-right: 0.8em solid transparent;
        border-bottom: 2em solid white;
        border-left: 0.8em solid transparent;
        content: '';
      }

      .browser-mockup.with-url::after {
        position: absolute;
        top: -1.6em;
        left: 5.5em;
        display: block;
        width: calc(100% - 6em);
        height: 1.2em;
        background-color: white;
        border-radius: 2px;
        content: '';
      }

      .browser-mockup > * {
        display: block;
      }
    `])))})},I,F=function(){var a=(0,h.Fg)();return(0,e.jsx)(r.xB,{styles:(0,r.iv)(I||(I=d()([`
        .nav-phone-icon {
          position: absolute;
          bottom: 17px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-right: 0;
            margin-left: 0;
            padding-right: 16px;
            padding-left: 16px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-left: 16px;

            .ant-row-rtl & {
              margin-right: 16px;
              margin-left: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: 20px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: 32px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: 14px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 20px;
                  font-size: 14px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: 32px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: 14px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;

              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 16px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: 32px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: 4px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: 8px;
                    font-size: 12px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: 16px;
                    font-size: 12px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg')
              no-repeat;
            background-size: cover;

            .ant-row {
              margin: 0 8px;
            }

            .page3-block {
              margin-bottom: 32px;
              padding: 24px;
              background: `,`;
              border-radius: 4px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-child(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: 12px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-left: 16px;
              }
            }
          }
        }
      `])),a.screenLG,a.colorBgContainer,a.colorSplit,a.colorLink,a.colorBgContainer)})},q,en=function(){var a=(0,h.Fg)();return(0,e.jsx)(r.xB,{styles:(0,r.iv)(q||(q=d()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow: 0 0 10px `,", 0 0 5px ",`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),a.colorPrimary,a.colorPrimary,a.colorPrimary,a.colorPrimary,a.colorPrimary)})},wn,gn=function(){var a=(0,h.Fg)();return(0,e.jsx)(r.xB,{styles:(0,r.iv)(wn||(wn=d()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-left: 24px;

          .ant-row-rtl & {
            margin-right: 24px;
            margin-left: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: 16px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: 20px;
          color: `,`;
          font-size: 12px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: 12px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: 12px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all 0.3s;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow: 0 1px 0 0 #ddd, 0 3px 0 0 `,`, 0 4px 0 0 #ddd,
            0 6px 0 0 `,`, 0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 48px 0 24px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-right: 12.5%;
            margin-bottom: 24px;
            padding: 24px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: 4px;

            &:last-child {
              margin-right: 0;
            }

            h4 {
              margin: 16px 0 8px;
            }

            p {
              font-size: 12px;
              line-height: 24px;
            }
          }
        }
      `])),a.colorPrimary,a.colorError,a.colorText,a.colorTextSecondary,a.colorBgContainer,a.borderRadius,a.colorBgContainer,a.colorBgContainer)})},pn,jn="dumi-default-",zn=function(){var a=(0,h.Fg)();return(0,e.jsx)(r.xB,{styles:(0,r.iv)(pn||(pn=d()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),jn,a.colorText,a.colorBgContainer,a.colorBgContainer,a.colorTextPlaceholder,jn,a.colorBgElevated,a.colorBgElevated,jn,a.controlItemBgActive,a.controlItemBgHover,a.colorText,a.colorText)})},Ln,Mn=function(){return(0,e.jsx)(r.xB,{styles:(0,r.iv)(Ln||(Ln=d()([`
      .design-inline-cards {
        display: flex;
        margin: 0 -20px;
      }
      .design-inline-cards > * {
        flex: 10%;
        margin: 0 20px;
      }
      .design-inline-cards img {
        width: 100%;
        max-width: 100%;
      }
      .design-inline-cards h4 {
        margin-bottom: 0;
      }
    `])))})},Dn=function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(mn,{}),(0,e.jsx)(Q,{}),(0,e.jsx)(b,{}),(0,e.jsx)(an,{}),(0,e.jsx)(En,{}),(0,e.jsx)(f,{}),(0,e.jsx)(s,{}),(0,e.jsx)(w,{}),(0,e.jsx)(F,{}),(0,e.jsx)(en,{}),(0,e.jsx)(gn,{}),(0,e.jsx)(Mn,{}),(0,e.jsx)(An,{}),(0,e.jsx)(J,{}),(0,e.jsx)(zn,{})]})},Fn=Dn,Nn=t(97857),M=t.n(Nn),Vn=t(9783),ln=t.n(Vn),hn=t(639389),Kn=t.n(hn),Hn=t(469181),Gn=t(344682),oe=t(11739),re=t(664095),Zn=t(883458),ae=t(722449),ie="M448 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM64 448l256 224-256 224z",le="M256 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM960 896l-256-224 256-224z",Xn=function(n){return(0,e.jsx)(Kn(),M()(M()({},n),{},{children:(0,e.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,e.jsx)("path",{d:n.direction==="ltr"?ie:le})})}))},Wn=Xn,se=t(562925),un=t(373638),_n=t(438199),he,xe,dt=(0,h.kc)(function(a){var n=a.token,o=a.css,i=n.headerHeight,u=n.colorTextHeading,g=n.fontFamily,p=n.mobileMaxWidth;return{logo:o(he||(he=d()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: `,`;
      }

      img {
        height: 32px;
        vertical-align: middle;
        margin-inline-end: 12px;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),i,u,g,i,u,p),title:o(xe||(xe=d()([`
      line-height: 32px;
    `])))}}),ct=function(n){var o=n.isZhCN,i=(0,l.useLocation)(),u=i.search,g=dt(),p=g.styles;return(0,e.jsx)("h1",{children:(0,e.jsxs)(l.Link,{to:un.J1("/",o,u),className:p.logo,children:[(0,e.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,e.jsx)("span",{className:p.title,children:"Ant Design"})]})})},pt=ct,ut=t(963918),mt=t(988872),fe,ve,be,ye,we=(0,h.kc)(function(a){var n=a.css,o=a.token;return{smallStyle:n(fe||(fe=d()([`
    font-size: 12px;
    color: #777;
    margin-left: 0.3em;
  `]))),down:n(ve||(ve=d()([`
    color: `,`;
  `])),o.colorTextQuaternary),downOutlined:n(be||(be=d()([`
    font-size: 9px;
    margin: -1px 0 0 2px;
    vertical-align: middle;
  `]))),downOutlinedRTL:n(ye||(ye=d()([`
    font-size: 9px;
    margin: -1px 2px 0 0;
    vertical-align: middle;
  `])))}}),je=function(){var n=we(),o=n.styles;return(0,e.jsxs)("span",{className:o.smallStyle,children:["(",(0,e.jsx)(l.FormattedMessage,{id:"app.implementation.community"}),")"]})},Ce=function(){return[{label:(0,e.jsx)("a",{href:"https://charts.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,e.jsx)(l.FormattedMessage,{id:"app.header.menu.charts"})}),key:"charts"},{label:(0,e.jsx)("a",{href:"http://pro.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,e.jsx)(l.FormattedMessage,{id:"app.header.menu.pro.v4"})}),key:"pro"},{label:(0,e.jsx)("a",{href:"http://procomponents.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,e.jsx)(l.FormattedMessage,{id:"app.header.menu.pro.components"})}),key:"procomponents"},{label:(0,e.jsxs)("a",{href:"http://ng.ant.design",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Angular",(0,e.jsx)(je,{})]}),key:"ng"},{label:(0,e.jsxs)("a",{href:"http://antdv.com",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Vue",(0,e.jsx)(je,{})]}),key:"vue"}]},gt=function(n){var o=n.isRTL,i=we(),u=i.styles;return(0,e.jsx)(ut.Z,{menu:{items:Ce()},placement:"bottomRight",children:(0,e.jsxs)(mt.ZP,{size:"small",children:[(0,e.jsx)(l.FormattedMessage,{id:"app.header.menu.more"}),(0,e.jsx)(hn.DownOutlined,{className:v()(o?u.downOutlinedRTL:u.downOutlined,u.down)})]})})},ht=gt,xt=t(719632),de=t.n(xt),ke=t(923232),Jn=t(472638),Se,Ee,ft={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},vt=(0,h.kc)(function(a){var n=a.token,o=n.antCls,i=n.iconCls,u=n.fontFamily,g=n.headerHeight,p=n.menuItemBorder,S=n.colorPrimary,j=n.colorText;return{nav:(0,h.iv)(Se||(Se=d()([`
      height: 100%;
      font-size: 14px;
      font-family: Avenir, `,`, sans-serif;
      border: 0;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-right: 12px;
          padding-left: 12px;
          line-height: `,`px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: `,`px;
          }

          a {
            color: `,`;
          }

          a:before {
            position: absolute;
            inset: 0;
            background-color: transparent;
            content: "";
          }
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),u,o,o,o,40+12*2,g,g,p,j,o,i,o,S,o,o),popoverMenuNav:(0,h.iv)(Ee||(Ee=d()([`
      `,`-menu-item,
      `,`-menu-submenu {
        text-align: left;
      }

      `,`-menu-item-group-title {
        padding-left: 24px;
      }

      `,`-menu-item-group-list {
        padding: 0 16px;
      }

      `,`-menu-item,
      a {
        color: #333;
      }
    `])),o,o,o,o,o)}}),bt=function(a){var n,o,i=a.isZhCN,u=a.isMobile,g=a.responsive,p=a.directionText,S=a.onLangChange,j=a.onDirectionChange,L=(0,l.useLocation)(),A=L.pathname,H=L.search,Z=(0,tn.Z)(ft),N=D()(Z,1),P=N[0],K=(0,l.useFullSidebarData)(),C=((n=K["/docs/blog"])===null||n===void 0||(n=n[0])===null||n===void 0?void 0:n.children)||[],U=vt(),E=U.styles,_=u?"inline":"horizontal",Bn=A.split("/").filter(function(Rn){return Rn}).slice(0,-1).join("/"),Sn=Bn||"home";A.startsWith("/changelog")?Sn="docs/react":A.startsWith("/docs/resources")&&(Sn="docs/resources");var W,Cn=[{label:(0,e.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,e.jsx)(l.FormattedMessage,{id:"app.header.lang"}),onClick:S,key:"switch-lang"},{label:p,onClick:j,key:"switch-direction"}].concat(de()(Ce()));u?W=Cn:g==="crowded"&&(W=[{label:(0,e.jsx)(hn.MenuOutlined,{}),key:"additional",children:de()(Cn)}]);var On=[{label:(0,e.jsx)(Jn.Z,{to:un.J1("/docs/spec/introduce",i,H),children:P.design}),key:"docs/spec"},{label:(0,e.jsx)(Jn.Z,{to:un.J1("/docs/react/introduce",i,H),children:P.development}),key:"docs/react"},{label:(0,e.jsx)(Jn.Z,{to:un.J1("/components/overview/",i,H),children:P.components}),key:"components"},C.length?{label:(0,e.jsx)(Jn.Z,{to:un.J1(C.sort(function(Rn,ue){var Un,Qn;return((Un=Rn.frontmatter)===null||Un===void 0?void 0:Un.date)>((Qn=ue.frontmatter)===null||Qn===void 0?void 0:Qn.date)?-1:1})[0].link,i,H),children:P.blog}),key:"docs/blog"}:null,{label:(0,e.jsx)(Jn.Z,{to:un.J1("/docs/resources",i,H),children:P.resources}),key:"docs/resources"},i?{label:(0,e.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u56FD\u5185\u955C\u50CF"}),key:"mirror",children:[{label:(0,e.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u5B98\u65B9\u955C\u50CF"}),icon:(0,e.jsx)("img",{alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"antgroup"},{label:(0,e.jsx)("a",{href:"https://ant-design.gitee.io",target:"_blank",rel:"noreferrer",children:"Gitee \u955C\u50CF"}),icon:(0,e.jsx)("img",{alt:"gitee",src:"https://gw.alipayobjects.com/zos/bmw-prod/9e91e124-9bab-4113-b500-301412f6b370.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"gitee"}]}:null].concat(de()((o=W)!==null&&o!==void 0?o:[]));return(0,e.jsx)(ke.Z,{mode:_,selectedKeys:[Sn],className:E.nav,disabledOverflow:!0,items:On,style:{borderRight:0}})},yt=t(879587),Me,Be,Te,ze,Le,$n="1.2em",wt=(0,h.kc)(function(a){var n=a.token,o=a.css,i=n.colorText,u=n.colorBorder,g=n.colorBgContainer,p=n.colorBgTextHover,S=n.borderRadius,j=n.controlHeight,L=n.motionDurationMid;return{btn:o(Me||(Me=d()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),i,u,j,j,S,L,L,p,$n,$n,$n),innerDiv:o(Be||(Be=d()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),$n,$n),labelStyle:o(Te||(Te=d()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),$n,i,i),label1Style:o(ze||(ze=d()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),i,g),label2Style:o(Le||(Le=d()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),jt=function(n){var o=n.label1,i=n.label2,u=n.tooltip1,g=n.tooltip2,p=n.value,S=n.pure,j=n.onClick,L=wt(),A=L.styles,H=A.btn,Z=A.innerDiv,N=A.labelStyle,P=A.label1Style,K=A.label2Style,C=(0,e.jsx)("button",{onClick:j,className:H,"aria-label":n["aria-label"],children:(0,e.jsxs)("div",{className:"btn-inner",children:[S&&(p===1?o:i),!S&&(0,e.jsxs)("div",{className:Z,children:[(0,e.jsx)("span",{className:v()(N,p===1?P:K),children:o}),(0,e.jsx)("span",{className:v()(N,p===1?K:P),children:i})]})]})},"lang-button");return u||g?(0,e.jsx)(yt.Z,{title:p===1?u:g,children:C}):C},ce=jt,Ae,De,Fe,Pe,Oe,Re,Ie=1120,Ne=1200,Ct={cn:{message:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",shortMessage:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",more:"\u524D\u5F80\u4E86\u89E3",link:"https://www.yuque.com/opensource2023"},en:{message:"",shortMessage:"",more:"",link:""}},kt=(0,h.kc)(function(a){var n=a.token,o=a.css,i="#ced4d9";return{header:o(Ae||(Ae=d()([`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;
      backdrop-filter: blur(8px);

      @media only screen and (max-width: `,`px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `])),n.colorBgContainer,n.boxShadowTertiary,n.mobileMaxWidth,i,i,i),menuRow:o(De||(De=d()([`
      display: flex;
      align-items: center;
      margin: 0;

      > * {
        flex: none;
        margin: 0;
        margin-inline-end: 12px;

        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `]))),dataDirectionIcon:o(Fe||(Fe=d()([`
      width: 16px;
    `]))),popoverMenu:ln()({width:300},"".concat(n.antCls,"-popover-inner-content"),{padding:0}),banner:o(Pe||(Pe=d()([`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `]))),link:o(Oe||(Oe=d()([`
      margin-left: 10px;

      @media only screen and (max-width: `,`px) {
        margin-left: 0;
      }
    `])),n.mobileMaxWidth),icon:o(Re||(Re=d()([`
      margin-right: 10px;
      width: 22px;
      height: 22px;
    `])))}}),St=function(){var n=(0,tn.Z)(Ct),o=D()(n,2),i=o[0],u=o[1],g=(0,l.useSiteData)(),p=g.pkg,S=(0,un.Is)(),j=(0,c.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),L=D()(j,2),A=L[0],H=L[1],Z=(0,c.useContext)(_n.Z),N=Z.direction,P=Z.isMobile,K=Z.bannerVisible,C=Z.updateSiteConfig,U=(0,c.useRef)(null),E=(0,l.useLocation)(),_=E.pathname,Bn=E.search,Sn=kt(),W=Sn.styles,Cn=(0,c.useCallback)(function(){H(function(O){return M()(M()({},O),{},{menuVisible:!1})})},[]),On=(0,c.useCallback)(function(){H(function(O){return M()(M()({},O),{},{windowWidth:window.innerWidth})})},[]),Rn=(0,c.useCallback)(function(){H(function(O){return M()(M()({},O),{},{menuVisible:!0})})},[]),ue=(0,c.useCallback)(function(O){H(function(xn){return M()(M()({},xn),{},{menuVisible:O})})},[]),Un=function(){C({direction:N!=="rtl"?"rtl":"ltr"})},Qn=function(){C({bannerVisible:!1}),un.Fy()&&localStorage.setItem(se.ANT_DESIGN_NOT_SHOW_BANNER,X()().toISOString())};(0,c.useEffect)(function(){Cn()},[E]),(0,c.useEffect)(function(){return On(),window.addEventListener("resize",On),function(){window.removeEventListener("resize",On),U.current&&clearTimeout(U.current)}},[]);var yo=(0,c.useCallback)(function(O){var xn=window.location.href,te=window.location.pathname;if(/overview/.test(te)&&/0?[1-39][0-3]?x/.test(O)){window.location.href=xn.replace(window.location.origin,O).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(O)?"":"/react","/introduce")).replace(/\/$/,"");return}var qn=new URL(xn.replace(window.location.origin,O));qn.host.includes("antgroup")?(qn.pathname="".concat(qn.pathname.replace(/\/$/,""),"/"),window.location.href=qn.toString()):window.location.href=qn.href.replace(/\/$/,"")},[]),tt=(0,c.useCallback)(function(){var O="".concat(window.location.protocol,"//"),xn=window.location.href.slice(O.length);un.Fy()&&localStorage.setItem("locale",un.KE(_)?"en-US":"zh-CN"),window.location.href=O+xn.replace(window.location.pathname,un.J1(_,!un.KE(_),Bn).pathname)},[E]),wo=(0,c.useMemo)(function(){return N!=="rtl"?"RTL":"LTR"},[N]),jo=(0,c.useMemo)(function(){return N==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[N]),Co=A.menuVisible,ee=A.windowWidth,ot=A.searching,rt=M()(ln()({},p.version,p.version),S==null?void 0:S.docVersions),ko=Object.keys(rt).map(function(O){return{value:rt[O],label:O}}),at=["","index","index-cn"].includes(_),it=u==="cn",So=N==="rtl",me=null;ee<Ie?me="crowded":ee<Ne&&(me="narrow");var Eo=v()(W.header,"clearfix",{"home-header":at}),ge={isZhCN:it,isRTL:So},lt=(0,e.jsx)(bt,M()(M()({},ge),{},{responsive:me,isMobile:P,directionText:wo,onLangChange:tt,onDirectionChange:Un}),"nav"),Yn=[lt,(0,e.jsx)(Hn.Z,{className:"version",size:"small",defaultValue:p.version,onChange:yo,dropdownStyle:jo,popupMatchSelectWidth:!1,getPopupContainer:function(xn){return xn.parentNode},options:ko},"version"),(0,e.jsx)(ht,M()({},ge),"more"),(0,e.jsx)(ce,{onClick:tt,value:un.KE(_)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,e.jsx)(ce,{onClick:Un,value:N==="rtl"?2:1,label1:(0,e.jsx)(Wn,{className:W.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,e.jsx)(Wn,{className:W.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,e.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,e.jsx)(ce,{value:1,label1:(0,e.jsx)(hn.GithubOutlined,{}),tooltip1:"Github",label2:null,pure:!0})},"github")];ee<Ie?Yn=ot?[]:[lt]:ee<Ne&&(Yn=ot?[]:Yn);var st=at?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,e.jsxs)("header",{className:Eo,children:[P&&(0,e.jsx)(Gn.Z,{overlayClassName:W.popoverMenu,placement:"bottomRight",content:Yn,trigger:"click",open:Co,arrow:{arrowPointAtCenter:!0},onOpenChange:ue,children:(0,e.jsx)(hn.MenuOutlined,{className:"nav-phone-icon",onClick:Rn})}),it&&K&&(0,e.jsx)(k.ZP,{theme:{token:{colorInfoBg:"linear-gradient(90deg, #84fab0, #8fd3f4)",colorTextBase:"#000"}},children:(0,e.jsx)(oe.Z,{className:W.banner,message:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{children:P?i.shortMessage:i.message}),(0,e.jsx)("a",{className:W.link,href:i.link,target:"_blank",rel:"noreferrer",onClick:function(){var xn,te;(xn=(te=window).gtag)===null||xn===void 0||xn.call(te,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:i.link})},children:i.more})]}),type:"info",banner:!0,closable:!0,showIcon:!1,onClose:Qn})}),(0,e.jsxs)(re.Z,{style:{flexFlow:"nowrap",height:64},children:[(0,e.jsx)(Zn.Z,M()(M()({},st[0]),{},{children:(0,e.jsx)(pt,M()(M()({},ge),{},{location:E}))})),(0,e.jsxs)(Zn.Z,M()(M()({},st[1]),{},{className:W.menuRow,children:[(0,e.jsx)("div",{className:"nav-search-wrapper",children:(0,e.jsx)(ae.ZP,{})}),!P&&Yn]}))]})]})},Et=St,Mo=t(945462),Mt=t(513769),Bt=t.n(Mt),He=t(777502),Tt=["children"],zt=function(n){var o=n.children,i=Bt()(n,Tt);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(l.Helmet,{children:[(0,e.jsx)("title",{children:i.title}),(0,e.jsx)("meta",{property:"og:title",content:i.title}),i.desc&&(0,e.jsx)("meta",{name:"description",content:i.desc})]}),(0,e.jsx)("div",{style:{minHeight:"100vh"},children:o}),(0,e.jsx)(He.default,{})]})},Lt=zt,At=t(86198),Ze=t(185209),Dt=function(){var n=(0,l.useRouteMeta)(),o=(0,c.useMemo)(function(){var p;if(!n.frontmatter.subtitle&&!n.frontmatter.title)p="404 Not Found - Ant Design";else{var S;p="".concat(n.frontmatter.subtitle||""," ").concat(((S=n.frontmatter)===null||S===void 0?void 0:S.title)||""," - Ant Design")}var j=n.frontmatter.description||"";return[p,j]},[n]),i=D()(o,2),u=i[0],g=i[1];return(0,e.jsxs)(l.Helmet,{children:[(0,e.jsx)("title",{children:u}),(0,e.jsx)("meta",{property:"og:title",content:u}),g&&(0,e.jsx)("meta",{name:"description",content:g})]})},We=Dt,Ft=t(148050),Pt=t(823493),Ot=t.n(Pt),Rt=t(468990),It=t(658192),$e,Ue,Ve,Ke=["scroll","resize"],Nt=(0,h.kc)(function(a){var n=a.token,o=a.css,i=n.boxShadowSecondary,u=n.antCls;return{affixTabs:o($e||($e=d()([`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 11;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),i,u,u,u),affixTabsFixed:o(Ue||(Ue=d()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:o(Ve||(Ve=d()([`
      text-transform: capitalize;
    `])))}}),Ge=32,Ht=function(){var n=c.useRef(null),o=c.useRef([]),i=c.useState(!1),u=D()(i,2),g=u[0],p=u[1],S=c.useState(void 0),j=D()(S,2),L=j[0],A=j[1],H=Nt(),Z=H.styles,N=Z.affixTabs,P=Z.affixTabsFixed,K=Z.span;function C(E){var _=document.getElementById(E);if(_){var Bn=_.offsetTop-n.current.offsetHeight-Ge;(0,It.Z)(Bn)}}c.useEffect(function(){o.current=Array.from(document.querySelectorAll("h2[id]")).map(function(E){var _=E.id;return _}),p(!0)},[]),c.useEffect(function(){var E=decodeURIComponent((location.hash||"").slice(1));E&&C(E)},[g]);var U=c.useMemo(function(){function E(){for(var _=window,Bn=_.scrollY,Sn=n.current.offsetHeight,W=o.current.length-1;W>=0;W-=1){var Cn=o.current[W],On=document.getElementById(Cn),Rn=On.offsetTop-Sn-Ge;if(Rn<=Bn){A(Cn);return}}A(void 0)}return Ot()(E)},[]);return c.useEffect(function(){return Ke.forEach(function(E){return window.addEventListener(E,U)}),U(),function(){Ke.forEach(function(E){return window.removeEventListener(E,U)})}},[]),(0,e.jsx)("div",{className:v()(N,L&&P),ref:n,children:(0,e.jsx)(Rt.Z,{activeKey:L,onChange:C,items:o.current.map(function(E){return{key:E,label:(0,e.jsx)("span",{className:K,children:E.replace(/-/g," ")})}})})})},Zt=Ht,Xe,Je,Qe,Ye=40,ne=1208,pe=24,Wt=(0,h.kc)(function(a){var n=a.token,o=a.css,i=n.antCls;return{resourcePage:o(Xe||(Xe=d()([`
      footer {
        margin-top: 176px;

        .rc-footer-container {
          max-width: `,`px;
          margin: 0 auto;
          padding-right: 0;
          padding-left: 0;
        }
      }
    `])),ne),resourceContent:o(Je||(Je=d()([`
      padding: 0 `,`px;
      max-width: `,`px;
      margin: 0 auto;
      box-sizing: content-box;
      min-height: 100vh;

      > .markdown {
        > p {
          margin-bottom: 56px;
        }

        h2 {
          margin-top: 124px;
          color: #314659;
          font-weight: lighter;
          font-size: 30px;
          line-height: 38px;

          &:first-child {
            margin-top: 88px;
          }
        }

        h3 {
          margin-top: 56px;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
        }

        p {
          color: #697b8c;
        }
      }

      @media only screen and (max-width: 767.99px) {
        & {
          article {
            padding: 0 `,`px;
          }

          `,`-col {
            padding-top: 16px !important;
            padding-bottom: 16px !important;
          }
        }
      }
    `])),Ye,ne,pe,i),banner:o(Qe||(Qe=d()([`
      padding: 0 `,`px;
      overflow: hidden;
      background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');
      background-size: cover;

      h1 {
        box-sizing: content-box;
        max-width: `,`px;
        margin: 56px auto 16px;
      }

      section {
        max-width: `,`px;
        margin: 0 auto 56px;
        font-weight: 200;
        font-size: 16px;
        line-height: 24px;
      }

      @media only screen and (max-width: 767.99px) {
        & {
          margin: 0 -`,`px;
          padding: 0 `,`px;
        }
      }
    `])),Ye,ne,ne,pe,pe)}}),$t=function(n){var o,i=n.children,u=Wt(),g=u.styles,p=(0,l.useRouteMeta)();return(0,e.jsx)(k.ZP,{theme:{token:{colorBgLayout:"#fff"}},children:(0,e.jsxs)(At.Z,{children:[(0,e.jsx)(We,{}),(0,e.jsxs)("div",{id:"resources-page",className:g.resourcePage,children:[(0,e.jsx)(Zt,{}),(0,e.jsxs)("div",{className:g.banner,children:[(0,e.jsxs)(Ze.Z.Title,{style:{fontSize:30},children:[(o=p.frontmatter)===null||o===void 0?void 0:o.title,(0,e.jsx)(Ft.default,{title:(0,e.jsx)(l.FormattedMessage,{id:"app.content.edit-page"}),filename:p.frontmatter.filename})]}),(0,e.jsx)("section",{children:p.frontmatter.description})]}),(0,e.jsx)("div",{className:g.resourceContent,children:i}),(0,e.jsx)(He.default,{})]})]})})},Ut=$t,Vt=t(945016),Kt=t(217187),Gt=t(524229),Xt=t(575054),Jt=t(442708),Qt=function(n){var o=n.children,i=n.fallback,u=i===void 0?(0,e.jsx)(Xt.Z.Input,{active:!0,size:"small"}):i,g=n.delay,p=g===void 0?200:g;return(0,e.jsx)(Jt.df,{triggerOnce:!0,delay:p,children:function(j){var L=j.inView,A=j.ref;return(0,e.jsx)("div",{ref:A,children:(0,e.jsx)(c.Suspense,{fallback:u,children:L?o:(0,e.jsx)("span",{})})})}})},Pn=Qt,qe,Yt=c.lazy(function(){return t.e(16175).then(t.bind(t,516175))}),qt=c.lazy(function(){return t.e(49148).then(t.bind(t,349148))}),_t=c.lazy(function(){return t.e(68301).then(t.bind(t,368301))}),no=c.lazy(function(){return t.e(58598).then(t.bind(t,458598))}),eo=c.lazy(function(){return Promise.resolve().then(t.bind(t,777502))}),to=c.lazy(function(){return t.e(66720).then(t.bind(t,366720))}),oo=c.lazy(function(){return Promise.all([t.e(2281),t.e(15926)]).then(t.bind(t,615926))}),ro=c.lazy(function(){return Promise.resolve().then(t.bind(t,148050))}),ao=(0,h.kc)(function(a){var n=a.token,o=a.css;return{articleWrapper:o(qe||(qe=d()([`
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
  `])),n.screenLG)}}),io=function(n){var o,i,u,g=n.children,p=(0,l.useRouteMeta)(),S=(0,on.Z)(),j=S.pathname,L=S.hash,A=(0,c.useContext)(_n.Z),H=A.direction,Z=ao(),N=Z.styles,P=(0,Kt.Z)(!1),K=D()(P,2),C=K[0],U=K[1],E=(0,c.useMemo)(function(){var W;return((W=p.toc)===null||W===void 0?void 0:W.filter(function(Cn){return Cn._debug_demo}).map(function(Cn){return Cn.id}))||[]},[p]),_=E.includes(L.slice(1));(0,c.useLayoutEffect)(function(){U(_)},[]);var Bn=(0,c.useMemo)(function(){return{showDebug:C,setShowDebug:U}},[C,E]),Sn=H==="rtl";return(0,e.jsx)(Gt.Z.Provider,{value:Bn,children:(0,e.jsxs)(Zn.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[(0,e.jsx)(Pn,{fallback:null,children:(0,e.jsx)(_t,{showDebug:C,debugDemos:E})}),(0,e.jsxs)("article",{className:v()(N.articleWrapper,{rtl:Sn}),children:[(o=p.frontmatter)!==null&&o!==void 0&&o.title?(0,e.jsxs)(Ze.Z.Title,{style:{fontSize:30,position:"relative"},children:[(0,e.jsxs)(Vt.Z,{size:"small",children:[(i=p.frontmatter)===null||i===void 0?void 0:i.title,(u=p.frontmatter)===null||u===void 0?void 0:u.subtitle,!j.startsWith("/components/overview")&&(0,e.jsx)(Pn,{fallback:null,children:(0,e.jsx)(ro,{title:(0,e.jsx)(l.FormattedMessage,{id:"app.content.edit-page"}),filename:p.frontmatter.filename})})]}),j.startsWith("/components/")&&(0,e.jsx)(Pn,{fallback:null,children:(0,e.jsx)(oo,{pathname:j})})]}):null,(0,e.jsx)(Pn,{fallback:null,children:(0,e.jsx)(no,{})}),!p.frontmatter.__autoDescription&&p.frontmatter.description,(0,e.jsx)("div",{style:{minHeight:"calc(100vh - 64px)"},children:g}),(0,e.jsx)(Pn,{children:(0,e.jsx)(qt,{zhihuLink:p.frontmatter.zhihu_url,yuqueLink:p.frontmatter.yuque_url,juejinLink:p.frontmatter.juejin_url})}),(0,e.jsx)(Pn,{children:(0,e.jsx)(Yt,{filename:p.frontmatter.filename})})]}),(0,e.jsx)(Pn,{fallback:null,children:(0,e.jsx)(to,{rtl:Sn})}),(0,e.jsx)(eo,{})]})})},lo=io,so=t(650010),co=t(361446),_e,nt,po=(0,h.kc)(function(a){var n=a.token,o=a.css,i=n.antCls,u=n.fontFamily,g=n.colorSplit;return{asideContainer:o(_e||(_e=d()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: 14px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
        > `,`-menu-submenu
        > `,`-menu-submenu-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item,
        &`,`-menu-inline
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item {
          padding-left: 40px !important;

          `,`-row-rtl & {
            padding-right: 40px !important;
            padding-left: 16px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-left: 4px;
            padding-left: 60px;

            `,`-row-rtl & {
              padding-right: 60px;
              padding-left: 16px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-left: 80px !important;

            `,`-row-rtl & {
              padding-right: 80px !important;
              padding-left: 16px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }

      .chinese {
        margin-left: 6px;
        font-weight: normal;
        font-size: 12px;
        opacity: 0.67;
      }
    `])),u,i,i,i,i,i,i,g,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),mainMenu:o(nt||(nt=d()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: `,`px;
        width: 100%;
        height: 100%;
        max-height: calc(100vh - `,`px);
        overflow: hidden;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])),n.headerHeight+n.contentMarginTop,n.headerHeight+n.contentMarginTop)}}),uo=function(){var n=(0,l.useSidebarData)(),o=(0,c.useContext)(_n.Z),i=o.isMobile,u=o.theme,g=po(),p=g.styles,S=(0,co.Z)(),j=D()(S,2),L=j[0],A=j[1],H=u.includes("dark"),Z=(0,h.Fg)(),N=Z.colorBgContainer,P=(0,e.jsx)(k.ZP,{theme:{components:{Menu:{itemBg:N,darkItemBg:N}}},children:(0,e.jsx)(ke.Z,{items:L,inlineIndent:30,className:p.asideContainer,mode:"inline",theme:H?"dark":"light",selectedKeys:[A],defaultOpenKeys:n==null?void 0:n.map(function(K){var C=K.title;return C}).filter(function(K){return K})})});return i?(0,e.jsx)(so.Z,{children:P},"Mobile-menu"):(0,e.jsx)(Zn.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:p.mainMenu,children:(0,e.jsx)("section",{className:"main-menu-inner",children:P})})},mo=uo,et,go=(0,h.kc)(function(a){var n=a.css,o=a.token;return{main:n(et||(et=d()([`
    display: flex;
    margin-top: `,`px;
  `])),o.contentMarginTop)}}),ho=function(n){var o=n.children,i=go(),u=i.styles;return(0,e.jsxs)("main",{className:u.main,children:[(0,e.jsx)(We,{}),(0,e.jsx)(mo,{}),(0,e.jsx)(lo,{children:o})]})},xo=ho,fo={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},vo=function(){var n=(0,l.useOutlet)(),o=(0,on.Z)(),i=o.pathname,u=o.search,g=o.hash,p=(0,tn.Z)(fo),S=D()(p,2),j=S[0],L=S[1],A=(0,c.useRef)(null),H=(0,c.useContext)(_n.Z),Z=H.direction,N=(0,l.useSiteData)(),P=N.loading;(0,c.useLayoutEffect)(function(){L==="cn"?X().locale("zh-cn"):X().locale("en")},[]),(0,c.useEffect)(function(){var C=document.getElementById("nprogress-style");C&&(A.current=setTimeout(function(){var U;(U=C.parentNode)===null||U===void 0||U.removeChild(C)},0))},[]),(0,c.useEffect)(function(){var C,U=g.replace("#","");U&&((C=document.getElementById(decodeURIComponent(U)))===null||C===void 0||C.scrollIntoView())},[P,g]),(0,c.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",i+u)},[o]);var K=(0,c.useMemo)(function(){return["","/"].some(function(C){return C===i})||["/index"].some(function(C){return i.startsWith(C)})?(0,e.jsx)(Lt,{title:j.title,desc:j.description,children:n}):i.startsWith("/docs/resource")?(0,e.jsx)(Ut,{children:n}):i.startsWith("/theme-editor")?n:(0,e.jsx)(xo,{children:n})},[i,n]);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(l.Helmet,{encodeSpecialCharacters:!1,children:[(0,e.jsx)("html",{lang:L==="cn"?"zh-CN":L,"data-direction":Z,className:v()({rtl:Z==="rtl"})}),(0,e.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,e.jsx)("meta",{property:"og:description",content:j.description}),(0,e.jsx)("meta",{property:"og:type",content:"website"}),(0,e.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,e.jsxs)(k.ZP,{direction:Z,locale:L==="cn"?y.Z:void 0,children:[(0,e.jsx)(Fn,{}),(0,e.jsx)(Et,{}),K]})]})},bo=vo},777502:function(In,G,t){t.r(G),t.d(G,{default:function(){return Tn}});var sn=t(805574),D=t.n(sn),fn=t(168400),v=t.n(fn),T=t(639389),X=t(510274),vn=t(65630),l=t(385956),c=t(391298),y=t(667294),k=t(630770),tn=t(302559),on=t(438746),nn=t(438199),d=t(693399),r=t(785893),h="ant-where-checker",e={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function bn(){var mn=(0,tn.Z)(e),V=D()(mn,1),Q=V[0],$=y.useState(!0),R=D()($,2),z=R[0],b=R[1];return y.useEffect(function(){var B=document.createElement("p");B.className=h,B.style.position="fixed",B.style.pointerEvents="none",B.style.visibility="hidden",B.style.width="0",document.body.appendChild(B),(0,d.updateCSS)(`
:where(.`.concat(h,`) {
  content: "__CHECK__";
}
    `),h);var an=getComputedStyle(B),yn=an.content;b(String(yn).includes("CHECK")),document.body.removeChild(B),(0,d.removeCSS)(h)},[]),z?null:(0,r.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,r.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[Q.whereNotSupport," ",(0,r.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:Q.whereDocUrl,children:Q.whereDocTitle})]})})}var rn,dn,An={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},kn=function(){var V=(0,y.useContext)(nn.Z),Q=V.isMobile;return(0,vn.kc)(function($){var R=$.token,z=$.css,b=new X.C((0,k.Z)("#f0f3fa","#fff")).onBackground(R.colorBgContainer).toHexString();return{holder:z(rn||(rn=v()([`
      background: `,`;
    `])),b),footer:z(dn||(dn=v()([`
      background: `,`;
      color: `,`;
      box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

      * {
        box-sizing: border-box;
      }

      h2,
      a {
        color: `,`;
      }

      .rc-footer-column {
        margin-bottom: `,`px;
        :last-child {
          margin-bottom: `,`px;
        }
      }

      .rc-footer-item-icon {
        top: -1.5px;
      }

      .rc-footer-container {
        max-width: 1208px;
        margin-inline: auto;
        padding-inline: `,`px;
      }

      .rc-footer-bottom {
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
        .rc-footer-bottom-container {
          font-size: `,`px;
        }
      }
    `])),b,R.colorTextSecondary,R.colorText,Q?60:0,Q?20:0,R.marginXXL,R.fontSize)}})()},J=function(){var V=(0,on.Z)(),Q=(0,tn.Z)(An),$=D()(Q,2),R=$[0],z=$[1],b=kn(),B=b.styles,an=V.getLink,yn=y.useMemo(function(){var cn=z==="cn",En={title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:cn?"https://ant-design-charts.antgroup.com":"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:cn?"https://ant-design-mobile.antgroup.com/zh":"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:cn?"https://ant-design-mini.antgroup.com/":"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},Y={title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.community"}),items:[{icon:(0,r.jsx)(T.AntDesignOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,r.jsx)(T.MediumOutlined,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,r.jsx)(T.TwitterOutlined,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,r.jsx)(T.ZhihuOutlined,{style:{color:"#056de8"}}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,r.jsx)(T.ZhihuOutlined,{style:{color:"#056de8"}}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf"}),title:"SEE Conf",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};cn&&Y.items.push({icon:(0,r.jsx)(T.UsergroupAddOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.work_with_us"}),url:an("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:l.Link});var f={title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.help"}),items:[{icon:(0,r.jsx)(T.GithubOutlined,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,r.jsx)(T.HistoryOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.change-log"}),url:an("/changelog"),LinkComponent:l.Link},{icon:(0,r.jsx)(T.QuestionCircleOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.faq"}),url:an("/docs/react/faq"),LinkComponent:l.Link},{icon:(0,r.jsx)(T.BugOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,r.jsx)(T.IssuesCloseOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,r.jsx)(T.MessageOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,r.jsx)(T.QuestionCircleOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,r.jsx)(T.QuestionCircleOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},m={icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech"}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.more-product"}),items:[{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV"}),title:"AntV",url:"https://antv.antgroup.com",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"kitchen"}),title:"Kitchen",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_j9rjmc/afts/img/A*3ittT5OEo2gAAAAAAAAAAAAADvGmAQ/original",width:16,height:16,alt:"Galacean"}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.galacean"}),description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.galacean.slogan"}),url:"https://galacean.antgroup.com/",openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech"}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,r.jsx)(T.BgColorsOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.theme"}),url:an("/theme-editor"),LinkComponent:l.Link}]};return[En,Y,f,m]},[z,V.search]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Z,{columns:yn,className:B.footer,bottom:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,r.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,r.jsx)("div",{children:R.owner})]})}),(0,r.jsx)(bn,{})]})},Tn=J},647727:function(In,G,t){t.d(G,{Z:function(){return sn.Z}});var sn=t(582485)},86198:function(In,G,t){t.d(G,{Z:function(){return f}});var sn=t(719632),D=t.n(sn),fn=t(9783),v=t.n(fn),T=t(805574),X=t.n(T),vn=t(513769),l=t.n(vn),c=t(97857),y=t.n(c),k=t(667294),tn=t(693967),on=t.n(tn),nn=t(518475),d=t(73287),r=t(121790),h=t(45598),e=t(296708);function bn(m,s,x){if(typeof x=="boolean")return x;if(m.length)return!0;var w=(0,h.default)(s);return w.some(function(I){return I.type===e.Z})}var rn=t(900210),dn=t(286665),An=function(s){var x,w=s.componentCls,I=s.bodyBg,F=s.lightSiderBg,q=s.lightTriggerBg,en=s.lightTriggerColor;return v()({},"".concat(w,"-sider-light"),(x={background:F},v()(x,"".concat(w,"-sider-trigger"),{color:en,background:q}),v()(x,"".concat(w,"-sider-zero-width-trigger"),{color:en,background:q,border:"1px solid ".concat(I),borderInlineStart:0}),x))},kn=An,J=function(s){var x,w,I=s.antCls,F=s.componentCls,q=s.colorText,en=s.triggerColor,wn=s.footerBg,gn=s.triggerBg,pn=s.headerHeight,jn=s.headerPadding,zn=s.headerColor,Ln=s.footerPadding,Mn=s.triggerHeight,Dn=s.zeroTriggerHeight,Fn=s.zeroTriggerWidth,Nn=s.motionDurationMid,M=s.motionDurationSlow,Vn=s.fontSize,ln=s.borderRadius,hn=s.bodyBg,Kn=s.headerBg,Hn=s.siderBg;return w={},v()(w,F,y()(y()((x={display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:hn,"&, *":{boxSizing:"border-box"}},v()(x,"&".concat(F,"-has-sider"),v()({flexDirection:"row"},"> ".concat(F,", > ").concat(F,"-content"),{width:0})),v()(x,"".concat(F,"-header, &").concat(F,"-footer"),{flex:"0 0 auto"}),v()(x,"".concat(F,"-sider"),{position:"relative",minWidth:0,background:Hn,transition:"all ".concat(Nn,", background 0s"),"&-children":v()({height:"100%",marginTop:-.1,paddingTop:.1},"".concat(I,"-menu").concat(I,"-menu-inline-collapsed"),{width:"auto"}),"&-has-trigger":{paddingBottom:Mn},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:Mn,color:en,lineHeight:(0,rn.unit)(Mn),textAlign:"center",background:gn,cursor:"pointer",transition:"all ".concat(Nn)},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:pn,insetInlineEnd:s.calc(Fn).mul(-1).equal(),zIndex:1,width:Fn,height:Dn,color:en,fontSize:s.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:Hn,borderStartStartRadius:0,borderStartEndRadius:ln,borderEndEndRadius:ln,borderEndStartRadius:0,cursor:"pointer",transition:"background ".concat(M," ease"),"&::after":{position:"absolute",inset:0,background:"transparent",transition:"all ".concat(M),content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:s.calc(Fn).mul(-1).equal(),borderStartStartRadius:ln,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:ln}}}}),x),kn(s)),{},{"&-rtl":{direction:"rtl"}})),v()(w,"".concat(F,"-header"),v()({height:pn,padding:jn,color:zn,lineHeight:(0,rn.unit)(pn),background:Kn},"".concat(I,"-menu"),{lineHeight:"inherit"})),v()(w,"".concat(F,"-footer"),{padding:Ln,color:q,fontSize:Vn,background:wn}),v()(w,"".concat(F,"-content"),{flex:"auto",minHeight:0}),w},Tn=function(s){var x=s.colorBgLayout,w=s.controlHeight,I=s.controlHeightLG,F=s.colorText,q=s.controlHeightSM,en=s.marginXXS,wn=s.colorTextLightSolid,gn=s.colorBgContainer,pn=I*1.25;return{colorBgHeader:"#001529",colorBgBody:x,colorBgTrigger:"#002140",bodyBg:x,headerBg:"#001529",headerHeight:w*2,headerPadding:"0 ".concat(pn,"px"),headerColor:F,footerPadding:"".concat(q,"px ").concat(pn,"px"),footerBg:x,siderBg:"#001529",triggerHeight:I+en*2,triggerBg:"#002140",triggerColor:wn,zeroTriggerWidth:I,zeroTriggerHeight:I,lightSiderBg:gn,lightTriggerBg:gn,lightTriggerColor:F}},mn=(0,dn.I$)("Layout",function(m){return[J(m)]},Tn,{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]}),V=t(785893),Q=["prefixCls","suffixCls","className","tagName"],$=["prefixCls","className","rootClassName","children","hasSider","tagName","style"];function R(m){var s=m.suffixCls,x=m.tagName,w=m.displayName;return function(I){var F=k.forwardRef(function(q,en){return(0,V.jsx)(I,y()({ref:en,suffixCls:s,tagName:x},q))});return F}}var z=k.forwardRef(function(m,s){var x=m.prefixCls,w=m.suffixCls,I=m.className,F=m.tagName,q=l()(m,Q),en=k.useContext(d.E_),wn=en.getPrefixCls,gn=wn("layout",x),pn=mn(gn),jn=X()(pn,3),zn=jn[0],Ln=jn[1],Mn=jn[2],Dn=w?"".concat(gn,"-").concat(w):gn;return zn((0,V.jsx)(F,y()({className:on()(x||Dn,I,Ln,Mn),ref:s},q)))}),b=k.forwardRef(function(m,s){var x,w=k.useContext(d.E_),I=w.direction,F=k.useState([]),q=X()(F,2),en=q[0],wn=q[1],gn=m.prefixCls,pn=m.className,jn=m.rootClassName,zn=m.children,Ln=m.hasSider,Mn=m.tagName,Dn=m.style,Fn=l()(m,$),Nn=(0,nn.default)(Fn,["suffixCls"]),M=k.useContext(d.E_),Vn=M.getPrefixCls,ln=M.layout,hn=Vn("layout",gn),Kn=bn(en,zn,Ln),Hn=mn(hn),Gn=X()(Hn,3),oe=Gn[0],re=Gn[1],Zn=Gn[2],ae=on()(hn,(x={},v()(x,"".concat(hn,"-has-sider"),Kn),v()(x,"".concat(hn,"-rtl"),I==="rtl"),x),ln==null?void 0:ln.className,pn,jn,re,Zn),ie=k.useMemo(function(){return{siderHook:{addSider:function(Xn){wn(function(Wn){return[].concat(D()(Wn),[Xn])})},removeSider:function(Xn){wn(function(Wn){return Wn.filter(function(se){return se!==Xn})})}}}},[]);return oe((0,V.jsx)(r.V.Provider,{value:ie,children:(0,V.jsx)(Mn,y()(y()({ref:s,className:ae,style:y()(y()({},ln==null?void 0:ln.style),Dn)},Nn),{},{children:zn}))}))}),B=R({tagName:"div",displayName:"Layout"})(b),an=R({suffixCls:"header",tagName:"header",displayName:"Header"})(z),yn=R({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(z),cn=R({suffixCls:"content",tagName:"main",displayName:"Content"})(z),En=B,Y=En;Y.Header=an,Y.Footer=yn,Y.Content=cn,Y.Sider=e.Z,Y._InternalSiderContext=e.D;var f=Y},715778:function(In,G,t){t.d(G,{Z:function(){return tn}});var sn=t(174219),D=t(97857),fn=t.n(D),v=t(585369),T={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},X=T,vn={lang:fn()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},v.Z),timePickerLocale:fn()({},X)};vn.lang.ok="\u786E\u5B9A";var l=vn,c=l,y="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",k={locale:"zh-cn",Pagination:sn.Z,DatePicker:l,TimePicker:X,Calendar:c,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:y,method:y,array:y,object:y,number:y,date:y,boolean:y,integer:y,float:y,regexp:y,email:y,url:y,hex:y},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},tn=k}}]);
