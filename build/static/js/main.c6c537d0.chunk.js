(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){e.exports=a(37)},22:function(e,t,a){},25:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(16),o=a.n(c),r=(a(22),a(14),a(2)),l=a(3),m=a(5),i=a(4),u=a(6),h=[{username:"philzcoffee",thumbnailUrl:"https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg",imageUrl:"https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg",likes:400,timestamp:"July 17th 2017, 12:42:40 pm",comments:[{username:"philzcoffee",text:"We've got more than just delicious coffees to offer at our shops!"},{username:"biancasaurus",text:"Looks delicious!"},{username:"martinseludo",text:"Can't wait to try it!"}]},{username:"fortnite",thumbnailUrl:"https://tk-assets.lambdaschool.com/ce601fdf-7cb0-4098-83d3-1a1584a72513_30841289_342445456281079_112845064497004544_n.jpg",imageUrl:"https://tk-assets.lambdaschool.com/89d13918-b7a2-4b40-9658-f376ea3f6b59_37131538_213683546146400_1083714364399157248_n.jpg",likes:4307,timestamp:"July 15th 2017, 03:12:09 pm",comments:[{username:"twitch",text:"Epic Street Fighter action here in Las Vegas at #EVO2017!"},{username:"michaelmarzetta",text:"Omg that match was crazy"},{username:"themexican_leprechaun",text:"What a setup"},{username:"dennis_futbol",text:"It that injustice"},{username:"dennis_futbol",text:"Is"}]},{username:"playhearthstone",thumbnailUrl:"https://tk-assets.lambdaschool.com/c432f179-8bd7-4758-959d-d88a21f96bca_37105899_432228420518610_5035444036064772096_n.jpg",imageUrl:"https://tk-assets.lambdaschool.com/43bf01f9-319c-469d-8cf5-0120fe1007f1_yosemite.jpg",likes:5306,timestamp:"July 14th 2017, 10:04:08 am",comments:[{username:"playhearthstone",text:"Love this shot!"},{username:"awaywetravel",text:"Yosemite is my most favorite place in the universe"},{username:"awesomebt28",text:"I like how Half Dome looks so old and useless"}]}],p=(a(25),a(7)),d=a(8),f=a(10),b=a(11),g=a(12);d.b.add(f.a,b.a,g.a);var v=function(e){return s.a.createElement("div",{className:"searchBar"},s.a.createElement("div",{className:"searchBarContainer"},s.a.createElement(p.a,{icon:""}),s.a.createElement("h1",null,"Instaclone"),s.a.createElement("div",{className:"searchFormDiv"},s.a.createElement("form",null,s.a.createElement("input",{type:"text",placeholder:"Search"}))),s.a.createElement("div",{className:"searchBarIcons"},s.a.createElement(p.a,{icon:"compass"}),s.a.createElement(p.a,{icon:"heart"}),s.a.createElement(p.a,{icon:"user"}))))},E=a(13);a(31);d.b.add(f.a,b.a,g.a);var j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={comments:Object(E.a)(a.props.comments),inputText:"",likes:a.props.likes},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"changeHandler",value:function(e){this.setState({comments:this.state.comments,inputText:e.target.value})}},{key:"addNewComment",value:function(e){e.preventDefault();var t={username:localStorage.getItem("username"),text:this.state.inputText};this.setState({comments:Object(E.a)(this.state.comments).concat([t]),inputText:""}),console.log(this.state.comments)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"commentSection"},s.a.createElement("div",{className:"footer"},s.a.createElement("div",{className:"footerIcons"},s.a.createElement("button",{onClick:function(){console.log(e.state),e.setState({comments:Object(E.a)(e.props.comments),inputText:"",likes:e.state.likes+1})},className:"likeButton"},s.a.createElement(p.a,{icon:"heart"})),s.a.createElement(p.a,{icon:"comment"})),s.a.createElement("div",{className:"likes"},this.state.likes," likes")),s.a.createElement("div",{className:"comments"},this.state.comments.map(function(e){return s.a.createElement("div",null,s.a.createElement("span",{className:"commentUsername"},e.username),s.a.createElement("span",{className:"commentText"},e.text))})),s.a.createElement("hr",null),s.a.createElement("form",{onSubmit:function(t){e.addNewComment(t)},className:"commentForm"},s.a.createElement("input",{onChange:function(t){return e.changeHandler(t)},value:this.state.inputText,type:"text",placeholder:"Add a comment..."})))}}]),t}(s.a.Component),k=(a(33),function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log(this.state),s.a.createElement("div",{className:"outerPostContainer"},s.a.createElement("div",{className:"postContainer"},this.props.data.map(function(e){return s.a.createElement("div",{className:"post"},s.a.createElement("div",{className:"header"},s.a.createElement("img",{className:"thumbnail",src:e.thumbnailUrl,alt:"thumbnail"}),s.a.createElement("p",{className:"username"},e.username)),s.a.createElement("div",{className:"imageContainer"},s.a.createElement("img",{className:"postImage",src:e.imageUrl,alt:"post"})),s.a.createElement(j,{comments:e.comments,likes:e.likes}))})))}}]),t}(s.a.Component)),O=function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"wholePage"},s.a.createElement(v,null),s.a.createElement(k,{data:this.props.data}))}}]),t}(n.Component),y=a(9),x=(a(35),function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"loginScreen"},s.a.createElement("h1",null,"Welcome to InstaClone! Please login below"),s.a.createElement("h3",null,"(Hint: use any username/password you want)"),s.a.createElement("form",{onSubmit:function(t){return e.props.login(t)},className:"loginForm"},s.a.createElement("span",null,"username"),s.a.createElement("input",{onChange:function(t){e.props.changeHandler(t)},type:"text"}),s.a.createElement("span",null,"password"),s.a.createElement("input",{type:"text"}),s.a.createElement("button",{type:"submit"},"Submit")))}}]),t}(n.Component)),w=function(e){return function(t){function a(){var e;return Object(r.a)(this,a),(e=Object(m.a)(this,Object(i.a)(a).call(this))).state={loggedIn:!1,usernameInputText:""},e.changeHandler=e.changeHandler.bind(Object(y.a)(Object(y.a)(e))),e.login=e.login.bind(Object(y.a)(Object(y.a)(e))),e}return Object(u.a)(a,t),Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"changeHandler",value:function(e){e.preventDefault(),this.setState({loggedIn:!1,usernameInputText:e.target.value}),console.log(this.state.usernameInputText)}},{key:"login",value:function(e){e.preventDefault(),console.log("Loggin in"),localStorage.setItem("username",this.state.usernameInputText),this.setState({loggedIn:!0,usernameInputText:""})}},{key:"render",value:function(){return this.state.loggedIn?s.a.createElement(e,null):s.a.createElement(x,{login:this.login,changeHandler:this.changeHandler})}}]),a}(n.Component)}(function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(m.a)(this,Object(i.a)(t).call(this))).state={data:[]},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({data:h})},84)}},{key:"render",value:function(){return s.a.createElement(O,{data:this.state.data})}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.c6c537d0.chunk.js.map