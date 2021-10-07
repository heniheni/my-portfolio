(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{100:function(e,t){},101:function(e,t,s){},102:function(e,t,s){},103:function(e,t,s){},104:function(e,t,s){"use strict";s.r(t);var c,n,i,a=s(1),r=s.n(a),l=s(15),j=s.n(l),o=(s(51),s(13)),d=s(14),b=s(22),h=(s(52),s(12)),m=s(0),u=d.a.ul(c||(c=Object(o.a)(["\n  list-style: none;\n  display: flex;\n  flex-flow: row nowrap;\n  li {\n    padding: 18px 10px;\n  }\n  @media (max-width: 768px) {\n    flex-flow: column nowrap;\n    background-color: #e9765b;\n    position: fixed;\n    transform: ",";\n    top: -24px;\n    left: 0;\n    height: 100vh;\n    width: 300px;\n    padding-top: 3.5rem;\n    transition: transform 0.3s ease-in-out;\n    li {\n      color: #fff;\n    }\n  }\n"])),(function(e){return e.open?"translateX(0)":"translateX(-100%)"})),x=function(e){var t=e.open;return Object(m.jsxs)(u,{className:"styleUL",open:t,children:[Object(m.jsx)("li",{className:"listitems",children:Object(m.jsx)(h.Link,{activeClass:"active",to:"HeroHeader",spy:!0,smooth:!0,offset:-55,duration:500,children:"Home"})}),Object(m.jsx)("li",{className:"listitems",children:Object(m.jsx)(h.Link,{activeClass:"active",to:"AboutMe",spy:!0,smooth:!0,offset:-55,duration:500,children:"About Me"})}),Object(m.jsx)("li",{className:"listitems",children:Object(m.jsx)(h.Link,{activeClass:"active",to:"Academic",spy:!0,smooth:!0,offset:-55,duration:500,children:"Academic"})}),Object(m.jsx)("li",{className:"listitems",children:Object(m.jsx)(h.Link,{activeClass:"active",to:"Projects",spy:!0,smooth:!0,offset:-55,duration:500,children:"Projects"})}),Object(m.jsx)("li",{className:"listitems",children:Object(m.jsx)(h.Link,{activeClass:"active",to:"Resume",spy:!0,smooth:!0,offset:-55,duration:500,children:"Resume"})}),Object(m.jsx)("li",{className:"listitems",children:Object(m.jsx)(h.Link,{activeClass:"active",to:"ContactMe",spy:!0,smooth:!0,offset:-55,duration:500,children:"Contact Me"})})]})},O=d.a.div(n||(n=Object(o.a)(["\n  width: 2rem;\n  height: 2rem;\n  position: fixed;\n  left: 20px;\n  z-index: 20;\n  display: none;\n  @media (max-width: 768px) {\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n  }\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background-color: ",";\n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n    &:nth-child(1) {\n      transform: ",";\n    }\n    &:nth-child(2) {\n      transform: ",";\n      opacity: ",";\n    }\n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n"])),(function(e){e.open;return"white"}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"translateX(100%)":"translateX(0)"}),(function(e){return e.open?0:1}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),f=function(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),s=t[0],c=t[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(O,{open:s,onClick:function(){return c(!s)},children:[Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{})]}),Object(m.jsx)(x,{open:s})]})},p=(s.p,d.a.nav(i||(i=Object(o.a)(["\n\n  background-color:#e7edee;\n  z-index:9;\n  font-size:24px;\n  color: white;\n  position:fixed;\n  top:0;\n  left:0;\n  width: 100%;\n  height: 55px;\n  border-bottom: 2px solid #f1f1f1;\n  display: flex;\n  justify-content: center;\n  align-items:center;\n  .logo {\n    padding: 15px 0;\n  }\n"])))),v=function(){return Object(m.jsxs)(p,{children:[Object(m.jsx)("div",{className:"logo"}),Object(m.jsx)(f,{})]})},N=s.p+"static/media/Heni_Bhungalia.75bea7db.jpeg",g=(s(64),s(4)),y=s(5),w=s(20),C=s(10),S=s(9),k=function(e){Object(C.a)(s,e);var t=Object(S.a)(s);function s(e){var c;return Object(g.a)(this,s),(c=t.call(this,e)).state={text:"I'm Heni Bhungalia",count:0,show:""},c.update=c.update.bind(Object(w.a)(c)),c}return Object(y.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.update()}),100)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"update",value:function(){var e=this.state.count,t=this.state.text.charAt(e),s=this.state.text.length;console.log("counter : "+e+" / letter : "+t),e<=s?this.setState({show:this.state.show+t,count:this.state.count+1}):clearInterval(this.timerID)}},{key:"render",value:function(){return Object(m.jsx)("section",{className:"typeWriteAbout",children:Object(m.jsx)("p",{children:this.state.show})})}}]),s}(r.a.Component),A=s(21),H=s.n(A);function I(){return Object(m.jsx)("div",{className:"HeroHeader",id:"HeroHeader",children:Object(m.jsxs)("div",{className:"flexContainer",children:[Object(m.jsxs)("div",{className:"flexItem1",children:[Object(m.jsxs)("div",{className:"intro",children:[Object(m.jsxs)("h2",{children:["Hi ",Object(m.jsx)(H.a,{symbol:"\ud83d\udc4b",label:"wave hand"}),",",Object(m.jsx)("br",{}),Object(m.jsx)(k,{})]}),"   ",Object(m.jsx)("h3",{style:{color:"#f08e80"},children:"UI-UX Web Developer"}),Object(m.jsx)("h4",{children:"Northeastern University"})]}),Object(m.jsxs)("p",{className:"heroContent",children:["Creative Front End Web Developer with experience building a responsive website, utilizing semantic HTML.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Passionate about learning usability, accessibility, and learning new technology. Hardworking and team player, proficient in HTML, CSS, designing wireframes, and developing prototypes."]}),Object(m.jsx)("div",{className:"wrap",children:Object(m.jsx)(h.Link,{to:"AboutMe",children:Object(m.jsx)("button",{className:"button",children:"Read More"})})})]}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"flexItem2",children:Object(m.jsx)("img",{className:"setImage",src:N,alt:"userprofileimage"})})]})})}s(66),s.p;var M=s.p+"static/media/wire.54d58f44.png",P=s.p+"static/media/prototype.56e264a9.png",D=s.p+"static/media/code.8579115f.png",L=s(6),T=s.n(L),U=function(e){Object(C.a)(s,e);var t=Object(S.a)(s);function s(){return Object(g.a)(this,s),t.apply(this,arguments)}return Object(y.a)(s,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"AboutMe",id:"AboutMe",children:[Object(m.jsx)(T.a,{bottom:!0,children:Object(m.jsx)("div",{className:"subHeadingSet",children:Object(m.jsx)("h1",{className:"about_subHeadText",children:"About Me"})})}),Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"contentContainer",children:[Object(m.jsxs)("div",{className:"intro_about",children:[Object(m.jsxs)("h2",{className:"contentAbout",children:[Object(m.jsx)(H.a,{symbol:"\ud83d\udc4b",label:"Waving Hand"}),"Hi Again, "]})," ",Object(m.jsx)("h3",{style:{color:"#e9765b",fontSize:"24px"},children:"UI-UX Web Developer"}),Object(m.jsx)("h4",{className:"subcontent",children:"Northeastern University"})]}),Object(m.jsxs)("p",{className:"typeWriter",children:["I am Heni Bhungalia, promising future developer residing at Seattle,WA.Born and brought up in India. Graduate student of Northeastern University. Excellent with Time management and Leadership.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"I love designing and developing application which catch user attention, currently enhancing my knowledge by learning more about React and diving deep into how to make website accessible and user friendly.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"I am excited to join a company where I can refine my skills."]}),Object(m.jsx)("h1",{className:"setHobby",children:"I Love, "}),Object(m.jsxs)("div",{className:"favContainer",children:[Object(m.jsx)("div",{children:Object(m.jsx)("a",{className:"loveStyle",href:"https://heni947644.invisionapp.com/freehand/INFO6150ProjectWireframe-6b6TbEPwa",children:Object(m.jsxs)("figure",{children:[Object(m.jsx)("img",{className:"fav1",src:M,alt:"wireframePhoto"}),Object(m.jsx)("figcaption",{className:"fav1_cap",children:"Wireframing"})]})})}),Object(m.jsx)("div",{children:Object(m.jsx)("a",{className:"loveStyle",href:"https://www.figma.com/file/OfVddtmzzGcsge03vkORNu/Untitled?node-id=33%3A7",children:Object(m.jsxs)("figure",{children:[Object(m.jsx)("img",{className:"fav2",src:P,alt:"prototypePhoto"}),Object(m.jsx)("figcaption",{className:"fav2_cap",children:"Prototyping"})]})})}),Object(m.jsx)("div",{children:Object(m.jsx)("a",{className:"loveStyle",href:"https://github.com/heniheni?tab=repositories",children:Object(m.jsxs)("figure",{children:[Object(m.jsx)("img",{className:"fav3",src:D,alt:"codePhoto"}),Object(m.jsx)("figcaption",{className:"fav3_cap",children:"Developing"})]})})})]})]})}),Object(m.jsxs)("div",{className:"sets",children:[Object(m.jsxs)("ul",{className:"list",children:[Object(m.jsx)("li",{style:{color:"#e9765b",fontStyle:"italic"},className:"items",children:"Skill Sets"}),Object(m.jsx)("li",{className:"items",children:" HTML"}),Object(m.jsx)("li",{className:"items",children:"CSS"}),Object(m.jsx)("li",{className:"items",children:" JavaScript"}),Object(m.jsx)("li",{className:"items",children:" React"}),Object(m.jsx)("li",{className:"items",children:" Node.Js"}),Object(m.jsx)("li",{className:"items",children:" Java"}),Object(m.jsx)("li",{className:"items",children:" MySql"}),Object(m.jsx)("li",{className:"items",children:" User Interface(UI) Designing"}),Object(m.jsx)("li",{className:"items",children:" User Experience(UX) Developing"})]}),Object(m.jsxs)("ul",{className:"list",children:[Object(m.jsx)("li",{style:{color:"#e9765b",fontStyle:"italic"},className:"items",children:"Tool Sets"}),Object(m.jsx)("li",{className:"items",children:" inVision"}),Object(m.jsx)("li",{className:"items",children:" Windows"}),Object(m.jsx)("li",{className:"items",children:" Github"}),Object(m.jsx)("li",{className:"items",children:" Figma"}),Object(m.jsx)("li",{className:"items ",children:" IntelliJ"}),Object(m.jsx)("li",{className:"items",children:" Visual Studio Code"}),Object(m.jsx)("li",{className:"items",children:" Sublime text"})]})]})]})}}]),s}(a.Component),J=(s(69),function(e){Object(C.a)(s,e);var t=Object(S.a)(s);function s(){return Object(g.a)(this,s),t.apply(this,arguments)}return Object(y.a)(s,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"Academic",id:"Academic",children:[Object(m.jsx)(T.a,{bottom:!0,children:Object(m.jsx)("div",{className:"subHeadingSetAcademic",children:Object(m.jsx)("h1",{className:"academic_subHeadText",children:"Academic"})})}),Object(m.jsx)("div",{className:"frame",children:Object(m.jsxs)("div",{className:"main",children:[Object(m.jsx)("i",{class:"fas fa-user-graduate fa-2x"}),Object(m.jsxs)("h3",{className:"center",children:["Northeastern University, Seattle, WA ",Object(m.jsx)("br",{})," Master of Science in Information Systems"]}),Object(m.jsx)("h4",{className:"right1",children:"January 2021 - Expected December 2022"})]})}),Object(m.jsx)("div",{className:"frame",children:Object(m.jsxs)("div",{className:"main",children:[Object(m.jsx)("i",{class:"fas fa-university fa-2x"}),Object(m.jsxs)("h3",{className:"center",children:["Gujarat Technological University, Surat, India ",Object(m.jsx)("br",{})," Bachelor's in Computer Engineering"]}),Object(m.jsx)("h4",{className:"right1",children:"August 2015 - May 2018"})]})}),Object(m.jsx)("div",{className:"frame",children:Object(m.jsxs)("div",{className:"main",children:[Object(m.jsx)("i",{class:"fas fa-book-reader fa-2x"}),Object(m.jsxs)("h3",{className:"center",children:["Laurentian University, Sudbury, Canada ",Object(m.jsx)("br",{})," International Experience Program"]}),Object(m.jsx)("h4",{className:"right1",children:"June 2017 - July 2017"})]})}),Object(m.jsx)("div",{className:"frame",children:Object(m.jsxs)("div",{className:"main",children:[Object(m.jsx)("i",{class:"fas fa-school fa-2x"}),Object(m.jsxs)("h3",{className:"center",children:["Gujarat Technological University Surat, India ",Object(m.jsx)("br",{})," Diploma in Computer Engineering"]}),Object(m.jsx)("h4",{className:"right1",children:"August 2012 - May 2015"})]})})]})}}]),s}(a.Component)),B=(s(70),function(e){Object(C.a)(s,e);var t=Object(S.a)(s);function s(){return Object(g.a)(this,s),t.apply(this,arguments)}return Object(y.a)(s,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"Projects",id:"Projects",children:[Object(m.jsx)(T.a,{className:"react",bottom:!0,children:Object(m.jsx)("div",{className:"subHeadingSetProject",children:Object(m.jsx)("h1",{className:"project_subHeadText",children:"Projects"})})}),Object(m.jsxs)("div",{className:"timeline",children:[Object(m.jsx)("div",{className:"container left",children:Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h4",{className:"styleYear",children:"August 2021- August 2021"}),Object(m.jsx)("a",{href:"https://youtu.be/AVnCnDNPDiM",children:Object(m.jsx)("p",{className:"styleProjectTitles",children:"Viral Simulation Using Genetic Algorithm"})}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"Performed simulation of virus generations. Evolution shows infected, recovered, vaccinated, died, delta variant and generations in Java"}),Object(m.jsx)("li",{children:"Using JavaFX showed graph for infected, recovered, vaccinated, died individuals, generations and delta variant"})]})]})}),Object(m.jsx)("div",{className:"container right",children:Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h4",{className:"styleYear",children:"March 2021- April 2021"}),Object(m.jsx)("a",{href:"https://youtu.be/jwJUQb3-c4Q",children:Object(m.jsx)("p",{className:"styleProjectTitles",children:"Cricket League Website"})}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"Built user flow, wireframes and completed website using HTML, CSS, Javascript & React"}),Object(m.jsx)("li",{children:"Created a website with a focus on user accessibility, website is used to see latest news, team details which is fetched from JSON response, user can see points table, read news, view team details"})]})]})}),Object(m.jsx)("div",{className:"container left",children:Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h4",{className:"styleYear",children:"August 2017- May 2018"}),Object(m.jsx)("a",{href:"https://youtu.be/yHgq97-0gXk",children:Object(m.jsx)("p",{className:"styleProjectTitles",children:"Hand Gesture Based Digital Display"})}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"Led project, completed using various platforms Unity3D, Raspberry Pi, and Asp.net"}),Object(m.jsx)("li",{children:"Configured Digital Display, User can access by I-card authentication and perform various tasks by hand gestures and voice commands"})]})]})}),Object(m.jsx)("div",{className:"container right",children:Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h4",{className:"styleYear",children:"January 2016- July 2017"}),Object(m.jsx)("a",{href:"https://youtu.be/-wBlUBqwyAk",children:Object(m.jsx)("p",{className:"styleProjectTitles",children:"Voice Based Email System"})}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"Developed mobile application in Android Studio, utilized SMTP service to send a real-time email"}),Object(m.jsx)("li",{children:"Application takes user input as a voice command and send email to receipent  "})]})]})}),Object(m.jsx)("div",{className:"container left",children:Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h4",{className:"styleYear",children:"August 2014- May 2015"}),Object(m.jsx)("p",{className:"styleProjectTitles",children:"Restaurant Table Order management System"}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"Developed mobile application useful for any restaurant/ cafe"}),Object(m.jsx)("li",{children:"Application takes pre-order before customer visits and reserves table"})]})]})})]})]})}}]),s}(a.Component)),W=s(16);s(101);function R(e){var t=Object(a.useState)(1),s=Object(b.a)(t,1)[0];W.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(W.c.version,"/pdf.worker.js");var c=e.pdf;return Object(m.jsxs)("div",{className:"Resume",id:"Resume",children:[Object(m.jsx)(T.a,{bottom:!0,children:Object(m.jsx)("div",{className:"subHeadingSetResume",children:Object(m.jsx)("h1",{className:"resume_subHeadText",children:"Resume"})})}),Object(m.jsx)(W.a,{className:"setResume",file:c,target:"_blank",options:{workerSrc:"/pdf.worker.js"},children:Object(m.jsx)(W.b,{pageNumber:s})})]})}s(102);function _(){return Object(m.jsx)("div",{className:"footer",children:Object(m.jsx)("p",{className:"footerText",children:"Designed and Developed By: Heni Bhungalia"})})}s(103);var E=function(e){Object(C.a)(s,e);var t=Object(S.a)(s);function s(){return Object(g.a)(this,s),t.apply(this,arguments)}return Object(y.a)(s,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"ContactMe",id:"ContactMe",children:[Object(m.jsx)(T.a,{bottom:!0,children:Object(m.jsx)("div",{className:"subHeadingSetContactMe",children:Object(m.jsx)("h1",{className:"contact_subHeadText",children:"Contact Me"})})}),Object(m.jsxs)("div",{className:"mainContact",children:[Object(m.jsx)("div",{children:Object(m.jsx)("h1",{className:"statement",children:"You Can Connect With Me Via"})}),Object(m.jsxs)("div",{className:"email",children:[Object(m.jsxs)("div",{className:"oneLine",children:[Object(m.jsx)("i",{class:"fas fa-envelope fa-2x"}),Object(m.jsx)("h2",{className:"subContent",children:"bhungalia.h@northeastern.edu"})]}),Object(m.jsxs)("div",{className:"oneLine",children:[Object(m.jsx)("i",{class:"fas fa-phone-alt fa-2x"}),Object(m.jsx)("h2",{className:"subContent",children:"(206)- 484- 7164"})]}),Object(m.jsxs)("div",{className:"oneLine",children:[Object(m.jsx)("i",{class:"fab fa-linkedin fa-2x"}),Object(m.jsx)("h2",{className:"subContent",children:Object(m.jsx)("a",{href:"https://www.linkedin.com/in/heni-bhungalia/",children:"Linkedin"})})]}),Object(m.jsxs)("div",{className:"oneLine",children:[Object(m.jsx)("i",{class:"fab fa-github fa-2x"}),Object(m.jsx)("h2",{className:"subContent",children:Object(m.jsx)("a",{href:"https://github.com/heniheni",children:"Github"})})]})]})]})]})}}]),s}(a.Component),F=s.p+"static/media/Heni_Bhungalia.ea36d5fd.pdf";var G=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(v,{}),Object(m.jsxs)("div",{children:[Object(m.jsx)(I,{}),Object(m.jsx)(U,{}),Object(m.jsx)(J,{}),Object(m.jsx)(B,{}),Object(m.jsx)(R,{pdf:F}),Object(m.jsx)(E,{}),Object(m.jsx)(_,{})]})]})},X=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,106)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;s(e),c(e),n(e),i(e),a(e)}))};j.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(G,{})}),document.getElementById("root")),X()},41:function(e,t){},51:function(e,t,s){},52:function(e,t,s){},64:function(e,t,s){},66:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},96:function(e,t){},97:function(e,t){},98:function(e,t){},99:function(e,t){}},[[104,1,2]]]);
//# sourceMappingURL=main.3235081b.chunk.js.map