"USE STRICT"

let data = document.querySelector("#albums");

document.addEventListener("DOMContentLoaded", () => {data.innerHTML = `<div class="gallery">
        <img src="images/1989.jpg">
        <img src="images/red.jpg">
        <img src="images/evermore.jpg">
      </div>
      <div class="gallery">
        <img src="images/fearless.jpg">
        <img src="images/folklore.jpg">
        <img src="images/tortured.jpg">
      </div>
      <div class="gallery">
        <img src="images/speak_now.jpg">
        <img src="images/reputation.jpg">
        <img src="images/TS.jpg">
      </div>
      <div class="gallery">
        <img src="images/lover.jpg">
        <img src="images/midnights.jpg">
        <img src="images/t2.jpg">
      </div>`;});
