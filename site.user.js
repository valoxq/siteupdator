// ==UserScript==
// @name         Vision Missions Auto Site ENC
// @namespace    https://www.facebook.com/sapienti19/
// @version      1.0
// @description  موقع لإنهاء مهمات المزرعة بالريكويست
// @author       Vision
// @match        https://vision-tester.neocities.org/
// @match        *.centurygames.com/*
// @updateURL    https://s.id/VSNxSite
// @downloadURL  https://s.id/VSNxSite
// @icon         https://iili.io/2OGyVu2.png
// @grant        unsafeWindow
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-end
// ==/UserScript==

function _0x1916(_0x2abf6c,_0x2d8cfa){const _0x4bcc27=_0x4bcc();return _0x1916=function(_0x191670,_0x3d009a){_0x191670=_0x191670-0x181;let _0x37f62d=_0x4bcc27[_0x191670];return _0x37f62d;},_0x1916(_0x2abf6c,_0x2d8cfa);}function _0x4bcc(){const _0x45f853=['Happy','overlay-container','156.221.122.74','https://od.lk/s/MTNfMzE4MTIxMzhf/Press.mp3','https://api.ipify.org?format=json','مهمة\x20الاختلافات<br>الشروط\x20:\x2030\x20طاقة\x20-\x20عدم\x20لعب\x20المهمة','Family','غير\x20مسموح\x20لك\x20باستخدام\x20الموقع......\x20جارى\x20الإغلاق','1596504hpIppq','https://farm-us.centurygames.com/ar/?signed_request=','1.1.1.1','width:\x20100px;\x20height:\x20100px;\x20border-Radius:\x2020%;\x20margin-bottom:\x2030px;\x20display:\x20none;','text','By:\x20Ahmed\x20Khalil','runIndex','body','display:\x20block;','icon','overlay','image/png','textContent','getElementById','link','signature','https://od.lk/s/MTNfMzE4MTIxMzdf/Off2.mp3','container','toggle-container','38346ceNwYR','1655507JICWkm','تم\x20إنهاء\x20مهمة\x20الاختلافات\x20للعضو<br>','check','inputCodeValue','https://farm-th.centurygames.com/en/?signed_request=','placeholder','https://vision-tester.neocities.org/','href','display:\x20none;\x20width:\x20155px;','input-container','Activity/FindDifferences','spinner','rel','1878660JLMfck','gameEnd','style','farm-fr.centurygames.com','appendChild','location','trim','font-size:\x2014px;\x20width:\x20auto;\x20padding:\x2012px;\x20margin:\x20-25px\x200px\x2030px\x200px;','heading','innerHTML','gameStart','أدخل\x20رقم\x20الجائزة','\x0a\x20\x20\x20\x20\x20\x20\x20\x20body\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20Arial,\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#121212;\x20/*\x20Default\x20dark\x20background\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#ffffff;\x20/*\x20Default\x20dark\x20text\x20color\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100vh;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20background-color\x200.3s,\x20color\x200.3s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.spinner\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x208px\x20solid\x20#f3f3f3;\x20/*\x20Light\x20grey\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-top:\x208px\x20solid\x20#3700B3;\x20/*\x20Blue\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2050px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2050px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20spin\x201s\x20linear\x20infinite;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2020px;\x20/*\x20Center\x20the\x20spinner\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20spin\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x20transform:\x20rotate(0deg);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x20transform:\x20rotate(360deg);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#overlay\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#121212;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x20/*\x20Initially\x20hidden\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x209999;\x20/*\x20Ensure\x20it\x20covers\x20everything\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x20/*\x20Center\x20content\x20horizontally\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x20/*\x20Center\x20content\x20vertically\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.overlay-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x20/*\x20Enable\x20flexbox\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x20/*\x20Arrange\x20children\x20in\x20a\x20column\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x20/*\x20Fixed\x20position\x20relative\x20to\x20the\x20viewport\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x2035%;\x20/*\x20Position\x20from\x20the\x20top\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x2050%;\x20/*\x20Position\x20from\x20the\x20left\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#1e1e1e;\x20/*\x20Dark\x20background\x20for\x20overlay\x20container\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x2010px\x20rgba(0,\x200,\x200,\x200.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#ffffff;\x20/*\x20Text\x20color\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2024px;\x20/*\x20Font\x20size\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x20/*\x20Center\x20text\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x20/*\x20Center\x20items\x20in\x20flex\x20container\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20auto;\x20/*\x20Allow\x20the\x20width\x20to\x20adjust\x20to\x20the\x20content\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translate(-50%,\x20-50%);\x20/*\x20Center\x20the\x20element\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#1e1e1e;\x20/*\x20Default\x20dark\x20container\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2040px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x2010px\x20rgba(0,\x200,\x200,\x200.1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20600px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20background-color\x200.3s,\x20color\x200.3s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(0.75)\x20translateY(-30%);\x20/*\x20Scale\x20down\x20to\x2075%\x20and\x20move\x20up\x20by\x2015%\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x20/*\x20Arrange\x20children\x20in\x20a\x20column\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x20/*\x20Center\x20children\x20horizontally\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.signature\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2016px;\x0a\x09\x09\x09font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#f0f0f0;\x0a\x09\x09\x09background-color:\x20#333;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2010px;\x0a\x09\x09\x09border:\x202px\x20solid\x20#555;\x20/*\x20Dark\x20border\x20*/\x0a\x09\x09\x09border-radius:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px;\x20/*\x20Add\x20padding\x20for\x20better\x20appearance\x20*/\x0a\x09\x09\x09display:\x20inline-block;\x20/*\x20Prevent\x20stretching\x20*/\x0a\x09\x09\x09width:\x20fit-content;\x20/*\x20Allow\x20the\x20width\x20to\x20adjust\x20to\x20the\x20content\x20*/\x0a\x09\x09\x09box-shadow:\x202px\x202px\x205px\x20rgba(0,\x200,\x200,\x200.5);\x20/*\x20Drop\x20shadow\x20*/\x0a\x09\x09\x09transform:\x20translateY(-40%);\x20/*\x20Scale\x20down\x20to\x2075%\x20and\x20move\x20up\x20by\x2015%\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20h1\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2036px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#333;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#f0f0f0;\x20/*\x20Default\x20dark\x20heading\x20color\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x202px\x20solid\x20#555;\x20/*\x20Dark\x20border\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2015px;\x20/*\x20Add\x20padding\x20for\x20better\x20appearance\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2020px;\x20/*\x20Space\x20below\x20the\x20heading\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2030px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20color\x200.3s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-block;\x20/*\x20Prevent\x20stretching\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x202px\x202px\x205px\x20rgba(0,\x200,\x200,\x200.5);\x20/*\x20Drop\x20shadow\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.input-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x20/*\x20Use\x20flexbox\x20to\x20align\x20inputs\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20space-between;\x20/*\x20Space\x20between\x20inputs\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20input\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200px\x205px\x2030px\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#555;\x20/*\x20Dark\x20border\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20background-color\x200.3s,\x20color\x200.3s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#333;\x20/*\x20Dark\x20input\x20background\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#f0f0f0;\x20/*\x20Dark\x20input\x20text\x20color\x20*/\x0a\x09\x09\x09transform:\x20translateY(-15%);\x20/*\x20Scale\x20down\x20to\x2075%\x20and\x20move\x20up\x20by\x2015%\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20input::placeholder\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#f0f0f0;\x20/*\x20Red\x20color\x20for\x20the\x20placeholder\x20text\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x20.7;\x20/*\x20Ensures\x20the\x20color\x20is\x20fully\x20opaque\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.button-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x20/*\x20Use\x20flexbox\x20to\x20align\x20buttons\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20space-between;\x20/*\x20Space\x20between\x20buttons\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20button\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex:\x201;\x20/*\x20Allow\x20buttons\x20to\x20grow\x20equally\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200\x208px;\x20/*\x20Add\x20some\x20margin\x20between\x20buttons\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2020px\x2060px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#3700B3;\x20/*\x20Dark\x20button\x20background\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20background-color\x200.3s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20button:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#6200EE;\x20/*\x20Dark\x20button\x20hover\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.toggle-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2030px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.toggle\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2080px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2040px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#6200EE;\x20/*\x20Dark\x20toggle\x20background\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2030px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20background-color\x200.3s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.toggle::before\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20content:\x20\x27\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2032px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2032px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20black;\x20/*\x20Dark\x20circle\x20color\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20transform\x200.3s,\x20background-color\x200.3s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20body.light\x20.toggle::before\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20white;\x20/*\x20Light\x20circle\x20color\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(40px);\x20/*\x20Move\x20circle\x20to\x20the\x20right\x20in\x20light\x20mode\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20body.light\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#f0f0f0;\x20/*\x20Light\x20background\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#333;\x20/*\x20Light\x20text\x20color\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20body.light\x20.container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#fff;\x20/*\x20Light\x20container\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#333;\x20/*\x20Light\x20text\x20color\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x09\x09body.light\x20.signature\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#fff;\x20/*\x20Light\x20toggle\x20background\x20*/\x0a\x09\x09\x09color:\x20#333;\x20/*\x20Light\x20text\x20color\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x202px\x20solid\x20#ddd;\x20/*\x20Dark\x20border\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x09\x09body.light\x20.toggle\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#0084ff;\x20/*\x20Light\x20toggle\x20background\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20body.light\x20h1\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#fff;\x20/*\x20Light\x20toggle\x20background\x20*/\x0a\x09\x09\x09color:\x20#333;\x20/*\x20Light\x20text\x20color\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x202px\x20solid\x20#ddd;\x20/*\x20Dark\x20border\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20body.light\x20input\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#fff;\x20/*\x20Light\x20input\x20background\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#333;\x20/*\x20Light\x20input\x20text\x20color\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x202px\x20solid\x20#ddd;\x20/*\x20Light\x20border\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20body.light\x20input::placeholder\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#000000;\x20/*\x20Red\x20color\x20for\x20the\x20placeholder\x20text\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x20.7;\x20/*\x20Ensures\x20the\x20color\x20is\x20fully\x20opaque\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20body.light\x20button\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#0068e9;\x20/*\x20Light\x20button\x20background\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20body.light\x20button:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#0084ff;\x20/*\x20Light\x20button\x20hover\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20','farm-us.centurygames.com','classList','json','div','أدخل\x20ريكويست\x20صالح\x20من\x20فضلك','length','dark','cssText','head','https://farm-fr.centurygames.com/en/?signed_request=','signedRequest','then','toggle','src','value','host','Activity/FindDifferences.1','أدخل\x20ريكويست\x20صالح','Super','play','button','NetUtils','farm-th.centurygames.com','76xvdGBb','img','العودة','request','11544YjSBHa','16995ZMpYqF','جارى\x20إنهاء\x20مهمة\x20الاختلافات<br>يرجى\x20الانتظار','type','currentUserInfo','input','light','createElement','onclick','https://iili.io/2OGyVu2.png','className','useGift','724767ldpXBG'];_0x4bcc=function(){return _0x45f853;};return _0x4bcc();}(function(_0x44aad6,_0x44f06a){const _0x1ff9c4=_0x1916,_0x3baf0d=_0x44aad6();while(!![]){try{const _0x3eca4f=-parseInt(_0x1ff9c4(0x1a5))/0x1+parseInt(_0x1ff9c4(0x1cd))/0x2+parseInt(_0x1ff9c4(0x1b1))/0x3+-parseInt(_0x1ff9c4(0x1a1))/0x4*(-parseInt(_0x1ff9c4(0x1a6))/0x5)+parseInt(_0x1ff9c4(0x1db))/0x6+-parseInt(_0x1ff9c4(0x1ce))/0x7+-parseInt(_0x1ff9c4(0x1ba))/0x8;if(_0x3eca4f===_0x44f06a)break;else _0x3baf0d['push'](_0x3baf0d['shift']());}catch(_0x4d0410){_0x3baf0d['push'](_0x3baf0d['shift']());}}}(_0x4bcc,0x2e97d),(async function(){const _0x4ab989=_0x1916;let _0x2d31f1=GM_getValue('check',0x0);GM_setValue('check',0x0);var _0x15cbec=window['location'][_0x4ab989(0x199)],_0x5cdb6f=window[_0x4ab989(0x182)]['href'];(_0x15cbec===_0x4ab989(0x18a)||_0x15cbec===_0x4ab989(0x1a0)||_0x15cbec==='farm-fr.centurygames.com')&&fetch(_0x4ab989(0x1b6))['then'](_0x2027fa=>{const _0x56e574=_0x4ab989;return _0x2027fa[_0x56e574(0x18c)]();})[_0x4ab989(0x195)](_0x18b293=>{const _0x264a6e=_0x4ab989;let _0x39a5bb=_0x18b293['ip'];const _0x34c60f=[_0x264a6e(0x1bc),'1.5.6.1',_0x264a6e(0x1b4)];if(!_0x34c60f['includes'](_0x39a5bb)){GM_setValue(_0x264a6e(0x1c0),0x0),GM_setValue('inputCodeValue',''),alert(_0x264a6e(0x1b9)),window['location'][_0x264a6e(0x1d5)]='https://vision-tester.neocities.org/';return;}});if(_0x15cbec!==_0x4ab989(0x18a)&&_0x15cbec!==_0x4ab989(0x1a0)&&_0x15cbec!==_0x4ab989(0x1de)&&_0x15cbec!=='vision-tester.neocities.org')return;if(_0x15cbec==='farm-us.centurygames.com'||_0x15cbec==='farm-th.centurygames.com'||_0x15cbec===_0x4ab989(0x1de)){if(_0x2d31f1===0x0){GM_setValue('check',0x0);return;}}if(_0x15cbec===_0x4ab989(0x18a)||_0x15cbec===_0x4ab989(0x1a0)||_0x15cbec==='farm-fr.centurygames.com'){if(_0x5cdb6f[_0x4ab989(0x18f)]<0x1f4)return;}if(_0x15cbec===_0x4ab989(0x18a)||_0x15cbec===_0x4ab989(0x1a0)||_0x15cbec===_0x4ab989(0x1de)){document['title']='VISION';const _0x25819e=document['createElement'](_0x4ab989(0x1c8));_0x25819e[_0x4ab989(0x1da)]=_0x4ab989(0x1c3),_0x25819e[_0x4ab989(0x1a8)]=_0x4ab989(0x1c5),_0x25819e[_0x4ab989(0x1d5)]=_0x4ab989(0x1ae),document[_0x4ab989(0x192)][_0x4ab989(0x181)](_0x25819e);}const _0x1d2db2=document[_0x4ab989(0x1ac)](_0x4ab989(0x1dd));_0x1d2db2[_0x4ab989(0x1c6)]=_0x4ab989(0x189),document[_0x4ab989(0x192)][_0x4ab989(0x181)](_0x1d2db2);const _0x3fad14=document[_0x4ab989(0x1ac)](_0x4ab989(0x18d));_0x3fad14['id']=_0x4ab989(0x1c4),document[_0x4ab989(0x1c1)][_0x4ab989(0x181)](_0x3fad14);const _0x699329=document['createElement']('div');_0x699329[_0x4ab989(0x1af)]=_0x4ab989(0x1b3),_0x3fad14['appendChild'](_0x699329);const _0x5ed9fb=document[_0x4ab989(0x1ac)]('div');_0x5ed9fb[_0x4ab989(0x1af)]=_0x4ab989(0x1c9),_0x5ed9fb[_0x4ab989(0x1c6)]=_0x4ab989(0x1bf),_0x5ed9fb[_0x4ab989(0x1dd)][_0x4ab989(0x191)]='margin:\x2010px\x200px\x20-30px\x200px;',_0x699329['appendChild'](_0x5ed9fb);const _0x36e5cd=document[_0x4ab989(0x1ac)]('h1');_0x36e5cd[_0x4ab989(0x186)]=_0x4ab989(0x1a7),_0x699329['appendChild'](_0x36e5cd);if(_0x15cbec===_0x4ab989(0x18a)||_0x15cbec===_0x4ab989(0x1a0)||_0x15cbec===_0x4ab989(0x1de)){var _0x18d5c7=unsafeWindow[_0x4ab989(0x1a9)]['picture'],_0x18d1b0=document['createElement'](_0x4ab989(0x1a2));_0x18d1b0[_0x4ab989(0x197)]=_0x18d5c7,_0x18d1b0['alt']='',_0x18d1b0[_0x4ab989(0x1dd)][_0x4ab989(0x191)]=_0x4ab989(0x1bd),_0x699329[_0x4ab989(0x181)](_0x18d1b0);}const _0x12b623=document['createElement'](_0x4ab989(0x18d));_0x12b623['className']=_0x4ab989(0x1d9),_0x699329[_0x4ab989(0x181)](_0x12b623);const _0x528b97=document[_0x4ab989(0x1ac)]('div');_0x528b97[_0x4ab989(0x1af)]='button-container',_0x699329['appendChild'](_0x528b97);const _0x2759b3=document[_0x4ab989(0x1ac)]('button');_0x2759b3[_0x4ab989(0x1c6)]=_0x4ab989(0x1a3),_0x2759b3[_0x4ab989(0x1ad)]=function(){const _0x79bdb9=_0x4ab989;window[_0x79bdb9(0x182)][_0x79bdb9(0x1d5)]=_0x79bdb9(0x1d4);},_0x699329[_0x4ab989(0x181)](_0x2759b3);(_0x15cbec===_0x4ab989(0x18a)||_0x15cbec===_0x4ab989(0x1a0)||_0x15cbec===_0x4ab989(0x1de))&&(_0x5cdb6f[_0x4ab989(0x18f)]>0x1c2&&(_0x3fad14[_0x4ab989(0x1dd)][_0x4ab989(0x191)]=_0x4ab989(0x1c2)));const _0x3572f2=document[_0x4ab989(0x1ac)](_0x4ab989(0x18d));_0x3572f2[_0x4ab989(0x1af)]=_0x4ab989(0x1cb),document[_0x4ab989(0x1c1)]['appendChild'](_0x3572f2);const _0x188262=document[_0x4ab989(0x1ac)](_0x4ab989(0x19e));_0x188262[_0x4ab989(0x1c6)]='Update',_0x188262['style']['cssText']=_0x4ab989(0x184),_0x188262[_0x4ab989(0x1ad)]=function(){const _0x3fa5d5=_0x4ab989;_0x331a2b[_0x3fa5d5(0x19d)](),window[_0x3fa5d5(0x182)][_0x3fa5d5(0x1d5)]='https://s.id/VSNxSite';},_0x3572f2['appendChild'](_0x188262);const _0x398b39=document[_0x4ab989(0x1ac)](_0x4ab989(0x18d));_0x398b39[_0x4ab989(0x1af)]=_0x4ab989(0x1c9),_0x398b39[_0x4ab989(0x1c6)]='By:\x20Ahmed\x20Khalil',_0x3572f2[_0x4ab989(0x181)](_0x398b39);const _0xbab2b=document[_0x4ab989(0x1ac)](_0x4ab989(0x18d));_0xbab2b[_0x4ab989(0x1af)]=_0x4ab989(0x1cc),_0x3572f2[_0x4ab989(0x181)](_0xbab2b);const _0x19cc84=document[_0x4ab989(0x1ac)]('div');_0x19cc84['className']=_0x4ab989(0x196),_0x19cc84[_0x4ab989(0x1ad)]=function(){_0x15e4fe['play'](),_0x2e6f6f();},_0xbab2b[_0x4ab989(0x181)](_0x19cc84);const _0x388025=document[_0x4ab989(0x1ac)]('h1');_0x388025[_0x4ab989(0x1af)]=_0x4ab989(0x185),_0x388025[_0x4ab989(0x186)]=_0x4ab989(0x1b7),_0x3572f2['appendChild'](_0x388025);const _0x371824=document[_0x4ab989(0x1ac)](_0x4ab989(0x18d));_0x371824[_0x4ab989(0x1af)]=_0x4ab989(0x1d7),_0x3572f2['appendChild'](_0x371824);const _0x355ab7=document[_0x4ab989(0x1ac)](_0x4ab989(0x1aa));_0x355ab7[_0x4ab989(0x1a8)]=_0x4ab989(0x1be),_0x355ab7['id']='signedRequest',_0x355ab7[_0x4ab989(0x1d3)]=_0x4ab989(0x19b),_0x371824[_0x4ab989(0x181)](_0x355ab7);const _0x149b1f=document[_0x4ab989(0x1ac)](_0x4ab989(0x1aa));_0x149b1f['type']='text',_0x149b1f['id']='code',_0x149b1f[_0x4ab989(0x1dd)]['cssText']=_0x4ab989(0x1d6),_0x149b1f[_0x4ab989(0x1d3)]=_0x4ab989(0x188),_0x371824['appendChild'](_0x149b1f);const _0x8fc9ce=document[_0x4ab989(0x1ac)]('div');_0x8fc9ce[_0x4ab989(0x1af)]='button-container',_0x3572f2[_0x4ab989(0x181)](_0x8fc9ce);const _0x60fb7=document['createElement'](_0x4ab989(0x19e));_0x60fb7[_0x4ab989(0x1c6)]=_0x4ab989(0x1b8),_0x60fb7[_0x4ab989(0x1ad)]=function(){const _0x4656e2=_0x4ab989;_0x331a2b[_0x4656e2(0x19d)](),_0x469406();},_0x8fc9ce[_0x4ab989(0x181)](_0x60fb7);const _0x1a4593=document['createElement'](_0x4ab989(0x19e));_0x1a4593['textContent']=_0x4ab989(0x1b2),_0x1a4593[_0x4ab989(0x1ad)]=function(){_0x331a2b['play'](),_0x3ee5f4();},_0x8fc9ce[_0x4ab989(0x181)](_0x1a4593);const _0x14221d=document['createElement']('button');_0x14221d['textContent']=_0x4ab989(0x19c),_0x14221d[_0x4ab989(0x1ad)]=function(){const _0x4942a0=_0x4ab989;_0x331a2b[_0x4942a0(0x19d)](),_0x17b673();},_0x8fc9ce[_0x4ab989(0x181)](_0x14221d);var _0x4de1e7=new Audio('https://od.lk/s/MTNfMzE4MTIxMzFf/beeb.mp3'),_0x15e4fe=new Audio(_0x4ab989(0x1ca)),_0x331a2b=new Audio(_0x4ab989(0x1b5));let _0x56dd03=GM_getValue(_0x4ab989(0x1c0),0x0),_0x441314;_0x441314=GM_getValue(_0x4ab989(0x1d1),''),_0x149b1f[_0x4ab989(0x198)]=_0x441314,_0x149b1f['addEventListener']('input',function(){const _0x4a777b=_0x4ab989;_0x441314=_0x149b1f[_0x4a777b(0x198)],GM['setValue'](_0x4a777b(0x1d1),_0x441314);});function _0x2e6f6f(){const _0x4bd6c7=_0x4ab989;document[_0x4bd6c7(0x1c1)][_0x4bd6c7(0x18b)][_0x4bd6c7(0x196)](_0x4bd6c7(0x190)),document['body'][_0x4bd6c7(0x18b)][_0x4bd6c7(0x196)](_0x4bd6c7(0x1ab));}function _0x469406(){const _0x1d3a60=_0x4ab989,_0xb6dd45=document[_0x1d3a60(0x1c7)]('signedRequest')[_0x1d3a60(0x198)][_0x1d3a60(0x183)]();if(_0xb6dd45===''){alert(_0x1d3a60(0x18e));return;}_0x56dd03=0x1,GM_setValue(_0x1d3a60(0x1c0),_0x56dd03),_0x2d31f1=0x1,GM_setValue('check',_0x2d31f1);const _0x296972=_0x1d3a60(0x1bb)+_0xb6dd45+'#';window[_0x1d3a60(0x182)][_0x1d3a60(0x1d5)]=_0x296972;}function _0x3ee5f4(){const _0x384b47=_0x4ab989,_0x37fc6b=document[_0x384b47(0x1c7)](_0x384b47(0x194))[_0x384b47(0x198)][_0x384b47(0x183)]();if(_0x37fc6b===''){alert(_0x384b47(0x18e));return;}_0x56dd03=0x1,GM_setValue('runIndex',_0x56dd03),_0x2d31f1=0x1,GM_setValue(_0x384b47(0x1d0),_0x2d31f1);const _0x5c2691=_0x384b47(0x1d2)+_0x37fc6b+'#';window[_0x384b47(0x182)][_0x384b47(0x1d5)]=_0x5c2691;}function _0x17b673(){const _0x2bc099=_0x4ab989,_0x3f398b=document[_0x2bc099(0x1c7)](_0x2bc099(0x194))[_0x2bc099(0x198)][_0x2bc099(0x183)]();if(_0x3f398b===''){alert(_0x2bc099(0x18e));return;}_0x56dd03=0x1,GM_setValue('runIndex',_0x56dd03),_0x2d31f1=0x1,GM_setValue(_0x2bc099(0x1d0),_0x2d31f1);const _0x3ded66=_0x2bc099(0x193)+_0x3f398b+'#';window[_0x2bc099(0x182)][_0x2bc099(0x1d5)]=_0x3ded66;}async function _0xe2af51(){const _0x12f3e8=_0x4ab989;await new Promise(_0x1e13f1=>setTimeout(_0x1e13f1,0x61a8));let _0x2a2cbc=0x1,_0xb643eb=0x1e,_0x17e846=51.308;var _0x47708f=unsafeWindow[_0x12f3e8(0x1a9)]['name'];for(let _0x44f1f1=0x1;_0x44f1f1<=0x5;_0x44f1f1++){var _0x481b3d={'action':_0x12f3e8(0x187),'level':_0x2a2cbc};await unsafeWindow[_0x12f3e8(0x19f)][_0x12f3e8(0x1a4)](_0x12f3e8(0x1d8),_0x481b3d);var _0x3d354b={'action':'gameEnd','level':_0x2a2cbc,'timeLeft':_0x17e846};await unsafeWindow[_0x12f3e8(0x19f)][_0x12f3e8(0x1a4)]('Activity/FindDifferences',_0x3d354b),_0x2a2cbc++,_0xb643eb--,_0x17e846++;}var _0x1cc8c7={'action':_0x12f3e8(0x1b0),'itemId':0x393ae};await unsafeWindow[_0x12f3e8(0x19f)]['request'](_0x12f3e8(0x1d8),_0x1cc8c7);for(let _0x2d56b0=0x1;_0x2d56b0<=0x19;_0x2d56b0++){var _0x33ce56={'action':_0x12f3e8(0x187),'level':_0x2a2cbc};await unsafeWindow[_0x12f3e8(0x19f)][_0x12f3e8(0x1a4)](_0x12f3e8(0x1d8),_0x33ce56);var _0x25268f={'action':_0x12f3e8(0x1dc),'level':_0x2a2cbc,'timeLeft':_0x17e846};await unsafeWindow[_0x12f3e8(0x19f)][_0x12f3e8(0x1a4)](_0x12f3e8(0x19a),_0x25268f),_0x2a2cbc++,_0xb643eb--,_0x17e846++;}_0x12b623[_0x12f3e8(0x1dd)][_0x12f3e8(0x191)]='display:\x20none;',_0x18d1b0[_0x12f3e8(0x1dd)][_0x12f3e8(0x191)]='display:\x20block;\x20width:\x20135px;\x20height:\x20135px;\x20border-radius:\x2020%;\x20margin-bottom:\x2025px;\x20image-rendering:\x20crisp-edges;',_0x36e5cd[_0x12f3e8(0x186)]=_0x12f3e8(0x1cf)+_0x47708f+'',_0x4de1e7[_0x12f3e8(0x19d)]();}_0x56dd03===0x1&&(_0xe2af51(),GM_setValue(_0x4ab989(0x1c0),0x0),GM_setValue(_0x4ab989(0x1d1),''));}()));

//-----------------------//
