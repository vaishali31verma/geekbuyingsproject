let slideIndex = 1;
showSlides(slideIndex);

import { navbar, footer } from "./navbar/navbar.js"
document.getElementById("top-navbar").innerHTML = navbar()

document.getElementById("footer").innerHTML = footer()


let noofpro = JSON.parse(localStorage.getItem("addcart")) ||[]
document.getElementById("noofpro").innerText = noofpro.length
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
// document.getElementById("dots1").addEventListener("click",function(){
//   currentSlide(1)
// })
document.querySelector(".prev").addEventListener("click", function () {
  plusSlides(-1)
})
document.querySelector(".next").addEventListener("click", function () {
  plusSlides(1)
})






function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var data1 = [{
  image: "https://img.gkbcdn.com/p/2019-10-11/jjrc-x12-4k-gps-rc-drone-white-two-batteries-with-bag-1574132236117._w280_p1_.jpg",
  offer: "30% off",
  original: 18520.38,
  before: 18588.38,
  detail: "Hawkeve firefly X?$K 170degree Wide angle wifi gryo camera"


},
{
  image: "https://img.gkbcdn.com/p/2022-05-30/tronsmart-element-groove-bluetooth-speaker-black-bbd0c8-1653893706349._w280_p1_.jpg",
  offer: "10% off",
  original: 2656.28,
  before: 2652.8,
  detail: "Hawkeve firefly X?$K 170degree Wide angle wifi gryo camera"

},
{
  image: "https://img.gkbcdn.com/p/2019-11-30/tws-i500-earphones-20191130100234539._w280_p1_.jpg",
  offer: "20% off",
  original: 1174.35,
  before: 1173.5,
  detail: "Hawkeve firefly X?$K 170degree Wide angle wifi gryo camera"

},
{
  image: "https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-mega-bluetooth-speaker-black-1571991584812._w280_p1_.jpg",
  offer: "42% off",
  original: 3542.32,
  before: 3543,
  detail: "Hawkeve firefly X?$K 170degree Wide angle wifi gryo camera"

},
{
  image: "https://img.gkbcdn.com/p/2021-07-20/e8d982f4f76e4c109aff2227fedaaa18-461408-1._w280_p1_.jpg",
  offer: "38% off",
  original: 18521.03,
  before: 18503,
  detail: "Hawkeve firefly X?$K 170degree Wide angle wifi gryo camera"

},
{
  image: "https://img.gkbcdn.com/p/2022-02-10/a6r-tws-wireless-earphones-black-4570b2-1644488631155._w280_p1_.jpg",
  offer: "30% off",
  original: 12038,
  before: 18538,
  detail: "Hawkeve firefly X?$K 170degree Wide angle wifi gryo camera"

},
{
  image: "https://img.gkbcdn.com/p/2019-03-18/tronsmart-element-t6-plus-bluetooth-speaker-black-1574132869322._w280_p1_.jpg",
  offer: "30% off",
  original: 1811,
  before: 1838,
  detail: "Hawkeve firefly X?$K 170degree Wide angle wifi gryo camera"

},
{
  image: "https://img.gkbcdn.com/p/2021-03-30/xiaomi-mi-band-6-smart-bracelet-1-56-inch-screen-black-1617074128547._w280_p1_.jpg",
  offer: "30% off",
  original: 1852,
  before: 2340,
  detail: "Hawkeve firefly X?$K 170degree Wide angle wifi gryo camera"

},
]



let display1 = (data1) => {
  data1.forEach(function (el) {
    var div = document.createElement("div")
    div.addEventListener("click", function () {
      datainlocal(el)
    })
    var image = document.createElement("img")
    image.setAttribute("class", "imagepro")
    image.src = el.image


    var h5 = document.createElement("h5")
    h5.innerText = el.offer
    h5.setAttribute("class", "offer")

    var p = document.createElement("p")
    p.innerText = "₹"+el.original
    p.innerText ="₹"+ el.before
    p.setAttribute("class", "original")
    p.setAttribute("class", "before")


    div.append(image, h5, p)
    document.getElementById("rightbox").append(div)
  })


}
display1(data1)
let datainlocal = (el) => {
  localStorage.setItem("item", JSON.stringify(el))
  window.location.href = "../geekbuyingsproject/showdetaileddata/showdata.html"
}

