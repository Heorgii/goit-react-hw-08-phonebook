"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[291],{1291:function(t,e,n){n.r(e),n.d(e,{default:function(){return T}});var a=n(5861),r=n(9439),s=n(7757),c=n.n(s),i=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",n=crypto.getRandomValues(new Uint8Array(t));t--;){var a=63&n[t];e+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return e},o=n(2791),l=n(1405),u=function(t){return t.contacts.items},_=function(t){return t.contacts.isLoading},m=function(t){return t.filter.filterInput},d={contact_form:"ContactForm_contact_form__MxVfX",form_box:"ContactForm_form_box__Voyl3",contact_lable:"ContactForm_contact_lable__K5XgY",input_name:"ContactForm_input_name__dBk50",input_num:"ContactForm_input_num__FpIrZ",contact_btn_add:"ContactForm_contact_btn_add__7y97b"},f=n(3634),p=n(184),h=function(){var t=(0,o.useState)(""),e=(0,r.Z)(t,2),n=e[0],s=e[1],_=(0,o.useState)(""),m=(0,r.Z)(_,2),h=m[0],x=m[1],b=(0,l.I0)(),j=(0,l.v9)(u),v=function(t){switch(t.currentTarget.name){case"name":s(t.currentTarget.value);break;case"number":x(t.currentTarget.value);break;default:throw new Error("Error")}},N=function(){var t=(0,a.Z)(c().mark((function t(e){var a,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),a={id:i(),name:n,number:h},r=a.name.toUpperCase(),j.find((function(t){return t.name.toUpperCase()===r}))?alert("".concat(a.name," is already in contacts.")):b((0,f.el)(a)),s(""),x("");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,p.jsx)("div",{className:d.form_box,children:(0,p.jsxs)("form",{className:d.contact_form,onSubmit:N,children:[(0,p.jsxs)("lable",{className:d.contact_lable,children:[(0,p.jsx)("span",{className:d.label_text,children:"Name"}),(0,p.jsx)("input",{className:d.input_name,value:n,onChange:v,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,p.jsxs)("label",{className:d.contact_lable,children:[(0,p.jsx)("span",{className:d.label_text,children:"Number"}),(0,p.jsx)("input",{className:d.input_num,value:h,onChange:v,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,p.jsx)("button",{type:"submit",className:d.contact_btn_add,children:"Add contact"})]})})},x="ContactList_list_box__S+sDr",b="ContactList_list__csErn",j="ContactList_item__EZYHO",v="ContactList_contact_name__Jt8ih",N="ContactList_btn_delete_contact__m91NO",C="Notification_notifi_box__hEMgu",g="Notification_notifi_item__yVRTX",y="Notification_notifi_text__jCXNL",F=n(2007),w=function(t){var e=t.message;return(0,p.jsx)("div",{className:C,children:(0,p.jsx)("div",{className:g,children:(0,p.jsx)("p",{className:y,children:e})})})};w.protoType={message:n.n(F)().string};var k=w,L=function(){var t=(0,l.v9)(m),e=(0,l.v9)(u),n=(0,l.I0)(),a=(0,l.v9)(_),r=function(){var n=t.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))}();return(0,p.jsx)("div",{className:x,children:(0,p.jsxs)("ul",{className:b,children:[r.length>0?r.map((function(t){var e=t.id,a=t.name,r=t.number;return(0,p.jsxs)("li",{className:j,children:[(0,p.jsxs)("p",{className:v,children:[a," ------------ ",r]}),(0,p.jsx)("button",{className:N,type:"submit",onClick:function(){return n((0,f.GK)(e))},children:"Delete"})]},e)})):(0,p.jsx)(k,{message:"Contact list is empty"}),a&&"Loading..."]})})},A="Filter_filter_box__FAu5q",Z="Filter_filter_tittle__zGYJO",I="Filter_filter_input__eu2zm",z=n(4808),E=function(){var t=(0,l.I0)();return(0,p.jsx)("div",{className:A,children:(0,p.jsxs)("label",{children:[(0,p.jsx)("span",{className:Z,children:"Find contacts by name"}),(0,p.jsx)("input",{type:"name",onChange:function(e){t((0,z.MI)(e.currentTarget.value))},className:I})]})})},S=n(4270);function T(){var t=(0,l.I0)();return(0,o.useEffect)((function(){t((0,f.yF)())}),[t]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(S.q,{children:(0,p.jsx)("title",{children:"Your contacts"})}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:"Phonebook"}),(0,p.jsx)(h,{}),(0,p.jsx)("h2",{children:"Contacts"}),(0,p.jsx)(E,{}),(0,p.jsx)(L,{})]})]})}}}]);
//# sourceMappingURL=291.d76826cb.chunk.js.map