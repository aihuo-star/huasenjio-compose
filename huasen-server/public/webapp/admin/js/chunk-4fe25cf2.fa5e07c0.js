(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4fe25cf2","chunk-655642c3"],{"15f6":function(e,t,i){"use strict";i.r(t);var a=i("1da1"),n=i("2909"),s=(i("96cf"),i("4de4"),i("caad"),i("2532"),i("b0c0"),i("159b"),i("a434"),i("d81d"),i("b76a")),r=i.n(s),c={name:"SiteSelector",components:{HsDrawer:i("1feb").a,Draggable:r.a},props:{currentColumn:{type:Object,default:function(){}}},data:function(){return{searchText:"",searchType:"siteName",selectSites:[],selectSiteIndex:[],sites:[],preSelectSiteIndex:[]}},computed:{displaySites:function(){var e=this;return"tag"===this.searchType?this.searchText?this.sites.filter((function(t){if(t.expand&&"{}"!==t.expand)try{return JSON.parse(t.expand).tag.some((function(i){if(i.toUpperCase().includes(e.searchText.toUpperCase()))return t.targetTagName=i,!0}))}catch(e){console.log("标签筛选异常")}})):this.sites:this.sites.filter((function(t){return t.name.toUpperCase().includes(e.searchText.toUpperCase())}))},searchPlaceholderText:function(){return"请输入"+("tag"===this.searchType?"标签":"网站")+"名称"},showTag:function(){return this.searchText&&"tag"===this.searchType}},watch:{selectSiteIndex:function(){this.handleSelectSite()},sites:function(){this.handleSelectSite()},currentColumn:{handler:function(e,t){try{this.selectSiteIndex=Array.isArray(JSON.parse(e.siteStore))?Object(n.a)(JSON.parse(e.siteStore)):[],this.preSelectSiteIndex=Object(n.a)(this.selectSiteIndex)}catch(e){this.selectSiteIndex=[]}},deep:!0,immediate:!0}},mounted:function(){this.querySite()},methods:{querySite:function(){var e=this;this.API.findSiteByList({},{notify:!1}).then((function(t){e.sites=t.data}))},handleSelectSite:function(){var e=this,t=[];this.selectSiteIndex.forEach((function(i){e.sites.some((function(e){if(e._id===i)return t.push(e),!0}))})),this.selectSites=t},getSelectStatus:function(e){return this.selectSiteIndex.includes(e._id)},imgUrl:function(e){return e.icon?e.icon:i("4101")},selectSite:function(e){var t=e._id,i=this.selectSiteIndex.indexOf(t);-1===i?this.selectSiteIndex.push(t):this.selectSiteIndex.splice(i,1)},save:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var i,a,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=[],a=[],a=e.preSelectSiteIndex.filter((function(t){return-1===e.selectSiteIndex.indexOf(t)})),i=e.selectSiteIndex.filter((function(t){return-1===e.preSelectSiteIndex.indexOf(t)})),n=e.selectSites.map((function(e){return e._id})),t.next=7,e.API.updateColumn({_id:e.currentColumn._id,siteStore:JSON.stringify(n)});case 7:if(!i.length){t.next=10;break}return t.next=10,e.API.bindColumnToSite({columnId:e.currentColumn._id,sites:i});case 10:if(!a.length){t.next=13;break}return t.next=13,e.API.unbindColumnToSite({columnId:e.currentColumn._id,sites:a});case 13:e.$emit("save");case 14:case"end":return t.stop()}}),t)})))()},cancel:function(){this.$emit("cancel"),this.$emit("update:visible",!1)},remove:function(e,t){var i=this.selectSiteIndex.indexOf(e._id);-1!==i&&this.selectSiteIndex.splice(i,1)}}},o=(i("5fd1"),i("2877")),l=Object(o.a)(c,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("HsDrawer",e._g(e._b({},"HsDrawer",e.$attrs,!1),e.$listeners),[i("div",{staticClass:"site-selector"},[i("div",{staticClass:"site-selector-main"},[i("div",{staticClass:"selected"},[i("div",{staticClass:"header"},[i("div",{staticClass:"title"},[e._v("已选择")])]),i("ul",{staticClass:"site-list"},[i("Draggable",{attrs:{filter:".no-drap",animation:"400"},model:{value:e.selectSites,callback:function(t){e.selectSites=t},expression:"selectSites"}},[i("transition-group",e._l(e.selectSites,(function(t,a){return i("li",{key:t._id,staticClass:"site-item drag-item"},[i("i",{staticClass:"el-icon-rank pointer"}),i("div",{staticClass:"name text no-drap"},[e._v(e._s(e._f("emptyTip")(t.name)))]),i("div",{staticClass:"description text no-drap"},[e._v(e._s(e._f("emptyTip")(t.description)))]),i("i",{staticClass:"el-icon-delete pointer remove no-drap",on:{click:function(i){return e.remove(t,a)}}})])})),0)],1)],1)]),i("div",{staticClass:"selecting"},[i("div",{staticClass:"header"},[i("div",{staticClass:"title"},[e._v("待选择")]),i("div",{staticClass:"search"},[i("el-select",{model:{value:e.searchType,callback:function(t){e.searchType=t},expression:"searchType"}},[i("el-option",{attrs:{label:"标签名",value:"tag"}}),i("el-option",{attrs:{label:"网站名",value:"siteName"}})],1),i("el-input",{attrs:{placeholder:e.searchPlaceholderText,"suffix-icon":"el-icon-search"},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}})],1)]),i("ul",{staticClass:"site-group"},e._l(e.displaySites,(function(t){return i("li",{key:t._id,staticClass:"site",class:{active:e.getSelectStatus(t)},on:{click:function(i){return e.selectSite(t)}}},[i("div",{staticClass:"icon-group"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy"}],attrs:{src:e.imgUrl(t)}})]),i("div",{staticClass:"text-group"},[i("div",{staticClass:"name text",attrs:{title:t.name}},[e._v(e._s(e._f("emptyTip")(t.name)))]),i("div",{staticClass:"description text",attrs:{title:t.description}},[e._v(e._s(e._f("emptyTip")(e.showTag?t.targetTagName:t.description)))])])])})),0)])]),i("div",{staticClass:"site-selector-footer"},[i("el-button",{attrs:{type:"primary",plain:""},on:{click:e.save}},[e._v("确定配置")]),i("el-button",{attrs:{type:"warning",plain:""},on:{click:e.cancel}},[e._v("取消修改")])],1)])])}),[],!1,null,"a76d5570",null);t.default=l.exports},"57c3":function(e,t,i){"use strict";i.r(t);var a=i("5530"),n=i("ca7f"),s=i("102f"),r=i("15f6"),c=i("dc92"),o={name:"ColumnManage",components:{TableList:n.a,DialogForm:s.a,SiteSelector:r.default},data:function(){return{total:0,tableData:[],tableMap:[{label:"栏目名称",key:"name"},{label:"描述",key:"description"},{label:"封面",key:"banner"},{label:"权限码",key:"code"},{label:"是否可用",key:"enabled"},{label:"备注",key:"remarks"}],searchForm:{name:"",code:""},searchFormMap:[{label:"名称",type:"input",key:"name"},{label:"权限码",key:"code",type:"select",selectOptions:this.CONSTANT.dictionary.code}],show:!1,showSiteSelector:!1,mode:"add",formMap:[{label:"栏目名称",key:"name",type:"input"},{label:"封面",key:"banner",type:"banner"},{label:"描述",key:"description",type:"input"},{label:"权限码",key:"code",type:"select",selectOptions:this.CONSTANT.dictionary.code},{label:"备注",key:"remarks",type:"input"},{label:"是否可用",key:"enabled",type:"switch"}],rule:{name:[{validator:Object(c.b)(["isNoEmpty::必填项","minLength:2::长度不能小于2","maxLength:20::长度不能大于20"]),trigger:"blur"}],url:[{validator:Object(c.b)(["isNoEmpty::必填项","isUrl::请输入正确的网址"]),trigger:"blur"}],siteStore:[{validator:Object(c.b)(["isJSONArray::请输入JSON数组"]),trigger:"blur"}],expand:[{validator:Object(c.b)(["isJSONObject::请输入JSON对象"]),trigger:"blur"}]},form:{name:"",siteStore:"[]",description:"",banner:"",remarks:"",expand:"{}",enabled:!0,code:0},currentColumn:{},pageNo:1,pageSize:10}},mounted:function(){this.queryData()},methods:{queryData:function(){var e=this,t=Object.assign({pageNo:this.pageNo,pageSize:this.pageSize},this.searchForm);this.API.findColumnByPage(t,{notify:!1}).then((function(t){e.tableData=t.data.list,e.total=t.data.total,e.cancel()}))},updatePagination:function(e,t){this.pageNo=e,this.pageSize=t},handleRemove:function(e,t,i,a){var n=this;this.API.removeColumn({_id:t._id}).then((function(e){n.queryData()}))},handleAdd:function(){this.show=!0,this.mode="add"},handleEdit:function(e,t){var i=this;this.show=!0,this.mode="edit",this.$nextTick((function(){i.form=Object.assign(i.form,t)}))},handleOperate:function(e,t){this.showSiteSelector=!0,this.currentColumn=Object(a.a)({},t)},paginationChange:function(){this.queryData()},save:function(){var e=this;"edit"===this.mode?this.API.updateColumn(this.form).then((function(t){e.queryData()})):"add"===this.mode&&(delete this.form._id,delete this.form._v,this.API.addColumn({data:this.form}).then((function(t){e.queryData()})))},handleColumnSave:function(){this.showSiteSelector=!1,this.queryData()},cancel:function(){this.$refs.dialogForm&&this.$refs.dialogForm.close(),this.show=!1}}},l=(i("cfa8"),i("2877")),d=Object(l.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"column-manage"},[i("TableList",{attrs:{tableData:e.tableData,tableMap:e.tableMap,formData:e.searchForm,formMap:e.searchFormMap,total:e.total,showAdd:!0,showOperate:!0},on:{"update:formData":function(t){e.searchForm=t},"update:form-data":function(t){e.searchForm=t},operate:e.handleOperate,edit:e.handleEdit,add:e.handleAdd,remove:e.handleRemove,search:e.queryData,paginationChange:e.paginationChange,updatePagination:e.updatePagination}}),e.show?i("DialogForm",{ref:"dialogForm",attrs:{width:"460",title:"add"==e.mode?"添加栏目":"编辑栏目",visible:e.show,formMap:e.formMap,formData:e.form,formRule:e.rule,mode:e.mode,"close-on-click-modal":!1,buttons:{comfirm:"确 认",cancel:"取 消"}},on:{"update:visible":function(t){e.show=t},"update:formData":function(t){e.form=t},"update:form-data":function(t){e.form=t},comfirmForm:e.save,cancelForm:e.cancel}}):e._e(),e.showSiteSelector?i("SiteSelector",{attrs:{title:"配置栏目",size:"500",visible:e.showSiteSelector,wrapperClosable:!1,currentColumn:e.currentColumn},on:{"update:visible":function(t){e.showSiteSelector=t},save:e.handleColumnSave}}):e._e()],1)}),[],!1,null,"42cca5be",null);t.default=d.exports},"5fd1":function(e,t,i){"use strict";i("d561")},cd08:function(e,t,i){},cfa8:function(e,t,i){"use strict";i("cd08")},d561:function(e,t,i){}}]);