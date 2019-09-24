exports.ids=[6],exports.modules={33:function(t,e,o){var content=o(42);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=o(2).default;t.exports.__inject__=function(t){n("ae0aaf64",content,!0,t)}},34:function(t,e,o){var content=o(44);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=o(2).default;t.exports.__inject__=function(t){n("117a3265",content,!0,t)}},35:function(t,e,o){var content=o(49);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=o(2).default;t.exports.__inject__=function(t){n("175c86e9",content,!0,t)}},39:function(t,e,o){"use strict";var n={name:"mPopover",props:{position:{type:String,default:"top",validator:t=>["top","bottom","left","right"].indexOf(t)>=0},trigger:{type:String,default:"click",validator:t=>["click","hover"].indexOf(t)>=0}},data:()=>({visible:!1}),mounted(){this.addPopoverListeners()},beforeDestroy(){this.putBackContent(),this.removePopoverListeners()},computed:{openEvent(){return"click"===this.trigger?"click":"mouseenter"},closeEvent(){return"click"===this.trigger?"click":"mouseleave"}},methods:{addPopoverListeners(){"click"===this.trigger?this.$refs.popover.addEventListener("click",this.onClick):(this.$refs.popover.addEventListener("mouseenter",this.open),this.$refs.popover.addEventListener("mouseleave",this.close))},removePopoverListeners(){"click"===this.trigger?this.$refs.popover.removeEventListener("click",this.onClick):(this.$refs.popover.removeEventListener("mouseenter",this.open),this.$refs.popover.removeEventListener("mouseleave",this.close))},putBackContent(){const{contentWrapper:t,popover:e}=this.$refs;t&&e.appendChild(t)},positionContent(){const{contentWrapper:t,triggerWrapper:e}=this.$refs;document.body.appendChild(t);const{width:o,height:n,top:r,left:c}=e.getBoundingClientRect(),{height:l}=t.getBoundingClientRect();let d={top:{top:r+window.scrollY,left:c+window.scrollX},bottom:{top:r+n+window.scrollY,left:c+window.scrollX},left:{top:r+window.scrollY+(n-l)/2,left:c+window.scrollX},right:{top:r+window.scrollY+(n-l)/2,left:c+window.scrollX+o}};t.style.left=d[this.position].left+"px",t.style.top=d[this.position].top+"px"},onClickDocument(t){this.$refs.popover&&(this.$refs.popover===t.target||this.$refs.popover.contains(t.target))||this.$refs.contentWrapper&&(this.$refs.contentWrapper===t.target||this.$refs.contentWrapper.contains(t.target))||this.close()},open(){this.visible=!0,this.$nextTick(()=>{this.positionContent(),document.addEventListener("click",this.onClickDocument)})},close(){this.visible=!1,document.removeEventListener("click",this.onClickDocument)},onClick(t){this.$refs.triggerWrapper.contains(t.target)&&(!0===this.visible?this.close():this.open())}}},r=o(3);var component=Object(r.a)(n,function(){var t,e=this,o=e.$createElement;return(e._self._c||o)("div",{ref:"popover",staticClass:"popover"},[e.visible?e._ssrNode("<div"+e._ssrClass("content-wrapper",(t={},t["position-"+e.position]=!0,t))+" data-v-5ebf1379>","</div>",[e._t("content",null,{close:e.close})],2):e._e(),e._ssrNode(" "),e._ssrNode('<span style="display: inline-block;" data-v-5ebf1379>',"</span>",[e._t("default")],2)],2)},[],!1,function(t){var e=o(41);e.__inject__&&e.__inject__(t)},"5ebf1379","56c5ca69");e.a=component.exports},40:function(t,e,o){t.exports=o.p+"img/fa2c050.png"},41:function(t,e,o){"use strict";o.r(e);var n=o(33),r=o.n(n);for(var c in n)"default"!==c&&function(t){o.d(e,t,function(){return n[t]})}(c);e.default=r.a},42:function(t,e,o){(t.exports=o(1)(!1)).push([t.i,'.popover[data-v-5ebf1379]{display:inline-block;vertical-align:top;position:relative}.content-wrapper[data-v-5ebf1379]{position:absolute;z-index:2;border:1px solid #ccc;border-radius:4px;background:#fff;padding:.5em 1em;max-width:20em;word-break:break-all;cursor:pointer}.content-wrapper[data-v-5ebf1379]:after,.content-wrapper[data-v-5ebf1379]:before{content:"";display:block;border:10px solid transparent;width:0;height:0;position:absolute}.content-wrapper.position-top[data-v-5ebf1379]{-webkit-transform:translateY(-100%);transform:translateY(-100%);margin-top:-10px}.content-wrapper.position-top[data-v-5ebf1379]:after,.content-wrapper.position-top[data-v-5ebf1379]:before{left:10px}.content-wrapper.position-top[data-v-5ebf1379]:before{border-top-color:#ccc;border-bottom:none;top:100%}.content-wrapper.position-top[data-v-5ebf1379]:after{border-top-color:#fff;border-bottom:none;top:calc(100% - 1px)}.content-wrapper.position-bottom[data-v-5ebf1379]{margin-top:10px}.content-wrapper.position-bottom[data-v-5ebf1379]:after,.content-wrapper.position-bottom[data-v-5ebf1379]:before{left:10px}.content-wrapper.position-bottom[data-v-5ebf1379]:before{border-top:none;border-bottom-color:#ccc;bottom:100%}.content-wrapper.position-bottom[data-v-5ebf1379]:after{border-top:none;border-bottom-color:#fff;bottom:calc(100% - 1px)}.content-wrapper.position-left[data-v-5ebf1379]{-webkit-transform:translateX(-100%);transform:translateX(-100%);margin-left:-10px}.content-wrapper.position-left[data-v-5ebf1379]:after,.content-wrapper.position-left[data-v-5ebf1379]:before{-webkit-transform:translateY(-50%);transform:translateY(-50%);top:50%}.content-wrapper.position-left[data-v-5ebf1379]:before{border-left-color:#ccc;border-right:none;left:100%}.content-wrapper.position-left[data-v-5ebf1379]:after{border-left-color:#fff;border-right:none;left:calc(100% - 1px)}.content-wrapper.position-right[data-v-5ebf1379]{margin-left:10px}.content-wrapper.position-right[data-v-5ebf1379]:after,.content-wrapper.position-right[data-v-5ebf1379]:before{-webkit-transform:translateY(-50%);transform:translateY(-50%);top:50%}.content-wrapper.position-right[data-v-5ebf1379]:before{border-right-color:#ccc;border-left:none;right:100%}.content-wrapper.position-right[data-v-5ebf1379]:after{border-right-color:#fff;border-left:none;right:calc(100% - 1px)}',""])},43:function(t,e,o){"use strict";o.r(e);var n=o(34),r=o.n(n);for(var c in n)"default"!==c&&function(t){o.d(e,t,function(){return n[t]})}(c);e.default=r.a},44:function(t,e,o){(t.exports=o(1)(!1)).push([t.i,".m-aside{height:100%;flex-basis:60px;background:#f8f8f8;padding:40px 20px;position:relative;z-index:1}.m-aside header{color:#fff;align-items:center;margin-bottom:40px}.m-aside .info,.m-aside header{display:flex;justify-content:space-between}.m-aside .info{height:100%;flex-direction:column}.m-aside .tab-list{color:#263d96;font-size:12px}.m-aside .tab-list li{cursor:pointer;margin-bottom:30px;border:1px solid #ccc;border-radius:50%;display:inline-block;padding:10px;transition:.4s}.m-aside .tab-list .nuxt-link-exact-active,.m-aside .tab-list li:hover{background:#727abd;color:#fff;border-color:#727abd}.m-aside .user{cursor:pointer}.m-aside .user img{height:45px;width:45px;display:inline-block}",""])},45:function(t,e,o){var content=o(61);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=o(2).default;t.exports.__inject__=function(t){n("8beba00e",content,!0,t)}},46:function(t,e,o){var content=o(63);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=o(2).default;t.exports.__inject__=function(t){n("07fb42c3",content,!0,t)}},47:function(t,e,o){"use strict";o(6);var n={computed:{user(){return this.$store.state.user}},methods:{loginOut(){this.$axios.post("/logOut"),this.$router.push("/login")}},components:{mPopover:o(39).a}},r=o(3);var component=Object(r.a)(n,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-aside"},[t._ssrNode('<div class="info">',"</div>",[t._ssrNode('<ul class="tab-list">',"</ul>",[t._ssrNode('<li style="color:#ffbd39"><i class="iconfont icon-star"></i></li> '),n("nuxt-link",{attrs:{to:"/main",tag:"li"}},[n("i",{staticClass:"iconfont icon-note"})]),t._ssrNode(" "),n("nuxt-link",{attrs:{to:"/book",tag:"li"}},[n("i",{staticClass:"iconfont icon-notebook"})]),t._ssrNode(" "),n("nuxt-link",{attrs:{to:"/trash",tag:"li"}},[n("i",{staticClass:"iconfont icon-trash"})]),t._ssrNode(" "),n("nuxt-link",{attrs:{to:"/search",tag:"li"}},[n("i",{staticClass:"iconfont icon-search"})])],2),t._ssrNode(" "),n("m-popover",{attrs:{position:"right"}},[t.user?n("div",{staticClass:"user"},[n("img",{attrs:{src:o(40)}})]):t._e(),t._v(" "),n("template",{slot:"content"},[n("span",{on:{click:t.loginOut}},[t._v("登出")])])],2)],2)])},[],!1,function(t){var e=o(43);e.__inject__&&e.__inject__(t)},null,"6424ab08");e.a=component.exports},48:function(t,e,o){"use strict";o.r(e);var n=o(35),r=o.n(n);for(var c in n)"default"!==c&&function(t){o.d(e,t,function(){return n[t]})}(c);e.default=r.a},49:function(t,e,o){(t.exports=o(1)(!1)).push([t.i,".m-button{font-size:14px;height:2em;padding:0 1em;border-radius:4px;border:1px solid #727abd;background:#727abd;color:#fff;cursor:pointer}",""])},55:function(t,e,o){"use strict";var n={name:"mButton",props:{icon:{},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},iconPosition:{type:String,default:"left",validator:t=>!("left"!==t&&"right"!==t)}}},r=o(3);var component=Object(r.a)(n,function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"m-button",class:["icon-"+t.iconPosition,t.disabled?"m-button--disabled":""],attrs:{disabled:t.disabled},on:{click:function(e){return t.$emit("click")}}},[t._ssrNode('<div class="m-button-content">',"</div>",[t._t("default")],2)])},[],!1,function(t){var e=o(48);e.__inject__&&e.__inject__(t)},null,"33bf90c4");e.a=component.exports},60:function(t,e,o){"use strict";o.r(e);var n=o(45),r=o.n(n);for(var c in n)"default"!==c&&function(t){o.d(e,t,function(){return n[t]})}(c);e.default=r.a},61:function(t,e,o){(t.exports=o(1)(!1)).push([t.i,".m-confirm{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border:1px solid #eee;box-sizing:border-box;z-index:99;background:#fff;border-radius:4px}.m-confirm--container{padding:10px;width:300px}.m-confirm--container .header{display:flex;justify-content:space-between}.m-confirm--container .header .close{cursor:pointer;font-size:16px}.m-confirm--container .body{padding:10px 0 40px}.m-confirm--container .footer{display:flex;justify-content:flex-end}.m-confirm--container .footer button{outline:none;padding:.5em 1em;border:none;background:#fff;border-radius:4px;cursor:pointer}.m-confirm--container .footer .confirm{background:#7568f3;color:#fff;border:1px solid #7568f3;margin-left:6px}.m-confirm--container .footer .cancel{border:1px solid #eee}@-webkit-keyframes mask{0%{opacity:.2}to{opacity:1}}@keyframes mask{0%{opacity:.2}to{opacity:1}}.m-mask{position:fixed;left:0;top:0;right:0;border-bottom:0;width:100%;height:100%;background:rgba(0,0,0,.5);z-index:98;-webkit-animation:mask .2s;animation:mask .2s}.dialog-fade-enter-active,.dialog-fade-leave-active{transition:all .3s ease}.dialog-fade-enter,.dialog-fade-leave-to{-webkit-transform:translate(-50%,-60%);transform:translate(-50%,-60%);opacity:.2}",""])},62:function(t,e,o){"use strict";o.r(e);var n=o(46),r=o.n(n);for(var c in n)"default"!==c&&function(t){o.d(e,t,function(){return n[t]})}(c);e.default=r.a},63:function(t,e,o){(t.exports=o(1)(!1)).push([t.i,".m-message[data-v-7313c348]{position:fixed;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);top:20px;width:380px;text-align:center;z-index:99}.m-message--main[data-v-7313c348]{padding:10px;background:#ccc;border-radius:4px;display:flex;align-items:center}.m-message--icon[data-v-7313c348]{margin-right:5px}.m-message--success[data-v-7313c348]{color:#67c23a;background:#f0f9eb;border-color:#67c23a}.m-message--warning[data-v-7313c348]{color:#e6a23c;background:#fdf6ec;border-color:#e6a23c}.m-message--error[data-v-7313c348]{color:#f56c6c;background:#fef0f0;border-color:#f56c6c}.m-message .slide-fade-enter-active[data-v-7313c348],.m-message .slide-fade-leave-active[data-v-7313c348]{transition:all .5s ease}.m-message .slide-fade-enter[data-v-7313c348],.m-message .slide-fade-leave-to[data-v-7313c348]{-webkit-transform:translateY(-40px);transform:translateY(-40px);opacity:0}",""])},64:function(t,e,o){var content=o(76);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=o(2).default;t.exports.__inject__=function(t){n("382bc8cf",content,!0,t)}},69:function(t,e,o){"use strict";let n=0;var r={data:()=>({notices:[]}),methods:{add(t){const e="alert"+n++;let o={name:e,...t};this.notices.push(o);const r=t.duration||1;let c=setTimeout(()=>{this.remove(e),clearTimeout(c)},2e3*r)},remove(t){const e=this.notices;for(let i=0;i<e.length;i++)if(e[i].name===t){this.notices.splice(i,1);break}}}},c=o(3);var l=Object(c.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"m-message"},[o("transition",{attrs:{name:"slide-fade"}},t._l(t.notices,function(e,n){return o("div",{key:n,staticClass:"m-message--main",class:[t.type?"m-message--"+t.type:""]},[o("span",{staticClass:"m-message--message"},[t._v(t._s(e.content))])])}),0)],1)},[],!1,function(t){var e=o(62);e.__inject__&&e.__inject__(t)},"7313c348","48b008c3").exports,d=o(0),f=o.n(d);let m;const v=function(t){return m=new f.a({render:e=>e(l,{props:t})}).$mount(),document.body.appendChild(m.$el),m.$children[0]};function h(t){const e=v(t);e.type=t.type||"success",e.add({content:e.text||"请输入提示文字"})}h.success=function(content){const t=v();t.type="success",t.add({content:content})},h.error=function(content){const t=v();t.type="error",t.add({content:content})},f.a.prototype.$message=h},70:function(t,e,o){"use strict";var n={name:"mConfirm",data:()=>({visible:!1}),mounted(){this.onRouteChange(),this.localScroll()},methods:{handleAction(t){"success"===t?this.success():this.cancel(),this.canScroll()},onRouteChange(){const t=()=>{this.handleAction()};window.addEventListener("hashchange",t),window.addEventListener("popstate",t),window.addEventListener("pagehide",t)},localScroll(){document.documentElement.style.overflowY="hidden"},canScroll(){document.documentElement.style.overflowY="scroll"}},beforeDestroy(){this.canScroll(),this.$el.remove()}},r=o(3);var c=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("transition",{attrs:{name:"dialog-fade"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"m-confirm"},[o("div",{staticClass:"m-confirm--container"},[o("div",{staticClass:"header"},[o("span",[t._v(t._s(t.title))]),t._v(" "),o("span",{staticClass:"close",on:{click:function(e){return t.handleAction("cancel")}}},[t._v("x")])]),t._v(" "),o("div",{staticClass:"body"},[t._v("\n            "+t._s(t.message)+"\n        ")]),t._v(" "),o("div",{staticClass:"footer"},[o("button",{staticClass:"cancel",on:{click:function(e){return t.handleAction("cancel")}}},[t._v("取消")]),t._v(" "),o("button",{staticClass:"confirm",on:{click:function(e){return t.handleAction("success")}}},[t._v("确认")])])])])]),t._ssrNode(' <div class="m-mask"'+t._ssrStyle(null,null,{display:t.visible?"":"none"})+"></div>")],2)},[],!1,function(t){var e=o(60);e.__inject__&&e.__inject__(t)},null,"260e8435").exports,l=o(0),d=o.n(l);const f=d.a.extend(c);let m;function v(){m&&(m.visible=!1,m.$el.remove(),m=null)}d.a.prototype.$confirm=function(t,title,e){return((t,title)=>{m||((m=new f({el:document.createElement("div"),data:{message:t||"这是一段内容",title:title||"提示"}})).visible=!0,document.body.appendChild(m.$el))})(t,title),new Promise((t,e)=>{m.success=(()=>{t(),v()}),m.cancel=(()=>{e(),v()})})}},75:function(t,e,o){"use strict";o.r(e);var n=o(64),r=o.n(n);for(var c in n)"default"!==c&&function(t){o.d(e,t,function(){return n[t]})}(c);e.default=r.a},76:function(t,e,o){(t.exports=o(1)(!1)).push([t.i,".sort-list{padding:20px 0}.sort-list li{margin-bottom:10px}.container{display:flex;height:100%}.container .note-list{flex-basis:300px;min-width:300px;transition:min-width .4s,flex-basis .4s,-webkit-transform .4s;transition:min-width .4s,flex-basis .4s,transform .4s;transition:min-width .4s,flex-basis .4s,transform .4s,-webkit-transform .4s}.container .note-list.animate{opacity:0;-webkit-transform:translateX(-300px);transform:translateX(-300px);min-width:0;flex-basis:0px}.container .note-list .header{padding:20px 20px 10px;border-bottom:1px solid #ccc;display:flex;flex-wrap:wrap;align-content:space-between;height:100px}.container .note-list .header .row{flex-basis:100%;display:flex;justify-content:space-between}.container .note-list .header h3{color:#311abf}.container .note-list .list{overflow-y:scroll;height:calc(100% - 100px)}.container .note-list .list::-webkit-scrollbar{display:none}.container .note-list .list li{box-sizing:border-box;cursor:pointer;padding:20px 20px 40px;justify-content:space-between;border:1px solid #fff;height:140px}.container .note-list .list li.active{border:1px solid #727abd}.container .note-list .list li:hover{background:#727abd;color:#fff;border:1px solid #727abd}.container .note-list .list li .title{display:flex;justify-content:space-between;margin-bottom:5px}.container .note-list .list li time{display:inline-block;margin-bottom:10px;color:#ccc;font-size:12px}.container .note-list .list li .content{max-width:200px;word-wrap:break-word}.container .editor{flex-grow:1;display:flex;flex-direction:column;height:calc(100% - 90px)}.container .editor .header{display:flex;justify-content:space-between;border-left:1px solid #ccc;padding:15px 20px}",""])},90:function(t,e,o){"use strict";o.r(e);var n=o(39),aside=o(47),r=o(55),c=(o(70),o(69),{async fetch({app:t,store:e,params:o}){},async asyncData({app:t}){const e=await t.$axios.get("/notebook"),o=await t.$axios.get("/note",{params:{isTrashed:0}});let n={};if(o.data&&o.data.length>0){const{title:title,content:content,id:t}=o.data[0];n={title:title,content:content,id:t}}return{notes:o.data,noteEditing:{},books:e.data}},data:()=>({editing:!1,editorOption:{modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"]]}},currentBook:{id:null,name:"全部笔记"}}),created(){this.noteEditing={...this.currentNote}},mounted(){const t=this.$refs[this.currentNote.id];var e=t&&t[0].offsetTop;const o=this.$refs.list;var n=o&&o.offsetTop;o.scrollTop=e-n},computed:{substr:t=>(function(t){return t&&t.length>20?t.substr(0,20)+"...":t}),currentNote(){return this.$store.state.currentNote}},methods:{sort(t,e){this.notes.sort((a,b)=>"DESC"===e?b[t]-a[t]:a[t]-b[t])},enterFullScreen(){var t=document.documentElement;t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():alert("该浏览器不支持全屏")},async initNotes(){let t=await this.$axios.get("/note",{params:{isTrashed:0}});this.notes=t.data;let e=t.data.find((t,e)=>{if(this.noteEditing.id===t.id)return this.active=e,!0});e&&(this.noteEditing={title:e.title,content:e.content,id:e.id})},async selectBook(t){if(!t)return this.currentBook={name:"全部笔记",id:""},void this.initNotes();this.currentBook.name=t.bookname,this.currentBook.id=t.id;const e=await this.$axios.get(`/note/${t.id}`);this.notes=e.data},selectNote(t){this.$store.dispatch("setCurrentNote",t);const{title:title,content:content,id:e}=t;this.noteEditing={title:title,content:content,id:e}},addNote(){this.editing=!0,this.noteEditing={title:"",content:"",id:""}},cancelEditing(){this.editing=!1,this.noteEditing={title:"",content:"",id:""}},deleteNote(t){t&&this.$confirm("确认删除?").then(()=>{this.$axios.patch(`/note/trashOrRecover/${t}`,{isTrashed:1}).then(t=>{0===t.code&&this.initNotes()})})},saveNote(){this.noteEditing.notebookId||(this.noteEditing.notebookId=this.currentBook.id),this.$axios.post("/note",this.noteEditing).then(t=>{0===t.code?(this.editing=!1,this.noteEditing.id=t.data.id,this.notes.push(t.data)):this.$message.error(t.message)})},updateNote(){this.noteEditing.id&&this.$axios.patch(`/note/${this.noteEditing.id}`,this.noteEditing).then(t=>{this.initNotes()})},onEditorReady(){},onEditorBlur(t,html){},onEditorFocus(t){},onEditorChange({editor:t,html:html,text:text}){html!==this.noteEditing.content&&this.updateNote(),this.noteEditing.content=html}},components:{mAside:aside.a,mButton:r.a,mPopover:n.a}}),l=o(3);var component=Object(l.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"container"},[o("m-aside"),t._ssrNode(" "),t._ssrNode("<div"+t._ssrClass("note-list",{animate:t.editing})+">","</div>",[t._ssrNode('<div class="header">',"</div>",[t._ssrNode('<div class="row">',"</div>",[o("m-popover",{attrs:{position:"bottom"}},[o("h3",[t._v(t._s(t.currentBook.name)+" "),o("i",{staticClass:"iconfont icon-arrow-bottom"})]),t._v(" "),o("template",{slot:"content"},[o("ul",[o("li",{on:{click:function(e){return t.selectBook()}}},[t._v("全部笔记")]),t._v(" "),t._l(t.books,function(e){return o("li",{key:e.id,on:{click:function(o){return t.selectBook(e)}}},[t._v(t._s(e.bookname))])})],2)])],2),t._ssrNode(' <i class="iconfont icon-add-note" style="color:#311abf;font-size:24px"></i>')],2),t._ssrNode(" "),t._ssrNode('<div class="row">',"</div>",[t._ssrNode("<h6>2条笔记</h6> "),o("m-popover",{attrs:{position:"bottom"}},[o("span",[t._v("选项 "),o("i",{staticClass:"iconfont icon-arrow-bottom"})]),t._v(" "),o("template",{slot:"content"},[o("ul",{staticClass:"sort-list"},[o("li",{on:{click:function(e){return t.sort("update_date")}}},[t._v("按更新日期排序(最早)")]),t._v(" "),o("li",{on:{click:function(e){return t.sort("update_date","DESC")}}},[t._v("按更新日期排序(最新)")]),t._v(" "),o("li",{on:{click:function(e){return t.sort("create_date")}}},[t._v("按创建日期排序(最早)")]),t._v(" "),o("li",{on:{click:function(e){return t.sort("create_date","DESC")}}},[t._v("按创建日期排序(最新)")])])])],2)],2)],2),t._ssrNode(' <ul class="list">'+t._ssrList(t.notes,function(e,o){return"<li"+t._ssrClass(null,{active:t.currentNote.id===e.id})+'><div class="title"><h4>'+t._ssrEscape(t._s(e.title))+'</h4> <span><i class="iconfont icon-trash"></i></span></div> <time>'+t._ssrEscape(t._s(t._f("timestampToDate")(e.create_date)))+'</time> <div class="content">'+t._s(t.substr(e.content))+"</div></li>"})+"</ul>")],2),t._ssrNode(" "),t._ssrNode('<div class="editor">',"</div>",[t._ssrNode('<div class="header">',"</div>",[t._ssrNode('<div class="left"><i class="iconfont icon-notebook"></i> <span>笔记本</span> <i class="iconfont icon-tag"></i> <input type="text" placeholder="标题"'+t._ssrAttr("value",t.noteEditing.title)+"></div> "),t._ssrNode('<div class="right">',"</div>",[o("m-button",{directives:[{name:"show",rawName:"v-show",value:t.editing,expression:"editing"}],on:{click:t.saveNote}},[t._v("保存")]),t._ssrNode(" "),o("m-button",{directives:[{name:"show",rawName:"v-show",value:t.editing,expression:"editing"}],on:{click:t.cancelEditing}},[t._v("取消")]),t._ssrNode(' <i class="iconfont icon-clock"></i> <i class="iconfont icon-star"></i> <i class="iconfont icon-trash"></i> <i class="iconfont icon-extend"></i>')],2)],2),t._ssrNode(" "),o("div",{directives:[{name:"quill",rawName:"v-quill:myQuillEditor",value:t.editorOption,expression:"editorOption",arg:"myQuillEditor"}],staticClass:"quill-editor",attrs:{content:t.noteEditing.content},on:{change:function(e){return t.onEditorChange(e)},blur:function(e){return t.onEditorBlur(e)},focus:function(e){return t.onEditorFocus(e)},ready:function(e){return t.onEditorReady(e)}}},[])],2)],2)},[],!1,function(t){var e=o(75);e.__inject__&&e.__inject__(t)},null,"96ba883e");e.default=component.exports}};
//# sourceMappingURL=96bd5968c3f404e889f6.js.map