
function renderScr(idTemp, selector) {
    let template = document.querySelector(idTemp).content.cloneNode(true);
    document.querySelector(selector).append(template);
}