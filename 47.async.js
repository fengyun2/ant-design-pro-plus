(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[47],{b2ve:function(e,a,t){"use strict";t.r(a);t("TAVJ");var n=t("G7aO"),r=(t("HenM"),t("5Xg0")),s=(t("PRpT"),t("OJei")),l=(t("0zGU"),t("iuVw")),i=(t("8nT2"),t("rScA")),o=(t("YWC5"),t("t+4Z")),c=t("uqIC"),d=t.n(c),m=t("suRj"),u=t("BS6i"),g=t.n(u),p=t("YR7N"),y=t("lVjH"),E=t.n(y),f=t("LOQS"),M=t("KTCi"),h=[{title:d.a.createElement(m["FormattedMessage"],{id:"app.analysis.table.rank",defaultMessage:"Rank"}),dataIndex:"index",key:"index"},{title:d.a.createElement(m["FormattedMessage"],{id:"app.analysis.table.search-keyword",defaultMessage:"Search keyword"}),dataIndex:"keyword",key:"keyword",render:function(e){return d.a.createElement("a",{href:"/"},e)}},{title:d.a.createElement(m["FormattedMessage"],{id:"app.analysis.table.users",defaultMessage:"Users"}),dataIndex:"count",key:"count",sorter:function(e,a){return e.count-a.count},className:E.a.alignRight},{title:d.a.createElement(m["FormattedMessage"],{id:"app.analysis.table.weekly-range",defaultMessage:"Weekly Range"}),dataIndex:"range",key:"range",sorter:function(e,a){return e.range-a.range},render:function(e,a){return d.a.createElement(p["a"],{flag:1===a.status?"down":"up"},d.a.createElement("span",{style:{marginRight:4}},e,"%"))},align:"right"}],w=Object(c["memo"])(function(e){var a=e.loading,t=e.visitData2,c=e.searchData,u=e.dropdownGroup;return d.a.createElement(n["a"],{loading:a,bordered:!1,title:d.a.createElement(m["FormattedMessage"],{id:"app.analysis.online-top-search",defaultMessage:"Online Top Search"}),extra:u,style:{marginTop:24}},d.a.createElement(s["a"],{gutter:68},d.a.createElement(l["a"],{sm:12,xs:24,style:{marginBottom:24}},d.a.createElement(f["a"],{subTitle:d.a.createElement("span",null,d.a.createElement(m["FormattedMessage"],{id:"app.analysis.search-users",defaultMessage:"search users"}),d.a.createElement(i["a"],{title:d.a.createElement(m["FormattedMessage"],{id:"app.analysis.introduce",defaultMessage:"introduce"})},d.a.createElement(o["a"],{style:{marginLeft:8},type:"info-circle-o"}))),gap:8,total:g()(12321).format("0,0"),status:"up",subTotal:17.1}),d.a.createElement(M["e"],{line:!0,height:45,data:t})),d.a.createElement(l["a"],{sm:12,xs:24,style:{marginBottom:24}},d.a.createElement(f["a"],{subTitle:d.a.createElement("span",null,d.a.createElement(m["FormattedMessage"],{id:"app.analysis.per-capita-search",defaultMessage:"Per Capita Search"}),d.a.createElement(i["a"],{title:d.a.createElement(m["FormattedMessage"],{id:"app.analysis.introduce",defaultMessage:"introduce"})},d.a.createElement(o["a"],{style:{marginLeft:8},type:"info-circle-o"}))),total:2.7,status:"down",subTotal:26.2,gap:8}),d.a.createElement(M["e"],{line:!0,height:45,data:t}))),d.a.createElement(r["a"],{rowKey:function(e){return e.index},size:"small",columns:h,dataSource:c,pagination:{style:{marginBottom:0},pageSize:5}}))});a["default"]=w}}]);