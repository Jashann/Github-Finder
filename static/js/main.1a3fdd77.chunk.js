(this.webpackJsonpgithub_finder=this.webpackJsonpgithub_finder||[]).push([[0],{18:function(e,t,n){e.exports=n.p+"static/media/logo.8008db89.png"},20:function(e,t,n){e.exports=n(34)},25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),o=n.n(c),l=n(7),i=n(1),s=(n(25),n(26),n(8)),u=n.n(s),m=n(11),d=n(5),E=Object(a.createContext)(),p=function(e){var t=Object(a.useState)(null),n=Object(d.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)(null),i=Object(d.a)(l,2),s=i[0],p=i[1],b=function(){var e=Object(m.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/search/users?q=".concat(t,"&client_id=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/Github-Finder",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).GITHUB_CLIENT_ID,"&client_secret=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/Github-Finder",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).GITHUB_CLIENT_SECRET));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,p(a.total_count),o(a.items);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(E.Provider,{value:{totalCount:s,users:c,searchUsers:b}},e.children)},b=Object(a.createContext)(),h=function(e){var t=Object(a.useState)(null),n=Object(d.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)(!0),i=Object(d.a)(l,2),s=i[0],E=i[1],p=Object(a.useState)(null),h=Object(d.a)(p,2),f=h[0],g=h[1],v=Object(a.useState)(!0),_=Object(d.a)(v,2),O=_[0],S=_[1],N=function(){var e=Object(m.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(t,"?&client_id=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/Github-Finder",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).GITHUB_CLIENT_ID,"&client_secret=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/Github-Finder",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).GITHUB_CLIENT_SECRET));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,o(a),E(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(m.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(t,"/repos?&client_id=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/Github-Finder",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).GITHUB_CLIENT_ID,"&client_secret=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/Github-Finder",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).GITHUB_CLIENT_SECRET));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,g(a),S(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(b.Provider,{value:{user:c,loading:s,getUser:N,repos:f,reposLoading:O,getRepos:T}},e.children)},f=n(18),g=n.n(f),v=(n(28),function(){function e(e){var t=document.body;"true"===e||!0===e?t.classList.add("dark"):t.classList.contains("dark")&&t.classList.remove("dark"),localStorage.setItem("darkMode",e)}return{changeTheme:e,initializeTheme:function(){var t=localStorage.getItem("darkMode");e(t);var n=document.querySelector("#togBtn");n.checked="true"===t||!0===t,n.addEventListener("change",(function(t){e(t.target.checked)}))}}}());function _(){return Object(a.useEffect)((function(){v.initializeTheme()})),r.a.createElement("div",{id:"switch-container"},r.a.createElement("label",{className:"switch"},r.a.createElement("input",{type:"checkbox",id:"togBtn"}),r.a.createElement("div",{className:"slider round"},r.a.createElement("span",{className:"on"},r.a.createElement("ion-icon",{name:"moon-outline"})),r.a.createElement("span",{className:"off"},r.a.createElement("ion-icon",{name:"sunny-outline"})))))}var O=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light justify-content-between"},r.a.createElement(l.b,{className:"navbar-brand text-muted",to:"/Github-Finder"},r.a.createElement("img",{id:"logo",height:"60px",src:g.a,alt:"Logo"})),r.a.createElement(_,null))},S=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(a.useContext)(E).searchUsers;return r.a.createElement("div",{className:"search-container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o(n),c("")},id:"search-form"},r.a.createElement("div",{className:"form-group d-flex justify-content-center align-items-center"},r.a.createElement("input",{className:"form-control rounded-pill",id:"readOnlyInput",type:"text",placeholder:"Search Users ...",value:n,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"btn btn-info rounded-pill ml-1 d-flex justify-content-center align-items-center"},"Search Now"))))};function N(e){var t,n=e.user,a=e.singleUser,c=n.login,o=n.avatar_url,i=n.blog;return i&&((t=i.toLowerCase()).includes("http://")||t.includes("https://")||(t="https://"+n.blog)),r.a.createElement("div",{className:"user-card"},r.a.createElement("img",{src:o,alt:"Profile Img"}),r.a.createElement("h5",{className:"mt-3 text"},c),a?r.a.createElement("a",{href:n.html_url,rel:"noopener noreferrer",target:"_blank",className:"btn btn-primary"},"Visit Profile"):r.a.createElement(l.b,{to:"/Github-Finder/user/".concat(c),className:"btn btn-primary"},"View Profile"),a&&i?r.a.createElement("a",{href:t,rel:"noopener noreferrer",target:"_blank",className:"btn btn-info"},"Visit Blog"):null)}var T=function(){var e=Object(a.useContext)(E),t=e.users,n=e.totalCount;return t&&t.length>0?r.a.createElement("div",{className:"users-list"},t.map((function(e){return r.a.createElement(N,{user:e,key:e.id})}))):r.a.createElement(r.a.Fragment,null,0===n?r.a.createElement("div",{className:"user-not-exists"},r.a.createElement("h2",{className:"text-center my-4"},"The user does not exist.")):null)};function x(e){var t=e.preIconName,n=e.title,a=e.infoText;return r.a.createElement("div",{className:"single-user-info-item"},r.a.createElement("ion-icon",{class:"pre text-muted",name:t}),r.a.createElement("h4",{className:"text"},n,":"),r.a.createElement("h4",{className:"text-muted text"},a||"Not Specified"))}function C(e){var t=e.user,n=t.company,a=t.blog,c=t.location,o=t.hireable,l=t.bio,i=t.public_repos,s=t.public_gists,u=t.followers,m=t.following;return r.a.createElement("div",{className:"single-user-info"},r.a.createElement("div",{className:"single-user-info-item"},r.a.createElement("ion-icon",{class:"pre text-muted",name:"person-outline"}),r.a.createElement("h4",{className:"text"},"Hireable:"),o?r.a.createElement("ion-icon",{class:"text-muted",name:"checkmark-done-circle-outline"}):r.a.createElement("ion-icon",{class:"text-muted",name:"close-circle-outline"})),r.a.createElement(x,{preIconName:"location-outline",title:"Location",infoText:c}),r.a.createElement(x,{preIconName:"people-outline",title:"Company",infoText:n}),r.a.createElement(x,{preIconName:"globe-outline",title:"Blog",infoText:a}),r.a.createElement(x,{preIconName:"chatbubble-outline",title:"Bio",infoText:l}),r.a.createElement(x,{preIconName:"extension-puzzle-outline",title:"Public Repos",infoText:i}),r.a.createElement(x,{preIconName:"aperture-outline",title:"Public Gists",infoText:s}),r.a.createElement(x,{preIconName:"people-circle-outline",title:"Followers",infoText:u}),r.a.createElement(x,{preIconName:"person-circle-outline",title:"Following",infoText:m}))}function j(e){var t=e.show,n=e.toggleShow,a=e.text;return t?r.a.createElement("button",{onClick:n,className:"btn btn-primary"},a):null}function I(e){var t=e.showLess,n=e.toggleShow,a=e.repo,c=a.name,o=a.html_url,l=a.description;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"repo-item bg-info"},r.a.createElement("h5",null,c),r.a.createElement("p",{className:"description"},"Description: ",l||"Not Specified"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:o,className:"btn btn-primary"},"See Repo On Github")),t&&r.a.createElement(j,{show:!0,text:"Show Less",toggleShow:n}))}var w=function(e){var t=e.login,n=e.repos,c=Object(a.useState)(!1),o=Object(d.a)(c,2),l=o[0],i=o[1];function s(){i(!l)}return r.a.createElement("div",{className:"repos-container"},n.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"text-center mt-4 mb-5"},t,"'s Public Repos"),n.map((function(e,t){return t<3||l?r.a.createElement(I,{repo:e,key:e.id,showLess:n.length-1===t&&n.length>=3,toggleShow:s}):r.a.createElement(j,{toggleShow:s,show:!l&&3===t,text:"Show All",key:e.id})}))):r.a.createElement("h2",{className:"text-center my-4"},t," does not public have any repos."))};var L=function(){var e=Object(i.g)().params.username,t=Object(a.useContext)(b),n=t.user,c=t.loading,o=t.getUser,s=t.repos,u=t.reposLoading,m=t.getRepos;if(c&&o(e),u&&m(e),n){var d=n.login;return n?r.a.createElement("div",{id:"single-user-container",className:"px-2 py-5"},r.a.createElement(l.b,{id:"icon-back-container",className:"text-muted d-flex align-items-center",to:"/Github-Finder"},r.a.createElement("ion-icon",{name:"arrow-back-circle-outline"})," ",r.a.createElement("h3",{className:"m-0 text-muted"},"Go Back")),r.a.createElement("div",{id:"user-info-container"},r.a.createElement(N,{user:n,singleUser:!0}),r.a.createElement(C,{user:n})),s&&r.a.createElement(w,{repos:s,login:d})):null}return null};var D=function(){return r.a.createElement(p,null,r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/Github-Finder",exact:!0},r.a.createElement(S,null),r.a.createElement(T,null)),r.a.createElement(i.b,{path:"/Github-Finder/user/:username",exact:!0},r.a.createElement(h,null,r.a.createElement(L,null))),r.a.createElement(i.a,{to:"/Github-Finder"})))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.1a3fdd77.chunk.js.map