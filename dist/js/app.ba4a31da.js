(function(){"use strict";var e={7736:function(e,t,n){var a=n(3751),o=n(641),s=n(33),c=n.p+"img/duck.55420f4d.gif";const r={class:"tg-container"},i={class:"container"},u={class:"tabs"},l={key:0,class:"tab-content"},d={key:0,id:"duck"},h={key:1,id:"notduck"},p=["src"],f={class:"channel-info"},g={class:"channel-title"},v={class:"channel-description"},k={class:"channel-sub"},b=["onClick"],m={class:"cont"},y=["onClick"],C={key:0,class:"dropdown-menu"},E={key:1},w={key:1,class:"tab-content"},L={class:"cont"},S=["onClick"],X={key:0,class:"dropdown-menu"},O={key:1};function j(e,t,n,a,j,x){return(0,o.uX)(),(0,o.CE)("div",r,[(0,o.Lk)("div",i,[(0,o.Lk)("div",u,[(0,o.Lk)("button",{class:(0,s.C4)(["tab",{active:"sub"===j.page}]),"data-tab":"subscriptions",onClick:t[0]||(t[0]=e=>x.change("sub"))},"Подписки",2),(0,o.Lk)("button",{class:(0,s.C4)(["tab",{active:"rec"===j.page}]),"data-tab":"recommendations",onClick:t[1]||(t[1]=e=>x.change("rec"))},"Рекомендации",2)]),"sub"===j.page?((0,o.uX)(),(0,o.CE)("div",l,[void 0==j.data[0]?((0,o.uX)(),(0,o.CE)("div",d,t[2]||(t[2]=[(0,o.Lk)("h2",null,"Вы пока не подписались ни на один канал",-1),(0,o.Lk)("img",{src:c,class:"duck"},null,-1),(0,o.Lk)("p",null,"выберите темы и мы поможем с каналами",-1)]))):((0,o.uX)(),(0,o.CE)("div",h,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(j.data1,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{class:"channel-card",key:t},[e.icon?((0,o.uX)(),(0,o.CE)("img",{key:0,class:"channel-image",src:e.icon},null,8,p)):(0,o.Q3)("",!0),(0,o.Lk)("div",f,[(0,o.Lk)("h3",g,(0,s.v_)(e.title),1),(0,o.Lk)("p",v,(0,s.v_)(e.description),1),(0,o.Lk)("p",k,"Подписчиков:"+(0,s.v_)(e.subscribers),1)]),(0,o.Lk)("button",{class:"dropdown-button1",onClick:t=>x.Delete(e.idChannel)},"-",8,b)])))),128))])),(0,o.Lk)("div",m,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(j.categories,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{class:"dropdown",key:t},[(0,o.Lk)("button",{class:"dropdown-button",onClick:t=>x.showMenu(e)},(0,s.v_)(e),9,y),j.categoryStates[e]?((0,o.uX)(),(0,o.CE)("ul",C,[((0,o.uX)(),(0,o.CE)("h3",E,"Не найдено"))])):(0,o.Q3)("",!0)])))),128))])])):((0,o.uX)(),(0,o.CE)("div",w,[(0,o.Lk)("div",L,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(j.categories,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{class:"dropdown",key:t},[(0,o.Lk)("button",{class:"dropdown-button",onClick:t=>x.showMenu(e)},(0,s.v_)(e),9,S),j.categoryStates[e]?((0,o.uX)(),(0,o.CE)("ul",X,[((0,o.uX)(),(0,o.CE)("h3",O,"Не найдено"))])):(0,o.Q3)("",!0)])))),128))])]))])])}n(4114);var x=n(4335),_={data(){return{page:"sub",categories:["новости","Блоги","Юмор","Технологии","Экономика","Бизнес","Маркетинг","Путешествия","Психология","Политика","Образование","Здоровье и фитнес","Право","Спорт","Медицина","Игры","Еда и кулинария","Дизайн","Криптовалюты","Другое"],categoryStates:{},nestedCategoryStates:{},name:"",data:[],tg:null,data1:[],id:""}},methods:{Delete(e){const t="https://myexampleapp.ru/State/delete-channel",n={userName:this.name,id:e};x.A.get(t,{params:n,mode:"cors"}).then((e=>{this.request()})).catch((e=>{console.error(`Error fetching channels: ${e}`)}))},request(){const e="https://myexampleapp.ru/State/get-channels-id",t={userName:this.name};x.A.get(e,{params:t,mode:"cors"}).then((e=>{const t=e.data;void 0!=t&&(this.data=t,this.request2())})).catch((e=>{console.error(`Error fetching channels: ${e}`)}))},request2(){const e="https://myexampleapp.ru/State/get-channel-info";this.data.forEach((t=>{const n={channel:t};x.A.get(e,{params:n,mode:"cors"}).then((e=>{const t=e.data;void 0!=t&&(t.icon=t.icon?`data:image/png;base64,${t.icon}`:"",this.data1.push(t))})).catch((e=>{console.error(`Error fetching channels: ${e}`)}))}))},change(e){this.page=e},showMenu(e){this.categoryStates[e]=!this.categoryStates[e]},showNestedMenu(e){this.nestedCategoryStates[e]=!this.nestedCategoryStates[e]}},mounted(){const e=window.Telegram.WebApp;this.tg=e,e.ready();try{this.name=e.initDataUnsafe.user.username}catch(t){console.log(t)}this.request()}},M=n(6262);const q=(0,M.A)(_,[["render",j]]);var A=q;(0,a.Ef)(A).mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var s=t[a]={exports:{}};return e[a].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,s){if(!a){var c=1/0;for(l=0;l<e.length;l++){a=e[l][0],o=e[l][1],s=e[l][2];for(var r=!0,i=0;i<a.length;i++)(!1&s||c>=s)&&Object.keys(n.O).every((function(e){return n.O[e](a[i])}))?a.splice(i--,1):(r=!1,s<c&&(c=s));if(r){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[a,o,s]}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,s,c=a[0],r=a[1],i=a[2],u=0;if(c.some((function(t){return 0!==e[t]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(i)var l=i(n)}for(t&&t(a);u<c.length;u++)s=c[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(l)},a=self["webpackChunkvueclear"]=self["webpackChunkvueclear"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(7736)}));a=n.O(a)})();
//# sourceMappingURL=app.ba4a31da.js.map