(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{ZOrW:function(a,e,t){"use strict";t.r(e);t("PRpT");var n,s,l,r=t("OJei"),i=(t("0zGU"),t("iuVw")),o=(t("kCtL"),t("NrKu")),c=(t("YWC5"),t("t+4Z")),d=(t("wtwB"),t("jGaU")),p=t("43Yg"),u=t.n(p),h=t("/tCh"),g=t.n(h),y=t("scpF"),m=t.n(y),f=t("O/V9"),b=t.n(f),k=t("8aBX"),v=t.n(k),E=t("uqIC"),D=t.n(E),C=t("LneV"),T=t("v99g"),P=t("+n12"),S=t("lVjH"),w=t.n(S),x=t("xqX8"),R=D.a.lazy(function(){return Promise.all([t.e(1),t.e(0),t.e(43)]).then(t.bind(null,"Y65U"))}),V=D.a.lazy(function(){return Promise.all([t.e(1),t.e(0),t.e(46)]).then(t.bind(null,"20K/"))}),O=D.a.lazy(function(){return Promise.all([t.e(1),t.e(0),t.e(47)]).then(t.bind(null,"b2ve"))}),G=D.a.lazy(function(){return Promise.all([t.e(1),t.e(0),t.e(45)]).then(t.bind(null,"tLGd"))}),L=D.a.lazy(function(){return Promise.all([t.e(1),t.e(0),t.e(44)]).then(t.bind(null,"Jqna"))}),j=(n=Object(C["connect"])(function(a){var e=a.chart,t=a.loading;return{chart:e,loading:t.effects["chart/fetch"]}}),n((l=function(a){function e(){var a,t;u()(this,e);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return t=m()(this,(a=b()(e)).call.apply(a,[this].concat(s))),t.state={salesType:"all",currentTabKey:"",rangePickerValue:Object(P["d"])("year")},t.handleChangeSalesType=function(a){t.setState({salesType:a.target.value})},t.handleTabChange=function(a){t.setState({currentTabKey:a})},t.handleRangePickerChange=function(a){var e=t.props.dispatch;t.setState({rangePickerValue:a}),e({type:"chart/fetchSalesData"})},t.selectDate=function(a){var e=t.props.dispatch;t.setState({rangePickerValue:Object(P["d"])(a)}),e({type:"chart/fetchSalesData"})},t.isActive=function(a){var e=t.state.rangePickerValue,n=Object(P["d"])(a);return e[0]&&e[1]&&e[0].isSame(n[0],"day")&&e[1].isSame(n[1],"day")?w.a.currentDate:""},t}return v()(e,a),g()(e,[{key:"componentDidMount",value:function(){var a=this.props.dispatch;this.reqRef=requestAnimationFrame(function(){a({type:"chart/fetch"})})}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.reqRef)}},{key:"render",value:function(){var a,e=this.state,t=e.rangePickerValue,n=e.salesType,s=e.currentTabKey,l=this.props,p=l.chart,u=l.loading,h=p.visitData,g=p.visitData2,y=p.salesData,m=p.searchData,f=p.offlineData,b=p.offlineChartData,k=p.salesTypeData,v=p.salesTypeDataOnline,C=p.salesTypeDataOffline;a="all"===n?k:"online"===n?v:C;var P=D.a.createElement(d["b"],null,D.a.createElement(d["b"].Item,null,"\u64cd\u4f5c\u4e00"),D.a.createElement(d["b"].Item,null,"\u64cd\u4f5c\u4e8c")),S=D.a.createElement("span",{className:w.a.iconGroup},D.a.createElement(o["a"],{overlay:P,placement:"bottomRight"},D.a.createElement(c["a"],{type:"ellipsis"}))),j=s||f[0]&&f[0].name;return D.a.createElement(T["a"],null,D.a.createElement(E["Suspense"],{fallback:D.a.createElement(x["default"],null)},D.a.createElement(R,{loading:u,visitData:h})),D.a.createElement(E["Suspense"],{fallback:null},D.a.createElement(V,{rangePickerValue:t,salesData:y,isActive:this.isActive,handleRangePickerChange:this.handleRangePickerChange,loading:u,selectDate:this.selectDate})),D.a.createElement("div",{className:w.a.twoColLayout},D.a.createElement(r["a"],{gutter:24,type:"flex"},D.a.createElement(i["a"],{xl:12,lg:24,md:24,sm:24,xs:24},D.a.createElement(E["Suspense"],{fallback:null},D.a.createElement(O,{loading:u,visitData2:g,selectDate:this.selectDate,searchData:m,dropdownGroup:S}))),D.a.createElement(i["a"],{xl:12,lg:24,md:24,sm:24,xs:24},D.a.createElement(E["Suspense"],{fallback:null},D.a.createElement(G,{dropdownGroup:S,salesType:n,loading:u,salesPieData:a,handleChangeSalesType:this.handleChangeSalesType}))))),D.a.createElement(E["Suspense"],{fallback:null},D.a.createElement(L,{activeKey:j,loading:u,offlineData:f,offlineChartData:b,handleTabChange:this.handleTabChange})))}}]),e}(E["Component"]),s=l))||s);e["default"]=j},lVjH:function(a,e,t){a.exports={iconGroup:"antd-pro-pages-dashboard-analysis-iconGroup",rankingList:"antd-pro-pages-dashboard-analysis-rankingList",rankingItemNumber:"antd-pro-pages-dashboard-analysis-rankingItemNumber",active:"antd-pro-pages-dashboard-analysis-active",rankingItemTitle:"antd-pro-pages-dashboard-analysis-rankingItemTitle",salesExtra:"antd-pro-pages-dashboard-analysis-salesExtra",currentDate:"antd-pro-pages-dashboard-analysis-currentDate",salesCard:"antd-pro-pages-dashboard-analysis-salesCard",salesBar:"antd-pro-pages-dashboard-analysis-salesBar",salesRank:"antd-pro-pages-dashboard-analysis-salesRank",salesCardExtra:"antd-pro-pages-dashboard-analysis-salesCardExtra",salesTypeRadio:"antd-pro-pages-dashboard-analysis-salesTypeRadio",offlineCard:"antd-pro-pages-dashboard-analysis-offlineCard",twoColLayout:"antd-pro-pages-dashboard-analysis-twoColLayout",trendText:"antd-pro-pages-dashboard-analysis-trendText",rankingTitle:"antd-pro-pages-dashboard-analysis-rankingTitle",salesExtraWrap:"antd-pro-pages-dashboard-analysis-salesExtraWrap"}}}]);