(()=>{var e,t={863:function(e,t,s){"use strict";var i,r=this&&this.__classPrivateFieldSet||function(e,t,s,i,r){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?r.call(e,s):r?r.value=s:t.set(e,s),s},n=this&&this.__classPrivateFieldGet||function(e,t,s,i){if("a"===s&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?i:"a"===s?i.call(e):i?i.value:t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.Char=void 0;const o=s(131),u=/[\u{05D0}-\u{05F2}]/u,l=/[\u{05C1}-\u{05C2}]/u,a=/[\u{05BC}\u{05BF}]/u,A=/[\u{05B0}-\u{05BB}\u{05C7}]/u;t.Char=class{constructor(e){i.set(this,void 0),r(this,i,e,"f")}get text(){return n(this,i,"f")}findPos(){const e=this.text;return u.test(e)?0:l.test(e)?1:a.test(e)?2:A.test(e)?3:o.taamim.test(e)?4:10}get sequencePosition(){return this.findPos()}},i=new WeakMap},205:function(e,t,s){"use strict";var i,r,n=this&&this.__classPrivateFieldSet||function(e,t,s,i,r){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?r.call(e,s):r?r.value=s:t.set(e,s),s},o=this&&this.__classPrivateFieldGet||function(e,t,s,i){if("a"===s&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?i:"a"===s?i.call(e):i?i.value:t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.Cluster=void 0;const u=s(863),l=s(879),a=s(131),A=s(258);class c extends l.Node{constructor(e,t=!1){super(),i.set(this,void 0),r.set(this,void 0),n(this,i,e,"f"),n(this,r,this.sequence(t),"f")}get original(){return o(this,i,"f")}get text(){return this.chars.reduce(((e,t)=>e+t.text),"")}get chars(){return o(this,r,"f")}sequence(e=!1){const t=[...this.original].map((e=>new u.Char(e)));return e?t:t.sort(((e,t)=>e.sequencePosition-t.sequencePosition))}get hasLongVowel(){return/[\u{05B5}\u{05B8}\u{05B9}\u{05BA}]/u.test(this.text)}get hasShortVowel(){return/[\u{05B4}\u{05B6}\u{05B7}\u{05BB}\u{05C7}]/u.test(this.text)}get hasHalfVowel(){return/[\u{05B1}-\u{05B3}]/u.test(this.text)}get hasVowel(){return this.hasLongVowel||this.hasShortVowel||this.hasHalfVowel}hasVowelName(e){if(!A.nameToCharMap[e])throw new Error(`${e} is not a valid value`);return-1!==this.text.indexOf(A.nameToCharMap[e])}get vowel(){const e=this.text.match(a.vowelsCaptureGroup);return e?e[0]:e}get vowelName(){const e=this.vowel;return e?A.charToNameMap[e]:null}get isShureq(){return!this.hasVowel&&/\u{05D5}\u{05BC}/u.test(this.text)}get isMater(){const e=this.next instanceof c&&this.next.isShureq;if(!(this.hasVowel||this.isShureq||this.hasSheva||e)){const e=this.text,t=this.prev instanceof c?this.prev.text:"";if(!/[היו](?!\u{05BC})/u.test(e))return!1;if(/ה/.test(e)&&/\u{05B8}|\u{05B6}|\u{05B5}/u.test(t))return!0;if(/ו/.test(e)&&/\u{05B9}/u.test(t))return!0;if(/י/.test(e)&&/\u{05B4}|\u{05B5}|\u{05B6}/u.test(t))return!0}return!1}get hasMetheg(){return this.hasMeteg}get hasMeteg(){const e=/\u{05BD}/u,t=this.text;if(!e.test(t))return!1;let s=this.next;for(;s;)if(s instanceof c){const t=s.text,i=/\u{05C3}/u;if(e.test(t))return!0;if(i.test(t))return!1;s=s.next}return!0}get hasShewa(){return this.hasSheva}get hasSheva(){return/\u{05B0}/u.test(this.text)}get hasTaamim(){return a.taamim.test(this.text)}get isNotHebrew(){return!a.hebChars.test(this.text)}}t.Cluster=c,i=new WeakMap,r=new WeakMap},304:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Text=void 0;const i=s(256);Object.defineProperty(t,"Text",{enumerable:!0,get:function(){return i.Text}})},879:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Node=void 0,t.Node=class{constructor(){this.next=null,this.prev=null}set children(e){const t=e[0],s=e.slice(1);this.child=t,t.siblings=s}set siblings(e){const t=e.length;for(let s=0;s<t;s++){const t=e[s],i=e[s+1]||null,r=e[s-1]||this;t.prev=r,r.next=t,t.next=i}}get siblings(){let e=this.next;const t=[];for(;e;)t.push(e),e=e.next;return t}}},667:function(e,t,s){"use strict";var i,r,n,o,u=this&&this.__classPrivateFieldSet||function(e,t,s,i,r){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?r.call(e,s):r?r.value=s:t.set(e,s),s},l=this&&this.__classPrivateFieldGet||function(e,t,s,i){if("a"===s&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?i:"a"===s?i.call(e):i?i.value:t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.Syllable=void 0;const a=s(258),A=s(131),c=s(879),E={...a.charToNameMap,"ְ":"SHEVA"},h={...a.nameToCharMap,SHEVA:"ְ"};class S extends c.Node{constructor(e,{isClosed:t=!1,isAccented:s=!1,isFinal:l=!1}={}){super(),i.set(this,void 0),r.set(this,void 0),n.set(this,void 0),o.set(this,void 0),u(this,i,e,"f"),u(this,r,t,"f"),u(this,n,s,"f"),u(this,o,l,"f")}get text(){return this.clusters.reduce(((e,t)=>e+t.text),"")}get clusters(){return l(this,i,"f")}get chars(){return this.clusters.map((e=>e.chars)).flat()}get vowel(){const e=this.text.match(A.vowelsCaptureGroupWithSheva);return e?e[0]:e}get vowelName(){const e=this.vowel;return e?E[e]:null}hasVowelName(e){if(!h[e])throw new Error(`${e} is not a valid value`);return!("SHEVA"===e&&this.clusters.filter((e=>e.hasVowel)).length)&&-1!==this.text.indexOf(h[e])}get isClosed(){return l(this,r,"f")}set isClosed(e){u(this,r,e,"f")}get isAccented(){return l(this,n,"f")}set isAccented(e){u(this,n,e,"f")}get isFinal(){return l(this,o,"f")}set isFinal(e){u(this,o,e,"f")}}t.Syllable=S,i=new WeakMap,r=new WeakMap,n=new WeakMap,o=new WeakMap},256:function(e,t,s){"use strict";var i,r=this&&this.__classPrivateFieldSet||function(e,t,s,i,r){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?r.call(e,s):r?r.value=s:t.set(e,s),s},n=this&&this.__classPrivateFieldGet||function(e,t,s,i){if("a"===s&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?i:"a"===s?i.call(e):i?i.value:t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.Text=void 0;const o=s(214),u=s(938),l=s(977),a=s(414),A=s(131);t.Text=class{constructor(e,t={}){i.set(this,void 0),this.options=this.setOptions(t),r(this,i,this.options.allowNoNiqqud?e:this.validateInput(e),"f")}validateInput(e){if(!/[\u{05B0}-\u{05BC}\u{05C7}]/u.test(e))throw new Error("Text must contain niqqud");return e}validateOptions(e){const t=["allowNoNiqqud","article","holemHaser","longVowels","qametsQatan","sqnmlvy","strict","wawShureq"];for(const[s,i]of Object.entries(e)){if(!t.includes(s))throw new Error(`${s} is not a valid option`);if("holemHaser"===s&&!["update","preserve","remove"].includes(String(i)))throw new Error(`The value ${String(i)} is not a valid option for ${s}`);if("boolean"!=typeof i&&"holemHaser"!==s)throw new Error(`The value ${String(i)} is not a valid option for ${s}`)}return e}setOptions(e){const t=this.validateOptions(e);return{allowNoNiqqud:t.allowNoNiqqud??!1,article:t.article??!0,holemHaser:t.holemHaser??"preserve",longVowels:t.longVowels??!0,sqnmlvy:t.sqnmlvy??!0,strict:t.strict??!0,qametsQatan:t.qametsQatan??!0,wawShureq:t.wawShureq??!0}}get normalized(){return this.original.normalize("NFKD")}get sanitized(){const e=this.normalized.trim(),t=(0,l.sequence)(e).flat().reduce(((e,t)=>e+t.text),"").split(A.splitGroup).filter((e=>e));return(this.options.qametsQatan?t.map(u.convertsQametsQatan):t).map((e=>(0,a.holemWaw)(e,this.options))).join("")}get original(){return n(this,i,"f")}get text(){return this.words.reduce(((e,t)=>`${e}${t.text}${t.whiteSpaceAfter??""}`),"")}get words(){return this.sanitized.split(A.splitGroup).filter((e=>e)).map((e=>new o.Word(e,this.options)))}get syllables(){return this.words.map((e=>e.syllables)).flat()}get clusters(){return this.syllables.map((e=>e.clusters)).flat()}get chars(){return this.clusters.map((e=>e.chars)).flat()}},i=new WeakMap},176:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hasDivineName=t.isDivineName=void 0;const s=/[^\u{05D0}-\u{05F4}]/gu;t.isDivineName=e=>"יהוה"===e.replace(s,""),t.hasDivineName=e=>/יהוה/.test(e.replace(s,""))},414:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.holemWaw=void 0;const i=s(525),r=s(131),n=(e,t,s)=>{t.lastIndex=0;const[r,n]=(0,i.removeTaamim)(e),o=r.matchAll(t);if(!o)return e;for(const t of o){const i=n[t.index];e=s(e,i,n[t[0].length]+i)}return t.lastIndex=0,e};t.holemWaw=(e,t)=>{const s=/\u{05D5}/u,o=/\u{05B9}/u,u=/\u{05BA}/u,l=/\u{05D5}\u{05B9}/u,a=/[\u{05B0}-\u{05BB}\u{05C7}]/u,A=new RegExp("(?<!"+a.source+")"+l.source,"gu"),c=new RegExp("(?<="+a.source+")"+s.source+r.taamim.source+"?"+o.source,"gu");return"remove"===t.holemHaser&&u.test(e)&&(e=e.replace(u,"ֹ")),s.test(e)&&o.test(e)&&l.test(e)?(e=A.test(e)?n(e,A,((t,s,i)=>e.replaceAll(A,"ֹו"))):e,e="update"===t.holemHaser&&c.test((0,i.removeTaamim)(e)[0])?n(e,c,(e=>{const t=new RegExp(`${s.source}(${r.taamim.source})?${o.source}`,"gu");return e.replace(t,"וֺ$1")})):e):e}},938:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.convertsQametsQatan=void 0;const i=s(977),r=s(525),n=e=>e.map((e=>(0,i.sequence)(e.normalize("NFKD")).flat().reduce(((e,t)=>e+t.text),""))),o=n(["אָבְדַן","אָבְנ","אָזְנ","אָכְל","אָנִיּ","אָפְנ","אָרְח","אָרְכּ","אָשְׁר","בָאְשׁ","בָשְׁתּ","בָּשְׁתּ","גָבְה","גָּבְה","גָדְל","גָּדְל","גָּלְי","גָרְנ","גָּרְנ","דָּכְי","דָּרְבָֽן","חָדְשׁ","חָכְמ","חָלְיֽוֹ","חָלְיֹו","חָפְנ","חָפְשִׁי","חָפְשִׁית","חָרְב","חָרְנֶפֶר","חָרְפּ","חָשְׁכּ","יָפְי","יָשְׁר","מָרְדְּכַי","מָתְנ","סָלְתּ","עָזּ","עָמְרִי","עָנְי","עָפְנִי","עָפְר","עָרְל","עָרְפּ","עָשְׁר","צָרְכּ","קָדְק","קָדְשׁ","קָרְבּ","קָרְח","רָגְז","רָחְבּ","שָׁרְשׁ","שָׁרָשׁ","תָּכְנִית"]),u=n(["חָק־","^יָמִים$","(מִ)?כָּל־","(וּבְ|וְ|בְּ|לְ)?כָל־","^(מִ)?כָּל $","^(וּבְ|וְ|בְּ|לְ)?כָל $","מָר־","עָתְנִיאֵל","רָב־","תָם־","תָּם־","חָנֵּנִי","וַיָּמָת","וַיָּנָס","וַיָּקָם","וַיָּרָם","וַיָּשָׁב","וַתָּמָת","וַתָּקָם","וַתָּשָׁב"]);t.convertsQametsQatan=e=>{const t=/\u{05B8}/u;if(!t.test(e)||/\u{05C7}/u.test(e))return e;if(/\u{05B3}/u.test(e)){const t=e.indexOf("ֳ"),s=e.indexOf("ָ");if(-1!==s&&s<t)return e.substring(0,s)+"ׇ"+e.substring(s+1)}const[s,i]=(0,r.removeTaamim)(e);for(const t of u){const i=new RegExp(t);if(s.match(i)){const t=e.lastIndexOf("ָ");return e.substring(0,t)+"ׇ"+e.substring(t+1)}}for(const r of o){const n=new RegExp(r),o=s.match(n);if(o){const s=i[o.index],r=i[o[0].length]+s,n=e.substring(s,r),u=n.split(t).join("ׇ");return e.split(n).join(u)}}return e}},131:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.splitGroup=t.hebChars=t.vowelsCaptureGroupWithSheva=t.vowelsCaptureGroup=t.vowels=t.taamim=void 0,t.taamim=/[\u{0591}-\u{05AF}\u{05BF}\u{05C0}\u{05C3}-\u{05C6}\u{05F3}\u{05F4}]/u,t.vowels=/[\u{05B1}-\u{05BB}\u{05C7}]/u,t.vowelsCaptureGroup=/([\u{05B1}-\u{05BB}\u{05C7}])/u,t.vowelsCaptureGroupWithSheva=/([\u{05B0}-\u{05BB}\u{05C7}])/u,t.hebChars=/[\u{0590}-\u{05FF}\u{FB1D}-\u{FB4F}]/u,t.splitGroup=/(\S*\u{05BE}(?=\S*\u{05BE})|\S*\u{05BE}(?!\S*\u{05BE})|\S*-(?!\S*-)|\S*-(?=\S*-)|\S*\s*)/u},525:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeTaamim=void 0;const i=s(131);t.removeTaamim=e=>{const t=new RegExp(i.taamim.source,"gu");let s="";const r=[];for(const[i,n]of[...e].entries())t.test(n)||(s+=n,r.push(i));return[s,r]}},977:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sequence=void 0;const i=s(205);t.sequence=e=>{const t=/\u{5B4}\u{5B7}/u,s=/\u{5B4}\u{5B8}/u;return t.test(e)?e=e.replace(t,"ִַ"):s.test(e)&&(e=e.replace(s,"ִָ")),e.split(/(?=[\u{05C0}\u{05D0}-\u{05F2}])/u).map((e=>new i.Cluster(e))).map((e=>e.chars))}},905:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.syllabify=void 0;const i=s(667),r=s(131),n=(e,t,s)=>{s=s||!1;const r=new i.Syllable(t,{isClosed:s});return e.push(r),[]},o=(e,t)=>{let s=!1,r=[];const u=[],l=e.length,a=n.bind(o,u);for(let n=0;n<l;n++){const o=e[n];if(o instanceof i.Syllable){u.push(o);continue}const A=o.hasSheva;if(s||!A)if(s&&A)r=a(r),r.unshift(o);else if(s&&o.hasShortVowel){if(o.hasMeteg){r=a(r),r.unshift(o);continue}const e=/\u{05BC}/u,n=r[0].text,l=/[שסצקנמלוי]/,A=/וַ/;if(e.test(n))r=a(r);else{if(t.sqnmlvy&&l.test(n)&&A.test(o.text)){r=a(r),u.push(new i.Syllable([o])),s=!1;continue}if(t.article&&/[ילמ]/.test(n)&&/הַ/.test(o.text)){r=a(r),u.push(new i.Syllable([o])),s=!1;continue}}r.unshift(o),r=a(r,!0),s=!1}else s&&o.hasLongVowel?t.longVowels?(r=a(r),u.push(o),s=!1):(r.unshift(o),r=a(r,!0),s=!1):s&&o.isShureq?t.wawShureq||o.hasMeteg||l-1!==n?(r=a(r),u.push(o),s=!1):(r.unshift(o),r=a(r,!0)):s&&o.isMater?(r=a(r),u.push(o),s=!1):!s||o.hasVowel?u.push(o):r.unshift(o);else s=!0,r.unshift(o)}return r.length&&a(r),u},u=(e,t=!0)=>{const s=e.length;let r=[];const o=[],l=n.bind(u,o);for(let n=0;n<s;n++){const s=e[n];if(s instanceof i.Syllable)o.push(s);else if(s.isMater){r.unshift(s);const o=e[n+1];if(!o&&t){const t=e.map((e=>e.text)).join("");throw new Error(`The cluster ${s.text} is a mater, but nothing precedes it in ${t}`)}if(o instanceof i.Syllable){const t=e.map((e=>e.text)).join("");throw new Error(`Syllable ${o.text} should not precede a Cluster with a Mater in ${t}`)}o&&r.unshift(o),r=l(r),n++}else if(!s.hasVowel&&/א/.test(s.text)){r.unshift(s);const u=e[n+1];if(!u&&t){const t=e.map((e=>e.text)).join("");throw new Error(`The cluster ${s.text} is a quiesced alef, but nothing precedes it in ${t}`)}if(u instanceof i.Syllable){o.push(s);continue}u&&r.unshift(u),r=l(r),n++}else o.push(s)}return o},l=(e,t=!0)=>{const s=e.length;let r=[];const o=[],u=n.bind(l,o);for(let n=0;n<s;n++){const s=e[n];if(s instanceof i.Syllable)o.push(s);else if(s.isShureq){r.unshift(s);const o=e[n+1];if(t&&o instanceof i.Syllable){const t=e.map((e=>e.text)).join("");throw new Error(`Syllable ${o.text} should not precede a Cluster with a Shureq in ${t}`)}o&&r.unshift(o),r=u(r),n++}else o.push(s)}return o},a=(e,t)=>({cluster:e,pos:t});t.syllabify=(e,t)=>{const s=e.filter((e=>!e.isNotHebrew)),n=e.map(a).filter((e=>e.cluster.isNotHebrew)),A=((e,t)=>{const s=((e,t=!0,s=r.vowels)=>{const n=e.length;let o=0;const u=[];let l=[],a=!1;const A=e[o];for(u.unshift(A),A.hasVowel?(a=!0,o++):A.isShureq?(o++,o<=n&&e[o]&&u.unshift(e[o]),a=!0,o++):o++;!a;){const t=e[o]||!1;if(!t)break;if(u.unshift(t),t.isShureq?(o++,e[o]&&u.unshift(e[o]),a=!0):a=!("hasVowel"in t)||t.hasVowel||t.isShureq,o++,o>n)break}const c=A.chars.filter((e=>4!==e.sequencePosition)).at(-1)?.text||"",E=s.test(c),h=!A.isShureq&&!A.isMater&&!E,S=new i.Syllable(u,{isClosed:h}),d=e.slice(o);return l=d.length?d:[],l.unshift(S),l})(e.reverse(),t.strict),n=o(s,t),a=l(n,t.strict);return u(a,t.strict).reverse()})(s,t).map((e=>e instanceof i.Syllable?e:new i.Syllable([e])));A.forEach(((e,t,s)=>((e,t,s)=>{if(t!==s.length-1&&!e.isClosed){const i=/\u{05BC}/u,r=!!e.clusters.filter((e=>e.hasShortVowel)).length,n=r||!!(e.clusters.filter((e=>!e.hasVowel)).length-1),o=s[t+1],u=i.test(o.clusters[0].text);e.isClosed=(r||n)&&u}})(e,t,s))),A.forEach((e=>(e=>{const t=e.prev;if(/\u{5B4}\u{05DD}/u.test(e.text)&&t&&/ל[\u{5B8}\u{5B7}]/u.test(t.text))return void(t.isAccented=!0);const s=!!e.clusters.filter((e=>e.hasTaamim)).length;e.isAccented=s})(e))),A[A.length-1].isFinal=!0;const[c,...E]=A;return c.siblings=E,n.length?((e,t)=>{const s=e.length;for(let r=0;r<t.length;r++){const n=t[r],o=[];if(0===n.pos){for(o.push(n.cluster);r+1<t.length&&t[r+1].pos===n.pos+1;)o.push(t[r+1].cluster),r++;const s=e[0];e[0]=new i.Syllable([...o,...s.clusters],{isClosed:s.isClosed,isAccented:s.isAccented,isFinal:s.isFinal})}else{const n=e[s-1];for(;r<t.length;)o.push(t[r].cluster),r++;e[s-1]=new i.Syllable([...n.clusters,...o],{isClosed:n.isClosed,isAccented:n.isAccented,isFinal:n.isFinal})}}return e})(A,n):A}},258:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.nameToCharMap=t.charToNameMap=void 0,t.charToNameMap={"ֱ":"HATAF_SEGOL","ֲ":"HATAF_PATAH","ֳ":"HATAF_QAMATS","ִ":"HIRIQ","ֵ":"TSERE","ֶ":"SEGOL","ַ":"PATAH","ָ":"QAMATS","ֹ":"HOLAM","ֺ":"HOLAM_HASER","ֻ":"QUBUTS","ׇ":"QAMATS_QATAN"},t.nameToCharMap={HATAF_SEGOL:"ֱ",HATAF_PATAH:"ֲ",HATAF_QAMATS:"ֳ",HIRIQ:"ִ",TSERE:"ֵ",SEGOL:"ֶ",PATAH:"ַ",QAMATS:"ָ",HOLAM:"ֹ",HOLAM_HASER:"ֺ",QUBUTS:"ֻ",QAMATS_QATAN:"ׇ"}},214:function(e,t,s){"use strict";var i,r=this&&this.__classPrivateFieldSet||function(e,t,s,i,r){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?r.call(e,s):r?r.value=s:t.set(e,s),s},n=this&&this.__classPrivateFieldGet||function(e,t,s,i){if("a"===s&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?i:"a"===s?i.call(e):i?i.value:t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.Word=t.makeClusters=void 0;const o=s(905),u=s(131),l=s(667),a=s(205),A=s(176);t.makeClusters=e=>{const t=/(?=[\u{05C3}\u{05C6}\u{05D0}-\u{05F2}\u{2000}-\u{206F}\u{2E00}-\u{2E7F}'!"#$%&()*+,-.\/:;<=>?@\[\]^_`\{|\}~])/u,s=new RegExp(`(?<vowel>[ַָ])(?<hiriq>ִ)(?<taamimMatch>${u.taamim.source}|ֽ)(?<mem>ם.*)$`,"u"),i=e.match(s);if(i?.groups){const s=i[0],{hiriq:r,vowel:n,taamimMatch:o,mem:u}=i.groups;return[...e.replace(s,`${n}${o}`).split(t),`${r}${u}`].map((e=>e===`${r}${u}`?new a.Cluster(e,!0):new a.Cluster(e)))}return e.split(t).map((e=>new a.Cluster(e)))},t.Word=class{constructor(e,t){i.set(this,void 0),r(this,i,e,"f");const s=e.match(/^\s*/g),n=e.match(/\s*$/g);this.whiteSpaceBefore=s?s[0]:null,this.whiteSpaceAfter=n?n[0]:null,this.sylOpts=t}get text(){return n(this,i,"f").trim()}get syllables(){return/\w/.test(this.text)||this.isDivineName||this.isNotHebrew?[new l.Syllable(this.clusters)]:(0,o.syllabify)(this.clusters,this.sylOpts)}get clusters(){const e=(0,t.makeClusters)(this.text),s=e[0],i=e.slice(1);return s.siblings=i,e}get chars(){return this.clusters.map((e=>e.chars)).flat()}get isDivineName(){return(0,A.isDivineName)(this.text)}get hasDivineName(){return(0,A.hasDivineName)(this.text)}get isNotHebrew(){return!this.clusters.map((e=>e.isNotHebrew)).includes(!1)}},i=new WeakMap},819:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.transliterateMap=void 0,t.transliterateMap={"ְ":"VOCAL_SHEVA","ֱ":"HATAF_SEGOL","ֲ":"HATAF_PATAH","ֳ":"HATAF_QAMATS","ִ":"HIRIQ","ֵ":"TSERE","ֶ":"SEGOL","ַ":"PATAH","ָ":"QAMATS","ֹ":"HOLAM","ֺ":"HOLAM","ֻ":"QUBUTS","ּ":"DAGESH","־":"MAQAF","׀":"PASEQ","׃":"SOF_PASUQ","ׇ":"QAMATS_QATAN",א:"ALEF",ב:"BET",ג:"GIMEL",ד:"DALET",ה:"HE",ו:"VAV",ז:"ZAYIN",ח:"HET",ט:"TET",י:"YOD",ך:"FINAL_KAF",כ:"KAF",ל:"LAMED",ם:"FINAL_MEM",מ:"MEM",ן:"FINAL_NUN",נ:"NUN",ס:"SAMEKH",ע:"AYIN",ף:"FINAL_PE",פ:"PE",ץ:"FINAL_TSADI",צ:"TSADI",ק:"QOF",ר:"RESH",ש:"SHIN",ת:"TAV"}},997:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.transliterate=t.Text=t.sequence=t.Schema=t.remove=void 0;const i=s(304);Object.defineProperty(t,"Text",{enumerable:!0,get:function(){return i.Text}});const r=s(961);Object.defineProperty(t,"transliterate",{enumerable:!0,get:function(){return r.transliterate}});const n=s(195);Object.defineProperty(t,"sequence",{enumerable:!0,get:function(){return n.sequence}});const o=s(38);Object.defineProperty(t,"remove",{enumerable:!0,get:function(){return o.remove}});const u=s(918);Object.defineProperty(t,"Schema",{enumerable:!0,get:function(){return u.Schema}})},38:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.remove=t.all=t.marks=t.punctuation=t.vowels=t.points=t.accents=void 0;const i=s(195),r={ETNAHTA:"֑",SEGOLTA:"֒",SHALSHELET:"֓",ZAQEF_QATAN:"֔",ZAQEF_GADOL:"֕",TIPEHA:"֖",REVIA:"֗",ZARQA:"֘",PASHTA:"֙",YETIV:"֚",TEVIR:"֛",GERESH:"֜",GERESH_MUQDAM:"֝",GERSHAYIM:"֞",QARNEY_PARA:"֟",TELISHA_GEDOLA:"֠",PAZER:"֡",ATNAH_HAFUKH:"֢",MUNAH:"֣",MAHAPAKH:"֤",MERKHA:"֥",MERKHA_KEFULA:"֦",DARGA:"֧",QADMA:"֨",TELISHA_QETANA:"֩",YERAH_BEN_YOMO:"֪",OLE:"֫",ILUY:"֬",DEHI:"֭",ZINOR:"֮",SHEVA:"ְ",HATAF_SEGOL:"ֱ",HATAF_PATAH:"ֲ",HATAF_QAMATS:"ֳ",HIRIQ:"ִ",TSERE:"ֵ",SEGOL:"ֶ",PATAH:"ַ",QAMATS:"ָ",HOLAM:"ֹ",QUBUTS:"ֻ",DAGESH:"ּ",METEG:"ֽ",RAFE:"ֿ",SHIN_DOT:"ׁ",SIN_DOT:"ׂ",QAMATS_QATAN:"ׇ",MAQAF:"־",PASEQ:"׀",SOF_PASUQ:"׃",NUN_HAFUKHA:"׆",PUNC_GERESH:"׳",PUNC_GERSHAYIM:"״",MASORA_CIRCLE:"֯",UPPER_DOT:"ׄ",LOWER_DOT:"ׅ"};t.accents={ETNAHTA:!0,SEGOLTA:!0,SHALSHELET:!0,ZAQEF_QATAN:!0,ZAQEF_GADOL:!0,TIPEHA:!0,REVIA:!0,ZARQA:!0,PASHTA:!0,YETIV:!0,TEVIR:!0,GERESH:!0,GERESH_MUQDAM:!0,GERSHAYIM:!0,QARNEY_PARA:!0,TELISHA_GEDOLA:!0,PAZER:!0,ATNAH_HAFUKH:!0,MUNAH:!0,MAHAPAKH:!0,MERKHA:!0,MERKHA_KEFULA:!0,DARGA:!0,QADMA:!0,TELISHA_QETANA:!0,YERAH_BEN_YOMO:!0,OLE:!0,ILUY:!0,DEHI:!0,ZINOR:!0},t.points={SHEVA:!0,HATAF_SEGOL:!0,HATAF_PATAH:!0,HATAF_QAMATS:!0,HIRIQ:!0,TSERE:!0,SEGOL:!0,PATAH:!0,QAMATS:!0,HOLAM:!0,QUBUTS:!0,DAGESH:!0,SHIN_DOT:!0,SIN_DOT:!0,METEG:!0,RAFE:!0,QAMATS_QATAN:!0},t.vowels={SHEVA:!0,HATAF_SEGOL:!0,HATAF_PATAH:!0,HATAF_QAMATS:!0,HIRIQ:!0,TSERE:!0,SEGOL:!0,PATAH:!0,QAMATS:!0,HOLAM:!0,QUBUTS:!0,DAGESH:!0,QAMATS_QATAN:!0},t.punctuation={MAQAF:!0,PASEQ:!0,SOF_PASUQ:!0,NUN_HAFUKHA:!0,PUNC_GERESH:!0,PUNC_GERSHAYIM:!0},t.marks={MASORA_CIRCLE:!0,UPPER_DOT:!0,LOWER_DOT:!0},t.all=Object.assign(Object.assign(Object.assign(Object.assign({},t.accents),t.points),t.punctuation),t.marks),t.remove=(e,s=Object.assign(Object.assign({},t.accents),{METEG:!0,RAFE:!0}))=>{const n=Object.keys(s).filter((e=>e in s&&s[e])),o=(0,i.sequence)(e);return n.reduce(((e,t)=>{var s;const i=null!==(s=r[t])&&void 0!==s?s:null;return i?e.replace(new RegExp(i,"gu"),""):e}),o)}},653:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.wordRules=t.sylRules=t.replaceAndTransliterate=t.mapChars=void 0;const i=s(205),r=s(667),n=s(214),o=s(131),u=s(819),l=/[\u{0590}-\u{05AF}\u{05BD}\u{05BF}]/gu;t.mapChars=e=>t=>[...t].map((t=>t in u.transliterateMap?e[u.transliterateMap[t]]:t)).join("");const a=(e,t,s)=>e.replace(t,s);t.replaceAndTransliterate=(e,s,i,r)=>[...a(e,s,i)].map((0,t.mapChars)(r)).join("");const A=(e,t,s)=>s?"boolean"==typeof t?e.repeat(2):e+t:e,c=(e,t)=>{const s=e[0],i=e[e.length-1],r=t.DIVINE_NAME_ELOHIM&&/\u{05B4}/u.test(e)?t.DIVINE_NAME_ELOHIM:t.DIVINE_NAME;return`${o.hebChars.test(s)?"":s}${r}${o.hebChars.test(i)?"":i}`},E=(e,s,i)=>{var r,n;if(!e.isAccented)return s.map((0,t.mapChars)(i)).join("");if(i.STRESS_MARKER&&e.vowel){const o=null!==(n=null===(r=i.STRESS_MARKER)||void 0===r?void 0:r.exclude)&&void 0!==n?n:"never";if("single"===o&&!e.prev&&!e.next)return s.map((0,t.mapChars)(i)).join("");if("final"===o&&!e.next)return s.map((0,t.mapChars)(i)).join("");const u=i.STRESS_MARKER.location,l=i.STRESS_MARKER.mark;if("before-syllable"===u)return`${l}${s.map((0,t.mapChars)(i)).join("")}`;if("after-syllable"===u)return`${s.map((0,t.mapChars)(i)).join("")}${l}`;const a=[i.PATAH,i.HATAF_PATAH,i.QAMATS,i.HATAF_QAMATS,i.SEGOL,i.HATAF_SEGOL,i.TSERE,i.HIRIQ,i.HOLAM,i.QAMATS_QATAN,i.QUBUTS,i.QAMATS_HE,i.SEGOL_HE,i.TSERE_HE,i.HIRIQ_YOD,i.TSERE_YOD,i.SEGOL_YOD,i.HOLAM_VAV,i.SHUREQ].sort(((e,t)=>t.length-e.length)),A=new RegExp(`${a.join("|")}`),c=s.map((0,t.mapChars)(i)).join(""),E=c.match(A);return"before-vowel"===u?(null==E?void 0:E.length)?c.replace(E[0],`${l}${E[0]}`):c:(null==E?void 0:E.length)?c.replace(E[0],`${E[0]}${l}`):c}return s.map((0,t.mapChars)(i)).join("")},h=(e,s,r,n)=>{var o,u;if(null===(o=n.ADDITIONAL_FEATURES)||void 0===o?void 0:o.length){const s=n.ADDITIONAL_FEATURES;for(const i of s){const s=new RegExp(i.HEBREW,"u");if("cluster"===i.FEATURE&&s.test(e)){const o=i.TRANSLITERATION,l=null===(u=i.PASS_THROUGH)||void 0===u||u;if("string"==typeof o)return(0,t.replaceAndTransliterate)(e,s,o,n);if(!l)return o(r,i.HEBREW,n);e=o(r,i.HEBREW,n)}}}if(e=r.hasShewa&&s.isClosed?e.replace(/\u{05B0}/u,""):e,/ה\u{05BC}$/mu.test(e))return a(e,/ה\u{05BC}/u,n.HE);if(s.isFinal&&!s.isClosed){const t=/\u{05D7}\u{05B7}$/mu;if(t.test(e))return a(e,t,"ַח");const s=/\u{05E2}\u{05B7}$/mu;if(s.test(e))return a(e,s,"ַע");const i=/\u{05D4}\u{05BC}\u{05B7}$/mu;if(i.test(e))return a(e,i,"ַהּ")}const l=r.prev instanceof i.Cluster&&r.prev.hasVowel,c=n.DAGESH_CHAZAQ,E=c&&l&&/\u{05BC}/u.test(e)||!1;if(n.BET_DAGESH&&/ב\u{05BC}/u.test(e))return a(e,/ב\u{05BC}/u,A(n.BET_DAGESH,c,E));if(n.GIMEL_DAGESH&&/ג\u{05BC}/u.test(e))return a(e,/ג\u{05BC}/u,A(n.GIMEL_DAGESH,c,E));if(n.DALET_DAGESH&&/ד\u{05BC}/u.test(e))return a(e,/ד\u{05BC}/u,A(n.DALET_DAGESH,c,E));if(n.KAF_DAGESH&&/כ\u{05BC}/u.test(e))return a(e,/כ\u{05BC}/u,A(n.KAF_DAGESH,c,E));if(n.KAF_DAGESH&&/ך\u{05BC}/u.test(e))return a(e,/ך\u{05BC}/u,A(n.KAF_DAGESH,c,E));if(n.PE_DAGESH&&/פ\u{05BC}/u.test(e))return a(e,/פ\u{05BC}/u,A(n.PE_DAGESH,c,E));if(n.TAV_DAGESH&&/ת\u{05BC}/u.test(e))return a(e,/ת\u{05BC}/u,A(n.TAV_DAGESH,c,E));if(/ש\u{05C1}/u.test(e))return a(e,/ש\u{05C1}/u,A(n.SHIN,c,E));if(/ש\u{05C2}/u.test(e))return a(e,/ש\u{05C2}/u,A(n.SIN,n.DAGESH_CHAZAQ,E));if(E){const t=r.chars[0].text,s=new RegExp(t+"ּ","u");return a(e,s,A(t,n.DAGESH_CHAZAQ,E))}return r.isShureq?e.replace("וּ",n.SHUREQ):e};t.sylRules=(e,s)=>{var n,o;const u=e.text.replace(l,"");if(null===(n=s.ADDITIONAL_FEATURES)||void 0===n?void 0:n.length){const n=s.ADDITIONAL_FEATURES;for(const l of n){const n=new RegExp(l.HEBREW,"u");if("syllable"===l.FEATURE&&n.test(u)){const a=l.TRANSLITERATION,A=null===(o=l.PASS_THROUGH)||void 0===o||o;if("string"==typeof a)return(0,t.replaceAndTransliterate)(u,n,a,s);if(!A)return a(e,l.HEBREW,s);e=new r.Syllable([new i.Cluster(a(e,l.HEBREW,s))],{isClosed:e.isClosed,isAccented:e.isAccented,isFinal:e.isFinal})}}}const A=/\u{05B8}\u{05D9}\u{05D5}/u;if(e.isFinal&&A.test(u)){const t=a(u,A,s.MS_SUFX);return E(e,[...t],s)}if(e.clusters.map((e=>e.isMater)).includes(!0)){const t=((e,t)=>{const s=e.clusters.filter((e=>e.isMater))[0],r=s.prev instanceof i.Cluster?s.prev:null,n=s.text,o=((null==r?void 0:r.text)||"").replace(l,"");let u=e.clusters.filter((e=>!e.isMater)).map((s=>h(s.text.replace(l,""),e,s,t))).join("");if(u=s.text.includes("־")?u.concat("־"):u,/י/.test(n)){if(/\u{05B4}/u.test(o))return a(u,/\u{05B4}/u,t.HIRIQ_YOD);if(/\u{05B5}/u.test(o))return a(u,/\u{05B5}/u,t.TSERE_YOD);if(/\u{05B6}/u.test(o))return a(u,/\u{05B6}/u,t.SEGOL_YOD)}if(/ו/u.test(n)&&/\u{05B9}/u.test(o))return a(u,/\u{05B9}/u,t.HOLAM_VAV);if(/ה/.test(n)){if(/\u{05B8}/u.test(o))return a(u,/\u{05B8}/u,t.QAMATS_HE);if(/\u{05B6}/u.test(o))return a(u,/\u{05B6}/u,t.SEGOL_HE);if(/\u{05B5}/u.test(o))return a(u,/\u{05B5}/u,t.SEGOL_HE)}return n})(e,s);return E(e,[...t],s)}const c=e.clusters.map((t=>{const i=t.text.replace(l,"");return h(i,e,t,s)}));return E(e,c,s)},t.wordRules=(e,s)=>{var i,r;if(e.isDivineName)return c(e.text,s);if(e.hasDivineName)return`${(0,t.sylRules)(e.syllables[0],s)}-${c(e.text,s)}`;if(e.isNotHebrew)return e.text;if(null===(i=s.ADDITIONAL_FEATURES)||void 0===i?void 0:i.length){const i=s.ADDITIONAL_FEATURES;for(const o of i){const i=new RegExp(o.HEBREW,"u"),u=e.text.replace(l,"");if("word"===o.FEATURE&&i.test(u)){const l=o.TRANSLITERATION,a=null===(r=o.PASS_THROUGH)||void 0===r||r;return"string"==typeof l?(0,t.replaceAndTransliterate)(u,i,l,s):a?new n.Word(l(e,o.HEBREW,s),s):l(e,o.HEBREW,s)}}return e}return e}},918:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SBL=t.Schema=void 0;class s{constructor(e){this.VOCAL_SHEVA=e.VOCAL_SHEVA,this.HATAF_SEGOL=e.HATAF_SEGOL,this.HATAF_PATAH=e.HATAF_PATAH,this.HATAF_QAMATS=e.HATAF_QAMATS,this.HIRIQ=e.HIRIQ,this.TSERE=e.TSERE,this.SEGOL=e.SEGOL,this.PATAH=e.PATAH,this.QAMATS=e.QAMATS,this.HOLAM=e.HOLAM,this.HOLAM_HASER=e.HOLAM_HASER,this.QUBUTS=e.QUBUTS,this.DAGESH=e.DAGESH,this.DAGESH_CHAZAQ=e.DAGESH_CHAZAQ,this.MAQAF=e.MAQAF,this.PASEQ=e.PASEQ,this.SOF_PASUQ=e.SOF_PASUQ,this.QAMATS_QATAN=e.QAMATS_QATAN,this.FURTIVE_PATAH=e.FURTIVE_PATAH,this.HIRIQ_YOD=e.HIRIQ_YOD,this.TSERE_YOD=e.TSERE_YOD,this.SEGOL_YOD=e.SEGOL_YOD,this.SHUREQ=e.SHUREQ,this.HOLAM_VAV=e.HOLAM_VAV,this.QAMATS_HE=e.QAMATS_HE,this.SEGOL_HE=e.SEGOL_HE,this.TSERE_HE=e.TSERE_HE,this.MS_SUFX=e.MS_SUFX,this.ALEF=e.ALEF,this.BET_DAGESH=e.BET_DAGESH,this.BET=e.BET,this.GIMEL=e.GIMEL,this.GIMEL_DAGESH=e.GIMEL_DAGESH,this.DALET=e.DALET,this.DALET_DAGESH=e.DALET_DAGESH,this.HE=e.HE,this.VAV=e.VAV,this.ZAYIN=e.ZAYIN,this.HET=e.HET,this.TET=e.TET,this.YOD=e.YOD,this.FINAL_KAF=e.FINAL_KAF,this.KAF=e.KAF,this.KAF_DAGESH=e.KAF_DAGESH,this.LAMED=e.LAMED,this.FINAL_MEM=e.FINAL_MEM,this.MEM=e.MEM,this.FINAL_NUN=e.FINAL_NUN,this.NUN=e.NUN,this.SAMEKH=e.SAMEKH,this.AYIN=e.AYIN,this.FINAL_PE=e.FINAL_PE,this.PE=e.PE,this.PE_DAGESH=e.PE_DAGESH,this.FINAL_TSADI=e.FINAL_TSADI,this.TSADI=e.TSADI,this.QOF=e.QOF,this.RESH=e.RESH,this.SHIN=e.SHIN,this.SIN=e.SIN,this.TAV=e.TAV,this.TAV_DAGESH=e.TAV_DAGESH,this.DIVINE_NAME=e.DIVINE_NAME,this.DIVINE_NAME_ELOHIM=e.DIVINE_NAME_ELOHIM,this.SYLLABLE_SEPARATOR=e.SYLLABLE_SEPARATOR,this.ADDITIONAL_FEATURES=e.ADDITIONAL_FEATURES,this.STRESS_MARKER=e.STRESS_MARKER,this.longVowels=e.longVowels,this.qametsQatan=e.qametsQatan,this.sqnmlvy=e.sqnmlvy,this.wawShureq=e.wawShureq,this.article=e.article,this.allowNoNiqqud=e.allowNoNiqqud,this.strict=e.strict,this.holemHaser=e.holemHaser}}t.Schema=s,t.SBL=class extends s{constructor(e){var t,s,i,r,n,o,u,l,a,A,c,E,h,S,d,T,f,_,H,v,p,w,m,M,O,N,I,R,L,D,F,g,Q,B,P,G,C,b,y,x,V,U,q,j,$,Y,K,W,Z,k,z,X,J,ee,te,se,ie,re,ne,oe,ue,le,ae,Ae,ce,Ee,he,Se,de,Te,fe,_e,He,ve;super({VOCAL_SHEVA:null!==(t=e.VOCAL_SHEVA)&&void 0!==t?t:"ǝ",HATAF_SEGOL:null!==(s=e.HATAF_SEGOL)&&void 0!==s?s:"ĕ",HATAF_PATAH:null!==(i=e.HATAF_PATAH)&&void 0!==i?i:"ă",HATAF_QAMATS:null!==(r=e.HATAF_QAMATS)&&void 0!==r?r:"ŏ",HIRIQ:null!==(n=e.HIRIQ)&&void 0!==n?n:"i",TSERE:null!==(o=e.TSERE)&&void 0!==o?o:"ē",SEGOL:null!==(u=e.SEGOL)&&void 0!==u?u:"e",PATAH:null!==(l=e.PATAH)&&void 0!==l?l:"a",QAMATS:null!==(a=e.QAMATS)&&void 0!==a?a:"ā",HOLAM:null!==(A=e.HOLAM)&&void 0!==A?A:"ō",HOLAM_HASER:null!==(c=e.HOLAM_HASER)&&void 0!==c?c:"ō",QUBUTS:null!==(E=e.QUBUTS)&&void 0!==E?E:"ū",DAGESH:null!==(h=e.DAGESH)&&void 0!==h?h:"",DAGESH_CHAZAQ:null===(S=e.DAGESH_CHAZAQ)||void 0===S||S,MAQAF:null!==(d=e.MAQAF)&&void 0!==d?d:"-",PASEQ:null!==(T=e.PASEQ)&&void 0!==T?T:"",SOF_PASUQ:null!==(f=e.SOF_PASUQ)&&void 0!==f?f:"",QAMATS_QATAN:null!==(_=e.QAMATS_QATAN)&&void 0!==_?_:"o",FURTIVE_PATAH:null!==(H=e.FURTIVE_PATAH)&&void 0!==H?H:"a",HIRIQ_YOD:null!==(v=e.HIRIQ_YOD)&&void 0!==v?v:"î",TSERE_YOD:null!==(p=e.TSERE_YOD)&&void 0!==p?p:"ê",SEGOL_YOD:null!==(w=e.SEGOL_YOD)&&void 0!==w?w:"ê",SHUREQ:null!==(m=e.SHUREQ)&&void 0!==m?m:"û",HOLAM_VAV:null!==(M=e.HOLAM_VAV)&&void 0!==M?M:"ô",QAMATS_HE:null!==(O=e.QAMATS_HE)&&void 0!==O?O:"â",SEGOL_HE:null!==(N=e.SEGOL_HE)&&void 0!==N?N:"ê",TSERE_HE:null!==(I=e.TSERE_HE)&&void 0!==I?I:"ê",MS_SUFX:null!==(R=e.MS_SUFX)&&void 0!==R?R:"āyw",ALEF:null!==(L=e.ALEF)&&void 0!==L?L:"ʾ",BET:null!==(D=e.BET)&&void 0!==D?D:"b",BET_DAGESH:null!==(F=e.BET_DAGESH)&&void 0!==F?F:void 0,GIMEL:null!==(g=e.GIMEL)&&void 0!==g?g:"g",GIMEL_DAGESH:null!==(Q=e.GIMEL_DAGESH)&&void 0!==Q?Q:void 0,DALET:null!==(B=e.DALET)&&void 0!==B?B:"d",DALET_DAGESH:null!==(P=e.DALET_DAGESH)&&void 0!==P?P:void 0,HE:null!==(G=e.HE)&&void 0!==G?G:"h",VAV:null!==(C=e.VAV)&&void 0!==C?C:"w",ZAYIN:null!==(b=e.ZAYIN)&&void 0!==b?b:"z",HET:null!==(y=e.HET)&&void 0!==y?y:"ḥ",TET:null!==(x=e.TET)&&void 0!==x?x:"ṭ",YOD:null!==(V=e.YOD)&&void 0!==V?V:"y",FINAL_KAF:null!==(U=e.FINAL_KAF)&&void 0!==U?U:"k",KAF:null!==(q=e.KAF)&&void 0!==q?q:"k",KAF_DAGESH:null!==(j=e.KAF_DAGESH)&&void 0!==j?j:void 0,LAMED:null!==($=e.LAMED)&&void 0!==$?$:"l",FINAL_MEM:null!==(Y=e.FINAL_MEM)&&void 0!==Y?Y:"m",MEM:null!==(K=e.MEM)&&void 0!==K?K:"m",FINAL_NUN:null!==(W=e.FINAL_NUN)&&void 0!==W?W:"n",NUN:null!==(Z=e.NUN)&&void 0!==Z?Z:"n",SAMEKH:null!==(k=e.SAMEKH)&&void 0!==k?k:"s",AYIN:null!==(z=e.AYIN)&&void 0!==z?z:"ʿ",FINAL_PE:null!==(X=e.FINAL_PE)&&void 0!==X?X:"p",PE:null!==(J=e.PE)&&void 0!==J?J:"p",PE_DAGESH:null!==(ee=e.PE_DAGESH)&&void 0!==ee?ee:void 0,FINAL_TSADI:null!==(te=e.FINAL_TSADI)&&void 0!==te?te:"ṣ",TSADI:null!==(se=e.TSADI)&&void 0!==se?se:"ṣ",QOF:null!==(ie=e.QOF)&&void 0!==ie?ie:"q",RESH:null!==(re=e.RESH)&&void 0!==re?re:"r",SHIN:null!==(ne=e.SHIN)&&void 0!==ne?ne:"š",SIN:null!==(oe=e.SIN)&&void 0!==oe?oe:"ś",TAV:null!==(ue=e.TAV)&&void 0!==ue?ue:"t",TAV_DAGESH:null!==(le=e.TAV_DAGESH)&&void 0!==le?le:void 0,DIVINE_NAME:null!==(ae=e.DIVINE_NAME)&&void 0!==ae?ae:"yhwh",DIVINE_NAME_ELOHIM:null!==(Ae=e.DIVINE_NAME_ELOHIM)&&void 0!==Ae?Ae:void 0,SYLLABLE_SEPARATOR:null!==(ce=e.SYLLABLE_SEPARATOR)&&void 0!==ce?ce:void 0,ADDITIONAL_FEATURES:null!==(Ee=e.ADDITIONAL_FEATURES)&&void 0!==Ee?Ee:void 0,STRESS_MARKER:null!==(he=e.STRESS_MARKER)&&void 0!==he?he:void 0,longVowels:null===(Se=e.longVowels)||void 0===Se||Se,qametsQatan:null===(de=e.qametsQatan)||void 0===de||de,sqnmlvy:null===(Te=e.sqnmlvy)||void 0===Te||Te,wawShureq:null===(fe=e.wawShureq)||void 0===fe||fe,article:null===(_e=e.article)||void 0===_e||_e,allowNoNiqqud:null===(He=e.allowNoNiqqud)||void 0===He||He,strict:null!==(ve=e.strict)&&void 0!==ve&&ve,holemHaser:e.holemHaser||"remove"})}}},195:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sequence=t.vowels=void 0;const i=s(304);t.vowels=/[\u{05B0}-\u{05BC}\u{05C7}]/u,t.sequence=(e,s=!1)=>t.vowels.test(e)?new i.Text(e,{qametsQatan:s}).text:e},961:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.transliterate=void 0;const i=s(653),r=s(918),n=s(304),o=s(214);t.transliterate=(e,t)=>{const s=t instanceof r.Schema?t:new r.SBL(null!=t?t:{}),u=e instanceof n.Text?e:new n.Text(e,(e=>{const t={};return"longVowels"in e&&(t.longVowels=e.longVowels),"qametsQatan"in e&&(t.qametsQatan=e.qametsQatan),"sqnmlvy"in e&&(t.sqnmlvy=e.sqnmlvy),"wawShureq"in e&&(t.wawShureq=e.wawShureq),"article"in e&&(t.article=e.article),"allowNoNiqqud"in e&&(t.allowNoNiqqud=e.allowNoNiqqud),"strict"in e&&(t.strict=e.strict),t})(null!=s?s:{}));return u.words.map((e=>{var t,r;let n=(0,i.wordRules)(e,s);return n instanceof o.Word&&(n=n.syllables.map((e=>(0,i.sylRules)(e,s))).join(null!==(t=s.SYLLABLE_SEPARATOR)&&void 0!==t?t:"")),`${n}${null!==(r=e.whiteSpaceAfter)&&void 0!==r?r:""}`})).join("")}}},s={};e=function e(i){var r=s[i];if(void 0!==r)return r.exports;var n=s[i]={exports:{}};return t[i].call(n.exports,n,n.exports,e),n.exports}(997).transliterate(process.argv[2]),console.log(e)})();