(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a.p+"static/media/mnt-logo.fb365336.png"},42:function(e,t,a){e.exports=a(88)},47:function(e,t,a){},74:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){},85:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(32),s=a.n(l),c=(a(47),a(4)),o=a(5),i=a(8),m=a(6),u=a(7),p=a(90),d=a(92),h=a(91),b=a(10),E=a(34),v=a.n(E),f=a(89),N=a(14),g=a.n(N),w=function(e,t,a){return function(n){g.a.post("/api/user/login",{email:e,password:t}).then(function(e){var t=e.data;localStorage.setItem("token",t.token),localStorage.setItem("expiration",t.userData.exp.toString()),a.push("/subscription"),n({type:"LOGIN DISPATCH",payload:{firstName:t.userData.firstName,lastName:t.userData.lastName,email:t.userData.email}})}).catch(function(e){var t=e.response.data.errors;n(function(e){return{type:"ERROR SET",payload:e}}(t))})}},y=(a(74),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={authenticated:!1},a.renderEditSubscription=function(){if(a.props.auth.isAuthenticated)return r.a.createElement("li",{className:"nav-item active dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"user_options_dropdown",id:"navbarDropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"User Options"),r.a.createElement("div",{className:"dropdown-menu pl-3","aria-labelledby":"navbarDropdown",style:{minWidth:"250px"}},r.a.createElement(f.a,{className:"nav-link text-dark",to:"/subscription"},"Preview Your Subscription"),r.a.createElement(f.a,{className:"nav-link text-dark",to:"/settings"},"User Settings")))},a.logOut=function(){a.props.logoutDispatch()},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"renderAuthenticationLinks",value:function(){return this.props.auth.isAuthenticated?r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("p",{className:"nav-link text-light"},"Welcome ",this.props.auth.user.firstName,"!")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.a,{onClick:this.logOut,className:"nav-link text-light btn btn-danger",to:"/"},"Logout"))):r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item mr-2"},r.a.createElement(f.a,{className:"nav-link text-light btn btn-primary",to:"/register"},"Register")),r.a.createElement("li",{className:"nav-item mr-2"},r.a.createElement(f.a,{className:"nav-link text-light btn btn-success",to:"/login"},"Login")))}},{key:"render",value:function(){return r.a.createElement("div",{className:"app-header-div navbar-dark"},r.a.createElement("nav",{className:"navbar navbar-expand-lg container"},r.a.createElement("button",{id:"nav-toggle-button",className:"navbar-toggler custom-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(f.a,{className:"nav-link text-light",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(f.a,{className:"nav-link text-light",to:"/about"},"About")),this.renderEditSubscription()),r.a.createElement("span",{className:"navbar-text text-light"},this.renderAuthenticationLinks()))))}}]),t}(n.Component)),x=Object(b.b)(function(e){return{auth:e.auth}},{logoutDispatch:function(){return function(e){localStorage.clear(),e({type:"LOGOUT DISPATCH",payload:{}})}}})(y),O=a(2),S=a.n(O),k=a(11),j=(a(78),function(e){var t=new Date(e.content.publishedAt).toLocaleDateString();return r.a.createElement("div",{className:"card news-item-card px-5 py-2"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.content.title),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"By: ",e.content.author),r.a.createElement("br",null),r.a.createElement("div",{className:"row flex"},r.a.createElement("div",{className:"col-md-6 p-3"},r.a.createElement("img",{className:"image-limit",src:e.content.urlToImage,alt:e.content.title})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("p",{className:"card-text"},e.content.description),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"Published on:  ",t))),r.a.createElement("br",null),r.a.createElement("a",{href:e.content.url,className:"card-link",target:"_blank",rel:"noopener noreferrer"},"Link to Full Story")))}),C=function(e){return r.a.createElement("div",null,e.articleList.map(function(e,t){return r.a.createElement("div",{key:e.title},r.a.createElement(j,{content:e}),r.a.createElement("br",null))}))},T=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={articleList:[]},a.fetchArticlesWrapper=function(){var e=Object(k.a)(S.a.mark(function e(t){var n,r,l;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n="",a.props.personal){e.next=9;break}return n="/api/news/top_headlines",e.next=6,g.a.get(n);case 6:r=e.sent,e.next=13;break;case 9:return n="/api/news/personal_top_headlines",e.next=12,g.a.post(n,{topics:t.topics});case 12:r=e.sent;case 13:l=r.data.articles,a.setState({articleList:l}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),a.setState({articleList:[]});case 20:case"end":return e.stop()}},e,this,[[0,17]])}));return function(t){return e.apply(this,arguments)}}(),a.assembleArticleList=function(){return a.state.articleList.map(function(e){return r.a.createElement("div",{key:e.title},r.a.createElement(j,{content:e}),r.a.createElement("br",null))})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(k.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchArticlesWrapper("");case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillReceiveProps",value:function(){var e=Object(k.a)(S.a.mark(function e(t){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t===this.props){e.next=3;break}return e.next=3,this.fetchArticlesWrapper(t);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.articleList.length<=0?r.a.createElement("div",{className:"text-center mb-5"},r.a.createElement("h2",null,"No articles to display currently.")):r.a.createElement("div",{className:"mb-5"},r.a.createElement(C,{articleList:this.state.articleList}))}}]),t}(n.Component),D=Object(b.b)(function(e){return{topics:e.topics}},null)(T),L=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center "},"Top Medical News Today Stories"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(D,{personal:!1}))},I=(a(80),a(35)),W=a.n(I),A=function(){return r.a.createElement("div",{className:"container about-card p-5"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",null,"About This Site")),r.a.createElement("div",null,r.a.createElement("img",{src:W.a,className:"about-photo",alt:"medical news today logo"})),r.a.createElement("section",null,r.a.createElement("p",null,"This page serves as a third-party subscription service of ",r.a.createElement("span",null,r.a.createElement("a",{href:"https://www.medicalnewstoday.com/"},"Medical News Today"))," by consuming its API and allowing authenticated users to subscribe to a weekly email news feed.  Users will be allowed to select up to a maximum of 5 distinct topics to subscribe to; the weekly mail feed usually will arrive on Sunday evening."),r.a.createElement("br",null),r.a.createElement("p",{className:"text-danger"},r.a.createElement("b",null,'E-mail subscription functionality not implemented yet.  You can preview result on the "Edit Subscription" page.'))),r.a.createElement("div",{className:"p-2 m-5"}),r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",null,"About the Creator")),r.a.createElement("div",null,r.a.createElement("img",{src:"https://scontent-msp1-1.xx.fbcdn.net/v/t1.0-9/19702184_10101372698303445_801271169083222058_n.jpg?_nc_cat=110&_nc_ht=scontent-msp1-1.xx&oh=3c6184abbc2b98484826a86fdfefb511&oe=5CCAFAAA",style:{maxWidth:"20%",display:"block",margin:"0 auto"},alt:"medical news today logo"})),r.a.createElement("br",null),r.a.createElement("section",null,r.a.createElement("p",null,"Mike Liu, the creator of this page, is a CS @ UIUC Alum and a current Software Developer on EpicCare Ambulatory at Epic. To find out more, please see his ",r.a.createElement("span",null,r.a.createElement("a",{href:"https://mikeliu8492.herokuapp.com/"},"personal website")),".")))},R=a(17),F=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={email:"",password:"",errors:{email:"",password:""},redirect:!0},a.handleFieldChange=function(e){return function(t){a.setState(Object(R.a)({},e,t.target.value))}},a.handleSubmit=function(){var e=Object(k.a)(S.a.mark(function e(t){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a.props.loginDispatch(a.state.email,a.state.password,a.props.history);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.showError=function(e){if(e)return r.a.createElement("p",{className:"text-danger px-1 pt-2"},e)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card px-2 mx-auto w-75"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-title text-center"},"Login Form"),r.a.createElement("br",null),r.a.createElement("form",{noValidate:!0,onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"px-1"},"Email"),r.a.createElement("input",{type:"email",name:"email",className:"form-control",value:this.state.email,onChange:this.handleFieldChange("email"),required:!0}),this.showError(this.props.errors.email)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"px-1"},"Password"),r.a.createElement("input",{type:"password",name:"password",className:"form-control",value:this.state.password,onChange:this.handleFieldChange("password"),required:!0}),this.showError(this.props.errors.password)),r.a.createElement("button",{type:"submit",className:"btn btn-success"},"Submit")))))}}]),t}(n.Component),P=Object(b.b)(function(e){return{auth:e.auth,errors:e.errors}},{loginDispatch:w})(F),M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={firstName:"",lastName:"",email:"",password:"",errors:{firstName:"",lastName:"",email:"",password:""}},a.handleFieldChange=function(e){return function(t){a.setState(Object(R.a)({},e,t.target.value))}},a.handleSubmit=function(){var e=Object(k.a)(S.a.mark(function e(t){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,g.a.post("/api/user/register",{email:a.state.email,password:a.state.password,firstName:a.state.firstName,lastName:a.state.lastName});case 4:e.sent,a.props.loginDispatch(a.state.email,a.state.password,a.props.history),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a.setState({errors:e.t0.response.data.errors});case 11:case"end":return e.stop()}},e,this,[[1,8]])}));return function(t){return e.apply(this,arguments)}}(),a.showError=function(e){if(e)return r.a.createElement("p",{className:"text-danger px-1 pt-2"},e)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card px-2"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-title text-center"},"Registration Form"),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"px-1"},"First Name"),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.firstName,onChange:this.handleFieldChange("firstName"),required:!0}),this.showError(this.state.errors.firstName)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"px-1"},"Last Name"),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.lastName,onChange:this.handleFieldChange("lastName"),required:!0}),this.showError(this.state.errors.lastName)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"px-1"},"Email"),r.a.createElement("input",{type:"email",className:"form-control",value:this.state.email,onChange:this.handleFieldChange("email"),required:!0}),this.showError(this.state.errors.email)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",className:"form-control",value:this.state.password,onChange:this.handleFieldChange("password"),required:!0}),this.showError(this.state.errors.password)),r.a.createElement("button",{type:"submit",className:"btn btn-success"},"Submit")))))}}]),t}(n.Component),q=Object(b.b)(function(e){return{auth:e.auth,errors:e.errors}},{loginDispatch:w})(M),Y=a(15),H=a(36),U=a.n(H),V=function(e){return r.a.createElement("div",{className:"mx-auto"},r.a.createElement("div",{className:"mx-auto"},r.a.createElement(U.a,{text:e.word},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",readOnly:!0,className:"form-control",placeholder:"Recipient's username","aria-label":"Recipient's username","aria-describedby":"basic-addon2",value:e.word}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-primary",type:"button"},r.a.createElement("i",{className:"far fa-copy pr-2"}),"Copy"))))))},G=function(e){return r.a.createElement("div",{className:"mx-auto"},e.copyArray.map(function(t,a){return r.a.createElement("div",{className:"my-2",key:a},r.a.createElement(V,{word:e.copyArray[a]}))}))},B=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={input:"",madeSubmission:!1,relatedWordArray:[]},a.handleSubmit=a.handleSubmit.bind(Object(Y.a)(Object(Y.a)(a))),a.handleInputChange=a.handleInputChange.bind(Object(Y.a)(Object(Y.a)(a))),a.renderRelatedWordList=a.renderRelatedWordList.bind(Object(Y.a)(Object(Y.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleInputChange",value:function(e){this.setState({input:e.currentTarget.value})}},{key:"handleSubmit",value:function(){var e=Object(k.a)(S.a.mark(function e(t){var a,n,r,l;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a="https://api.datamuse.com/words?ml=".concat(this.state.input,"&max=5"),e.next=4,g.a.get(a);case 4:n=e.sent,r=n.data,l=r.map(function(e){return e.word}),this.setState({relatedWordArray:l,madeSubmission:!0});case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"renderRelatedWordList",value:function(){return this.state.relatedWordArray.length?r.a.createElement("div",null,r.a.createElement("h6",{className:"text-center"},"Suggested Related Words"),r.a.createElement("br",null),r.a.createElement(G,{copyArray:this.state.relatedWordArray}),r.a.createElement("br",null)):this.state.madeSubmission?r.a.createElement("p",{className:"text-danger"},"No results found for this word, please try again."):r.a.createElement("p",null,"No submission made.")}},{key:"render",value:function(){return r.a.createElement("div",{className:"card w-75 mx-auto"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-title text-center"},"Search Term Suggestor"),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Input a Word to Get Related Words"),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.input,onChange:this.handleInputChange})),r.a.createElement("button",{type:"submit",className:"btn btn-success"},r.a.createElement("i",{className:"fas fa-save pr-2"}),"Submit")),r.a.createElement("br",null),r.a.createElement("div",null,this.renderRelatedWordList())))}}]),t}(n.Component),z=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={input:"",errorMessage:"",relatedWordArray:[]},a.handleInputChange=function(e){a.setState({input:e.currentTarget.value})},a.handleAdd=function(){var e=a.state.relatedWordArray;if(e.length<5)if(a.state.input){var t=a.state.input.toLowerCase();e.length&&e.indexOf(t)>-1?a.setState({errorMessage:"The word already exists(accounts for capitalization)"}):(e.push(a.state.input),a.setState({relatedWordArray:e,errorMessage:""}))}else a.setState({errorMessage:"You input is empty"});else a.setState({errorMessage:"You reached the limit of 5 unique words"})},a.handleDelete=function(){var e=a.state.relatedWordArray;e.length>0?(e.pop(),a.setState({relatedWordArray:e,errorMessage:""})):a.setState({errorMessage:"List is empty"})},a.handleSubmit=function(){var e=Object(k.a)(S.a.mark(function e(t){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a.props.changeTopics(a.state.relatedWordArray);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.renderRelatedWordList=function(){return a.state.relatedWordArray.length?r.a.createElement("div",null,r.a.createElement("h6",{className:"text-center"},"Topics for Your Search"),r.a.createElement("ol",null,a.state.relatedWordArray.map(function(e,t){return r.a.createElement("li",{key:t},e)}))):r.a.createElement("p",null,"No words submitted for search.")},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card w-75 mx-auto"},r.a.createElement("div",{className:"card-body m-3"},r.a.createElement("h6",{className:"card-title text-center"},"Topic Entry"),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Input Your Search Terms"),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.input,onChange:this.handleInputChange}),r.a.createElement("p",{className:"text-danger"},this.state.errorMessage)),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("button",{type:"button",className:"btn btn-success",onClick:this.handleAdd},r.a.createElement("i",{className:"fas fa-plus pr-2"}),"Add")),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.handleDelete},r.a.createElement("i",{className:"fas fa-times pr-2"}),"Delete")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},r.a.createElement("i",{className:"fas fa-save pr-2"}),"Preview Article Samples"))),r.a.createElement("br",null),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement(f.a,{type:"button",className:"btn btn-warning",to:"/settings"},r.a.createElement("i",{className:"fas fa-tools pr-2"}),"Set These Criteria In Settings")))),r.a.createElement("br",null),r.a.createElement("div",null,this.renderRelatedWordList())))}}]),t}(n.Component),J=Object(b.b)(function(e){return{topics:e.topics}},{changeTopics:function(e){return{type:"TOPIC DISPATCH",payload:e}}})(z),K=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={helperToolsVisible:!0,buttonMessage:"Click to Collapse Your Search Forms"},a.handleClick=function(){a.state.helperToolsVisible?a.setState({helperToolsVisible:!1,buttonMessage:"Click to Expand Your Search Forms"}):a.setState({helperToolsVisible:!0,buttonMessage:"Click to Collapse Your Toolbar"})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"text-center pt-2"},r.a.createElement("button",{className:"btn btn-primary",type:"button","data-toggle":"collapse","data-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample"},this.state.buttonMessage),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",{className:"row py-5 show",id:"collapseExample"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(J,null)),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(B,null)))),r.a.createElement("div",{className:"pt-2"},r.a.createElement("div",{className:"py-2"},r.a.createElement("h1",{className:"text-center"},"Top Personalized Articles for You!")),r.a.createElement(D,{personal:!0})))}}]),t}(n.Component),X=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={firstName:"",lastName:"",email:"",password:"",optIn:!0},a.handleFieldChange=function(e){return function(t){a.setState(Object(R.a)({},e,t.target.value))}},a.handleInput=function(e){var t=e.target;a.setState({optIn:t.checked})},a.handleSubmit=function(){var e=Object(k.a)(S.a.mark(function e(t){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log(a.state);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.showError=function(e){if(e)return r.a.createElement("p",{className:"text-danger px-1 pt-2"},e)},a.renderSearchTerms=function(){return a.props.topics.length>0?a.props.topics.map(function(e,t){return r.a.createElement("div",{className:"col-md-2 my-2"},r.a.createElement("input",{type:"text",className:"form-control",value:e,readOnly:!0}))}):r.a.createElement("div",{className:"col-md-2 mx-2 my-2"},r.a.createElement("p",null,"No terms selected."))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"card px-2 mx-auto w-75"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-title text-center"},"Settings Form"),r.a.createElement("br",null),r.a.createElement("form",{noValidate:!0,onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"px-1"},"First Name"),r.a.createElement("input",{type:"text",name:"firstname",className:"form-control",value:this.state.firstName,onChange:this.handleFieldChange("firstName"),required:!0}),this.showError(this.props.errors.password)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"px-1"},"Last Name"),r.a.createElement("input",{type:"text",name:"lastname",className:"form-control",value:this.state.lastName,onChange:this.handleFieldChange("lastName"),required:!0}),this.showError(this.props.errors.password)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"px-1"},"Email"),r.a.createElement("input",{type:"email",name:"email",className:"form-control",value:this.state.email,onChange:this.handleFieldChange("email"),required:!0}),this.showError(this.props.errors.email)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"px-1"},"Selected Terms"),r.a.createElement("div",{className:"row"},this.renderSearchTerms(),r.a.createElement("div",{className:"col-md-2 my-2 text-center"},r.a.createElement("button",{className:"btn btn-info"},"Back to Preview")))),r.a.createElement("div",{className:"form-check pt-2 pb-4"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",name:"checkOpt",checked:this.state.optIn,onChange:this.handleInput,onClick:this.handleInput}),r.a.createElement("label",{className:"form-check-label"},"Opt into E-mail Subscription (Weekly)")),r.a.createElement("button",{type:"submit",className:"btn btn-success"},"Submit")))))}}]),t}(n.Component),$=Object(b.b)(function(e){return{auth:e.auth,errors:e.errors,topics:e.topics}},{loginDispatch:w})(X),Q=(a(85),a(16)),Z=a(37),_=a(41),ee=[],te=a(38),ae={isAuthenticated:!1,user:{}},ne={},re=Object(Q.combineReducers)({topics:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOPIC DISPATCH":return Object(_.a)(t.payload);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN DISPATCH":return Object(te.a)({},e,{isAuthenticated:!0,user:t.payload});case"LOGOUT DISPATCH":return ae;default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ERROR SET":return t.payload;case"ERROR CLEAR":return ne;default:return e}}}),le=a(39),se=[Z.a],ce=Object(Q.createStore)(re,{},Object(le.composeWithDevTools)(Q.applyMiddleware.apply(void 0,se)));if(localStorage.token){var oe=v()(localStorage.token);oe&&oe.exp<Date.now()&&ce.dispatch({type:"LOGOUT DISPATCH",payload:{}})}else console.log("ON LOAD TOKEN NOT EXISTS");var ie=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,{store:ce},r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(x,null)),r.a.createElement("div",{className:"pt-5"},r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:L}),r.a.createElement(h.a,{exact:!0,path:"/about",component:A}),r.a.createElement(h.a,{exact:!0,path:"/login",component:P}),r.a.createElement(h.a,{exact:!0,path:"/register",component:q}),r.a.createElement(h.a,{exact:!0,path:"/subscription",component:K}),r.a.createElement(h.a,{exact:!0,path:"/settings",component:$}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,2,1]]]);
//# sourceMappingURL=main.66181526.chunk.js.map