(this.webpackJsonpworkitout=this.webpackJsonpworkitout||[]).push([[0],{40:function(e,n,t){"use strict";t.r(n);var s=t(0),i=t.n(s),c=t(15),a=t.n(c),r=t(16),o=t(3),d=t(1);function g(){var e=Object(o.f)();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"WorkItOut"}),Object(d.jsxs)("button",{onClick:function(){return e.push("/workouts/0")},children:[Object(d.jsx)("h3",{children:"Full Body Dumbbell"}),Object(d.jsx)("p",{children:"60 min"})]})]})}var m,u=t(12),l=t(4),h=t(5);function b(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Number(e.toFixed(n))}var p,j,S,x=h.c.div(m||(m=Object(l.a)(["\n  font-size: 7rem;\n  font-weight: bold;\n  padding: 0.5em;\n"])));function k(e){var n=e.children,t=e.onTimerExpired,i=Object(s.useState)(n),c=Object(u.a)(i,2),a=c[0],r=c[1];return Object(s.useEffect)((function(){var e=setInterval((function(){a>1?r(a-1):(t(),clearInterval(e),r(n))}),1e3);return function(){return clearInterval(e)}}),[n,t,a]),Object(d.jsx)(x,{children:a})}var f,O,I,R,B=h.c.div(p||(p=Object(l.a)(["\n  background-color: #6b82f0;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n"]))),v=h.c.h3(j||(j=Object(l.a)(["\n  text-transform: uppercase;\n  font-size: 2rem;\n  margin-bottom: 0;\n"]))),W=h.c.p(S||(S=Object(l.a)(["\n  text-transform: uppercase;\n  margin-bottom: 0;\n"])));function C(e){var n=e.timeInSeconds,t=e.nextExercise,s=e.triggerNext;return Object(d.jsxs)(B,{children:[Object(d.jsx)(v,{children:"Break"}),Object(d.jsx)(k,{onTimerExpired:function(){return s()},children:n}),Object(d.jsx)("p",{children:"Next:"}),Object(d.jsx)(W,{children:t.name}),Object(d.jsx)("p",{children:t.instance})]})}var w,y,D,A,F,E,U=h.c.div(f||(f=Object(l.a)(["\n  background-color: #fe4042;\n  color: white;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),L=h.c.h3(O||(O=Object(l.a)(["\n  text-transform: uppercase;\n  font-size: 2rem;\n  margin-bottom: 0;\n  text-align: center;\n"]))),T=h.c.div(I||(I=Object(l.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 1em;\n"]))),P=h.c.button(R||(R=Object(l.a)(["\n  color: white;\n  background-color: black;\n  border: none;\n  border-radius: 8px;\n  padding: 16px;\n  font-weight: bold;\n  font-size: 16px;\n"])));function N(e){var n=e.children,t=e.triggerNext,i=Object(s.useState)(""),c=Object(u.a)(i,2),a=c[0],r=c[1],o=Object(s.useState)(""),g=Object(u.a)(o,2),m=g[0],l=g[1];return Object(s.useEffect)((function(){a.length&&m.length&&(t(),r(""),l(""))}),[a,m,t]),Object(d.jsxs)(U,{children:[Object(d.jsx)(L,{children:n.name}),Object(d.jsx)("p",{children:n.instance}),n.timeInSeconds?Object(d.jsx)(k,{onTimerExpired:function(){return t()},children:n.timeInSeconds}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("p",{children:[n.suggestedReps," reps",n.suggestedWeight&&Object(d.jsxs)("span",{children:[" / ",n.suggestedWeight," kg"]})]}),Object(d.jsx)("div",{children:"Info Card here"}),0===a.length?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:"Amount of completed repetitions:"}),Object(d.jsxs)(T,{children:[Object(d.jsx)(P,{onClick:function(){return r("0 - 5")},children:"< 6"}),Object(d.jsx)(P,{onClick:function(){return r("6 - 10")},children:"6 - 10"}),Object(d.jsx)(P,{onClick:function(){return r("11 - 15")},children:"11 - 15"}),Object(d.jsx)(P,{onClick:function(){return r("16 - 20")},children:"16 - 20"}),Object(d.jsx)(P,{onClick:function(){return r("21 - 25")},children:"21 - 25"}),Object(d.jsx)(P,{onClick:function(){return r("26 - 30")},children:"26 - 30"})]})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:"Applied weight:"}),Object(d.jsxs)(T,{children:[Object(d.jsx)(P,{onClick:function(){return l("4.5 kg")},children:"4.5 kg"}),Object(d.jsx)(P,{onClick:function(){return l("7 kg")},children:"7 kg"}),Object(d.jsx)(P,{onClick:function(){return l("9.5 kg")},children:"9.5 kg"}),Object(d.jsx)(P,{onClick:function(){return l("12 kg")},children:"12 kg"}),Object(d.jsx)(P,{onClick:function(){return l("14.5 kg")},children:"14.5 kg"}),Object(d.jsx)(P,{onClick:function(){return l("17 kg")},children:"17 kg"})]})]})]})]})}var z=h.c.div(w||(w=Object(l.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),M=Object(h.b)(y||(y=Object(l.a)(["\n  background: transparent;\n  border: 0;\n  color: white;\n  font-size: 40px;\n  padding: 0.2em;\n"]))),G=h.c.button(D||(D=Object(l.a)(["\n  ","\n  position: absolute;\n"])),M),J=h.c.button(A||(A=Object(l.a)(["\n  ","\n"])),M),q=h.c.div(F||(F=Object(l.a)(["\n  position: absolute;\n  right: 0;\n"]))),H=h.c.div(E||(E=Object(l.a)(["\n  position: absolute;\n  left: 40px;\n"])));function K(e){var n=e.children,t=Object(s.useState)(0),i=Object(u.a)(t,2),c=i[0],a=i[1],r=Object(o.f)(),g=new Audio("http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3"),m=function(){c+1===n.length&&(alert("Congratulations. You finished this workout!"),r.push("/")),navigator.vibrate&&navigator.vibrate(1e3);var e=g.play();e&&e.catch((function(e){"NotAllowedError"!==e.name&&"NotSupportedError"!==e.name||console.error(e.name)})),a(c+1)};return Object(d.jsxs)(z,{children:[Object(d.jsx)(G,{onClick:function(){window.confirm("Do you really want to stop this workout?")&&r.push("/")},children:"X"}),Object(d.jsxs)(H,{children:[b((c+1)/n.length*100,0),"%"]}),Object(d.jsxs)(q,{children:[Object(d.jsx)(J,{onClick:function(){return a(c-1)},children:"<-"}),Object(d.jsx)(J,{onClick:function(){return m()},children:"->"})]}),"Break"===n[c].name?Object(d.jsx)(C,{timeInSeconds:n[c].timeInSeconds||20,nextExercise:n[c+1],triggerNext:m}):Object(d.jsx)(N,{triggerNext:m,children:n[c]})]})}var V=[{name:"Jumping Rope",instance:"Warm Up",timeInSeconds:20},{name:"Jumping Jacks",instance:"Warm Up",timeInSeconds:20},{name:"Running on the stand and circling arms (front/back)",instance:"Warm Up",timeInSeconds:20},{name:"Circle Shoulder",instance:"Warm Up",timeInSeconds:20},{name:"Turn Body to the Left and Right",instance:"Warm Up",timeInSeconds:20},{name:"Legs Circles",instance:"Warm Up",timeInSeconds:20},{name:"Knee Circles",instance:"Warm Up",timeInSeconds:20},{name:"Wrist and Ankle Circles",instance:"Warm Up",timeInSeconds:20},{name:"Break",timeInSeconds:20},{name:"Goblet Squats",instance:"Set 1",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:20},{name:"Goblet Squats",instance:"Set 2",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:20},{name:"Goblet Squats",instance:"Set 3",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:60},{name:"Romanian Deadlift",instance:"Set 1",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:20},{name:"Romanian Deadlift",instance:"Set 2",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:20},{name:"Romanian Deadlift",instance:"Set 3",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:60},{name:"Dumbbell Push Ups",instance:"Set 1",suggestedReps:10},{name:"Break",timeInSeconds:20},{name:"Dumbbell Push Ups",instance:"Set 2",suggestedReps:10},{name:"Break",timeInSeconds:20},{name:"Dumbbell Push Ups",instance:"Set 3",suggestedReps:10},{name:"Break",timeInSeconds:60},{name:"Advanced Military Press",instance:"Set 1",suggestedReps:10},{name:"Break",timeInSeconds:20},{name:"Advanced Military Press",instance:"Set 2",suggestedReps:10},{name:"Break",timeInSeconds:20},{name:"Advanced Military Press",instance:"Set 3",suggestedReps:10},{name:"Break",timeInSeconds:60},{name:"Close Bench Press",instance:"Set 1",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:20},{name:"Close Bench Press",instance:"Set 2",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:20},{name:"Close Bench Press",instance:"Set 3",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:60},{name:"Dumbbell Rows Right",instance:"Set 1",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:20},{name:"Dumbbell Rows Right",instance:"Set 2",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:20},{name:"Dumbbell Rows Right",instance:"Set 3",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:60},{name:"Dumbbell Rows Left",instance:"Set 1",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:20},{name:"Dumbbell Rows Left",instance:"Set 2",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:20},{name:"Dumbbell Rows Left",instance:"Set 3",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:60},{name:"Dumbbell Glute Bridge",instance:"Set 1",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:20},{name:"Dumbbell Glute Bridge",instance:"Set 2",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:20},{name:"Dumbbell Glute Bridge",instance:"Reverse Plank Variation",suggestedReps:10},{name:"Break",timeInSeconds:60},{name:"Lying Triceps Extensions",instance:"Set 1",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:20},{name:"Lying Triceps Extensions",instance:"Set 2",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:20},{name:"Lying Triceps Extensions",instance:"Set 3",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:60},{name:"Scotsman Curls",instance:"Set 1",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:20},{name:"Scotsman Curls",instance:"Set 2",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:20},{name:"Scotsman Curls",instance:"Set 3",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:60},{name:"Alternating Biceps Curls",instance:"Set 1",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:20},{name:"Alternating Biceps Curls",instance:"Set 2",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:20},{name:"Alternating Biceps Curls",instance:"Set 3",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:60},{name:"Side Lateral Raises",instance:"Set 1",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:20},{name:"Side Lateral Raises",instance:"Set 2",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:20},{name:"Side Lateral Raises",instance:"Set 3",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:60},{name:"Butterfly Reverse",instance:"Set 1",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:20},{name:"Butterfly Reverse",instance:"Set 2",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:20},{name:"Butterfly Reverse",instance:"Set 3",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:60},{name:"Calf Raises",instance:"Right",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:20},{name:"Calf Raises",instance:"Left",suggestedReps:10,suggestedWeight:12},{name:"Break",timeInSeconds:20},{name:"Calf Raises",instance:"Both",suggestedReps:10},{name:"Break",timeInSeconds:60},{name:"Alternating Toe Touches",instance:"Sixpack",timeInSeconds:30},{name:"Hip Thrusts",instance:"Sixpack",timeInSeconds:30},{name:"Roll Ins Left",instance:"Sixpack",timeInSeconds:30},{name:"Roll Ins Mid",instance:"Sixpack",timeInSeconds:30},{name:"Roll Ins Right",instance:"Sixpack",timeInSeconds:30},{name:"Crunches",instance:"Sixpack",timeInSeconds:30},{name:"Alternating Crunches",instance:"Sixpack",timeInSeconds:30},{name:"Toe Touch Hold",instance:"Sixpack",timeInSeconds:30}];function X(){return Object(d.jsx)(r.a,{children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",component:g}),Object(d.jsx)(o.a,{exact:!0,path:"/workouts/0",children:Object(d.jsx)(K,{children:V})}),Object(d.jsx)(o.a,{component:g})]})})}var Y=t(14),$=t(20),Q=t.n($),Z=t(26);function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(n){return setTimeout((function(){return n({data:e})}),500)}))}var ee,ne=Object(Y.b)("counter/fetchCount",function(){var e=Object(Z.a)(Q.a.mark((function e(n){var t;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(n);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),te=Object(Y.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,n){e.value+=n.payload}},extraReducers:function(e){e.addCase(ne.pending,(function(e){e.status="loading"})).addCase(ne.fulfilled,(function(e,n){e.status="idle",e.value+=n.payload}))}}),se=te.actions,ie=(se.increment,se.decrement,se.incrementByAmount,te.reducer),ce=Object(Y.a)({reducer:{counter:ie}}),ae=t(27);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=Object(h.a)(ee||(ee=Object(l.a)(['\n  :root {\n    --clr-accent: #AD09D7;\n    --clr-primary: #F4F3F6;\n    --clr-secondary: #FFFFFF;\n    --clr-text: #363636;\n    --clr-label: #9C9C9C;\n    --br-card: 20px;\n    --br-button: 4px;\n    \n    --card-box-shadow: 0 8px 16px 0 rgb(0 0 0 / 4%);\n    --card-border: 1px solid rgba(0, 0, 0, .2);\n    --hover-transition: 0.2s ease;\n    --anm-size: 50px;\n    --anm-border: 4px;\n    --anm-time: 1.3s;\n  }\n  \n  * {\n    box-sizing: border-box;\n    font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,\n      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  }\n  \n  html,\n  body {\n    margin: 0;\n    paddding: 0;\n  }\n  \n  html,\n  body,\n  #root {\n    height: 100%;\n  }\n'])));a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsxs)(ae.a,{store:ce,children:[Object(d.jsx)(re,{}),Object(d.jsx)(X,{})]})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.3d09ae5c.chunk.js.map