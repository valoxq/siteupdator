// ==UserScript==
// @name         Vision Request Auto Site V2
// @namespace    https://www.facebook.com/sapienti19/
// @version      1.0
// @description  موقع لإنهاء مهمات المزرعة بالريكويست
// @author       Vision
// @match        https://vision-tester.neocities.org/
// @match        *.centurygames.com/*
// @updateURL    https://s.id/VSNxU
// @downloadURL  https://s.id/VSNxU
// @icon         https://www.google.com/s2/favicons?sz=64&domain=centurygames.com
// @grant        unsafeWindow
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-end
// ==/UserScript==

(function() {
    // Get host and url then check continue or not//0000
    var currentHost = window.location.host;
    var currentUrl = window.location.href;
    if (
        currentHost === "farm-us.centurygames.com" ||
        currentHost === "farm-fr.centurygames.com" ||
        currentHost === "farm-th.centurygames.com"
    ) {
        if (currentUrl.length < 500) {
            console.log("The current URL is less than 500 characters.");
            return;
        }
    }

    const style = document.createElement('style');
    style.textContent = `
        body {
            font-family: Arial, sans-serif;
            background-color: #121212; /* Default dark background */
            color: #ffffff; /* Default dark text color */
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            transition: background-color 0.3s, color 0.3s;
        }
        .spinner {
            border: 8px solid #f3f3f3; /* Light grey */
            border-top: 8px solid #3700B3; /* Blue */
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
            margin-bottom: 20px; /* Center the spinner */
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        #overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #121212;
            display: none; /* Initially hidden */
            z-index: 9999; /* Ensure it covers everything */
            justify-content: center; /* Center content horizontally */
            align-items: center; /* Center content vertically */
            text-align: center;
        }
        .overlay-container {
            display: flex; /* Enable flexbox */
            flex-direction: column; /* Arrange children in a column */
            position: fixed; /* Fixed position relative to the viewport */
            top: 35%; /* Position from the top */
            left: 50%; /* Position from the left */
            background-color: #1e1e1e; /* Dark background for overlay container */
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            color: #ffffff; /* Text color */
            font-size: 24px; /* Font size */
            text-align: center; /* Center text */
            align-items: center; /* Center items in flex container */
            width: auto; /* Allow the width to adjust to the content */
            transform: translate(-50%, -50%); /* Center the element */
        }
        .container {
            background-color: #1e1e1e; /* Default dark container */
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            height: auto;
            width: 600px;
            transition: background-color 0.3s, color 0.3s;
            transform: scale(0.75) translateY(-30%); /* Scale down to 75% and move up by 15% */
            display: flex;
            flex-direction: column; /* Arrange children in a column */
            align-items: center; /* Center children horizontally */
        }
        .signature {
            font-size: 16px;
			font-weight: bold;
            color: #f0f0f0;
			background-color: #333;
            margin-bottom: 10px;
			border: 2px solid #555; /* Dark border */
			border-radius: 15px;
            padding: 10px; /* Add padding for better appearance */
			display: inline-block; /* Prevent stretching */
			width: fit-content; /* Allow the width to adjust to the content */
			box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* Drop shadow */
			transform: translateY(-40%); /* Scale down to 75% and move up by 15% */
        }
        h1 {
            font-size: 36px;
            font-weight: bold;
            background-color: #333;
            color: #f0f0f0; /* Default dark heading color */
            border: 2px solid #555; /* Dark border */
            border-radius: 15px;
            padding: 15px; /* Add padding for better appearance */
            margin-bottom: 30px; /* Space below the heading */
            transition: color 0.3s;
            display: inline-block; /* Prevent stretching */
            width: auto;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* Drop shadow */
        }
        .input-container {
            display: flex; /* Use flexbox to align inputs */
            justify-content: space-between; /* Space between inputs */
            width: 100%;
        }
        input {
            width: 100%;
            padding: 20px;
            margin: 0px 5px 30px 5px;
            border: 1px solid #555; /* Dark border */
            border-radius: 15px;
            box-sizing: border-box;
            transition: background-color 0.3s, color 0.3s;
            font-size: 20px;
            background-color: #333; /* Dark input background */
            color: #f0f0f0; /* Dark input text color */
			transform: translateY(-15%); /* Scale down to 75% and move up by 15% */
        }
        input::placeholder {
            color: #f0f0f0; /* Red color for the placeholder text */
            opacity: .7; /* Ensures the color is fully opaque */
        }
        .button-container {
            display: flex; /* Use flexbox to align buttons */
            justify-content: space-between; /* Space between buttons */
        }
        button {
            flex: 1; /* Allow buttons to grow equally */
            margin: 0 8px; /* Add some margin between buttons */
            padding: 20px 60px;
            background-color: #3700B3; /* Dark button background */
            color: white;
            border: none;
            border-radius: 15px;
            cursor: pointer;
            font-size: 20px;
            font-weight: bold;
            transition: background-color 0.3s;
        }
        button:hover {
            background-color: #6200EE; /* Dark button hover */
        }
        .toggle-container {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 30px;
        }
        .toggle {
            position: relative;
            width: 80px;
            height: 40px;
            background-color: #6200EE; /* Dark toggle background */
            border-radius: 30px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .toggle::before {
            content: '';
            position: absolute;
            width: 32px;
            height: 32px;
            background-color: black; /* Dark circle color */
            border-radius: 50%;
            top: 4px;
            left: 4px;
            transition: transform 0.3s, background-color 0.3s;
        }
        body.light .toggle::before {
            background-color: white; /* Light circle color */
            transform: translateX(40px); /* Move circle to the right in light mode */
        }
        body.light {
            background-color: #f0f0f0; /* Light background */
            color: #333; /* Light text color */
        }
        body.light .container {
            background-color: #fff; /* Light container */
            color: #333; /* Light text color */
        }
		body.light .signature {
            background-color: #fff; /* Light toggle background */
			color: #333; /* Light text color */
            border: 2px solid #ddd; /* Dark border */
        }
		body.light .toggle {
            background-color: #0084ff; /* Light toggle background */
        }
        body.light h1 {
            background-color: #fff; /* Light toggle background */
			color: #333; /* Light text color */
            border: 2px solid #ddd; /* Dark border */
        }
        body.light input {
            background-color: #fff; /* Light input background */
            color: #333; /* Light input text color */
            border: 2px solid #ddd; /* Light border */
        }
        body.light input::placeholder {
            color: #000000; /* Red color for the placeholder text */
            opacity: .7; /* Ensures the color is fully opaque */
        }
        body.light button {
            background-color: #0068e9; /* Light button background */
        }
        body.light button:hover {
            background-color: #0084ff; /* Light button hover */
       }
    `;
    document.head.appendChild(style);

	// Create overlay element
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    document.body.appendChild(overlay);
    // Create overlay container
    const overlayContainer = document.createElement('div');
    overlayContainer.className = 'overlay-container';
    overlay.appendChild(overlayContainer);

    const overlaySignature = document.createElement('div');
    overlaySignature.className = 'signature';
    overlaySignature.textContent = 'By: Ahmed Khalil';
    overlayContainer.appendChild(overlaySignature);

    const title = document.createElement('h1');
    title.innerHTML = 'جارى تجميع الجوائز الممكنة<br>بمهمة الموسم الثلجى<br>يرجى الانتظار';
    overlayContainer.appendChild(title);

    const spinner = document.createElement('div');
    spinner.className = 'spinner';
    //spinner.style.cssText = '';
    overlayContainer.appendChild(spinner);

    // Adding a button
    const overlayButtonContainer = document.createElement('div');
    overlayButtonContainer.className = 'button-container';
    overlayContainer.appendChild(overlayButtonContainer);

    const closeButton = document.createElement('button');
    closeButton.textContent = 'العودة';
    overlayContainer.appendChild(closeButton);
    closeButton.onclick = function() {
        window.location.href = 'https://vision-tester.neocities.org/';
    };
    //Check to display overlay or not//
    if (
        currentHost === "farm-us.centurygames.com" ||
        currentHost === "farm-fr.centurygames.com" ||
        currentHost === "farm-th.centurygames.com"
    ) {
        if (currentUrl.length > 450) {
        overlay.style.cssText = 'display: block;';
        }
    }
    //Container and its content//
    const container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);

    const signature = document.createElement('div');
    signature.className = 'signature';
    signature.textContent = 'By: Ahmed Khalil';
    container.appendChild(signature);

    const toggleContainer = document.createElement('div');
    toggleContainer.className = 'toggle-container';
    container.appendChild(toggleContainer);

    const toggleButton = document.createElement('div');
    toggleButton.className = 'toggle';
    toggleButton.onclick = function() {
        toggleTheme();
    };
    toggleContainer.appendChild(toggleButton);

    const heading = document.createElement('h1');
    heading.className = 'heading';
    heading.textContent = 'مهمة الموسم الثلجى';
    container.appendChild(heading);

    const inputContainer = document.createElement('div');
    inputContainer.className = 'input-container';
    container.appendChild(inputContainer);

    const inputSR = document.createElement('input');
    inputSR.type = 'text';
    inputSR.id = 'signedRequest';
    inputSR.placeholder = 'أدخل ريكويست صالح';
    inputContainer.appendChild(inputSR);

    const inputCode = document.createElement('input');
    inputCode.type = 'text';
    inputCode.id = 'code';
    inputCode.style.cssText = 'width: 155px;';
    inputCode.placeholder = 'أدخل رقم الجائزة';
    inputContainer.appendChild(inputCode);

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    container.appendChild(buttonContainer);

    const familyButton = document.createElement('button');
    familyButton.textContent = 'Family';
    familyButton.onclick = function() {
        redirectToFamily();
    };
    buttonContainer.appendChild(familyButton);

    const happyButton = document.createElement('button');
    happyButton.textContent = 'Happy';
    happyButton.onclick = function() {
        redirectToHappy();
    };
    buttonContainer.appendChild(happyButton);

    const superButton = document.createElement('button');
    superButton.textContent = 'Super';
    superButton.onclick = function() {
        redirectToSuper();
    };
    buttonContainer.appendChild(superButton);
    //Varibles//
    var alarm = new Audio("https://audio.jukehost.co.uk/RZKPyY6CVcV2gM0zk0gZadXURQg10tbA");
    let runIndex = GM_getValue('runIndex', 0);
    let codeValue;
    codeValue = GM_getValue('inputCodeValue', '');
    inputCode.value = codeValue;
    //Functions//
    inputCode.addEventListener('input', function() {
    codeValue = inputCode.value;
    GM.setValue('inputCodeValue', codeValue);
    });

    function toggleTheme() {
        document.body.classList.toggle('dark');
        document.body.classList.toggle('light');
    }

    function redirectToFamily() {
        const signedRequest = document.getElementById('signedRequest').value.trim();
        if (signedRequest === "") {
        alert("أدخل ريكويست صالح من فضلك");
        return;
     }
        runIndex = 1;
        GM_setValue('runIndex', runIndex);
        const url = `https://farm-us.centurygames.com/ar/?signed_request=${signedRequest}#`;
        window.location.href = url;
     }

    function redirectToHappy() {
        const signedRequest = document.getElementById('signedRequest').value.trim();
        if (signedRequest === "") {
        alert("أدخل ريكويست صالح من فضلك");
        return;
     }
        runIndex = 1;
        GM_setValue('runIndex', runIndex);
        const url = `https://farm-th.centurygames.com/en/?signed_request=${signedRequest}#`;
        window.location.href = url;
     }

     function redirectToSuper() {
        const signedRequest = document.getElementById('signedRequest').value.trim();
        if (signedRequest === "") {
        alert("أدخل ريكويست صالح من فضلك");
        return;
     }
        runIndex = 1;
        GM_setValue('runIndex', runIndex);
        const url = `https://farm-fr.centurygames.com/en/?signed_request=${signedRequest}#`;
        window.location.href = url;
     }

    async function Cheat() {
        await new Promise(resolve => setTimeout(resolve, 25000));

        var counterDisplay = document.createElement("div");
        counterDisplay.innerHTML = "<span id='counterText'></span>"
        counterDisplay.style.cssText = "position: absolute; top: 3px; left:460px; margin-top: 50px; background: #f9eca5; border: 2px solid #fbf2d2; border-radius: 5px; padding: 2.5px 2.5px; font-size: 14px; font-weight: bold; color: #472424; user-select: none;"
        document.body.appendChild(counterDisplay);

        var logo = document.createElement("div");
        logo.innerHTML = "<img src='https://iili.io/JSqe02S.png' alt='Logo'>";
        logo.style.cssText = "position: absolute; top: 75px; left: 214px;";
        document.body.appendChild(logo);

        document.getElementById('counterText').innerText = "جارى تجميع الجوائز - يرجى الانتظار ";

        for (let i = codeValue; i <= 45; i++) {
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
        alarm.play();
        spinner.style.cssText = 'display: none;';
        title.innerHTML = "تمت مهمة الموسم الثلجى<br>بالتوفيق";
      }
        if (runIndex === 1) {
            Cheat();
            GM_setValue('runIndex', 0);
            GM_setValue('inputCodeValue', "");
      }
})();