var data2 = [{
  image: "https://img.gkbcdn.com/bn/2205/488x2743-628f62882b40c91f8cd36998._p1_.jpg",
  abouts: "Smart Home",
  dis: "Smart cleansing robots and vaccums and keep floor constantly clean and greams free"

}, {
  image: "https://img.gkbcdn.com/bn/2205/488x274-628f63522b40c91f8cd3699a._p1_.jpg",
  abouts: "E-Transport",
  dis: "My Speed,My rides,My journey,My Tranport,I,m keeping wp with myself"

}, {
  image: "https://img.gkbcdn.com/bn/2205/488x2743-628f62882b40c91f8cd36998._p1_.jpg",
  abouts: "3-D printers",
  dis: "3-d printers allows you to printers digititallu model design of life by using highly detailed filament"

}]

let display2 = (data) => {
  data.forEach(function (el) {
    var div = document.createElement("div")


    var image = document.createElement("img")
    image.src = el.image
    image.setAttribute("class", "img2")

    var about = document.createElement("h4")
    about.innerText = el.abouts
    about.setAttribute("class", "about")

    var dis = document.createElement("p")
    dis.innerText = el.dis
    dis.setAttribute("class", "dis")

    div.append(image, about, dis)
    document.getElementById("blog").append(div)
  })
}
display2(data2)
let data3 = [
  {

    image: "https://img.gkbcdn.com/p/2022-05-25/Hawkeye-Firefly-X-4K-60fps-170-Degree-Wide-Angle-501280-0._w280_p1_.jpg",
    original: 18738,
    before: 18538,
    detail: "Hawkeve firefly X?$K 170degree Wide angle wifi gryo camera"


  },
  {

    image: "https://img.gkbcdn.com/p/2022-06-07/MIYOO-Mini-32GB-3000-Games-Retro-Handheld-Game-Console-Blue-501578-0._w280_p1_.jpg",
    original: 2220.12,
    before: 2229,
    detail: "Miyyo mini 32gb storing device "


  },
  {

    image: "https://img.gkbcdn.com/p/2022-06-08/GREEN-TIME-T2-Alarm-Clock-Radio-White-501646-0._w280_p1_.jpg",
    original: 24151.23,
    before: 24123,
    detail: "green Time green dual usb Alarm clock wireless radio"


  },
  {

    image: "https://img.gkbcdn.com/p/2022-05-25/Hawkeye-Firefly-X-4K-60fps-170-Degree-Wide-Angle-501280-0._w280_p1_.jpg",
    original: 12000.10,
    before: 12010,
    detail: "Mini wireless camera real Nanny tiny camera "


  },
  {

    image: "https://img.gkbcdn.com/p/2022-05-17/Mini-Camera-Full-HD-1080P-Camcorder-500596-0._w280_p1_.jpg",
    original: 18538,
    before: 18588,
    detail: "Hawkeve firefly X?$K 170degree Wide angle wifi gryo camera"


  },
  {

    image: "https://img.gkbcdn.com/p/2022-05-09/ANBERNIC-RG503-Portable-Game-Console-16-64GB-Black-500314-0._w280_p1_.jpg",
    original: 18038,
    before: 18538,
    detail: "Hawkeve firefly X?$K 170degree Wide angle wifi gryo camera"


  },
  {

    image: "https://img.gkbcdn.com/p/2022-04-07/909cca47ceb64f20b40bf8c04f5b78de-499246-0._w280_p1_.jpg",
    original: 15203,
    before: 18538,
    detail: "Hawkeve firefly X?$K 170degree Wide angle wifi gryo camera"


  },
  {

    image: "https://img.gkbcdn.com/p/2022-05-25/Haylou-RS3-LS04-Smartwatch-1-2-Inch-AMOLED-HD-Display-501268-0._w280_p1_.jpg",
    original: 18038,
    before: 18538,
    detail: "Hawkeve firefly X?$K 170degree Wide angle wifi gryo camera"


  },
  {

    image: "https://img.gkbcdn.com/p/2022-05-17/Mini-Camera-Full-HD-1080P-Camcorder-500596-0._w280_p1_.jpg",
    original: 18138,
    before: 18538,
    detail: "Hawkeve firefly X?$K 170degree Wide angle wifi gryo camera"


  },
  {

    image: "https://img.gkbcdn.com/p/2022-05-25/Hawkeye-4K-Split-V4-Recording-Low-latency-FPV-Camera-with-Gyroflow-501277-0._w280_p1_.jpg",
    original: 18538,
    before: 18589,
    detail: "Hawkeve firefly X?$K 170degree Wide angle wifi gryo camera"


  },
  {

    image: "https://img.gkbcdn.com/p/2022-05-30/3-5-Inch-IPS-TYPE-C-Secondary-Screen-CPU-GPU-RAM-HDD-Monitoring-501430-0._w280_p1_.jpg",
    original: 1852,
    before: 1898,
    detail: "Hawkeve firefly X?$K 170degree Wide angle wifi gryo camera"


  },
]


