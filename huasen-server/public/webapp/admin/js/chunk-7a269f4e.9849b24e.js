(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7a269f4e"],{"46eb":function(a,e,t){"use strict";t.r(e);t("0643"),t("2382");var i=t("ca7f"),o=t("102f");const n=new(t("dabc").a),s=n.getElementFormValidator.bind(n);var d={name:"AccountAdmin",components:{TableList:i.a,DialogForm:o.a},data(){return{manages:[],tableMap:[{label:"账号",key:"id"},{label:"密码",key:"password"},{label:"权限码",key:"code"}],total:0,searchForm:{id:"",code:""},searchFormMap:[{label:"账号",type:"input",key:"id"},{label:"权限码",key:"code",type:"select",selectOptions:this.CONSTANT.dictionary.code}],show:!1,mode:"add",formMap:[{label:"账号",key:"id",type:"input",editDisabled:!0},{label:"密码",key:"password",type:"input"},{label:"权限码",key:"code",type:"select",selectOptions:this.CONSTANT.dictionary.code}],rule:{id:[{validator:s(["isNonEmpty::必填项","minLength:5::长度小于5","maxLength:20::长度大于20","isEmail::请输入邮箱"])}],password:[{validator:s(["isNonEmpty::必填项","minLength:5::长度小于5","maxLength:50::长度大于50"])}]},form:{id:"",password:"",code:0},pageNo:1,pageSize:10}},mounted(){this.queryManage()},methods:{queryManage(){let a=Object.assign({pageNo:this.pageNo,pageSize:this.pageSize},this.searchForm);this.API.manage.findManageByPage(a,{notify:!1}).then(a=>{this.manages=a.data.list,this.total=a.data.total,this.cancel()})},updatePagination(a,e){this.pageNo=a,this.pageSize=e},removeManage(a,e,t,i){this.$store.state.manage.id!==e.id?e.code>=3&&this.manages.filter(a=>a.code>=3).length<=1?this.$tips("error","至少保留一个权限码 >= 3 的管理员","top-right",1200):this.API.manage.removeManage({_id:e._id}).then(a=>{this.queryManage()}):this.$tips("error","当前登录账号，不允许被删除！","top-right",1200)},addManage(){this.show=!0,this.mode="add"},editManage(a,e){this.show=!0,this.mode="edit",this.$nextTick(()=>{this.form=Object.assign(this.form,e)})},paginationChange(a,e){this.queryManage()},save(){"edit"===this.mode?this.API.manage.updateManage(this.form).then(a=>{this.queryManage()}):"add"===this.mode&&(delete this.form._id,delete this.form._v,this.API.manage.addManage(this.form).then(a=>{this.queryManage()}))},cancel(){this.$refs.dialogForm&&this.$refs.dialogForm.close(),this.show=!1}}},r=(t("be6b"),t("2877")),m=Object(r.a)(d,(function(){var a=this,e=a._self._c;return e("div",{staticClass:"account-admin"},[e("TableList",{attrs:{tableData:a.manages,tableMap:a.tableMap,formData:a.searchForm,formMap:a.searchFormMap,showAdd:!0,total:a.total},on:{"update:formData":function(e){a.searchForm=e},"update:form-data":function(e){a.searchForm=e},edit:a.editManage,add:a.addManage,remove:a.removeManage,search:a.queryManage,paginationChange:a.paginationChange,updatePagination:a.updatePagination}}),a.show?e("DialogForm",{ref:"dialogForm",attrs:{width:"460",title:"add"==a.mode?"添加管理员":"编辑管理员",visible:a.show,mode:a.mode,"close-on-click-modal":!1,buttons:{comfirm:"确 认",cancel:"取 消"},formMap:a.formMap,formData:a.form,formRule:a.rule},on:{"update:visible":function(e){a.show=e},"update:formData":function(e){a.form=e},"update:form-data":function(e){a.form=e},comfirmForm:a.save,cancelForm:a.cancel}}):a._e()],1)}),[],!1,null,null,null);e.default=m.exports},be6b:function(a,e,t){"use strict";t("c0c4")},c0c4:function(a,e,t){}}]);
//# sourceMappingURL=chunk-7a269f4e.9849b24e.js.map