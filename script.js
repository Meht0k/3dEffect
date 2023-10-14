
var section = document.querySelector("#sheryEffect");
section.addEventListener("click", () => {
    console.log('clicked')
    // console.log("You clicked on the sherry effect!");
    async function getData() {
        var data = await fetch("https://source.unsplash.com/random");
        var imgUrl = data.url;
        console.log(imgUrl)
        let img = document.createElement("img");
        img.setAttribute("src", imgUrl);
        section.appendChild(img)
    }
    getData()
})













Shery.imageEffect("#sheryEffect", { style: 3, config: { "a": { "value": 2, "range": [0, 30] }, "b": { "value": -0.74, "range": [-1, 1] }, "aspect": { "value": 2.0617686268700934 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.33, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": false }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } }, gooey: true })