function displaydata(data) {
  data.forEach(function (ele) {
    var div3 = document.createElement("div")
    div3.addEventListener("click", function () {
      datainlocal(ele)
    })
    var image = document.createElement("img")
    image.src = ele.image
    image.setAttribute("class", "simage")

    var original = document.createElement("p")
    var before = document.createElement("p")
    original.innerText ="₹"+ele.original
    before.innerText = ele.before


    before.setAttribute("class", "sbefore")


    var dis = document.createElement("h5")
    dis.innerText = ele.detail
    dis.setAttribute("class", "sdis")

    div3.append(image, original, dis)
    document.getElementById("Showdata").append(div3)
  })
}
displaydata(data3)


const pc = [...document.querySelectorAll("#Showdata")]
const btn1 = [...document.querySelectorAll(".pre")]
const btn2 = [...document.querySelectorAll(".fwd")]

pc.forEach(function (el, index) {
  let cd = el.getBoundingClientRect()
  let w = cd.width
  btn1[index].addEventListener("click", () => {
    el.scrollLeft = el.scrollLeft - w
  })
  btn2[index].addEventListener("click", () => {
    el.scrollLeft = el.scrollLeft + w
  })
})

const pc1 = [...document.querySelectorAll("#Showdata2")]
const btn11 = [...document.querySelectorAll(".pre2")]
const btn21 = [...document.querySelectorAll(".fwd2")]

pc1.forEach(function (el, index) {
  let cd1 = el.getBoundingClientRect()
  let w1 = cd1.width
  btn11[index].addEventListener("click", () => {
    el.scrollLeft = el.scrollLeft - w1
  })
  btn21[index].addEventListener("click", () => {
    el.scrollLeft = el.scrollLeft + w1
  })
})

