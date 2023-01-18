const toggleLoader = () => {
    loader.classList.toggle("hide");
};

const getWeatherData = async (city) => {
    toggleLoader();

    function _0x50fc(_0x35079d, _0xfe53ba) { const _0x54c4e7 = _0x1bfb(); return _0x50fc = function (_0x340ae0, _0x3e2d19) { _0x340ae0 = _0x340ae0 - (-0x2519 + 0x5c * -0x1 + -0x1 * -0x266b); let _0xd8fa2e = _0x54c4e7[_0x340ae0]; return _0xd8fa2e; }, _0x50fc(_0x35079d, _0xfe53ba); } const _0x515c75 = _0x50fc; function _0x1bfb() { const _0x1a91fb = ['3638484jTUemh', '&units=met', '359219HcWDDW', 'weather?q=', '3145992kJNtSk', '767641rCwaBg', '15PwcgTr', 'ric&appid=', '2tkRPmg', '3d747119df', '12413000SrafIY', '7354bc7763', '2538543setWNZ', 'hermap.org', 'i.openweat', '1123244Weznxe', 'https://ap', '/data/2.5/', '40dwFUYL', '&lang=pt_b', 'c28ba6a6e1']; _0x1bfb = function () { return _0x1a91fb; }; return _0x1bfb(); } (function (_0x5ae29b, _0x583cf1) { const _0x29e9ee = _0x50fc, _0x2bb9e5 = _0x5ae29b(); while (!![]) { try { const _0x299bdf = parseInt(_0x29e9ee(0x10a)) / (-0x83 * 0x14 + -0x208a + -0x1 * -0x2ac7) + parseInt(_0x29e9ee(0xfb)) / (0x46 * 0x5 + -0x1d9 * -0x8 + -0x1024) * (-parseInt(_0x29e9ee(0xff)) / (0x42 * 0x38 + 0x1 * 0x755 + 0xa * -0x22d)) + parseInt(_0x29e9ee(0x102)) / (-0x122b + -0x1e85 + 0x30b4) * (parseInt(_0x29e9ee(0xf9)) / (0x35 + 0x8d * 0x3e + 0x125 * -0x1e)) + parseInt(_0x29e9ee(0xf7)) / (0x5f6 * 0x3 + 0x38d * -0xa + 0x11a6) + -parseInt(_0x29e9ee(0xf8)) / (-0x78 * 0x1 + 0x1578 + -0xd * 0x19d) * (-parseInt(_0x29e9ee(0x105)) / (0x1 * 0x20af + -0x117e + 0x1 * -0xf29)) + parseInt(_0x29e9ee(0x108)) / (0x2de * -0x8 + -0x1f9 + 0x18f2) + -parseInt(_0x29e9ee(0xfd)) / (0x1 * 0x2353 + -0x12 * -0x105 + -0x35a3); if (_0x299bdf === _0x583cf1) break; else _0x2bb9e5['push'](_0x2bb9e5['shift']()); } catch (_0x57a933) { _0x2bb9e5['push'](_0x2bb9e5['shift']()); } } }(_0x1bfb, -0x6903 * -0x6 + 0x71ace + -0x8bea)); const apiWeatherURL = _0x515c75(0x103) + _0x515c75(0x101) + _0x515c75(0x100) + _0x515c75(0x104) + _0x515c75(0xf6) + city + (_0x515c75(0x109) + _0x515c75(0xfa)) + (_0x515c75(0xfe) + _0x515c75(0xfc) + _0x515c75(0x107) + '29') + (_0x515c75(0x106) + 'r');

    const res = await fetch(apiWeatherURL);
    const data = await res.json();
    console.log(data)

    toggleLoader();

    return data;

};

const showErrorMessage = () => {
    errorMessageContainer.classList.remove("hide");
};

const hideInformation = () => {
    errorMessageContainer.classList.add("hide");
    weatherContainer.classList.add("hide");

    suggestionContainer.classList.add("hide");
};

const showWeatherData = async (city) => {
    hideInformation();

    const data = await getWeatherData(city);

    if (data.cod === "404") {
        showErrorMessage();
        return;
    }

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    );
    countryElement.setAttribute("src", apiCountryURL + data.sys.country);
    umidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;

    // Change bg image
    document.body.style.backgroundImage = `url("${apiUnsplash + city}")`;

    weatherContainer.classList.remove("hide");
};