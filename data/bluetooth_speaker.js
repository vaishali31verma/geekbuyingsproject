var Bluetooth_speaker = [
    
    {
    "image":"https://img.gkbcdn.com/p/2019-03-18/tronsmart-element-t6-plus-bluetooth-speaker-black-1574132869322._w280_p1_.jpg",
    "url":"https://www.geekbuying.com/deals?id=414905",
    "original":4710.54,
    "before":6280.98,
    "discount":"25% OFF"
    },
    {
    "image":"https://img.gkbcdn.com/p/2019-08-27/tronsmart-t2-plus-20w--bluetooth-5-0-speaker-tws-1571994588089._w280_p1_.jpg",
    "url":"https://www.geekbuying.com/deals?id=419179",
    "original":2590.44,
    "before":3297.14,
    "discount":"21% OFF"
    },
    
    {
    "image":"https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-mega-bluetooth-speaker-black-1571991584812._w280_p1_.jpg",
    "url":"https://www.geekbuying.com/deals?id=388375",
    "original":3454.19,
    "before":5260.20,
    "discount":"34% OFF"
    },
    {
      "image":
        "https://img.gkbcdn.com/p/2017-07-26/xiaomi-wifi-amplifier-pro-black-1574132393616._w280_.jpg",
      "original": 1569.66,
      "before": 2119.31,
      "discount": "26% OFF",
    },
    
       
];

    localStorage.setItem("Bluetooth_speaker", JSON.stringify(Bluetooth_speaker));

    console.log(Bluetooth_speaker)  
let pooja=document.querySelector("#pgrid");
let newfunction=(newArriva)=>{
newArriva.forEach((ele) => {
let re=document.createElement("div");

let one=document.createElement("img");
one.setAttribute("src",ele.image);

let onnn=document.createElement("p");
onnn.innerText=ele.detail


let two=document.createElement("h2");
two.innerText= "₹" + ele.original;

let three=document.createElement("h2");
three.innerText= "₹" + ele.before;

let four=document.createElement("h2");
four.innerText= "₹" + ele.discount;



re.append(one,two,three,four);
pooja.append(re);
});
}
newfunction(Bluetooth_speaker)
