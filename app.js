const tubelight = () => {
    //alert("hi"); // to check function working oe not
    let btext = document.getElementById("bulbdata");
    for (let x = 1; x <= 5; x++) {
        let bid = document.getElementById("lightid".concat(x));
        //console.log(bid.src);//to check image files

        if (bid.src.match("bulbon")) {
            bid.src = "bulboff.jpg";
            btext.innerHTML = "Light OFF";
            btext.style.color = "yellowgreen";
        } else {
            bid.src = "bulbon.jpg";
            btext.innerHTML = "Light ON";
            btext.style.color = "red";
        }
    }
}