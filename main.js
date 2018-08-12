!function(t){function e(e){for(var o,s,a=e[0],l=e[1],c=e[2],h=0,p=[];h<a.length;h++)s=a[h],n[s]&&p.push(n[s][0]),n[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);for(u&&u(e);p.length;)p.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],o=!0,a=1;a<i.length;a++){var l=i[a];0!==n[l]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=i[0]))}return t}var o={},n={1:0},r=[];function s(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=o,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},s.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;r.push([39,0]),i()}([,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(0);e.Textures={Sword:new o.Texture(i(37)),SpeechBubble:new o.Texture(i(36)),Button:new o.Texture(i(35)),Panel:new o.Texture(i(34)),ArrowRight:new o.Texture(i(33)),ArrowLeft:new o.Texture(i(32)),Rocket:new o.Texture(i(31)),TV:new o.Texture(i(30)),Sofa:new o.Texture(i(29)),Lamp:new o.Texture(i(28)),WoodTile:new o.Texture(i(27)),BrickTile:new o.Texture(i(26)),SmallThruster:new o.Texture(i(25)),RadialThruster:new o.Texture(i(24)),Background:new o.Texture(i(23)),Goal:new o.Texture(i(22))},e.Levels={Level1:i(21),Level2:i(20),Level3:i(19),Level4:i(18),Level5:i(17),Level6:i(16),Level7:i(15),Done:i(14)},e.Sounds={Burn:new o.Sound(i(13))}},function(t,e,i){"use strict";var o,n=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var r=i(0),s=i(1),a=i(0),l=function(t){function e(e,i,o){void 0===o&&(o=!1);var n=t.call(this)||this;return n.doneFn=i,n.flip=o,n.collisionType=r.CollisionType.PreventCollision,n.label=new r.Label(e,0,0,"Arial"),n.label.color=r.Color.Black,n.label.textAlign=r.TextAlign.Center,n.label.fontSize=40,n.label.fontUnit=r.FontUnit.Px,n.add(n.label),n}return n(e,t),Object.defineProperty(e.prototype,"text",{get:function(){return this.label.text},set:function(t){this.label.text=t},enumerable:!0,configurable:!0}),e.prototype.onInitialize=function(t){var e=this,i=new a.SpriteSheet(s.Textures.SpeechBubble,1,1,1263,903);this.animation=i.getAnimationForAll(t,125),this.addDrawing("idle",this.animation),this.setHeight(s.Textures.SpeechBubble.height),this.setWidth(s.Textures.SpeechBubble.width),this.animation.scale.setTo(.4,.3),this.scale.setTo(.4,.3),this.doneFn&&setTimeout(function(){e.doneFn(),e.kill()},5e3)},e.prototype.setParentPos=function(t){this.parentPos=t},e.prototype.update=function(e,i){t.prototype.update.call(this,e,i),this.setDrawing("idle"),this.animation.flipHorizontal=this.flip,this.flip?this.offset=new a.Vector(-this.getWidth()/2,this.getHeight()/-2):this.offset=new a.Vector(this.getWidth()/2,this.getHeight()/-2),this.pos=this.parentPos.clone().add(this.offset)},e}(r.Actor);e.SpeechBubble=l},function(t,e,i){"use strict";var o,n=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var r=i(0),s=i(0),a=i(38),l=i(1),c=i(12),u=i(11),h=i(9),p=i(8),f=function(t){function e(e){var i=t.call(this)||this;return i.levelData=e,i.isRunning=!1,i.tiles=[],i.furniture=[],i.sound=l.Sounds.Burn,i}return n(e,t),e.prototype.onInitialize=function(t){var e=this,i=t.canvasWidth,o=t.canvasHeight,n=new s.Actor({x:i/2,y:o/2,collisionType:r.CollisionType.PreventCollision});n.addDrawing(l.Textures.Background),this.add(n),this.levelData.walls.forEach(function(t){var i=new a.Tile(50*t.x,50*t.y,50*t.width,50*t.height,l.Textures[t.tile]);e.tiles.push(i),e.add(i)}),this.startButton=new h.StartButton(this),this.add(this.startButton),this.goal=new p.Goal(50*this.levelData.goal.x,50*this.levelData.goal.y,new s.Vector(this.levelData.goal.scale,this.levelData.goal.scale)),this.add(this.goal)},e.prototype.onActivate=function(){this.reinitializeFurniture(),this.isRunning=!1,this.startButton.isReset=!0,this.startButton.isRunning=!1},e.prototype.onDeactivate=function(){this.isRunning=!1,this.startButton.reset()},e.prototype.loadFurniture=function(){var t=this;this.levelData.furniture.forEach(function(e){var i=new c.Furniture(50*e.x,50*e.y,l.Textures[e.texture]);t.furniture.push(i),e.boosters.forEach(function(t){var e=new u.Thruster(l.Textures[t.texture],t.attachment);t.offset&&(e.rotation=t.offset,e.pos=e.pos.rotate(t.offset)),i.addThruster(e)}),t.add(i)})},e.prototype.reinitializeFurniture=function(){var t=this;this.furniture.forEach(function(e){t.remove(e),e.kill()}),this.furniture=[],this.loadFurniture(),this.endTimer=void 0},e.prototype.start=function(){this.furniture.forEach(function(t){return t.start()}),this.isRunning=!0,this.sound.play()},e.prototype.stop=function(){this.furniture.forEach(function(t){return t.stop()}),this.isRunning=!1,this.sound.stop()},e.prototype.completed=function(t){var e=this;setTimeout(function(){t.goToScene(e.levelData.next)},1500)},e.prototype.update=function(e,i){t.prototype.update.call(this,e,i),!this.endTimer&&this.furniture.every(function(t){return t.isInGoal})&&this.completed(e)},e}(r.Scene);e.Level=f},function(t,e,i){t.exports=i.p+"4e99ace3c1faf2b2cc794181ce6309fe.png"},function(t,e,i){"use strict";var o,n=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var r=i(0),s=i(1),a=i(0),l=i(2),c=function(t){function e(){var e=t.call(this,100,100,110,50)||this;return e.emitterOffset=new a.Vector(50,0),e.positionGoal=new a.Vector(200,200),e.dAttitude=.003,e.thrust=new a.Vector(-150,0),e.gravity=new a.Vector(0,80),e.scale.setTo(.3,.3),e.addDrawing(s.Textures.Rocket),e.collisionType=r.CollisionType.Active,e}return n(e,t),e.prototype.onInitialize=function(t){this.enableCapturePointer=!0,this.pos.x=150,this.pos.y=150,this.color=new r.Color(255,255,255),this.friction=1,this.mass=1,this.emitter=new r.ParticleEmitter({emitterType:r.EmitterType.Circle,radius:5,minVel:100,maxVel:400,minAngle:.3*Math.PI,maxAngle:.7*Math.PI,emitRate:300,opacity:.5,fadeFlag:!0,particleLife:1e3,maxSize:10,minSize:1,beginColor:r.Color.Red,endColor:r.Color.Yellow}),this.emitter.isEmitting=!0,t.add(this.emitter),this.speech=new l.SpeechBubble("You win!",function(){}),t.add(this.speech)},e.prototype.calculateAttitudeGoal=function(){var t=this.pos.clone().add(this.positionGoal.clone().scale(-1));this.attitudeGoal=t.toAngle()},e.prototype.angularAbs=function(t){for(;t<0;)t+=2*Math.PI;for(;t>2*Math.PI;)t-=2*Math.PI;return t},e.prototype.adjustAttitude=function(t){var e=this.dAttitude*t;this.angularAbs(this.rotation-this.attitudeGoal)<e?this.rotation=this.attitudeGoal:this.angularAbs(this.attitudeGoal-this.rotation)<Math.PI?this.rotation+=e:this.rotation-=e},e.prototype.update=function(e,i){t.prototype.update.call(this,e,i),e.input.pointers.primary.isDragging&&(this.positionGoal=e.input.pointers.primary.lastPagePos),this.calculateAttitudeGoal(),this.adjustAttitude(i),this.acc=this.thrust.clone().rotate(this.rotation).add(this.gravity),this.rotation=this.rotation;var o=this.emitterOffset.clone().rotate(this.rotation);this.emitter.pos=this.pos.clone().add(o),this.emitter.rotation=this.rotation,this.emitter.minAngle=this.rotation-.2,this.emitter.maxAngle=this.rotation+.2,this.emitter.vel=this.vel,this.pos&&(this.speech.setParentPos(this.pos),this.speech.flip=this.pos.x>1e3)},e}(r.Actor);e.Rocket=c},function(t,e,i){"use strict";var o,n=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var r=i(3),s=i(2),a=i(5),l=function(t){function e(e){var i=t.call(this,e)||this;return i.levelData=e,i}return n(e,t),e.prototype.onInitialize=function(e){t.prototype.onInitialize.call(this,e)},e.prototype.onActivate=function(){t.prototype.onActivate.call(this),this.add(new a.Rocket)},e.prototype.completed=function(e){var i=new s.SpeechBubble("well done!");i.setParentPos(this.goal.pos),this.add(i),t.prototype.completed.call(this,e)},e}(r.Level);e.WinLevel=l},function(t,e,i){"use strict";var o,n=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var r=i(3),s=i(2),a=function(t){function e(e){var i=t.call(this,e)||this;return i.levelData=e,i}return n(e,t),e.prototype.onInitialize=function(e){t.prototype.onInitialize.call(this,e)},e.prototype.onActivate=function(){var e=this;t.prototype.onActivate.call(this);var i=new s.SpeechBubble("move furniture here",function(){var t=new s.SpeechBubble("Drag to orient",function(){var t=new s.SpeechBubble("Click to launch",function(){},!0);t.setParentPos(e.startButton.pos),e.add(t)}),i=e.furniture[0].pos;t.setParentPos(e.furniture[0].thrusters[0].pos.add(i)),e.add(t)});i.setParentPos(this.goal.pos),this.add(i)},e.prototype.completed=function(e){var i=new s.SpeechBubble("well done!",function(){});i.setParentPos(this.goal.pos),this.add(i),t.prototype.completed.call(this,e)},e}(r.Level);e.HelpLevel=a},function(t,e,i){"use strict";var o,n=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var r=i(0),s=i(1),a=function(t){function e(e,i,o){var n=t.call(this,{x:e,y:i,scale:o,collisionType:r.CollisionType.Passive})||this,a=s.Textures.Goal;return n.addDrawing(a),n.addCollisionGroup("furniture"),n.setWidth(a.width/2),n.setHeight(a.height/2),n}return n(e,t),e.prototype.onInitialize=function(t){this.on("collisionstart",function(t){var e=t.other;e.inGoal&&e.inGoal()})},e}(r.Actor);e.Goal=a},function(t,e,i){"use strict";var o,n=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var r=i(0),s=i(0),a=i(1),l=function(t){function e(e){var i=t.call(this,{x:1025,y:625})||this;i.level=e,i.isRunning=!1,i.isReset=!0;var o=a.Textures.Button;return i.addDrawing(o),i.setWidth(o.width),i.setHeight(o.height),i.label=new r.Label({x:o.width/2,y:.55*o.height,text:"Ignition!",fontFamily:"Arial",fontSize:20,textAlign:r.TextAlign.Center,color:r.Color.Orange}),i.add(i.label),i.on("pointerdown",i.onClick),i}return n(e,t),e.prototype.onClick=function(t){this.isRunning?this.stop():this.isReset?this.start():this.reset()},e.prototype.start=function(){var t=this;this.isRunning=!0,this.isReset=!1,this.label.text="Cut engines",this.level.start(),this.stopper=setTimeout(function(){return t.stop()},5500)},e.prototype.stop=function(){this.stopper&&clearTimeout(this.stopper),this.stopper=void 0,this.isRunning=!1,this.label.text="Reset level",this.level.stop()},e.prototype.reset=function(){this.isReset=!0,this.label.text="Ignition!",this.level.reinitializeFurniture()},e}(s.UIActor);e.StartButton=l},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(0);e.vectorDifference=function(t,e){var i=t.x-e.x,n=t.y-e.y;return new o.Vector(i,n)}},function(t,e,i){"use strict";var o,n=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var r=i(0),s=i(0),a=i(10),l=function(t){function e(e,i){void 0===i&&(i="linear");var o=t.call(this,50,0,e.width,e.height)||this;switch(o.texture=e,o.attachment=i,o.thrust=new s.Vector(-150,0),o.isRunning=!1,o.isDragging=!1,o.collisionType=r.CollisionType.Active,o.attachment){case"linear":o.emitterOffset=new s.Vector(10,0);break;case"radial_clockwise":o.emitterOffset=new s.Vector(25,-5);break;case"radial_counterClockwise":o.emitterOffset=new s.Vector(25,5)}return o}return n(e,t),e.prototype.updateAttachment=function(t){switch(this.pos=t.clone(),this.attachment){case"linear":this.rotation=this.pos.toAngle();break;case"radial_clockwise":this.rotation=this.pos.toAngle()+Math.PI/2;break;case"radial_counterClockwise":this.rotation=this.pos.toAngle()-Math.PI/2}},e.prototype.onInitialize=function(t){var e=this,i=new s.SpriteSheet(this.texture,1,1,this.texture.width,this.texture.height).getAnimationForAll(t,125);this.addDrawing("idle",i),i.flipVertical="radial_counterClockwise"===this.attachment,this.enableCapturePointer=!0,this.on("pointerdown",function(){e.isDragging=!0,t.input.pointers.primary.once("down",function(){e.isDragging=!1})}),this.emitter=new r.ParticleEmitter({emitterType:r.EmitterType.Circle,radius:5,minVel:100,maxVel:400,minAngle:.3*Math.PI,maxAngle:.7*Math.PI,emitRate:300,opacity:.5,fadeFlag:!0,particleLife:1e3,maxSize:10,minSize:1,beginColor:r.Color.fromRGB(255,100,50),endColor:r.Color.fromRGB(240,240,0)}),this.emitter.isEmitting=!1,t.add(this.emitter)},e.prototype.start=function(){this.isRunning=!0,this.emitter.isEmitting=!0},e.prototype.stop=function(){this.isRunning=!1,this.emitter.isEmitting=!1},e.prototype.totalAngle=function(){return this.rotation+this.parent.rotation},e.prototype.getThrust=function(){return this.thrust.clone().rotate(this.totalAngle())},e.prototype.getTorque=function(){switch(this.attachment){case"linear":return-100*Math.cos(this.totalAngle());case"radial_clockwise":return this.getThrust().magnitude()*this.pos.magnitude()*-1;case"radial_counterClockwise":return this.getThrust().magnitude()*this.pos.magnitude()}},e.prototype.update=function(e,i){if(t.prototype.update.call(this,e,i),this.isRunning){var o=this.emitterOffset.rotate(this.rotation).add(this.pos).rotate(this.parent.rotation);this.emitter.pos=this.parent.pos.clone().add(o),this.emitter.rotation=this.totalAngle(),this.emitter.minAngle=this.emitter.rotation-.2,this.emitter.maxAngle=this.emitter.rotation+.2,this.emitter.vel=this.vel}else if(this.isDragging&&e.input.pointers.primary.isDragging){var n=e.input.pointers.primary.lastPagePos.add(new s.Vector(this.getWidth()/-2,this.getHeight()/-2)),r=a.vectorDifference(n,this.parent.pos);r.magnitude()>70&&(r=r.normalize().scale(70)),this.updateAttachment(r)}},e}(r.Actor);e.Thruster=l},function(t,e,i){"use strict";var o,n=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var r=i(0),s=i(0),a=function(t){function e(e,i,o){var n=t.call(this,e,i,.8*o.width,.8*o.height)||this;return n.gravity=new s.Vector(0,80),n.thrusters=[],n.isInGoal=!1,n.addDrawing(o),n.collisionType=r.CollisionType.Active,n}return n(e,t),e.prototype.onInitialize=function(t){this.color=new r.Color(255,255,255),this.friction=1,this.mass=1,this.enableCapturePointer=!1,this.addCollisionGroup("furniture"),this.addCollisionGroup("walls")},e.prototype.onPostUpdate=function(e,i){t.prototype.onPostUpdate.call(this,e,i),this.torque=0,this.acc=s.Vector.Zero},e.prototype.update=function(e,i){var o=this;t.prototype.update.call(this,e,i),this.acc=this.gravity.clone(),this.isRunning&&this.thrusters.forEach(function(t){o.acc=o.acc.add(t.getThrust()),o.torque+=t.getTorque()})},e.prototype.addThruster=function(t){this.add(t),this.thrusters.push(t)},e.prototype.start=function(){this.isRunning=!0,this.thrusters.forEach(function(t){t.start()}),this.isInGoal=!1},e.prototype.stop=function(){this.isRunning=!1,this.thrusters.forEach(function(t){t.isRunning&&t.stop()})},e.prototype.inGoal=function(){var t=this;this.isInGoal||(this.isInGoal=!0,setTimeout(function(){t.stop(),t.kill()},1e3))},e}(r.Actor);e.Furniture=a},function(t,e,i){t.exports=i.p+"9fe815e3ba21422f09fcdd3ea58c8f0e.wav"},function(t){t.exports={walls:[{tile:"BrickTile",x:8,y:5,width:2,height:8},{tile:"BrickTile",x:16,y:5,width:2,height:8},{tile:"WoodTile",x:12,y:16,width:26,height:2}],furniture:[{texture:"Sofa",x:7,y:10,boosters:[{texture:"SmallThruster",attachment:"linear"}]},{texture:"Lamp",x:18,y:10,boosters:[{texture:"SmallThruster",attachment:"linear"}]},{texture:"TV",x:3,y:10,boosters:[{texture:"SmallThruster",attachment:"linear"}]},{texture:"Rocket",x:12,y:10,boosters:[{texture:"SmallThruster",attachment:"linear"}]}],goal:{x:12,y:3,scale:1},next:"Level1"}},function(t){t.exports={walls:[{tile:"BrickTile",x:8,y:5,width:2,height:8},{tile:"BrickTile",x:16,y:5,width:2,height:8},{tile:"WoodTile",x:12,y:16,width:26,height:2}],furniture:[{texture:"Sofa",x:6,y:14,boosters:[{texture:"SmallThruster",attachment:"linear"}]},{texture:"Lamp",x:18,y:14,boosters:[{texture:"SmallThruster",attachment:"linear"}]}],goal:{x:12,y:3,scale:1},next:"Done"}},function(t){t.exports={walls:[{tile:"BrickTile",x:0,y:8,width:2,height:16},{tile:"BrickTile",x:14,y:4,width:2,height:5},{tile:"BrickTile",x:14,y:13,width:2,height:5},{tile:"WoodTile",x:12,y:16,width:26,height:2}],furniture:[{texture:"Sofa",x:4,y:14,boosters:[{texture:"SmallThruster",attachment:"linear"}]},{texture:"TV",x:8,y:14,boosters:[{texture:"SmallThruster",attachment:"linear"}]}],goal:{x:18,y:8,scale:1},next:"Level7"}},function(t){t.exports={walls:[{tile:"BrickTile",x:0,y:8,width:2,height:16},{tile:"BrickTile",x:14,y:4,width:2,height:5},{tile:"BrickTile",x:14,y:12,width:2,height:6},{tile:"WoodTile",x:6,y:10,width:9,height:2},{tile:"WoodTile",x:18,y:10,width:10,height:2}],furniture:[{texture:"Lamp",x:4,y:8,boosters:[{texture:"SmallThruster",attachment:"linear"}]},{texture:"TV",x:7,y:8,boosters:[{texture:"SmallThruster",attachment:"linear"}]},{texture:"Sofa",x:18,y:8,boosters:[{texture:"SmallThruster",attachment:"linear"}]}],goal:{x:10,y:14,scale:1},next:"Level6"}},function(t){t.exports={walls:[{tile:"BrickTile",x:8,y:5,width:2,height:8},{tile:"BrickTile",x:16,y:5,width:2,height:8},{tile:"WoodTile",x:12,y:16,width:26,height:2}],furniture:[{texture:"TV",x:6,y:14,boosters:[{texture:"SmallThruster",attachment:"linear"}]},{texture:"TV",x:18,y:14,boosters:[{texture:"SmallThruster",attachment:"linear"}]}],goal:{x:12,y:3,scale:1},next:"Level5"}},function(t){t.exports={walls:[{tile:"BrickTile",x:0,y:8,width:2,height:16},{tile:"BrickTile",x:14,y:4,width:2,height:5},{tile:"BrickTile",x:14,y:12,width:2,height:6},{tile:"WoodTile",x:12,y:16,width:26,height:2}],furniture:[{texture:"Sofa",x:6,y:14,boosters:[{texture:"RadialThruster",attachment:"radial_clockwise"},{texture:"RadialThruster",attachment:"radial_counterClockwise",offset:3.14}]}],goal:{x:18,y:8,scale:1},next:"Level4"}},function(t){t.exports={walls:[{tile:"BrickTile",x:0,y:8,width:2,height:16},{tile:"BrickTile",x:14,y:4,width:2,height:5},{tile:"BrickTile",x:14,y:12,width:2,height:6},{tile:"WoodTile",x:12,y:16,width:26,height:2}],furniture:[{texture:"TV",x:4,y:14,boosters:[{texture:"SmallThruster",attachment:"linear"}]}],goal:{x:18,y:8,scale:1},next:"Level3"}},function(t){t.exports={walls:[{tile:"BrickTile",x:0,y:8,width:2,height:16},{tile:"BrickTile",x:18.5,y:8,width:3,height:16},{tile:"WoodTile",x:12,y:16,width:26,height:2}],furniture:[{texture:"TV",x:4,y:14,boosters:[{texture:"SmallThruster",attachment:"linear"}]}],goal:{x:14,y:12,scale:1},next:"Level2"}},function(t,e,i){t.exports=i.p+"c7f1e54ea98d593cadf6029fc7cb97eb.png"},function(t,e,i){t.exports=i.p+"34cd666ca694089b9f395b3aaf8f4a97.png"},function(t,e,i){t.exports=i.p+"b40f9ed65d85846c635606d82eba9fc5.png"},function(t,e,i){t.exports=i.p+"9e0101f93b00123d7827621590de6015.png"},function(t,e,i){t.exports=i.p+"06608a725ce9ebc2887b58f1414c0316.png"},function(t,e,i){t.exports=i.p+"cb46cb082cd78ed7b0fbfa505c7e1f8c.png"},function(t,e,i){t.exports=i.p+"f9ab6fe1ec0e33eb363098eba1a84b54.png"},function(t,e,i){t.exports=i.p+"9806376f3a930e97ad533761548d452c.png"},function(t,e,i){t.exports=i.p+"bf34c1237c916cd80b5c32c7c293c416.png"},function(t,e,i){t.exports=i.p+"8c79f8c71bb7cb95cc506668217deaf2.png"},function(t,e,i){t.exports=i.p+"fb7505dcfc9d54fd52b0844e6da988ec.png"},function(t,e,i){t.exports=i.p+"2385186871491075e0762c210949c9eb.png"},function(t,e,i){t.exports=i.p+"1e9685280b55383803c4817ab517672e.png"},function(t,e,i){t.exports=i.p+"3ea5e186b643048c752aaa1edd750eb3.png"},function(t,e,i){t.exports=i.p+"76fe2fe86a2023c6feb474400b68b94a.png"},function(t,e,i){t.exports=i.p+"94754f62e0ae4d23d386e246f5e0cb6e.png"},function(t,e,i){"use strict";var o,n=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var r=i(0),s=i(0),a=function(t){function e(e,i,o,n,a){var l=t.call(this,e,i,o,n,s.Color.DarkGray)||this;l.width=o,l.height=n,l.tileSet=a,l.friction=1,l.collisionType=r.CollisionType.Fixed;var c=new s.SpriteSheet(l.tileSet,3,3,50,50);return l.topLeft=c.getSprite(0),l.topMiddle=c.getSprite(1),l.topRight=c.getSprite(2),l.middleLeft=c.getSprite(3),l.middle=c.getSprite(4),l.middleRight=c.getSprite(5),l.bottomLeft=c.getSprite(6),l.bottomMiddle=c.getSprite(7),l.bottomRight=c.getSprite(8),l.addCollisionGroup("walls"),l}return n(e,t),e.prototype.draw=function(t,e){for(var i=this.pos.x+this.getWidth()/-2,o=this.pos.y+this.getHeight()/-2,n=this.pos.x+this.getWidth()/2,r=this.pos.y+this.getHeight()/2,s=i;s<n;s+=50)for(var a=o;a<r;a+=50)(a===o?s===i?this.topLeft:s>=n-50?this.topRight:this.topMiddle:a>=r-50?s===i?this.bottomLeft:s>=n-50?this.bottomRight:this.bottomMiddle:s===i?this.middleLeft:s>=n-50?this.middleRight:this.middle).draw(t,s,a)},e}(r.Actor);e.Tile=a},function(t,e,i){"use strict";var o,n=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var r=i(0),s=i(3),a=i(1),l=i(0),c=i(7),u=i(6),h=function(t){function e(){var e=t.call(this,{width:1200,height:800,displayMode:r.DisplayMode.Fixed})||this;for(var i in a.Levels){var o=a.Levels[i];if("Level1"===i){var n=new c.HelpLevel(o);e.add(i,n)}else"Done"===i?(n=new u.WinLevel(o),e.add(i,n)):(n=new s.Level(o),e.add(i,n))}return e}return n(e,t),e.prototype.start=function(e){return t.prototype.start.call(this,e)},e}(r.Engine);l.Physics.useRigidBodyPhysics();var p=new h,f=new r.Loader;for(var d in f.logo=i(4),a.Textures)f.addResource(a.Textures[d]);for(var d in a.Sounds)f.addResource(a.Sounds[d]);p.start(f).then(function(){p.goToScene("Done")})}]);
//# sourceMappingURL=main.js.map