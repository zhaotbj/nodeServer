(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cfd993d0"],{"29bd":function(e,t,a){},4272:function(e,t,a){"use strict";var l=a("29bd"),r=a.n(l);r.a},"685f":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrap"},[a("listSearch",{attrs:{searchArr:e.searchArr},on:{searchConfirm:e.goSearch},model:{value:e.searchData,callback:function(t){e.searchData=t},expression:"searchData"}}),a("div",{staticClass:"table_box"},[a("Table",{attrs:{columns:e.columns,data:e.tableData},scopedSlots:e._u([{key:"2",fn:function(t){var l=t.row;return[a("span",{staticStyle:{color:"#538FFF"}},[e._v(e._s(l["2"]))])]}},{key:"action",fn:function(t){var l=t.row;return[a("div",[a("button",{on:{click:function(t){return e.handleSure(l)}}},[e._v("通过")]),a("button",{on:{click:function(t){return e.handleBack(l)}}},[e._v("驳回")]),a("button",{on:{click:function(t){return e.handleLook(l)}}},[e._v("查看申请")])])]}}])}),a("Page",{staticStyle:{"margin-top":"20px"},attrs:{current:e.currentPage,total:e.total,"page-size":e.pageSize,"page-size-opts":[10,20,50],"show-sizer":"","show-elevator":"","show-total":""}})],1),a("Modal",{attrs:{"footer-hide":!0,title:"驳回","ok-text":"驳回"},model:{value:e.backDilog,callback:function(t){e.backDilog=t},expression:"backDilog"}},[a("Form",{ref:"backFormValidate",attrs:{model:e.backForm,rules:e.backFormRuleValidate,"label-width":0}},[a("div",{staticStyle:{"margin-bottom":"10px"}},[e._v("请输入驳回原因：")]),a("FormItem",{attrs:{label:"",prop:"backInput"}},[a("Input",{staticStyle:{width:"100%"},attrs:{maxlength:100,"show-word-limit":"",type:"textarea",placeholder:"请输入原因"},model:{value:e.backForm.backInput,callback:function(t){e.$set(e.backForm,"backInput",t)},expression:"backForm.backInput"}})],1)],1),a("div",{staticStyle:{"border-top":"1px solid rgb(232, 234, 236)",padding:"12px 18px","text-align":"center"}},[a("Button",{staticStyle:{"margin-right":"20px"},on:{click:function(t){e.backDilog=!1}}},[e._v("取消")]),a("Button",{attrs:{type:"primary"},on:{click:e.backSubmit}},[e._v("确定")])],1)],1),a("Modal",{attrs:{"footer-hide":!0,title:e.isStop?"案件中止":"案件恢复"},model:{value:e.stopDialog,callback:function(t){e.stopDialog=t},expression:"stopDialog"}},[a("Form",{ref:"stopFormValidate",attrs:{model:e.stopForm,"label-width":110}},[e.isStop?a("FormItem",{attrs:{label:"起始日期"}},[a("DatePicker",{attrs:{disabled:"",type:"date",placeholder:""},model:{value:e.stopForm.startTime,callback:function(t){e.$set(e.stopForm,"startTime",t)},expression:"stopForm.startTime"}})],1):a("FormItem",{attrs:{label:"结束日期"}},[a("DatePicker",{attrs:{disabled:"",type:"date",placeholder:""},model:{value:e.stopForm.endTime,callback:function(t){e.$set(e.stopForm,"endTime",t)},expression:"stopForm.endTime"}})],1),a("FormItem",{attrs:{label:"延期事由"}},[a("Select",{attrs:{disabled:""},model:{value:e.stopForm.reason,callback:function(t){e.$set(e.stopForm,"reason",t)},expression:"stopForm.reason"}},[a("Option",{attrs:{value:"beijing"}},[e._v("New York")]),a("Option",{attrs:{value:"shanghai"}},[e._v("London")]),a("Option",{attrs:{value:"shenzhen"}},[e._v("Sydney")])],1)],1),a("FormItem",{attrs:{label:"材料附件"}},[a("a",{staticStyle:{color:"#57a3f3"}},[e._v(e._s("未选择文件"))])]),a("FormItem",{attrs:{label:"备注信息"}},[a("Input",{attrs:{disabled:"",type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"请输入备注信息"},model:{value:e.stopForm.remarks,callback:function(t){e.$set(e.stopForm,"remarks",t)},expression:"stopForm.remarks"}})],1)],1),a("div",{staticStyle:{"border-top":"1px solid rgb(232, 234, 236)",padding:"12px 18px","text-align":"center"}},[a("Button",{attrs:{type:"primary"},on:{click:function(t){e.stopDialog=!1}}},[e._v("关闭")])],1)],1)],1)},r=[],o=a("d59d"),s=[{title:"案号",slot:"2"},{title:"申请人"},{title:"代理人"},{title:"被申请人"},{title:"中止时间"},{title:"恢复时间"},{title:"案件进度"},{title:"案件类型"},{title:"案件状态"},{title:"操作",align:"center",width:300,slot:"action"}],c={components:{listSearch:o["a"]},data:function(){return{searchData:{number:"",appeal:"",backAppeal:"",progress:[],regName:[],caseType:[]},searchArr:[{type:"input",value:"number",label:"案号",placeholder:"请输入案号"},{type:"input",value:"appeal",label:"申请人",placeholder:"请输入申请人"},{type:"input",value:"backAppeal",label:"被申请人",placeholder:"请输入被申请人"},{type:"select",value:"progress",label:"案件进度",placeholder:"请选择案件进度",arr:[{label:"全部",value:0},{label:"通过",value:1},{label:"未通过",value:2}]},{type:"select",value:"regName",label:"注册名称",placeholder:"请选择注册名称",arr:[{label:"全部",value:0},{label:"通过",value:1},{label:"未通过",value:2}]},{type:"select",value:"caseType",label:"案件类型",placeholder:"请选择案件类型",arr:[{label:"全部",value:0},{label:"通过",value:1},{label:"未通过",value:2}]}],currentPage:1,total:0,pageSize:10,columns:s,tableData:[{1:1,2:2}],backDilog:!1,stopDialog:!1,isStop:!1,backForm:{backInput:""},backFormRuleValidate:{backInput:[{required:!0,message:"请输入原因",trigger:"change"}]},stopForm:{startTime:"",endTime:"",reason:"",file:"",remarks:""}}},methods:{goSearch:function(){},handleSure:function(e){var t=this;this.$Modal.confirm({title:"操作",content:'<div style="color:#3B4453;text-align:center;font-size:18px">确认通过中止/恢复申请？</div>',onOk:function(){t.$Message.success("操作成功"),t.$Message.error("系统出错，请稍后重试")},onCancel:function(){}})},backSubmit:function(){var e=this;this.$refs["backFormValidate"].validate((function(t){console.log(e.backForm),t?e.$Message.success("操作成功"):e.$Message.error("Fail!")}))},handleBack:function(e){this.backDilog=!0},handleLook:function(e){this.isStop=!0,this.stopDialog=!0}}},n=c,i=(a("c9d3"),a("e90a")),u=Object(i["a"])(n,l,r,!1,null,"1c3c90f2",null);t["default"]=u.exports},ad3e:function(e,t,a){},c9d3:function(e,t,a){"use strict";var l=a("ad3e"),r=a.n(l);r.a},d59d:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"list_search"},[a("div",{staticClass:"search-box"},[a("Form",{staticClass:"search_form",attrs:{model:e.searchForm,"label-width":80}},e._l(e.searchArr,(function(t){return a("formItem",{key:t.label,attrs:{label:t.label}},["input"==t.type?a("Input",{attrs:{placeholder:t.placeholder},model:{value:e.searchForm[t.value],callback:function(a){e.$set(e.searchForm,t.value,a)},expression:"searchForm[item.value]"}}):e._e(),"select"==t.type?a("Select",{model:{value:e.searchForm[t.value],callback:function(a){e.$set(e.searchForm,t.value,a)},expression:"searchForm[item.value]"}},e._l(t.arr,(function(t){return a("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])})),1):e._e(),"checkbox"==t.type?a("CheckboxGroup",{model:{value:e.searchForm[t.value],callback:function(a){e.$set(e.searchForm,t.value,a)},expression:"searchForm[item.value]"}},e._l(t.arr,(function(e){return a("Checkbox",{key:e.value,attrs:{label:e.label}})})),1):e._e(),"radio"==t.type?a("RadioGroup",{model:{value:e.searchForm[t.value],callback:function(a){e.$set(e.searchForm,t.value,a)},expression:"searchForm[item.value]"}},e._l(t.arr,(function(e){return a("Radio",{key:e.value,attrs:{label:e.label}})})),1):e._e(),"datePicker"==t.type?a("DatePicker",{staticStyle:{width:"200px"},attrs:{format:"yyyy-MM-dd",type:"daterange",placement:"bottom-end",placeholder:t.placeholder},model:{value:e.searchForm[t.value],callback:function(a){e.$set(e.searchForm,t.value,a)},expression:"searchForm[item.value]"}}):e._e()],1)})),1)],1),a("div",{staticClass:"buttons"},[a("Button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确定")]),a("Button",{staticStyle:{"margin-left":"8px"}},[e._v("重制")])],1)])},r=[],o={name:"list_search",props:{value:{type:Object,required:!0},searchArr:{type:Array,required:!0}},data:function(){return{searchForm:this.value}},watch:{value:function(e){console.log("watch:value",e),this.searchForm=e},searchForm:function(e){console.log("watch:search",e),this.$emit("input",e)}},mounted:function(){},methods:{confirm:function(){console.log(this.value),this.$emit("searchConfirm")},reset:function(){}}},s=o,c=(a("4272"),a("e90a")),n=Object(c["a"])(s,l,r,!1,null,"85e1dc38",null);t["a"]=n.exports}}]);
//# sourceMappingURL=chunk-cfd993d0.143c29d3.js.map