﻿(window.webpackJsonp=window.webpackJsonp||[]).push([["grip"],{11:function(e,t,r){e.exports=r("zpKU")},zpKU:function(e,t,r){"use strict";r.r(t);var n=r("J8bf");var i=function(){function e(t){this.options=e.extend(t,{detectScreenOrientation:!0,sortPluginsFor:[/palemoon/i],excludeDoNotTrack:!0}),this.nativeForEach=Array.prototype.forEach,this.nativeMap=Array.prototype.map}e.extend=function(e,t){if(null==e)return t;for(var r in e)null!=e[r]&&t[r]!==e[r]&&(t[r]=e[r]);return t};var t=e.prototype;return t.get=function(t){var r=this,n={data:[],addPreprocessedComponent:function(e){var t=e.value;"function"==typeof r.options.preprocessor&&(t=r.options.preprocessor(e.key,t)),n.data.push({key:e.key,value:t})}};n=this.userAgentKey(n),n=this.languageKey(n),n=this.colorDepthKey(n),n=this.deviceMemoryKey(n),n=this.pixelRatioKey(n),n=this.hardwareConcurrencyKey(n),n=this.screenResolutionKey(n),n=this.availableScreenResolutionKey(n),n=this.timezoneOffsetKey(n),n=this.sessionStorageKey(n),n=this.localStorageKey(n),n=this.indexedDbKey(n),n=this.addBehaviorKey(n),n=this.openDatabaseKey(n),n=this.cpuClassKey(n),n=this.platformKey(n),n=this.doNotTrackKey(n),n=this.pluginsKey(n),n=this.canvasKey(n),n=this.webglKey(n),n=this.webglVendorAndRendererKey(n),n=this.adBlockKey(n),n=this.hasLiedLanguagesKey(n),n=this.hasLiedResolutionKey(n);try{n=this.hasLiedOsKey(n),n=this.hasLiedBrowserKey(n)}catch(e){}n=this.touchSupportKey(n),n=this.customEntropyFunction(n),n=this.isJavaEnabled(n),n=this.getMimeTypes(n),n=this.wheelEvent(n),n=this.boundingClientRect(n),n=this.has3d(n),n=this.silverlight(n);var i=[];return r.each(n.data,(function(e){var t=e.value;t&&"function"==typeof t.join&&(t=t.join(";")),i.push(t)})),t(e.x64hash128(i.join("~~~"),31),n.data)},t.customEntropyFunction=function(e){return"function"==typeof this.options.customFunction&&e.addPreprocessedComponent({key:"custom",value:this.options.customFunction()}),e},t.userAgentKey=function(t){return this.options.excludeUserAgent||t.addPreprocessedComponent({key:"user_agent",value:e.getUserAgent()}),t},e.getUserAgent=function(){return navigator.userAgent},t.languageKey=function(e){return this.options.excludeLanguage||e.addPreprocessedComponent({key:"language",value:navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage||""}),e},t.colorDepthKey=function(e){return this.options.excludeColorDepth||e.addPreprocessedComponent({key:"color_depth",value:window.screen.colorDepth||-1}),e},t.deviceMemoryKey=function(t){return this.options.excludeDeviceMemory||t.addPreprocessedComponent({key:"device_memory",value:e.getDeviceMemory()}),t},e.getDeviceMemory=function(){return navigator.deviceMemory||-1},t.pixelRatioKey=function(t){return this.options.excludePixelRatio||t.addPreprocessedComponent({key:"pixel_ratio",value:e.getPixelRatio()}),t},e.getPixelRatio=function(){return window.devicePixelRatio||""},t.screenResolutionKey=function(e){return this.options.excludeScreenResolution?e:this.getScreenResolution(e)},t.getScreenResolution=function(e){var t;return t=this.options.detectScreenOrientation&&window.screen.height>window.screen.width?[window.screen.height,window.screen.width]:[window.screen.width,window.screen.height],e.addPreprocessedComponent({key:"resolution",value:t}),e},t.availableScreenResolutionKey=function(e){return this.options.excludeAvailableScreenResolution?e:this.getAvailableScreenResolution(e)},t.getAvailableScreenResolution=function(e){var t;return window.screen.availWidth&&window.screen.availHeight&&(t=this.options.detectScreenOrientation?window.screen.availHeight>window.screen.availWidth?[window.screen.availHeight,window.screen.availWidth]:[window.screen.availWidth,window.screen.availHeight]:[window.screen.availHeight,window.screen.availWidth]),void 0!==t&&e.addPreprocessedComponent({key:"available_resolution",value:t}),e},t.timezoneOffsetKey=function(e){return this.options.excludeTimezoneOffset||e.addPreprocessedComponent({key:"timezone_offset",value:(new Date).getTimezoneOffset()}),e},t.sessionStorageKey=function(t){return!this.options.excludeSessionStorage&&e.hasSessionStorage()&&t.addPreprocessedComponent({key:"session_storage",value:1}),t},t.localStorageKey=function(t){return!this.options.excludeSessionStorage&&e.hasLocalStorage()&&t.addPreprocessedComponent({key:"local_storage",value:1}),t},t.indexedDbKey=function(t){return!this.options.excludeIndexedDB&&e.hasIndexedDB()&&t.addPreprocessedComponent({key:"indexed_db",value:1}),t},t.addBehaviorKey=function(e){return!this.options.excludeAddBehavior&&document.body&&document.body.addBehavior&&e.addPreprocessedComponent({key:"add_behavior",value:1}),e},t.openDatabaseKey=function(e){return!this.options.excludeOpenDatabase&&window.openDatabase&&e.addPreprocessedComponent({key:"open_database",value:1}),e},t.cpuClassKey=function(t){return this.options.excludeCpuClass||t.addPreprocessedComponent({key:"cpu_class",value:e.getNavigatorCpuClass()}),t},t.platformKey=function(t){return this.options.excludePlatform||t.addPreprocessedComponent({key:"navigator_platform",value:e.getNavigatorPlatform()}),t},t.doNotTrackKey=function(t){return this.options.excludeDoNotTrack||t.addPreprocessedComponent({key:"do_not_track",value:e.getDoNotTrack()}),t},t.canvasKey=function(t){return!this.options.excludeCanvas&&e.isCanvasSupported()&&t.addPreprocessedComponent({key:"canvas",value:this.getCanvasFp()}),t},t.webglKey=function(t){return!this.options.excludeWebGL&&e.isWebGlSupported()&&t.addPreprocessedComponent({key:"webgl",value:this.getWebglFp()}),t},t.webglVendorAndRendererKey=function(t){return!this.options.excludeWebGLVendorAndRenderer&&e.isWebGlSupported()&&t.addPreprocessedComponent({key:"webgl_vendor",value:e.getWebglVendorAndRenderer()}),t},t.adBlockKey=function(t){return this.options.excludeAdBlock||t.addPreprocessedComponent({key:"adblock",value:e.getAdBlock()}),t},t.hasLiedLanguagesKey=function(t){return this.options.excludeHasLiedLanguages||t.addPreprocessedComponent({key:"has_lied_languages",value:e.getHasLiedLanguages()}),t},t.hasLiedResolutionKey=function(t){return this.options.excludeHasLiedResolution||t.addPreprocessedComponent({key:"has_lied_resolution",value:e.getHasLiedResolution()}),t},t.hasLiedOsKey=function(t){return this.options.excludeHasLiedOs||t.addPreprocessedComponent({key:"has_lied_os",value:e.getHasLiedOs()}),t},t.hasLiedBrowserKey=function(t){return this.options.excludeHasLiedBrowser||t.addPreprocessedComponent({key:"has_lied_browser",value:e.getHasLiedBrowser()}),t},t.pluginsKey=function(t){return this.options.excludePlugins||(e.isIE()?this.options.excludeIEPlugins||t.addPreprocessedComponent({key:"ie_plugins",value:this.getIEPlugins()}):t.addPreprocessedComponent({key:"regular_plugins",value:this.getRegularPlugins()})),t},t.getRegularPlugins=function(){var e=[];if(navigator.plugins)for(var t=0,r=navigator.plugins.length;t<r;t++)navigator.plugins[t]&&e.push(navigator.plugins[t]);return this.pluginsShouldBeSorted()&&(e=e.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}))),this.map(e,(function(e){var t=this.map(e,(function(e){return[e.type,e.suffixes].join("~")})).join(",");return[e.name,e.description,t].join("::")}),this)},t.getIEPlugins=function(){var e=[];if(Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(window,"ActiveXObject")||"ActiveXObject"in window){e=this.map(["AcroPDF.PDF","Adodb.Stream","AgControl.AgControl","DevalVRXCtrl.DevalVRXCtrl.1","MacromediaFlashPaper.MacromediaFlashPaper","Msxml2.DOMDocument","Msxml2.XMLHTTP","PDF.PdfCtrl","QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1","RealPlayer","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","Scripting.Dictionary","SWCtl.SWCtl","Shell.UIHelper","ShockwaveFlash.ShockwaveFlash","Skype.Detection","TDCCtl.TDCCtl","WMPlayer.OCX","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1"],(function(e){try{return new window.ActiveXObject(e),e}catch(e){return null}}))}return navigator.plugins&&(e=e.concat(this.getRegularPlugins())),e},t.pluginsShouldBeSorted=function(){for(var e=!1,t=0,r=this.options.sortPluginsFor.length;t<r;t++){var n=this.options.sortPluginsFor[t];if(navigator.userAgent.match(n)){e=!0;break}}return e},t.touchSupportKey=function(t){return this.options.excludeTouchSupport||t.addPreprocessedComponent({key:"touch_support",value:e.getTouchSupport()}),t},t.hardwareConcurrencyKey=function(t){return this.options.excludeHardwareConcurrency||t.addPreprocessedComponent({key:"hardware_concurrency",value:e.getHardwareConcurrency()}),t},e.hasSessionStorage=function(){try{return!!window.sessionStorage}catch(e){return!0}},e.hasLocalStorage=function(){try{return!!window.localStorage}catch(e){return!0}},e.hasIndexedDB=function(){try{return!!window.indexedDB}catch(e){return!0}},e.getHardwareConcurrency=function(){return navigator.hardwareConcurrency?navigator.hardwareConcurrency:"unknown"},e.getNavigatorCpuClass=function(){return navigator.cpuClass?navigator.cpuClass:"unknown"},e.getNavigatorPlatform=function(){return navigator.platform?navigator.platform:"unknown"},e.getDoNotTrack=function(){return navigator.doNotTrack?navigator.doNotTrack:navigator.msDoNotTrack?navigator.msDoNotTrack:window.doNotTrack?window.doNotTrack:"unknown"},e.getTouchSupport=function(){var e=0,t=!1;void 0!==navigator.maxTouchPoints?e=navigator.maxTouchPoints:void 0!==navigator.msMaxTouchPoints&&(e=navigator.msMaxTouchPoints);try{document.createEvent("TouchEvent"),t=!0}catch(e){}return[e,t,"ontouchstart"in window]},t.getCanvasFp=function(){var e=[],t=document.createElement("canvas");t.width=2e3,t.height=200,t.style.display="inline";var r=t.getContext("2d");return r.rect(0,0,10,10),r.rect(2,2,6,6),e.push("canvas winding:"+(!1===r.isPointInPath(5,5,"evenodd")?"yes":"no")),r.textBaseline="alphabetic",r.fillStyle="#f60",r.fillRect(125,1,62,20),r.fillStyle="#069",this.options.dontUseFakeFontInCanvas?r.font="11pt Arial":r.font="11pt no-real-font-123",r.fillText("Cwm fjordbank glyphs vext quiz",2,15),r.fillStyle="rgba(102, 204, 0, 0.2)",r.font="18pt Arial",r.fillText("Cwm fjordbank glyphs vext quiz",4,45),r.globalCompositeOperation="multiply",r.fillStyle="rgb(255,0,255)",r.beginPath(),r.arc(50,50,50,0,2*Math.PI,!0),r.closePath(),r.fill(),r.fillStyle="rgb(0,255,255)",r.beginPath(),r.arc(100,50,50,0,2*Math.PI,!0),r.closePath(),r.fill(),r.fillStyle="rgb(255,255,0)",r.beginPath(),r.arc(75,100,50,0,2*Math.PI,!0),r.closePath(),r.fill(),r.fillStyle="rgb(255,0,255)",r.arc(75,75,75,0,2*Math.PI,!0),r.arc(75,75,25,0,2*Math.PI,!0),r.fill("evenodd"),t.toDataURL&&e.push("canvas fp:"+t.toDataURL()),e.join("~")},t.getWebglFp=function(){var t,r=function(e){return t.clearColor(0,0,0,1),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),"["+e[0]+", "+e[1]+"]"};if(!(t=e.getWebglCanvas()))return null;var n=[],i=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,i);var o=new Float32Array([-.2,-.9,0,.4,-.26,0,0,.732134444,0]);t.bufferData(t.ARRAY_BUFFER,o,t.STATIC_DRAW),i.itemSize=3,i.numItems=3;var a=t.createProgram(),s=t.createShader(t.VERTEX_SHADER);t.shaderSource(s,"attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"),t.compileShader(s);var u=t.createShader(t.FRAGMENT_SHADER);t.shaderSource(u,"precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"),t.compileShader(u),t.attachShader(a,s),t.attachShader(a,u),t.linkProgram(a),t.useProgram(a),a.vertexPosAttrib=t.getAttribLocation(a,"attrVertex"),a.offsetUniform=t.getUniformLocation(a,"uniformOffset"),t.enableVertexAttribArray(a.vertexPosArray),t.vertexAttribPointer(a.vertexPosAttrib,i.itemSize,t.FLOAT,!1,0,0),t.uniform2f(a.offsetUniform,1,1),t.drawArrays(t.TRIANGLE_STRIP,0,i.numItems);try{n.push(t.canvas.toDataURL())}catch(e){}n.push("extensions:"+(t.getSupportedExtensions()||[]).join(";")),n.push("aliased line width range:"+r(t.getParameter(t.ALIASED_LINE_WIDTH_RANGE))),n.push("aliased point size range:"+r(t.getParameter(t.ALIASED_POINT_SIZE_RANGE))),n.push("alpha bits:"+t.getParameter(t.ALPHA_BITS)),n.push("antialiasing:"+(t.getContextAttributes().antialias?"yes":"no")),n.push("blue bits:"+t.getParameter(t.BLUE_BITS)),n.push("depth bits:"+t.getParameter(t.DEPTH_BITS)),n.push("green bits:"+t.getParameter(t.GREEN_BITS)),n.push("max anisotropy:"+function(e){var t=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic");if(t){var r=e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);return 0===r&&(r=2),r}return null}(t)),n.push("max combined texture image units:"+t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),n.push("max cube map texture size:"+t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE)),n.push("max fragment uniform vectors:"+t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS)),n.push("max render buffer size:"+t.getParameter(t.MAX_RENDERBUFFER_SIZE)),n.push("max texture image units:"+t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)),n.push("max texture size:"+t.getParameter(t.MAX_TEXTURE_SIZE)),n.push("max varying vectors:"+t.getParameter(t.MAX_VARYING_VECTORS)),n.push("max vertex attribs:"+t.getParameter(t.MAX_VERTEX_ATTRIBS)),n.push("max vertex texture image units:"+t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),n.push("max vertex uniform vectors:"+t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS)),n.push("max viewport dims:"+r(t.getParameter(t.MAX_VIEWPORT_DIMS))),n.push("red bits:"+t.getParameter(t.RED_BITS)),n.push("renderer:"+t.getParameter(t.RENDERER)),n.push("shading language version:"+t.getParameter(t.SHADING_LANGUAGE_VERSION)),n.push("stencil bits:"+t.getParameter(t.STENCIL_BITS)),n.push("vendor:"+t.getParameter(t.VENDOR)),n.push("version:"+t.getParameter(t.VERSION));try{var c=t.getExtension("WEBGL_debug_renderer_info");c&&(n.push("unmasked vendor:"+t.getParameter(c.UNMASKED_VENDOR_WEBGL)),n.push("unmasked renderer:"+t.getParameter(c.UNMASKED_RENDERER_WEBGL)))}catch(e){}return t.getShaderPrecisionFormat?(n.push("hf p:"+t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision),n.push("hf p rangeMin:"+t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).rangeMin),n.push("hf p rangeMax:"+t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).rangeMax),n.push("mf p:"+t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision),n.push("mf p rangeMin:"+t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).rangeMin),n.push("mf p rangeMax:"+t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).rangeMax),n.push("lf p:"+t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.LOW_FLOAT).precision),n.push("lf p rangeMin:"+t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.LOW_FLOAT).rangeMin),n.push("lf p rangeMax:"+t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.LOW_FLOAT).rangeMax),n.push("hf p:"+t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision),n.push("hf p rangeMin:"+t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).rangeMin),n.push("hf p rangeMax:"+t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).rangeMax),n.push("mf p:"+t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision),n.push("mf p rangeMin:"+t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).rangeMin),n.push("mf p rangeMax:"+t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).rangeMax),n.push("lf p:"+t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.LOW_FLOAT).precision),n.push("lf p rangeMin:"+t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.LOW_FLOAT).rangeMin),n.push("lf p rangeMax:"+t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.LOW_FLOAT).rangeMax),n.push("hi p:"+t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_INT).precision),n.push("hi p rangeMin:"+t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_INT).rangeMin),n.push("hi p rangeMax:"+t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_INT).rangeMax),n.push("mi p:"+t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_INT).precision),n.push("mi p rangeMin:"+t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_INT).rangeMin),n.push("mi p rangeMax:"+t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_INT).rangeMax),n.push("low int p:"+t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.LOW_INT).precision),n.push("low int p rangeMin:"+t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.LOW_INT).rangeMin),n.push("low int p rangeMax:"+t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.LOW_INT).rangeMax),n.push("hi p:"+t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_INT).precision),n.push("hi p rangeMin:"+t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_INT).rangeMin),n.push("hi p rangeMax:"+t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_INT).rangeMax),n.push("mi p:"+t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_INT).precision),n.push("mi p rangeMin:"+t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_INT).rangeMin),n.push("mi p rangeMax:"+t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_INT).rangeMax),n.push("low int p:"+t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.LOW_INT).precision),n.push("low int p rangeMin:"+t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.LOW_INT).rangeMin),n.push("low int p rangeMax:"+t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.LOW_INT).rangeMax),n.join("~")):n.join("~")},e.getWebglVendorAndRenderer=function(){try{var t=e.getWebglCanvas(),r=t.getExtension("WEBGL_debug_renderer_info");return t.getParameter(r.UNMASKED_VENDOR_WEBGL)+"~"+t.getParameter(r.UNMASKED_RENDERER_WEBGL)}catch(e){return null}},e.getAdBlock=function(){var e=document.createElement("div");e.innerHTML="&nbsp;",e.className="adsbox";var t=!1;try{document.body.appendChild(e),t=0===document.getElementsByClassName("adsbox")[0].offsetHeight,document.body.removeChild(e)}catch(e){t=!1}return t},e.getHasLiedLanguages=function(){if(void 0!==navigator.languages)try{if(navigator.languages[0].substr(0,2)!==navigator.language.substr(0,2))return!0}catch(e){return!0}return!1},e.getHasLiedResolution=function(){return window.screen.width<window.screen.availWidth||window.screen.height<window.screen.availHeight},e.getHasLiedOs=function(){var e,t=navigator.userAgent.toLowerCase(),r=navigator.oscpu,n=navigator.platform.toLowerCase();if(e=t.includes("windows phone")?"Windows Phone":t.includes("win")?"Windows":t.includes("android")?"Android":t.includes("linux")?"Linux":t.includes("iphone")||t.includes("ipad")?"iOS":t.includes("mac")?"Mac":"Other",("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)&&"Windows Phone"!==e&&"Android"!==e&&"iOS"!==e&&"Other"!==e)return!0;if(void 0!==r){if((r=r.toLowerCase()).includes("win")&&"Windows"!==e&&"Windows Phone"!==e)return!0;if(r.includes("linux")&&"Linux"!==e&&"Android"!==e)return!0;if(r.includes("mac")&&"Mac"!==e&&"iOS"!==e)return!0;if((!r.includes("win")&&!r.includes("linux")&&!r.includes("mac"))!=("Other"===e))return!0}return!(!n.includes("win")||"Windows"===e||"Windows Phone"===e)||(!(!(n.includes("linux")||n.includes("android")||n.includes("pike"))||"Linux"===e||"Android"===e)||(!(!(n.includes("mac")||n.includes("ipad")||n.includes("ipod")||n.includes("iphone"))||"Mac"===e||"iOS"===e)||((!n.includes("win")&&!n.includes("linux")&&!n.includes("mac"))!=("Other"===e)||void 0===navigator.plugins&&"Windows"!==e&&"Windows Phone"!==e)))},e.getHasLiedBrowser=function(){var e,t=navigator.userAgent.toLowerCase(),r=navigator.productSub;if(("Chrome"===(e=t.includes("firefox")?"Firefox":t.includes("opera")||t.includes("opr")?"Opera":t.includes("chrome")?"Chrome":t.includes("safari")?"Safari":t.includes("trident")?"Internet Explorer":"Other")||"Safari"===e||"Opera"===e)&&"20030107"!==r)return!0;var n,i=eval.toString().length;if(37===i&&"Safari"!==e&&"Firefox"!==e&&"Other"!==e)return!0;if(39===i&&"Internet Explorer"!==e&&"Other"!==e)return!0;if(33===i&&"Chrome"!==e&&"Opera"!==e&&"Other"!==e)return!0;try{throw"a"}catch(e){try{e.toSource(),n=!0}catch(e){n=!1}}return!(!n||"Firefox"===e||"Other"===e)},e.isCanvasSupported=function(){var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},e.isWebGlSupported=function(){if(!e.isCanvasSupported())return!1;var t=e.getWebglCanvas();return!!window.WebGLRenderingContext&&!!t},e.isIE=function(){return"Microsoft Internet Explorer"===navigator.appName||!("Netscape"!==navigator.appName||!/Trident/.test(navigator.userAgent))},e.getWebglCanvas=function(){var e=document.createElement("canvas"),t=null;try{t=e.getContext("webgl")||e.getContext("experimental-webgl")}catch(e){}return t||(t=null),t},t.isJavaEnabled=function(e){return this.options.excludeJavaEnabled||e.addPreprocessedComponent({key:"java_enabled",value:navigator.javaEnabled()}),e},t.getMimeTypes=function(e){if(this.options.excludeMimeTypes)return e;for(var t=[],r=0;r<navigator.mimeTypes.length;r++){var n=navigator.mimeTypes[r].description;n&&t.push(n)}return e.addPreprocessedComponent({key:"mime_types",value:t.join(",")}),e},t.wheelEvent=function(e){if(this.options.excludeWheelEvent)return e;var t="onwheel"in ce("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":browser.mozilla?"MozMousePixelScroll":"DOMMouseScroll";return e.addPreprocessedComponent({key:"wheel_event",value:t}),e},t.boundingClientRect=function(e){return this.options.excludeBoundingClientRect||e.addPreprocessedComponent({key:"bounding_client_rect",value:"getBoundingClientRect"in ce("div")}),e},t.has3d=function(e){if(this.options.excludeHas3d)return e;var t=function(e){if("WebKitCSSMatrix"in e&&"m11"in new e.WebKitCSSMatrix)return!0;if("MSCSSMatrix"in e&&"m11"in new e.MSCSSMatrix)return!0;if("CSSMatrix"in e&&"m11"in new e.CSSMatrix)return!0;try{var t=ce("div"),r=getCssPropertyName(t,"transform");return!!r&&(t.style[r]="translate3d(1px,1px,1px)",t.style[r]&&"none"!=t.style[r])}catch(e){return!1}}(window);return e.addPreprocessedComponent({key:"has_3d",value:t}),e},t.silverlight=function(e){if(this.options.excludeSilverlight)return e;var t={installed:!1,supported:!1,versions:[]};if("undefined"!=typeof Silverlight){if("function"==typeof Silverlight.isInstalled){var r=["5.1.41212","5.1.41105","5.1.40728","5.1.40416","5.1.30514","5.1.30214","5.1.20913","5.1.20513","5.1.20125","5.1.10411","5.0.61118","5.0.60818","5.0.60401","4.1.10329","4.1.10111","4.0.60831","4.0.60531","4.0.60310","4.0.60129","4.0.51204","4.0.50917","4.0.50826","4.0.50524","4.0.50401","3.0.50611","3.0.50106","3.0.40818","3.0.40723","3.0.40624","2.0.40115","2.0.31005","1.0.30715","1.0.30401","1.0.30109","1.0.21115","1.0.20816"].filter(Silverlight.isInstalled);t.installed=r.length>0,t.versions=r}"function"==typeof Silverlight.supportedUserAgent&&(t.supported=Silverlight.supportedUserAgent())}else try{var n=navigator.plugins["Silverlight Plug-In"];t.installed=!!n,t.installed&&t.versions.push(n.version)}catch(e){}return!1===t.installed||e.addPreprocessedComponent({key:"silverlight",value:[t.installed,t.versions.join("~")]}),e},t.each=function(e,t,r){if(null!==e)if(this.nativeForEach&&e.forEach===this.nativeForEach)e.forEach(t,r);else if(e.length===+e.length){for(var n=0,i=e.length;n<i;n++)if(t.call(r,e[n],n,e)==={})return}else for(var o in e)if(e.hasOwnProperty(o)&&t.call(r,e[o],o,e)==={})return},t.map=function(e,t,r){var n=[];return null==e?n:this.nativeMap&&e.map===this.nativeMap?e.map(t,r):(this.each(e,(function(e,i,o){n[n.length]=t.call(r,e,i,o)})),n)},e.x64Add=function(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var r=[0,0,0,0];return r[3]+=e[3]+t[3],r[2]+=r[3]>>>16,r[3]&=65535,r[2]+=e[2]+t[2],r[1]+=r[2]>>>16,r[2]&=65535,r[1]+=e[1]+t[1],r[0]+=r[1]>>>16,r[1]&=65535,r[0]+=e[0]+t[0],r[0]&=65535,[r[0]<<16|r[1],r[2]<<16|r[3]]},e.x64Multiply=function(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var r=[0,0,0,0];return r[3]+=e[3]*t[3],r[2]+=r[3]>>>16,r[3]&=65535,r[2]+=e[2]*t[3],r[1]+=r[2]>>>16,r[2]&=65535,r[2]+=e[3]*t[2],r[1]+=r[2]>>>16,r[2]&=65535,r[1]+=e[1]*t[3],r[0]+=r[1]>>>16,r[1]&=65535,r[1]+=e[2]*t[2],r[0]+=r[1]>>>16,r[1]&=65535,r[1]+=e[3]*t[1],r[0]+=r[1]>>>16,r[1]&=65535,r[0]+=e[0]*t[3]+e[1]*t[2]+e[2]*t[1]+e[3]*t[0],r[0]&=65535,[r[0]<<16|r[1],r[2]<<16|r[3]]},e.x64Rotl=function(e,t){return 32===(t%=64)?[e[1],e[0]]:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t|e[0]>>>32-t]:(t-=32,[e[1]<<t|e[0]>>>32-t,e[0]<<t|e[1]>>>32-t])},e.x64LeftShift=function(e,t){return 0===(t%=64)?e:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t]:[e[1]<<t-32,0]},e.x64Xor=function(e,t){return[e[0]^t[0],e[1]^t[1]]},e.x64Fmix=function(t){return t=e.x64Xor(t,[0,t[0]>>>1]),t=e.x64Multiply(t,[4283543511,3981806797]),t=e.x64Xor(t,[0,t[0]>>>1]),t=e.x64Multiply(t,[3301882366,444984403]),t=e.x64Xor(t,[0,t[0]>>>1])},e.x64hash128=function(t,r){void 0===t&&(t=""),void 0===r&&(r=0);var n,i=t.length%16,o=t.length-i,a=[0,r],s=[0,r],u=[0,0],c=[0,0],d=[2277735313,289559509],l=[1291169091,658871167];for(n=0;n<o;n+=16)u=[255&t.charCodeAt(n+4)|(255&t.charCodeAt(n+5))<<8|(255&t.charCodeAt(n+6))<<16|(255&t.charCodeAt(n+7))<<24,255&t.charCodeAt(n)|(255&t.charCodeAt(n+1))<<8|(255&t.charCodeAt(n+2))<<16|(255&t.charCodeAt(n+3))<<24],c=[255&t.charCodeAt(n+12)|(255&t.charCodeAt(n+13))<<8|(255&t.charCodeAt(n+14))<<16|(255&t.charCodeAt(n+15))<<24,255&t.charCodeAt(n+8)|(255&t.charCodeAt(n+9))<<8|(255&t.charCodeAt(n+10))<<16|(255&t.charCodeAt(n+11))<<24],u=e.x64Multiply(u,d),u=e.x64Rotl(u,31),u=e.x64Multiply(u,l),a=e.x64Xor(a,u),a=e.x64Rotl(a,27),a=e.x64Add(a,s),a=e.x64Add(e.x64Multiply(a,[0,5]),[0,1390208809]),c=e.x64Multiply(c,l),c=e.x64Rotl(c,33),c=e.x64Multiply(c,d),s=e.x64Xor(s,c),s=e.x64Rotl(s,31),s=e.x64Add(s,a),s=e.x64Add(e.x64Multiply(s,[0,5]),[0,944331445]);switch(u=[0,0],c=[0,0],i){case 15:c=e.x64Xor(c,e.x64LeftShift([0,t.charCodeAt(n+14)],48));case 14:c=e.x64Xor(c,e.x64LeftShift([0,t.charCodeAt(n+13)],40));case 13:c=e.x64Xor(c,e.x64LeftShift([0,t.charCodeAt(n+12)],32));case 12:c=e.x64Xor(c,e.x64LeftShift([0,t.charCodeAt(n+11)],24));case 11:c=e.x64Xor(c,e.x64LeftShift([0,t.charCodeAt(n+10)],16));case 10:c=e.x64Xor(c,e.x64LeftShift([0,t.charCodeAt(n+9)],8));case 9:c=e.x64Xor(c,[0,t.charCodeAt(n+8)]),c=e.x64Multiply(c,l),c=e.x64Rotl(c,33),c=e.x64Multiply(c,d),s=e.x64Xor(s,c);case 8:u=e.x64Xor(u,e.x64LeftShift([0,t.charCodeAt(n+7)],56));case 7:u=e.x64Xor(u,e.x64LeftShift([0,t.charCodeAt(n+6)],48));case 6:u=e.x64Xor(u,e.x64LeftShift([0,t.charCodeAt(n+5)],40));case 5:u=e.x64Xor(u,e.x64LeftShift([0,t.charCodeAt(n+4)],32));case 4:u=e.x64Xor(u,e.x64LeftShift([0,t.charCodeAt(n+3)],24));case 3:u=e.x64Xor(u,e.x64LeftShift([0,t.charCodeAt(n+2)],16));case 2:u=e.x64Xor(u,e.x64LeftShift([0,t.charCodeAt(n+1)],8));case 1:u=e.x64Xor(u,[0,t.charCodeAt(n)]),u=e.x64Multiply(u,d),u=e.x64Rotl(u,31),u=e.x64Multiply(u,l),a=e.x64Xor(a,u)}return a=e.x64Xor(a,[0,t.length]),s=e.x64Xor(s,[0,t.length]),a=e.x64Add(a,s),s=e.x64Add(s,a),a=e.x64Fmix(a),s=e.x64Fmix(s),a=e.x64Add(a,s),s=e.x64Add(s,a),("00000000"+(a[0]>>>0).toString(16)).slice(-8)+("00000000"+(a[1]>>>0).toString(16)).slice(-8)+("00000000"+(s[0]>>>0).toString(16)).slice(-8)+("00000000"+(s[1]>>>0).toString(16)).slice(-8)},e}();r("OcsD");onDOMReady((function(){try{new i({preprocessor:function(e,t){return"user_agent"===e?[]:t},excludeLanguage:!0}).get((function(e){Object(n.a)("remixgp")!==e&&Object(n.b)("remixgp",e,7,1)}))}catch(e){}}))}},[[11,"runtime","vendor","icons","b-e26de325f9603fb08a22c8855b52d8e7","b-daa6459548e17297c3e150b5af3268f6"]]]);