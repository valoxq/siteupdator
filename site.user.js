//================================================================================
// ==UserScript==
// @name         Vision BattlePass Rewards Auto V3
// @namespace    https://www.facebook.com/sapienti19/
// @version      1.0
// @description  تجميع جوائز الرخصة العادية لمهمة الموسم بشكل تلقائى - الشروط :- ريكويست صالح ورقم جائزة البداية - يعمل بجميع نسخ اللعبة
// @author       Vision
// @match        *.centurygames.com/*
// @updateURL    
// @downloadURL  
// @icon         https://www.google.com/s2/favicons?sz=64&domain=centurygames.com
// @grant        unsafeWindow
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-end
// ==/UserScript==
(function () {
    function print(type, ...args) {
        console[type](``, ...args);
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function definePropertyWhenUndefinedAsync(object, property, callback) {
        if (!object.hasOwnProperty(property)) {
            let value;
            Object.defineProperty(object, property, {
                get() {
                    return value;
                },
                async set(newValue) {
                    value = newValue;
                    await callback();
                },
                configurable: true,
                enumerable: true
            });
        } else {
            await callback();
        }
    }
    print("log", `Init`);

    var getElement = unsafeWindow.document.getElementById("message_nav");
    var attach = getElement.parentNode;
    var xBtn = unsafeWindow.document.createElement("BUTTON");

    xBtn.innerHTML = "B-Pass-Auto❄️"
    xBtn.onclick = Redirect;
    attach.appendChild(xBtn);
    xBtn.style.cssText = "background: ; color: black; padding: 5px; font-size: 10px; font-weight: bold; border-radius: 5px; border: none; cursor: pointer; transition: all 0.3s ease 0s;";

    let runIndex = GM_getValue('runIndex', 0);
    let code = GM_getValue('code', 0);
    let host = window.location.host;

    async function Redirect() {
        let urlIndex;
        let farmIndex;
        let FamilyURL = "https://farm-us.centurygames.com/ar/?signed_request=";
        let HappyURL = "https://farm-th.centurygames.com/en/?signed_request=";
        let SuperURL = "https://farm-fr.centurygames.com/en/?signed_request=";
        if (host === 'farm-us.centurygames.com') {
        urlIndex = FamilyURL;
        farmIndex = "Family Farm";
        } else if (host === 'farm-th.centurygames.com') {
        urlIndex = HappyURL;
        farmIndex = "Happy Land";
        } else if (host === 'farm-fr.centurygames.com') {
        urlIndex = SuperURL;
        farmIndex = "Super Farm";
        }

        let SR = prompt("أدخل الريكويست ( تأكد أن يكون صالح )","");
        if (SR === "") {
            alert("يجب إدخال ريكويست صالح");
        return;
        }
        let code = prompt("أدخل رقم أول جائزة مقفولة فى الترتيب","1");
        if (isNaN(code)) {
            alert("من فضلك أدخل رقم صحيح");
        return;
        }
        GM_setValue('code', code);
        SR = SR.trim();

        const e = confirm("أنت على وشك فتح مزرعة أخرى "+farmIndex+" وتجميع جوائز مهمة الموسم الثلجى \nتأكيد العملية ؟");
        if (e) {} else {
        return e.abort();
        }
        let urld =1;
        let signedRequest = SR;
        runIndex = 1;
        GM_setValue('runIndex', runIndex);
        if (signedRequest === SR) {
        window.location.reload();
        }
        let url = `${urlIndex}${signedRequest}#`;
        window.location.href = url;
        }

        async function Cheat() {
        await new Promise(resolve => setTimeout(resolve, 30000));

        var counterDisplay = unsafeWindow.document.createElement("div");
        counterDisplay.innerHTML = "<span id='counterText'></span>"
        counterDisplay.style.cssText = "position: absolute; top: 3px; left:460px; margin-top: 50px; background: #f9eca5; border: 2px solid #fbf2d2; border-radius: 5px; padding: 2.5px 2.5px; font-size: 14px; font-weight: bold; color: #472424; user-select: none;"
        attach.appendChild(counterDisplay);

        var logo = unsafeWindow.document.createElement("div");
              logo.innerHTML = "<img src='https://iili.io/JSqe02S.png' alt='Logo'>";
              logo.style.cssText = "position: absolute; top: 75px; left: 214px;";
              attach.appendChild(logo);

        document.getElementById('counterText').innerText = "جارى تجميع الجوائز - يرجى الانتظار ";

        for (let i = code; i <= 45; i++) {
        let codeIndex = (i * 100) + "_1";
        let list = [];
            list[0] = String(codeIndex);

        var data = {
        action: "getReward",
        event: 202412,
        list: list,
        };
        await unsafeWindow.NetUtils.request("Activity/NewBattlePass", data);
        await new Promise(resolve => setTimeout(resolve, 0));
        }
        unsafeWindow.ConfirmView.Show("تم\nتجميع جميع الجوائز المتاحة بمهمة الموسم الثلجى\nبالتوفيق\n\nAhmed Khalil");
        counterDisplay.remove();
        logo.remove();
        await new Promise(resolve => setTimeout(resolve, 5000));
        window.location.reload();
        }
        if (runIndex === 1) {
        Cheat();
        GM_setValue('runIndex', 0);
        GM_setValue('code', 0);
        }
        document.body.appendChild(xBtn);
    })();

//================================================================================