var data4 = [
  {
    image: "https://img.gkbcdn.com/p/2020-01-07/Xiaomi-Mijia-LCD-Writing-Tablet-10-Inch-With-Pen-White-895504-._w280_p1_.jpg",
    off: 30 + "%off",
    detail: "Tronsmart Element Mega SoundPulse™ Bluetooth 5.0 Speaker",
    star: "🌟🌟🌟🌟🌟",
    original: 152220,
    before: 152720,
  },
  {
    image: "https://img.gkbcdn.com/p/2022-03-04/Lenovo-Thinkplus-LP3-Wireless-Bluetooth-Earphone-Black-497326-0._w280_p1_.jpg",
    off: 20 + "%off",
    detail: "Lenovo thinkplus LP3 ANC Bluetooth 5.2 TWS Earphones, Active Noise",
    star: "🌟🌟🌟🌟🌟",
    original: 2890.0,
    before: 2990.0
  },
  {
    image: "https://img.gkbcdn.com/p/2019-10-07/xiaomi-air-2-bluetooth-5-0-tws-earphone--ir-sensor-lhdc-stereo-1574132283996._w280_p1_.jpg",
    off: 20 + "%off",
    detail: "Tronsmart Force SoundPulse™ 40W Bluetooth 5.0 Speaker IPX7 Water",
    star: "🌟🌟🌟🌟🌟",
    original: 4589.22,
    before: 4989.2,
  },
  {
    image: "https://img.gkbcdn.com/p/2018-12-28/sg106-1080p-wifi-fpv-rc-drone-rtf-black-1574132216240._w280_p1_.jpg",
    off: 30 + "%off",
    detail: "ZLL SG106 Wifi FPV RC Drone with 1080P HD Camera Optical Flow",
    star: "🌟🌟🌟🌟🌟",
    original: 40225.53,
    before: 40295.5,
  },
  {
    image: "https://img.gkbcdn.com/p/2021-07-05/Hi96-V3-Android-9-0-Hi3798M-V310-1GB-8GB-TV-BOX-461096-0._w280_p1_.jpg",
    off: 30 + "%off",
    detail: "Mifo O7 Bluetooth 5.0 Qualcomm QCC3020 TWS Earphones Carbon",
    star: "🌟🌟🌟🌟🌟",
    original: 2134.53,
    before: 2347.5,
  },
  {
    image: "https://img.gkbcdn.com/p/2021-04-12/4inch-32GB-Handheld-Portable-Game-Console-5000-Games-458415-1._w280_p1_.jpg",
    off: 30 + "%off",
    detail: "Mifo O7 Bluetooth 5.0 Qualcomm QCC3020 TWS Earphones Carbon",
    star: "🌟🌟🌟🌟🌟",
    original: 1345.53,
    before: 1890.5,
  },
  {
    image: "https://img.gkbcdn.com/p/2022-03-09/Powkiddy-V90-Flip-Game-Pocket-Console-Black-497449-0._w280_p1_.jpg",
    off: 30 + "%off",
    detail: "Mifo O7 Bluetooth 5.0 Qualcomm QCC3020 TWS Earphones Carbon",
    star: "🌟🌟🌟🌟🌟",
    original: 1025.53,
    before: 1230.5,
  },
  {
    image: "https://img.gkbcdn.com/p/2019-07-12/haylou-gt1-tws-earphones-bluetooth-5-0-black-1571987624380._w280_p1_.jpg",
    off: 30 + "%off",
    detail: "Mifo O7 Bluetooth 5.0 Qualcomm QCC3020 TWS Earphones Carbon",
    star: "🌟🌟🌟🌟🌟",
    original: 2034.53,
    before: 3045.5,
  },
  {
    image: "https://img.gkbcdn.com/p/2021-07-06/2-4g-controller-gamepad-1625560641219._w280_p1_.jpg",
    off: 30 + "%off",
    detail: "Mifo O7 Bluetooth 5.0 Qualcomm QCC3020 TWS Earphones Carbon",
    star: "🌟🌟🌟🌟🌟",
    original: 1012.53,
    before: 1026.5,
  },
  {
    image: "https://img.gkbcdn.com/p/2021-06-02/Tronsmart-Studio-30W-Bluetooth-Speaker-459902-0._w280_p1_.jpg",
    off: 30 + "%off",
    detail: "Mifo O7 Bluetooth 5.0 Qualcomm QCC3020 TWS Earphones Carbon",
    star: "🌟🌟🌟🌟🌟",
    original:2200.53,
    before: 2345.5,
  },
  {
    image: "https://img.gkbcdn.com/p/2020-04-22/sabbat-e12-bluetooth-5-0-tws-earphone-gunmetal-1587519936946._w280_p1_.jpg",
    off: 30 + "%off",
    detail: "Mifo O7 Bluetooth 5.0 Qualcomm QCC3020 TWS Earphones Carbon",
    star: "🌟🌟🌟🌟🌟",
    original: 1025.53,
    before: 1125.5,
  },
  {
    image: "https://img.gkbcdn.com/p/2018-12-11/xiaomi-mijia-bedside-lamp-2-white-1571981079599._w280_p1_.jpg",
    off: 30 + "%off",
    detail: "Mifo O7 Bluetooth 5.0 Qualcomm QCC3020 TWS Earphones Carbon",
    star: "🌟🌟🌟🌟🌟",
    original: 1025.53,
    before: 1125.5,
  },
  {
    image: "https://img.gkbcdn.com/p/2017-10-28/ipega-pg-9078-wireless-bluetooth-gamepad-black-1571994388383._w280_p1_.jpg",
    off: 30 + "%off",
    detail: "Mifo O7 Bluetooth 5.0 Qualcomm QCC3020 TWS Earphones Carbon",
    star: "🌟🌟🌟🌟🌟",
    original: 1025.53,
    before: 1095.5,
  },
  {
    image: "https://img.gkbcdn.com/p/2021-11-29/razer-deathadder-essential-optical-gaming-mouse-black-aa9d23-1638169302886._w280_p1_.jpg",
    off: 30 + "%off",
    detail: "Mifo O7 Bluetooth 5.0 Qualcomm QCC3020 TWS Earphones Carbon",
    star: "🌟🌟🌟🌟🌟",
    original: 1025.53,
    before: 1295.5,

  },
  {
    image: "https://img.gkbcdn.com/p/2020-08-27/SATA-Pen-24-In-1-Screwdriver-Kit-426098-0._w280_p1_.jpg",
    off: 30 + "%off",
    detail: "Mifo O7 Bluetooth 5.0 Qualcomm QCC3020 TWS Earphones Carbon",
    star: "🌟🌟🌟🌟🌟",
    original: 1025.53,
    before: 1029.5,
  },
  {
    image: "https://img.gkbcdn.com/p/2018-11-22/netac-n600s-1tb-ssd-2-5-inch-solid-state-drive-blue-1571991121689._w280_p1_.jpg",
    off: 30 + "%off",
    detail: "Mifo O7 Bluetooth 5.0 Qualcomm QCC3020 TWS Earphones Carbon",
    star: "🌟🌟🌟🌟🌟",
    original: 1025.53,
    before: 1095.5,
  },
  {
    image: "https://img.gkbcdn.com/p/2018-04-13/logitech-c930e-1080p-hd-video-webcam-90-degree-extended-view-1571993532041._w280_p1_.jpg",
    off: 30 + "%off",
    detail: "Mifo O7 Bluetooth 5.0 Qualcomm QCC3020 TWS Earphones Carbon",
    star: "🌟🌟🌟🌟🌟",
    original: 1025.53,
    before: 1095.5,
  },
  {
    image: "https://img.gkbcdn.com/p/2021-03-30/xiaomi-mi-band-6-smart-bracelet-1-56-inch-screen-black-1617074128547._w280_p1_.jpg",
    off: 30 + "%off",
    detail: "Mifo O7 Bluetooth 5.0 Qualcomm QCC3020 TWS Earphones Carbon",
    star: "🌟🌟🌟🌟🌟",
    original: 1025.53,
    before: 2025.5,
  },
  {
    image: "https://img.gkbcdn.com/p/2022-03-05/343ff9fe8cea46f48ba1025ffadf4a58-497360-0._w280_p1_.jpg",
    off: 30 + "%off",
    detail: "Mifo O7 Bluetooth 5.0 Qualcomm QCC3020 TWS Earphones Carbon",
    star: "🌟🌟🌟🌟🌟",
    original: 1025.53,
    before: 1095.5,
  },
  {
    image: "https://img.gkbcdn.com/p/2020-03-18/Tronsmart-Onyx-Ace-Bluetooth-5-0-TWS-Earphones-White-899355-._w280_p1_.jpg",
    off: 30 + "%off",
    detail: "Mifo O7 Bluetooth 5.0 Qualcomm QCC3020 TWS Earphones Carbon",
    star: "🌟🌟🌟🌟🌟",
    original: 1025.53,
    before: 10295.5,
  },
]
let display4 = (data) => {
  data.forEach(function (el) {
    var div = document.createElement("div")
    div.addEventListener("click", function () {
      datainlocal(el)
    })
    var image = document.createElement("img")
    image.setAttribute("class", "imgp")
    image.src = el.image

    var h5 = document.createElement("h5")
    h5.innerText = el.off
    h5.setAttribute("class", "off")

    var h4 = document.createElement("h4")
    h4.innerText = el.detail
    h4.setAttribute("class", "discri")

    var p = document.createElement("p")
    p.innerText ="₹"+ el.original
    // p.innerText = el.before

    p.setAttribute("class", "befored")

    var star = document.createElement("p")
    star.innerText = el.star
    star.id = star
    star.setAttribute("class", "star")

    div.append(image, h5, h4, star, p)
    document.getElementById("Showdata2").append(div)
  })

}
display4(data4)

