(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{GsTM:function(r,e,n){"use strict";n.r(e);n("TAVJ");var t,a,i,o=n("G7aO"),c=(n("6Pgc"),n("aF2B")),g=(n("zSoP"),n("tSsm")),s=n("43Yg"),u=n.n(s),l=n("/tCh"),p=n.n(l),d=n("scpF"),f=n.n(d),y=n("O/V9"),E=n.n(y),h=n("8aBX"),m=n.n(h),w=n("uqIC"),C=n.n(w),k=n("LneV"),v=n("uUKN"),b=n.n(v),J=(t=Object(k["connect"])(function(r){return{isloading:r.error.isloading}}),t((i=function(r){function e(){var r,n;u()(this,e);for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return n=f()(this,(r=E()(e)).call.apply(r,[this].concat(a))),n.state={isloading:!1},n.triggerError=function(r){n.setState({isloading:!0});var e=n.props.dispatch;e({type:"error/query",payload:{code:r}})},n}return m()(e,r),p()(e,[{key:"render",value:function(){var r=this,e=this.state.isloading;return C.a.createElement(o["a"],null,C.a.createElement(c["a"],{spinning:e,wrapperClassName:b.a.trigger},C.a.createElement(g["a"],{type:"danger",onClick:function(){return r.triggerError(401)}},"\u89e6\u53d1401"),C.a.createElement(g["a"],{type:"danger",onClick:function(){return r.triggerError(403)}},"\u89e6\u53d1403"),C.a.createElement(g["a"],{type:"danger",onClick:function(){return r.triggerError(500)}},"\u89e6\u53d1500"),C.a.createElement(g["a"],{type:"danger",onClick:function(){return r.triggerError(404)}},"\u89e6\u53d1404")))}}]),e}(w["PureComponent"]),a=i))||a);e["default"]=J},uUKN:function(r,e,n){r.exports={trigger:"antd-pro-pages-exception-style-trigger"}}}]);