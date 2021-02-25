(this["webpackJsonpsmart-brain"]=this["webpackJsonpsmart-brain"]||[]).push([[0],{319:function(e,t,n){},321:function(e,t,n){"use strict";n.r(t);var a=n(9),s=n.n(a),i=n(43),r=n.n(i),c=(n(84),n(20)),o=n(21),l=n(23),h=n(22),b=n(2),d=function(e){var t=e.onRouteChange,n=e.resetState,a=e.userName,s=e.entries;return Object(b.jsx)("nav",{className:"ma0 pr0 pt1",children:Object(b.jsxs)("div",{className:"pa0 f4 ma2 dib z-2",children:[Object(b.jsx)("a",{className:"pl1 pr1 link shadow5 b pointer z-2",children:a}),"|",s?Object(b.jsxs)("a",{className:"pl1 pr1 fw5",children:["Images scanned: ",s]}):Object(b.jsx)("a",{className:"pl1 pr1 fw5",children:"No images scanned yet"}),"|",Object(b.jsx)("a",{href:"",className:"pl1 pr1 fw6 link dim black pointer z-2",onClick:function(){t("signin"),n()},children:"Sign Out"})]})})},u=n(78),p=n.n(u),m=n.p+"static/media/logo.77e2ad69.png",g=function(e){var t=e.onSubmit;return Object(b.jsx)("div",{className:"center pa0",children:Object(b.jsx)(p.a,{className:"Tilt br2 shadow-2 z-2",options:{max:30,scale:1.25},style:{height:165,width:150},children:Object(b.jsx)("div",{className:"Tilt-inner ma0",children:Object(b.jsx)("img",{className:"logo",src:m,alt:"Smart Brain logo",onClick:t})})})})},j=(n(44),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onLoginChange=function(e){a.setState({signInLogin:e.target.value})},a.onPassChange=function(e){a.setState({signInPass:e.target.value})},a.onSubmitSignIn=function(){a.state.signInPass&&a.state.signInLogin?fetch(String.prototype.concat("https://smart-brain-serv.herokuapp.com/","signin"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({login:a.state.signInLogin,password:a.state.signInPass})}).then((function(e){return e.json()})).then((function(e){e.id?(a.props.onRouteChange("home"),a.props.loadUser(e)):alert("Login/password mismatch!")})):alert("Please enter your Login and Password.")},a.state={signInLogin:"",signInPass:""},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.onRouteChange;return Object(b.jsx)("main",{className:"pa4",children:Object(b.jsx)("div",{className:"ba bg-black-05 b--black-30 mv4 mw6 center shadow-5",children:Object(b.jsxs)("div",{className:"z-2 ",children:[Object(b.jsxs)("fieldset",{id:"sign_up",className:"b--transparent ph0 mh0",children:[Object(b.jsx)("legend",{className:"code f2 fw6 pa1 mh0 center",children:"Sign In"}),Object(b.jsxs)("div",{className:"mt3",children:[Object(b.jsx)("label",{className:"code fw6 lh-copy f5",htmlFor:"login-address",children:"Login"}),Object(b.jsx)("input",{className:"b--black pa2 white input-reset ba bg-transparent w-100 hover-bg-black hover-white",onChange:this.onLoginChange,type:"email",name:"email-address",id:"email-address"})]}),Object(b.jsxs)("div",{className:"mv3",children:[Object(b.jsx)("label",{className:"code db fw6 lh-copy f5",htmlFor:"password",children:"Password"}),Object(b.jsx)("input",{className:"b--black white b pa2 input-reset ba bg-transparent w-100 hover-bg-black hover-white",onChange:this.onPassChange,type:"password",name:"password",id:"password"})]})]}),Object(b.jsx)("input",{onClick:this.onSubmitSignIn,className:"shadow-1 w-40 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 hover-bg-black hover-white",type:"submit",value:"Sign In"}),Object(b.jsx)("div",{className:"lh-copy mt3",children:Object(b.jsx)("input",{onClick:function(){return e("register")},className:"shadow-1 w-40 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 hover-bg-black hover-white",type:"submit",value:"I'm New"})})]})})})}}]),n}(s.a.Component)),f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onLoginChange=function(e){a.setState({newLogin:e.target.value})},a.onEmailChange=function(e){a.setState({newEmail:e.target.value})},a.onPassChange=function(e){a.setState({newPass:e.target.value})},a.emailCheck=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(e)},a.onSubmitReg=function(){a.state.newEmail.length&&a.state.newPass&&a.state.newLogin?a.emailCheck(a.state.newEmail)?fetch(String.prototype.concat("https://smart-brain-serv.herokuapp.com/","register"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.newEmail,password:a.state.newPass,login:a.state.newLogin})}).then((function(e){return e.json()})).then((function(e){e.login?(a.props.loadUser(e),a.props.onRouteChange("home")):alert("Registration failed. Try another login/password.")})).catch((function(e){alert("Oops, something went wrong..."),console.log("error:",e)})):alert("Invalid e-mail address."):alert("All fields are required.")},a.state={newLogin:"",newEmail:"",newPass:""},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this;this.props.onRouteChange;return Object(b.jsx)("main",{className:"pa4",children:Object(b.jsx)("div",{className:"ba bg-black-05  b--black-30 mv4 mw6 center shadow-5",children:Object(b.jsxs)("div",{className:"z-2 measure",children:[Object(b.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(b.jsx)("legend",{className:"pa1 code f2 fw6 ph0 mh0 pb1 center",children:"New Account"}),Object(b.jsxs)("div",{className:"mt3",children:[Object(b.jsx)("label",{className:"code db fw6 lh-copy f5",htmlFor:"name",children:"Login"}),Object(b.jsx)("input",{onChange:this.onLoginChange,className:"b--black pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})]}),Object(b.jsxs)("div",{className:"mt3",children:[Object(b.jsx)("label",{className:"code db fw6 lh-copy f5",htmlFor:"email-address",children:"Email"}),Object(b.jsx)("input",{onChange:this.onEmailChange,className:"b--black pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(b.jsxs)("div",{className:"mv3",children:[Object(b.jsx)("label",{className:"code db fw6 lh-copy f5",htmlFor:"password",children:"Password"}),Object(b.jsx)("input",{onChange:this.onPassChange,className:"b--black b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(b.jsx)("div",{className:"",children:Object(b.jsx)("input",{onClick:this.onSubmitReg,className:"shadow-1 w-50 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 hover-bg-black hover-white",type:"submit",value:"Register"})}),Object(b.jsx)("div",{className:"mt3",children:Object(b.jsx)("input",{onClick:function(){return e.props.onRouteChange("signin")},className:"shadow-1 w-50 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 hover-bg-black hover-white",type:"submit",value:"To Sign In"})})]})})})}}]),n}(s.a.Component),w=function(e){var t=e.onInputChange,n=e.facesDetected,a=!1;return n>1&&(a=!0),Object(b.jsxs)("div",{className:"z-0",children:[n?Object(b.jsxs)("p",{className:"f2 white code",children:["Smart Brain has detected ",n," face",a?"s":""," in your image"]}):Object(b.jsx)("p",{className:"f2 code",children:"Smart Brain will detect faces in your image"}),Object(b.jsx)("p",{className:"f3 code",children:"1. Enter image URL"}),Object(b.jsx)("p",{className:"f3 code",children:"2. Click on the Smart Brain"}),Object(b.jsx)("div",{className:"center",children:Object(b.jsx)("input",{className:"input-url f4 pa0 w-70 shadow-2 center z-2",type:"text",onChange:t})})]})},v=function(e){var t=e.inputUrl,n=e.boxes;return n.length?Object(b.jsx)("div",{className:"mw9 center",children:Object(b.jsxs)("div",{className:"absolute pb4 z-2",children:[Object(b.jsx)("img",{id:"input-image",className:"shadow-5 z-2",alt:"",src:t}),n.map((function(e,t){return Object(b.jsx)("div",{className:"bounding-box z-3",style:{top:e.topRow,bottom:e.bottomRow,left:e.leftCol,right:e.rightCol}},t)}))]})}):Object(b.jsx)("div",{className:"mw9 center",children:Object(b.jsx)("div",{className:"absolute mt2",children:Object(b.jsx)("img",{id:"input-image",className:"z-2",alt:"",src:t})})})},O=n(79),x=n.n(O),N=(n(319),n(320),{fpsLimit:60,interactivity:{detectsOn:"canvas",events:{onClick:{enable:!0,mode:"push"},resize:!0},modes:{push:{quantity:1},repulse:{distance:200,duration:.4}}},particles:{number:{value:90,density:{enabled:!0,value_area:100}}}}),C={input:"",inputUrl:"",boxes:[],route:"signin",facesDetected:0,user:{id:0,login:"",email:"",entries:0,joined:""}},S={input:"",inputUrl:"",boxes:[],facesDetected:0},y=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).calcFaceLocation=function(t){var n=t.outputs[0].data.regions.map((function(e){return e.region_info.bounding_box})),a=document.getElementById("input-image"),s=Number(a.width),i=Number(a.height);return n.forEach((function(e){e.leftCol=e.left_col*s,e.topRow=e.top_row*i,e.rightCol=s-e.right_col*s,e.bottomRow=i-e.bottom_row*i})),e.setState({facesDetected:n.length}),n},e.displayFaceBox=function(t){e.setState({boxes:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onSubmit=function(t){e.setState({inputUrl:e.state.input}),fetch(String.prototype.concat("https://smart-brain-serv.herokuapp.com/","imageurl"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({inputUrl:e.state.input})}).then((function(e){return e.json()})).then((function(t){fetch(String.prototype.concat("https://smart-brain-serv.herokuapp.com/","image"),{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})),e.displayFaceBox(e.calcFaceLocation(t))}),(function(t){alert("We got a negative response..\n".concat(t)),e.resetSearchState()})).catch((function(t){alert("Something went wrong..\n".concat(t)),e.resetSearchState()}))},e.onRouteChange=function(t){"signin"===t?e.resetState():e.setState({route:t})},e.loadUser=function(t){e.setState({user:{id:t.id,login:t.login,email:t.email,entries:t.entries,joined:t.joined}})},e.resetState=function(){e.setState(C)},e.resetSearchState=function(){e.setState(S)},e.renderScreen=function(){switch(e.state.route){case"signin":return Object(b.jsx)(j,{loadUser:e.loadUser,onRouteChange:e.onRouteChange});case"register":return Object(b.jsx)(f,{loadUser:e.loadUser,onRouteChange:e.onRouteChange});case"home":return Object(b.jsxs)("div",{children:[Object(b.jsx)(d,{onRouteChange:e.onRouteChange,resetState:e.resetState,userName:e.state.user.login,entries:e.state.user.entries}),Object(b.jsx)(g,{onSubmit:e.onSubmit}),Object(b.jsx)(w,{onInputChange:e.onInputChange,facesDetected:e.state.facesDetected}),Object(b.jsx)(v,{inputUrl:e.state.inputUrl,boxes:e.state.boxes})]});default:return Object(b.jsx)(j,{loadUser:e.loadUser,onRouteChange:e.onRouteChange})}},e.state=C,e}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(x.a,{className:"particles z-1",params:N}),this.renderScreen()]})}}]),n}(s.a.Component),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,322)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(y,{}),document.getElementById("root")),k()},84:function(e,t,n){}},[[321,1,2]]]);
//# sourceMappingURL=main.24ff9d41.chunk.js.map