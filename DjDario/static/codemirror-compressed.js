/* CodeMirror - Minified & Bundled
   Generated on 9/18/2016 with http://codemirror.net/doc/compress.html
   Version: HEAD

   Modes:
   - python.js
 */

!function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){"use strict";function b(a){return new RegExp("^(("+a.join(")|(")+"))\\b")}function f(a){return a.scopes[a.scopes.length-1]}var c=b(["and","or","not","is"]),d=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in"],e=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];a.registerHelper("hintWords","python",d.concat(e)),a.defineMode("python",function(g,h){function w(a,b){if(a.sol()&&(b.indent=a.indentation()),a.sol()&&"py"==f(b).type){var c=f(b).offset;if(a.eatSpace()){var d=a.indentation();return d>c?z(b):c>d&&B(a,b)&&(b.errorToken=!0),null}var e=x(a,b);return c>0&&B(a,b)&&(e+=" "+i),e}return x(a,b)}function x(a,b){if(a.eatSpace())return null;var d=a.peek();if("#"==d)return a.skipToEnd(),"comment";if(a.match(/^[0-9\.]/,!1)){var e=!1;if(a.match(/^\d*\.\d+(e[\+\-]?\d+)?/i)&&(e=!0),a.match(/^\d+\.\d*/)&&(e=!0),a.match(/^\.\d+/)&&(e=!0),e)return a.eat(/J/i),"number";var f=!1;if(a.match(/^0x[0-9a-f]+/i)&&(f=!0),a.match(/^0b[01]+/i)&&(f=!0),a.match(/^0o[0-7]+/i)&&(f=!0),a.match(/^[1-9]\d*(e[\+\-]?\d+)?/)&&(a.eat(/J/i),f=!0),a.match(/^0(?![\dx])/i)&&(f=!0),f)return a.eat(/L/i),"number"}return a.match(t)?(b.tokenize=y(a.current()),b.tokenize(a,b)):a.match(m)||a.match(l)?"punctuation":a.match(k)||a.match(r)?"operator":a.match(j)?"punctuation":"."==b.lastToken&&a.match(s)?"property":a.match(u)||a.match(c)?"keyword":a.match(v)?"builtin":a.match(/^(self|cls)\b/)?"variable-2":a.match(s)?"def"==b.lastToken||"class"==b.lastToken?"def":"variable":(a.next(),i)}function y(a){function d(d,e){for(;!d.eol();)if(d.eatWhile(/[^'"\\]/),d.eat("\\")){if(d.next(),b&&d.eol())return c}else{if(d.match(a))return e.tokenize=w,c;d.eat(/['"]/)}if(b){if(h.singleLineStringErrors)return i;e.tokenize=w}return c}for(;"rubf".indexOf(a.charAt(0).toLowerCase())>=0;)a=a.substr(1);var b=1==a.length,c="string";return d.isString=!0,d}function z(a){for(;"py"!=f(a).type;)a.scopes.pop();a.scopes.push({offset:f(a).offset+g.indentUnit,type:"py",align:null})}function A(a,b,c){var d=a.match(/^([\s\[\{\(]|#.*)*$/,!1)?null:a.column()+1;b.scopes.push({offset:b.indent+n,type:c,align:d})}function B(a,b){for(var c=a.indentation();b.scopes.length>1&&f(b).offset>c;){if("py"!=f(b).type)return!0;b.scopes.pop()}return f(b).offset!=c}function C(a,b){a.sol()&&(b.beginningOfLine=!0);var c=b.tokenize(a,b),d=a.current();if(b.beginningOfLine&&"@"==d)return a.match(s,!1)?"meta":q?"operator":i;/\S/.test(d)&&(b.beginningOfLine=!1),"variable"!=c&&"builtin"!=c||"meta"!=b.lastToken||(c="meta"),("pass"==d||"return"==d)&&(b.dedent+=1),"lambda"==d&&(b.lambda=!0),":"!=d||b.lambda||"py"!=f(b).type||z(b);var e=1==d.length?"[({".indexOf(d):-1;if(-1!=e&&A(a,b,"])}".slice(e,e+1)),e="])}".indexOf(d),-1!=e){if(f(b).type!=d)return i;b.indent=b.scopes.pop().offset-n}return b.dedent>0&&a.eol()&&"py"==f(b).type&&(b.scopes.length>1&&b.scopes.pop(),b.dedent-=1),c}var i="error",j=h.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.]/,k=h.doubleOperators||/^([!<>]==|<>|<<|>>|\/\/|\*\*)/,l=h.doubleDelimiters||/^(\+=|\-=|\*=|%=|\/=|&=|\|=|\^=)/,m=h.tripleDelimiters||/^(\/\/=|>>=|<<=|\*\*=)/,n=h.hangingIndent||g.indentUnit,o=d,p=e;void 0!=h.extra_keywords&&(o=o.concat(h.extra_keywords)),void 0!=h.extra_builtins&&(p=p.concat(h.extra_builtins));var q=!(h.version&&Number(h.version)<3);if(q){var r=h.singleOperators||/^[\+\-\*\/%&|\^~<>!@]/,s=h.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;o=o.concat(["nonlocal","False","True","None","async","await"]),p=p.concat(["ascii","bytes","exec","print"]);var t=new RegExp("^(([rbuf]|(br))?('{3}|\"{3}|['\"]))","i")}else{var r=h.singleOperators||/^[\+\-\*\/%&|\^~<>!]/,s=h.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/;o=o.concat(["exec","print"]),p=p.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","False","True","None"]);var t=new RegExp("^(([rub]|(ur)|(br))?('{3}|\"{3}|['\"]))","i")}var u=b(o),v=b(p),D={startState:function(a){return{tokenize:w,scopes:[{offset:a||0,type:"py",align:null}],indent:a||0,lastToken:null,lambda:!1,dedent:0}},token:function(a,b){var c=b.errorToken;c&&(b.errorToken=!1);var d=C(a,b);return d&&"comment"!=d&&(b.lastToken="keyword"==d||"punctuation"==d?a.current():d),"punctuation"==d&&(d=null),a.eol()&&b.lambda&&(b.lambda=!1),c?d+" "+i:d},indent:function(b,c){if(b.tokenize!=w)return b.tokenize.isString?a.Pass:0;var d=f(b),e=d.type==c.charAt(0);return null!=d.align?d.align-(e?1:0):d.offset-(e?n:0)},electricInput:/^\s*[\}\]\)]$/,closeBrackets:{triples:"'\""},lineComment:"#",fold:"indent"};return D}),a.defineMIME("text/x-python","python");var g=function(a){return a.split(" ")};a.defineMIME("text/x-cython",{name:"python",extra_keywords:g("by cdef cimport cpdef ctypedef enum exceptextern gil include nogil property publicreadonly struct union DEF IF ELIF ELSE")})});