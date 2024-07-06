import React from 'react'

const TabAccordion = () => {
    function openCity(cityName) {
        var i;
        var x = document.getElementsByClassName("city");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        console.log(x.length)
        document.getElementById(cityName).style.display = "block";
      }
    return (
        <div>
            <div class="">
                <button class="" onclick="openCity('London')">London</button>
                <button class="" onclick="openCity('Paris')">Paris</button>
                <button class="" onclick="openCity('Tokyo')">Tokyo</button>
            </div>
            <div id="London" class="city">
                <h2>London</h2>
                <p>London is the capital of England.</p>
            </div>

            <div id="Paris" class="city" style="display:none">
                <h2>Paris</h2>
                <p>Paris is the capital of France.</p>
            </div>

            <div id="Tokyo" class="city" style="display:none">
                <h2>Tokyo</h2>
                <p>Tokyo is the capital of Japan.</p>
            </div>
        </div>
    )
}

export default TabAccordion
