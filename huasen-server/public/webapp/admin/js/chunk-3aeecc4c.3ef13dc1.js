(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3aeecc4c"],{"3bd3":function(t,e,i){},a00a:function(t,e,i){"use strict";i("3bd3")},fb5f:function(t,e,i){"use strict";i.r(e);var s={name:"HomeSystem",props:{system:{type:Object,default:()=>({time:[],cpu:[],memory:[]})}},watch:{system:{handler(){this.$nextTick(()=>{this.initMemoryChart()})},deep:!0,immediate:!0}},data:()=>({disk:{diskName:"默认磁盘",freeValue:"50G",totalValue:"100G",useValue:"50G",useUsage:.5}}),mounted(){this.queryDiskOverview()},methods:{queryDiskOverview(){this.API.statistics.diskInfo({},{notify:!1}).then(t=>{this.disk=t.data,this.initStoreChart()})},initStoreChart(){let t={series:[{type:"liquidFill",radius:"80%",color:["#fbc607","#21d0c3",this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#4293fd"},{offset:.8,color:"#4293fd"}])],data:[this.disk.useUsage,this.disk.useUsage,this.disk.useUsage],center:["70%","50%"],label:{normal:{formatter:(100*this.disk.useUsage).toFixed(2)+"%",fontSize:18,fontWeight:400,color:"#555"}},itemStyle:{opacity:.6,shadowBlur:0},emphasis:{itemStyle:{opacity:.8}},outline:{borderDistance:2,itemStyle:{borderColor:"#5fa5fa",borderWidth:4}},backgroundStyle:{color:"#fff"}}]};this.storeChart=this.$echarts.init(document.getElementById("disk-chart")),this.storeChart.setOption(t)},initMemoryChart(){let t={title:{text:"CPU/内存占用率",textStyle:{align:"center",color:"#8c8c8c",fontSize:12},top:"6",left:"0"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"10",right:"10",bottom:"15%",top:"18%",containLabel:!0},legend:{data:["CPU","内存"],right:10,top:12,textStyle:{color:"#8c8c8c"},itemWidth:12,itemHeight:10},xAxis:{type:"category",data:this.system.time,axisLine:{lineStyle:{color:"#8c8c8c"}},axisLabel:{textStyle:{fontFamily:"Microsoft YaHei"}}},yAxis:{type:"value",max:"100",axisLine:{show:!1,lineStyle:{color:"#8c8c8c"}},splitLine:{show:!0,lineStyle:{color:"rgba(255, 255, 255, 0.3)"}}},dataZoom:[{show:!0,height:18,xAxisIndex:[0],left:"0",right:"6",bottom:"14",start:0,end:100,textStyle:{color:"#8c8c8c"},borderColor:"#8c8c8c"},{type:"inside",show:!0,height:15,start:2,end:35}],series:[{name:"CPU",type:"bar",barWidth:"15%",itemStyle:{normal:{color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#fccb05"},{offset:1,color:"#f5804d"}]),barBorderRadius:12}},data:this.system.cpu},{name:"内存",type:"bar",barWidth:"15%",itemStyle:{normal:{color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#248ff7"},{offset:1,color:"#6851f1"}]),barBorderRadius:11}},data:this.system.memory}]};if(!this.memoryChart){let t=document.getElementById("memory-chart");this.memoryChart=this.$echarts.init(t),this.memoryChartObserve=new ResizeObserver(t=>{this.memoryChart.resize()}),this.memoryChartObserve.observe(t),this.$once("hook:beforeDestroy",(function(){this.memoryChartObserve.unobserve(t)}))}this.memoryChart.setOption(t)},bytesToSize(t){if(0===t)return"0 B";let e=Math.floor(Math.log(t)/Math.log(1e3));return(t/Math.pow(1e3,e)).toPrecision(3)+" "+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][e]}}},a=(i("a00a"),i("2877")),r=Object(a.a)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-system"},[e("div",{staticClass:"store-group shadow"},[e("div",{staticClass:"title"},[t._v("磁盘使用情况")]),e("div",{staticClass:"disk-text text"},[e("div",{staticClass:"text-item text"},[t._v("磁盘名："+t._s(t.disk.diskName))]),e("div",{staticClass:"text-item text"},[t._v("空闲容量："+t._s(t.disk.freeValue))]),e("div",{staticClass:"text-item text"},[t._v("使用占比："+t._s((100*t.disk.useUsage).toFixed(2)+"%"))]),e("div",{staticClass:"text-item text"},[t._v("已用容量："+t._s(t.disk.useValue))]),e("div",{staticClass:"text-item text"},[t._v("总磁盘容量："+t._s(t.disk.totalValue))])]),e("div",{attrs:{id:"disk-chart"}})]),t._m(0)])}),[function(){var t=this._self._c;return t("div",{staticClass:"memory-group shadow"},[t("div",{attrs:{id:"memory-chart"}})])}],!1,null,"70662a50",null);e.default=r.exports}}]);
//# sourceMappingURL=chunk-3aeecc4c.3ef13dc1.js.map