
var deadline = new Date("Feb 13, 2023 18:55:25").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("demo").innerHTML = days + "d " 
+ hours + "h " + minutes + "m " + seconds + "s ";
    if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);



// function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//       center: { lat: -33.9, lng: 151.1 },
//       zoom: 10,
//     });
//     /**
//      * A customized popup on the map.
//      */
//     class Popup extends google.maps.OverlayView {
//       position;
//       containerDiv;
//       constructor(position, content) {
//         super();
//         this.position = position;
//         content.classList.add("popup-bubble");
  
//         // This zero-height div is positioned at the bottom of the bubble.
//         const bubbleAnchor = document.createElement("div");
  
//         bubbleAnchor.classList.add("popup-bubble-anchor");
//         bubbleAnchor.appendChild(content);
//         // This zero-height div is positioned at the bottom of the tip.
//         this.containerDiv = document.createElement("div");
//         this.containerDiv.classList.add("popup-container");
//         this.containerDiv.appendChild(bubbleAnchor);
//         // Optionally stop clicks, etc., from bubbling up to the map.
//         Popup.preventMapHitsAndGesturesFrom(this.containerDiv);
//       }
//       /** Called when the popup is added to the map. */
//       onAdd() {
//         this.getPanes().floatPane.appendChild(this.containerDiv);
//       }
//       /** Called when the popup is removed from the map. */
//       onRemove() {
//         if (this.containerDiv.parentElement) {
//           this.containerDiv.parentElement.removeChild(this.containerDiv);
//         }
//       }
//       /** Called each frame when the popup needs to draw itself. */
//       draw() {
//         const divPosition = this.getProjection().fromLatLngToDivPixel(
//           this.position
//         );
//         // Hide the popup when it is far out of view.
//         const display =
//           Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
//             ? "block"
//             : "none";
  
//         if (display === "block") {
//           this.containerDiv.style.left = divPosition.x + "px";
//           this.containerDiv.style.top = divPosition.y + "px";
//         }
  
//         if (this.containerDiv.style.display !== display) {
//           this.containerDiv.style.display = display;
//         }
//       }
//     }
  
//     popup = new Popup(
//       new google.maps.LatLng(-33.866, 151.196),
//       document.getElementById("content")
//     );
//     popup.setMap(map);
//   }
  
//   window.initMap = initMap;


//   document.getElementsByClassName('.buttonss').innerHTML = 'color:orange'



const webdriver = require('selenium-webdriver');

// SET CAPABILITY
const capabilities = {
  'browserName' : 'chrome',
  'browser_version' : 'latest',
  'os' : 'Windows',
  'os_version' : '10',
  'browserstack.user' : 'YOUR_USERNAME',
  'browserstack.key' : 'YOUR_ACCESS_KEY',
  'build': 'Location pop-ups in Browsers ',
  'name': 'location popups disabled in Chrome',
  // SET Chrome options
  'goog:chromeOptions': {
    prefs: {
      // 0 - Default, 1 - Allow, 2 - Block
      'profile.managed_default_content_settings.geolocation' : 1
    }
  }
  // // SET Firefox options
  // 'moz:firefoxOptions': {
  //   prefs: {
  //     'dom.disable_beforeunload': true,
  //     'dom.webnotifications.enabled': false,
  //     'geo.enabled': true,
  //     'geo.provider.use_corelocation': false,
  //     'geo.prompt.testing': true,
  //     'geo.prompt.testing.allow': true,
  //   }
  // }
  // // SET Edge options
  // 'ms:edgeOptions': {
  //   prefs: {
  //     // 0 - Default, 1 - Allow, 2 - Block
  //     'profile.managed_default_content_settings.geolocation' : 1
  //   }
  // }
}

const runSampleTest = async capabilities => {
  let driver;
  try {
    driver = new webdriver.Builder()
      .usingServer(`https://hub.browserstack.com/wd/hub`)
      .withCapabilities(capabilities)
      .build();

    await driver.get('https://the-internet.herokuapp.com/geolocation');
    const element = await driver.findElement(
      webdriver.By.xpath("//button[contains(text(),'Where am I?')]")
    );
    await element.click();
  } catch (e) {
    console.log(e);
  } finally {
    if (driver) {
      await driver.quit();
    }
  }
};

runSampleTest(capabilities);



const link = document.getElementById('buttonss').style.background = 'orange'
console.log(link);

  

