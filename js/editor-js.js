!function(){var Logger={log:function(loggedItem){return"string"==typeof loggedItem?loggedItem:eval(loggedItem)}};window.logger=Logger}(),function(e){"use strict";var t={mode:"javascript",theme:"eclipse",lineNumbers:!0,showCursorWhenSelecting:!0,styleActiveLine:!0},n=document.getElementById("editor"),o=CodeMirror(n,t),c={initCodeMirror:function(e){return o.setSize("100%",200),this.setEditorContent(e),o},setEditorContent:function(e){o.doc.setValue(e.cmInitContent),o.focus(),o.doc.setCursor({line:e.cmSelectLine,ch:e.cmSelectChStart}),o.refresh()}};e.codemirrorUtils=c}(window),function(){"use strict";function applyCode(){var code=cmEditor.doc.getValue(),output=document.querySelector("#output code");try{var result=eval(code)}catch(e){result="Error: "+e.message}output.classList.add("fade-in"),output.textContent=result,output.addEventListener("animationend",function(){output.classList.remove("fade-in")})}function enableLiveEditor(){var e=document.getElementById("live"),t=document.getElementById("static"),n=t.querySelector("#static-js");cmInitContent=n.textContent,cmSelectChStart=n.dataset.char,cmSelectLine=n.dataset.line,t.classList.add("hidden"),e.classList.remove("hidden"),cmEditor=codemirrorUtils.initCodeMirror({cmInitContent:cmInitContent,cmSelectLine:cmSelectLine,cmSelectChStart:cmSelectChStart})}var cmEditor=void 0,cmInitContent="",cmSelectChStart=0,cmSelectLine=0,execute=document.getElementById("execute"),reset=document.getElementById("reset");execute.addEventListener("click",function(){applyCode()}),reset.addEventListener("click",function(){var e={cmInitContent:cmInitContent,cmSelectLine:cmSelectLine,cmSelectChStart:cmSelectChStart};codemirrorUtils.setEditorContent(e),applyCode()}),window.addEventListener("load",function(){enableLiveEditor(),applyCode()})}();