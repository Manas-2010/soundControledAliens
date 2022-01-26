function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Y1Z2AGkYi/model.json", modelLoded);
}

function modelLoded(){
    classifier.classify(gotresult);
    console.log("Model Loded!");
}

function gotresult(error, results){
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        ramdomNumber_r = Math.floor(Math.random() * 255) + 1;
        ramdomNumber_g = Math.floor(Math.random() * 255) + 1;
        ramdomNumber_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can here: " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "I am confidence about: " + results[0].confidence
        document.getElementById("result_label").style.color = "rgb("+ramdomNumber_r+","+ramdomNumber_g+","+ramdomNumber_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+ramdomNumber_r+","+ramdomNumber_g+","+ramdomNumber_b+")";

        img1 = document.getElementById("alien1");
        img2 = document.getElementById("alien2");
        img3 = document.getElementById("alien3");
        img4 = document.getElementById("alien4");

        if (results[0].label == "Clap") {
            img1.src = "aliens-1.gif"
            img2.src = "aliens-2.png"
            img3.src = "aliens-3.png"
            img4.src = "aliens-4.png"
        }

        else if (results[0].label == "Snap") {
            img1.src = "aliens-1.png"
            img2.src = "aliens-2.gif"
            img3.src = "aliens-3.png"
            img4.src = "aliens-4.png"
        }

        else if (results[0].label == "Tapping") {
            img1.src = "aliens-1.png"
            img2.src = "aliens-2.png"
            img3.src = "aliens-3.gif"
            img4.src = "aliens-4.png"
        }

        else{
            img1.src = "aliens-1.png"
            img2.src = "aliens-2.png"
            img3.src = "aliens-3.png"
            img4.src = "aliens-4.gif"
        }
    }
}