(this["webpackJsonprandom-quote-generator"]=this["webpackJsonprandom-quote-generator"]||[]).push([[0],{11:function(e,t,n){e.exports=n(24)},16:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),u=n(2);n(16);var i=function(e){return r.a.createElement("div",{id:"quote-box"},e.children)};var l=function(e){return r.a.createElement("div",{id:"quote-controls"},e.children,r.a.createElement("button",{id:"new-quote",type:"button",onClick:e.handleClick,disabled:e.busy},e.text))},s=n(8),d=n(9);function m(e){var t,n={text:encodeURIComponent('"'.concat(e.en,'" ').concat(e.author,".")),url:window.location.href,hashtags:encodeURIComponent("quotes, codingQuotes"),via:"piouson_code"};return"".concat("https://twitter.com/intent/tweet?").concat((t=n,Object.keys(t).reduce((function(e,n){return e.push("".concat(n,"=").concat(t[n])),e}),[]).join("&")))}var f=function(e){var t=m(e.tweet);return r.a.createElement("div",null,r.a.createElement("a",{id:"tweet-quote",href:t,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(s.a,{className:"tweet-icon",icon:d.a,color:"green"})))};var h=function(e){return r.a.createElement("blockquote",null,r.a.createElement("q",{id:"text"},e.text),r.a.createElement("footer",{id:"author"},e.author))};var b=function(e){return r.a.createElement("div",{id:"quote-header"},r.a.createElement("h1",null,e.text))},p=n(5),E=n.n(p),v=n(10),g=function(){var e=function(e,t){var n=Object(a.useState)(JSON.parse(localStorage.getItem(e))||t),r=Object(u.a)(n,2),o=r[0],c=r[1];return Object(a.useEffect)((function(){localStorage.setItem(e,JSON.stringify(o))}),[o,e]),[o,c]}("quote",""),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)("https://programming-quotes-api.herokuapp.com/quotes/random"),c=Object(u.a)(o,1)[0],i=Object(a.useState)(""),l=Object(u.a)(i,2),s=l[0],d=l[1],m=Object(a.useState)(!1),f=Object(u.a)(m,2),h=f[0],b=f[1];return[{quote:n,isLoading:h,error:s},Object(a.useCallback)(Object(v.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(""),b(!0),e.next=4,new Promise((function(e){return setTimeout(e,500)}));case 4:return e.next=6,fetch(c);case 6:if((t=e.sent).ok){e.next=11;break}d("HTTP Error: Status: ".concat(t.status,"!")),e.next=15;break;case 11:return e.next=13,t.json();case 13:n=e.sent,r(n);case 15:b(!1);case 16:case"end":return e.stop()}}),e)}))),[c,r])]};var w=function(){var e=g(),t=Object(u.a)(e,2),n=t[0],o=n.quote,c=n.isLoading,s=n.error,d=t[1];return Object(a.useEffect)((function(){o||d()}),[o,d]),r.a.createElement("div",{id:"App"},r.a.createElement("div",{id:"container"},r.a.createElement(b,{text:"Coding Quotes"}),r.a.createElement(i,null,s&&r.a.createElement("p",null,s),c?r.a.createElement("p",null,"Loading..."):o.en&&r.a.createElement(h,{text:o.en,author:o.author})),r.a.createElement(l,{handleClick:d,busy:c,text:"New Quote"},r.a.createElement(f,{tweet:o}))),r.a.createElement("a",{id:"creator",href:"https://piouson.github.io/",target:"_blank",rel:"noopener noreferrer"},"by piouson"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(23);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.cb980c4c.chunk.js.map