let slideIndexs = 0;
showSlidess();

function showSlidess() {
  let i;
  let slides = document.getElementsByClassName("mySlidess");
  let dots = document.getElementsByClassName("dots");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexs++;
  if (slideIndexs > slides.length) { slideIndexs = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexs - 1].style.display = "block";
  dots[slideIndexs - 1].className += " active";
  setTimeout(showSlidess, 2000); // Change image every 2 seconds
}

let data5 = [{
  image: "https://img.gkbcdn.com/p/2021-07-16/JIMMY-HW8-Pro-Cordless-Wireless-Wet-Dry-Smart-Vacuum-Cleaner-461370-0._w280_p1_.jpg",
  off: 20 + "%off",
  detail: "JIMMY PowerWash HW8 Pro Cordless Wet Dry Smart quality",
  original: 10254.53,
  before: 102954.5

},
{
  image: "https://img.gkbcdn.com/p/2021-07-16/JIMMY-HW8-Cordless-Wireless-Wet-Dry-Smart-Vacuum-Cleaner-461369-0._w280_p1_.jpg",
  off: 30 + "%off",
  detail: "JIMMY PowerWash HW8 Cordless Wet Dry Smart quality",
  original: 34053,
  before: 34025.,


},
{
  image: "https://img.gkbcdn.com/p/2020-04-09/JIMMY-JV35-Anti-mite-Vacuum-Cleaner-Gray-899874-._w280_p1_.jpg",
  off: 30 + "%off",
  detail: "JIMMY JV35 Handheld Anti-mite Vacuum Cleaner High",

  original: 8025.53,
  before: 80295.5,
},
{
  image: "https://img.gkbcdn.com/p/2021-03-02/JIMMY-H9-Pro-Cordless-Handheld-Vacuum-Cleaner-455418-0._w280_p1_.jpg",
  off: 30 + "%off",
  detail: "JIMMY H9 Pro Flexible Smart Handheld Cordless Vacuum",
  original: 9025.53,
  before: 90295.5,
},]

