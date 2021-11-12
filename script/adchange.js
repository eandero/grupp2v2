//VG-critera: 3 of; loops, events, function, array, var, style change with css class
//DONE: 1.function, 2.array, 3.event


//Function that switches the ad randomly from the array
function randomAd() {
  //array with different ads
  const ads = ["delta1.png", "delta2.png", "delta3.png"];

  //random ad is chosen
  const ad = ads[Math.floor(Math.random()*ads.length)];

  //random ad is added in an img element within the id="bannerAd" section element
  document.getElementById("bannerAd").innerHTML = '<img src="pic/'+ad+'" width="100%" height="auto"></img>';
}

//When the id="bannerAd" section element loads the function is run to load an ad
document.getElementById("bannerAd").addEventListener("load", randomAd());
