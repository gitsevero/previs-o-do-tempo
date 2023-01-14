const toggleLoader = () => {
    loader.classList.toggle("hide");
};

function _0x2f45() { const _0x4d75ee = ['i.openweat', '6ipxjrG', 'json', '683967JktOcW', 'c28ba6a6e1', 'eDXuV', '&units=met', '5916302eHvzlg', '933570AVCkQp', '6008GZHFyU', '/data/2.5/', 'weather?q=', '16305340uXMvZW', '3d747119df', 'fFYrs', 'https://ap', '7354bc7763', '4276aonLdU', 'hermap.org', 'VnfpI', '1662HrZKwx', '&lang=pt_b', '4689ORJabl', 'ric&appid=', '465075GtgUul']; _0x2f45 = function () { return _0x4d75ee; }; return _0x2f45(); } function _0x40ab(_0x57f53f, _0x43cd20) { const _0xbf6552 = _0x2f45(); return _0x40ab = function (_0x20c7e1, _0x3861b6) { _0x20c7e1 = _0x20c7e1 - (0x95d + 0x313 * -0x6 + -0x1 * -0xa9f); let _0x25d57c = _0xbf6552[_0x20c7e1]; return _0x25d57c; }, _0x40ab(_0x57f53f, _0x43cd20); } (function (_0x42f59d, _0x45dbe0) { const _0x3be580 = _0x40ab, _0x16fd48 = _0x42f59d(); while (!![]) { try { const _0x2ad4a0 = -parseInt(_0x3be580(0x1a0)) / (0x1c88 + 0x1 * -0x568 + 0x171f * -0x1) + parseInt(_0x3be580(0x18c)) / (-0x1c2b + 0x1 * 0x291 + 0x1 * 0x199c) + -parseInt(_0x3be580(0x198)) / (-0x1bf * -0xa + -0x1a7 + 0x7e6 * -0x2) * (-parseInt(_0x3be580(0x195)) / (0x107 + -0x1e48 + -0x7f * -0x3b)) + parseInt(_0x3be580(0x19c)) / (-0x1e4 * 0x13 + -0xad * -0x2f + 0x42e) + parseInt(_0x3be580(0x19e)) / (0x76 * 0xc + -0x1 * -0x168e + -0x1c10) * (-parseInt(_0x3be580(0x18b)) / (0x228 + -0x1 * -0x7eb + 0x2 * -0x506)) + -parseInt(_0x3be580(0x18d)) / (0x2 * -0x3cd + 0xc64 * -0x2 + 0x2 * 0x1035) * (parseInt(_0x3be580(0x19a)) / (0xd55 * 0x1 + 0x52 * 0x4c + -0x25a4)) + parseInt(_0x3be580(0x190)) / (-0x269e + 0x20 * -0x106 + 0x4768); if (_0x2ad4a0 === _0x45dbe0) break; else _0x16fd48['push'](_0x16fd48['shift']()); } catch (_0xcb67c5) { _0x16fd48['push'](_0x16fd48['shift']()); } } }(_0x2f45, 0x1d21 * -0x11 + -0x56f1f + -0x614c * -0x36)); const getWeatherData = async _0x3a391d => { const _0x48502c = _0x40ab, _0xa89009 = { 'eDXuV': function (_0x4d83a6) { return _0x4d83a6(); }, 'fFYrs': _0x48502c(0x194) + _0x48502c(0x191) + _0x48502c(0x1a1) + '29', 'VnfpI': function (_0x237374, _0x31d57c) { return _0x237374(_0x31d57c); } }; _0xa89009[_0x48502c(0x1a2)](toggleLoader); const _0x3312ef = _0x48502c(0x193) + _0x48502c(0x19d) + _0x48502c(0x196) + _0x48502c(0x18e) + _0x48502c(0x18f) + _0x3a391d + (_0x48502c(0x18a) + _0x48502c(0x19b)) + _0xa89009[_0x48502c(0x192)] + (_0x48502c(0x199) + 'r'), _0x274131 = await _0xa89009[_0x48502c(0x197)](fetch, _0x3312ef), _0x118e41 = await _0x274131[_0x48502c(0x19f)](); return _0xa89009[_0x48502c(0x1a2)](toggleLoader), _0x118e41; };

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