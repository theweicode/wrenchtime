(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,n){},168:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(75),o=n.n(r),c=(n(103),n(14)),s=n(15),l=n(34),u=n(32),h=n(19),m=n(35),p=n(169),d=n(96),b=n(36),f=n.n(b),g=n(50),v=n(10),E=n.n(v),y=(n(74),n(5)),w=n(171),O=function(){function e(){var t=this;Object(c.a)(this,e),this.firebaseAuth=E.a.auth(),this._currentUser$=y.a.create(function(e){t.firebaseAuth.onAuthStateChanged(function(t){e.next(t)})}).pipe(Object(w.a)())}return Object(s.a)(e,[{key:"signIn",value:function(){}},{key:"signOut",value:function(){var e=Object(g.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.firebaseAuth.signOut();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"currentUser$",get:function(){return this._currentUser$}}]),e}(),k=n(91),j=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).firebaseUiConfig={signInFlow:"popup",signInOptions:[E.a.auth.EmailAuthProvider.PROVIDER_ID,E.a.auth.GoogleAuthProvider.PROVIDER_ID,E.a.auth.PhoneAuthProvider.PROVIDER_ID,E.a.auth.GithubAuthProvider.PROVIDER_ID,E.a.auth.FacebookAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(e){n.props.authService.signIn(e.user)}}},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(k.FirebaseAuth,{uiConfig:this.firebaseUiConfig,firebaseAuth:this.props.authService.firebaseAuth})}}]),t}(a.Component),x=n(23),S=(n(158),function(){function e(){var t=this;Object(c.a)(this,e),this.db=E.a.firestore(),this.db.settings({timestampsInSnapshots:!0}),this._destinations$=y.a.create(function(e){return t.db.collection("destinations").onSnapshot(function(t){var n=[];t.forEach(function(e){return n.push(Object(x.a)({id:e.id},e.data()))}),e.next(n)})}).pipe(Object(w.a)())}return Object(s.a)(e,[{key:"createDestination",value:function(){var e=Object(g.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.collection("destinations").add(t);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"deleteDestination",value:function(e){return this.db.collection("destinations").doc(e).delete()}},{key:"destinations$",get:function(){return this._destinations$}}]),e}()),A=n(95),C=n(172),I=n(173),D=function(){return i.a.createElement("header",null,i.a.createElement("span",{className:"wrn-logo"},i.a.createElement("i",{className:"material-icons"})),i.a.createElement("ul",{className:"main-nav"},i.a.createElement("li",null,i.a.createElement(I.a,{exact:!0,to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(I.a,{exact:!0,to:"/components/Car"},"Car")),i.a.createElement("li",null,i.a.createElement(I.a,{exact:!0,to:"/components/Wrench"},"Wrench")),i.a.createElement("li",null,i.a.createElement(I.a,{exact:!0,to:"/components/Time"},"Time")),i.a.createElement("li",null,i.a.createElement(I.a,{exact:!0,to:"/components/About"},"About")),i.a.createElement("li",null,i.a.createElement(I.a,{exact:!0,to:"/components/Picture"},"Picture"))))},N=function(){return i.a.createElement("div",null,i.a.createElement("p",null,"If you're anything like me and love nice cars then the last thing you want to do is pay $30,000 for a brand new Civic. However looking at what type of cars are sold every year and how sports cars are being less and less popular its fair to say that the age of sports cars maybe over."),i.a.createElement("p",null,"But there is hope. You have seem in on the streets haven't you? That car from the early 2000s or even older that you coveted forever but now think you can't own it because its too unreliable or expensive to own?"),i.a.createElement("p",null,"Well they all know something that you may not. That is why this website is about. It's here to guide you to owning the type of car that you love instead of the car you have to have to live."))},P=function(){return i.a.createElement("form",null,i.a.createElement("label",null,"Make:",i.a.createElement("input",{type:"text",name:"make"})),i.a.createElement("br",null),i.a.createElement("label",null,"Model:",i.a.createElement("input",{type:"text",name:"Model"})),i.a.createElement("br",null),i.a.createElement("label",null,"Mileage:",i.a.createElement("input",{type:"number",name:"Mileage"})),i.a.createElement("button",null,"Add"))},W=function(){return i.a.createElement("div",null,i.a.createElement("h3",null,"Car List"))},R=function(){return i.a.createElement("div",{className:"container"},i.a.createElement("img",{className:"showcase",src:"https://i.imgur.com/qLtnksU.jpg"}),i.a.createElement("h3",null,"Add Car Form"),i.a.createElement(P,null),i.a.createElement(W,null))},U=function(){return i.a.createElement("h3",null,"this is wrench")},M=function(){return i.a.createElement("h3",null,"this is time")},$=function(){return i.a.createElement("div",{className:"container"},i.a.createElement("p",null,"When I grew up I was lucky to have a mechanic as a stepfather. While we not have gotten along in every way he did show me how to work on my car. My stepdad while is no banker is a pretty decent mechanic. Which means he always owned very old beater cars. He would buy a car, fix it up and then sell it for a bit of profit. We definitely had our share of cars. Mostly Hondas. Staring with the Accord, two Civics, CRX, and CR-V. We also had a few Nissans. Maxima, 240sx, and my 350z. Not mentioning the domestic car/van like the a police Crown Vic, GM Astro Van and many more. However even after this amount of experience and I also had a huge interest in cars I did not actively maintain my car properly. While stepdad can swap an engine and replace a transmission he's never really owned a car he wanted to keep forever."))},_=n(93),z=function(e){var t=e.selected;return i.a.createElement("div",{style:t?{left:"4px",top:"4px",position:"absolute",zIndex:"1"}:{display:"none"}},i.a.createElement("svg",{style:{fill:"white",position:"absolute"},width:"24px",height:"24px"},i.a.createElement("circle",{cx:"12.5",cy:"12.2",r:"8.292"})),i.a.createElement("svg",{style:{fill:"#06befa",position:"absolute"},width:"24px",height:"24px"},i.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})))},V={transition:"transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"},B={transform:"translateZ(0px) scale3d(0.9, 0.9, 1)",transition:"transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"},L={backgroundColor:"#eee",cursor:"pointer",overflow:"hidden",position:"relative"},T=function(e){var t=e.index,n=e.onClick,a=e.photo,r=e.margin,o=e.direction,c=e.top,s=e.left,l=(100-30/a.width*100)/100,u=(100-30/a.height*100)/100;return B.transform="translateZ(0px) scale3d(".concat(l,", ").concat(u,", 1)"),"column"===o&&(L.position="absolute",L.left=s,L.top=c),i.a.createElement("div",{style:Object(x.a)({margin:r,height:a.height,width:a.width},L),className:a.selected?"":"not-selected"},i.a.createElement(z,{selected:!!a.selected}),i.a.createElement("img",Object.assign({style:a.selected?Object(x.a)({},V,B):Object(x.a)({},V)},a,{onClick:function(e){return n(e,{index:t,photo:a})}})),i.a.createElement("style",null,".not-selected:hover{outline:2px solid #06befa}"))},G=[{src:"https://i.imgur.com/KaQDBGs.jpg",width:4,height:3},{src:"https://i.imgur.com/PlOhTQ7.jpg",width:1,height:1},{src:"https://i.imgur.com/VgT5WmF.png",width:3,height:4},{src:"https://i.imgur.com/ZTRx5ar.png/",width:3,height:4},{src:"https://i.imgur.com/LkdKaEH.png",width:3,height:4},{src:"https://i.imgur.com/84BLUHy.png",width:4,height:3},{src:"https://i.imgur.com/aqij4Od.png",width:3,height:4}],H=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={photos:G,selectAll:!1},n.selectPhoto=n.selectPhoto.bind(Object(h.a)(n)),n.toggleSelect=n.toggleSelect.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"selectPhoto",value:function(e,t){var n=this.state.photos;n[t.index].selected=!n[t.index].selected,this.setState({photos:n})}},{key:"toggleSelect",value:function(){var e=this,t=this.state.photos.map(function(t,n){return Object(x.a)({},t,{selected:!e.state.selectAll})});this.setState({photos:t,selectAll:!this.state.selectAll})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("p",null,i.a.createElement("button",{className:"toggle-select",onClick:this.toggleSelect},"toggle select all")),i.a.createElement(_.a,{photos:this.state.photos,onClick:this.selectPhoto,ImageComponent:T,direction:"column"}))}}]),t}(i.a.Component);E.a.initializeApp({apiKey:"AIzaSyBUGJfi6yh4Gsn1ljsN74AgNz6_IG7Bhhk",authDomain:"wrenchtime-b4yt.firebaseapp.com",databaseURL:"https://wrenchtime-b4yt.firebaseio.com",projectId:"wrenchtime-b4yt",storageBucket:"wrenchtime-b4yt.appspot.com",messagingSenderId:"251706795155"});var F=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).store=new S,e.authService=new O,e.state={},e.onDestinationCreate=e.onDestinationCreate.bind(Object(h.a)(e)),e.onDestinationDelete=e.onDestinationDelete.bind(Object(h.a)(e)),e.handleSignOut=e.handleSignOut.bind(Object(h.a)(e)),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.currentUserSubscription=this.authService.currentUser$.subscribe(function(t){return e.setState({user:t})}),this.authService.currentUser$.pipe(Object(C.a)(function(t){return t?e.store.destinations$:Object(A.a)([])})).subscribe(function(t){return e.setState({destinations:t})})}},{key:"componentWillUnmount",value:function(){this.currentUserSubscription.unsubscribe(),this.destinationsSubscription.unsubscribe()}},{key:"onDestinationCreate",value:function(e){this.store.createDestination(e)}},{key:"onDestinationDelete",value:function(e){this.store.deleteDestination(e.id)}},{key:"handleSignOut",value:function(){this.authService.signOut()}},{key:"render",value:function(){var e;return e=this.state.user?null==this.state.destinations?i.a.createElement("div",null,i.a.createElement("p",null,"Signed in as: ",this.state.user.displayName,i.a.createElement("button",{onClick:this.handleSignOut},"Sign out")),i.a.createElement("p",null,"Loading data...")):i.a.createElement("div",null,i.a.createElement(p.a,null,i.a.createElement("div",{className:"container"},i.a.createElement(d.a,{path:"/",component:D}),i.a.createElement(d.a,{exact:!0,path:"/",component:N}),i.a.createElement(d.a,{exact:!0,path:"/components/Car",component:R}),i.a.createElement(d.a,{exact:!0,path:"/components/Wrench",component:U}),i.a.createElement(d.a,{exact:!0,path:"/components/Time",component:M}),i.a.createElement(d.a,{exact:!0,path:"/components/About",component:$}),i.a.createElement(d.a,{exact:!0,path:"/components/Picture",component:H}))),i.a.createElement("p",null,"Signed in as: ",this.state.user.displayName,i.a.createElement("button",{onClick:this.handleSignOut},"Sign out"))):i.a.createElement(j,{authService:this.authService}),i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("h1",{className:"App-title"},"Wrenchtime")),i.a.createElement("div",{className:"App-body-container"},i.a.createElement("div",{className:"App-body"},e)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=n(170);o.a.render(i.a.createElement(J.a,{basename:"/wrenchtime"},i.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},98:function(e,t,n){e.exports=n(168)}},[[98,1,2]]]);
//# sourceMappingURL=main.3335620d.chunk.js.map