let data6 = [{
  image: "https://img.gkbcdn.com/p/2022-04-24/eleglide-m1-plus-upgraded-version-electric-bike-12-5ah-250w-black-258649-1650765309927._w280_p1_.jpg",
  off: 20 + "%off",
  detail: "ELEGLIDE M1 PLUS Electric Mountain Bike flowless",
  original: 10254.5,
  before: 102954.,

},
{
  image: "https://img.gkbcdn.com/p/2021-10-28/36v-10-4ah-removable-battery-for-eleglide-f1-electric-bike-1635406527480._w280_p1_.jpg",
  off: 30 + "%off",
  detail: "JIMMY PowerWash HW8 Cordless Wet Dry Smart",
  original: 34025.5,
  before: 34925.,

},
{
  image: "https://img.gkbcdn.com/p/2021-10-28/36v-10-4ah-removable-battery-for-eleglide-f1-electric-bike-1635406527480._w280_p1_.jpg",
  off: 30 + "%off",
  detail: "JIMMY JV35 Handheld Anti-mite Vacuum Cleaner High",

  original: 8025.53,
  before: 8025.5,
},
{
  image: "https://img.gkbcdn.com/p/2021-10-28/36v-12-5ah-removable-battery-for-eleglide-m1-plus---m1-electric-bike-1635405942861._w280_p1_.jpg",
  off: 30 + "%off",
  detail: "JIMMY H9 Pro Flexible Smart Handheld Cordless Vacuum",
  original: 9025.53,
  before: 90295.5,
},]
let data7 = [
  {
    image: "https://img.gkbcdn.com/p/2020-10-14/tronsmart-element-mega-pro-60w-bluetooth-5-0-speaker-1602637495048._w280_p1_.jpg",
    off: 20 + "%off",
    detail: "Tronsmart Element Mega Pro 60W Bluetooth 5.0 Speaker",
    original: 10254.5,
    before: 102954

  },
  {
    image: "https://img.gkbcdn.com/p/2021-10-12/tronsmart-splash-1-led-15w-bluetooth-speaker-1634038411944._w280_p1_.jpg",
    off: 30 + "%off",
    detail: "Tronsmart Splash 1 LED 15W Bluetooth Speaker IPX7",
    original: 34025.5,
    before: 34025.,

  },
  {
    image: "https://img.gkbcdn.com/p/2020-12-09/Tronsmart-Apollo-Q10-ANC-Bluetooth-Headphones-Black-426941-0._w280_p1_.jpg",
    off: 30 + "%off",
    detail: "Tronsmart Apollo Q10 ANC Active Noise Cancelling good ",

    original: 8025.53,
    before: 8022.5,
  },
  {
    image: "https://img.gkbcdn.com/p/2020-01-09/Tronsmart-element-T6-plus-Upgrade-Black-895558-._w280_p1_.jpg",
    off: 30 + "%off",
    detail: "Tronsmart T6 Plus Upgraded Edition Bluetooth 5.0 40W sound ",
    original: 9025.53,
    before: 9295.5,
  }
]


import { display5 } from "./slider/slide.js"

display5(data5, document.querySelector(".con-1"))

display5(data6, document.querySelector(".con-2"))


display5(data7, document.querySelector(".con-3"))


const pc3 = [...document.querySelectorAll("#Showdata3")]
const btn13 = [...document.querySelectorAll(".pre3")]
const btn23 = [...document.querySelectorAll(".fwd3")]

