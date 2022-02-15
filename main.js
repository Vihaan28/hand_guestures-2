https://teachablemachine.withgoogle.com/models/HGlPvhD5W/
Webcam.set({
    width: 350 , 
    height: 300 , 
    img_format : 'png',
    png_quality : 99
 });

 var camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){

    Webcam.snap ( function(data_uri){
        document.getElementById("result").innerHTML = " <img id='captured_image' src='" + data_uri + "'>"
    });
}

console.log('ml5 version:' , ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/HGlPvhD5W/model.json" , modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!!');
}

function speak(){
var synth = window.speechSynthesis;

var speak_1 = "The First Prediction is" + Prediction1;
var speak_2 = "And the second Prediction is" + Prediction2;

var utter_this = new SpeechSynthesisUtterance( speak_1 + speak_2);
synth.speak(utter_this);
}