pc3.forEach(function (el, index) {
  let cd = el.getBoundingClientRect()
  let w = cd.width
  btn13[index].addEventListener("click", () => {
    el.scrollLeft = el.scrollLeft - w
  })
  btn23[index].addEventListener("click", () => {
    el.scrollLeft = el.scrollLeft + w
  })
})

let data8 = [{
  Image: "https://img.gkbcdn.com/p/2020-01-09/Tronsmart-element-T6-plus-Upgrade-Black-895558-._w280_.jpg"
}, {
  Image: "https://img.gkbcdn.com/p/2022-05-19/jimmy-sirius-hw10-cordless-3-in-1-vacuum---washer-019dee-1652959772707._w280_.jpg"
}, {
  Image: "https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-force-portable-bluetooth-speaker-1574132217684._w280_.jpg"
}, {
  Image: "https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-force-portable-bluetooth-speaker-1574132217684._w280_.jpg"
}, {
  Image: "https://img.gkbcdn.com/p/2022-02-09/Lenovo-Thinkplus-LP1-Pro-True-Wireless-Earphones-Silver-496225-0._w280_.jpg"
}, {
  Image: "https://img.gkbcdn.com/p/2022-04-11/Bobot-DEEP-832-Cordless-Washer-Vacuum-Cleaner-499393-0._w280_.jpg"
}, {
  Image: "https://img.gkbcdn.com/p/2021-11-02/Wireless-Bluetooth-Speaker-USB-FM-3W-Bamboo-146143-476649-0._w280_.jpg"
}, {
  Image: "https://img.gkbcdn.com/p/2022-03-29/YOMA-N3-Handheld-Cordless-Broom-Vacuum-Cleaner-498452-0._w280_.jpg"
}, {
  Image: "https://img.gkbcdn.com/p/2020-10-30/ROIDMI-NEX-2-Plus-Smart-Cordless-Handheld-Vacuum-Cleaner-Gray-426608-1._w280_.jpg"
}, {
  Image: "https://img.gkbcdn.com/p/2018-10-15/xiaomi-type-c-earphone-dynamic-driver-ceramics-driver-1572312024990._w280_.jpg"
}, {
  Image: "https://img.gkbcdn.com/p/2019-07-10/xiaomi-jimmy-jv53-vacuum-cleaner-purple-1571992956341._w280_.jpg"
}, {
  Image: "https://img.gkbcdn.com/p/2022-03-17/INSE-S600-Cordless-Upright-Vacuum-Cleaner-497824-0._w280_.jpg"
}, {
  Image: "https://img.gkbcdn.com/p/2022-02-18/Lenovo-Thinkplus-XT95Pro-TWS-Wireless-Earphone-Luminous-Black-496699-0._w280_.jpg"
}, {
  Image: "https://img.gkbcdn.com/p/2022-02-25/Lenovo-Thinkplus-TW13-Wired-Earphone-Black-497201-0._w280_.jpg"
}, {
  Image: "https://img.gkbcdn.com/p/2022-02-25/Lenovo-Thinkplus-TW13-Wired-Earphone-Black-497201-0._w280_.jpg"
}, {
  Image: "https://img.gkbcdn.com/p/2020-09-04/jimmy-jv65-handheld-cordless-stick-vacuum-cleaner---water-tank---red--1599215100359._w280_.jpg"
}, {
  Image: "https://img.gkbcdn.com/p/2022-04-11/JIMMY-JV12-Anti-mite-Vacuum-Cleaner-499389-0._w280_.jpg"
}, {
  Image: "https://img.gkbcdn.com/p/2022-05-06/Tesvor-V8-Cordless-Mop-500275-0._w280_.jpg"
}, {
  Image: "https://img.gkbcdn.com/p/2022-04-11/Bobot-DEEP-832-Cordless-Washer-Vacuum-Cleaner-499393-0._w280_.jpg"
}]

function appending(data) {
  data.forEach(function (el) {
    var div = document.createElement("div")

    var image = document.createElement("img")
    image.src = el.Image
    image.setAttribute("class", "imgslide")

    div.append(image)
    document.getElementById("Showdata3").append(div)

  })
}
appending(data8)

var user = JSON.parse(localStorage.getItem("user"))
if(user.name ==null){
  document.getElementById("signin").innerText = "signin"
}
else{
  document.getElementById("signin").innerText = user.name
}

