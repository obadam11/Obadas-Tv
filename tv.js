const width = 560;
const height = 315;
let link;
const src = (url = link) => `https://www.youtube.com/embed/${url}`;
const frameborder = 0;
const allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
let numOfVedios = 0;



console.clear();
document.getElementById("MainBtn").onclick = () => {
    link = document.getElementById("link").value;

    if (link != "") {
    numOfVedios ++;
    let vds = document.getElementById("vds");
    frame = document.createElement("iframe");

    let h2 = document.createElement("h2");
    let h2txt = document.createTextNode(numOfVedios);
    h2.appendChild(h2txt);
    console.log(h2txt);

    frame.setAttribute("width", width);
    frame.setAttribute("height", height);
    if (link.startsWith("https://www.youtube.com/embed/")) {
        frame.setAttribute("src", link)
    }
    
    else {
        frame.setAttribute("src", src());
    }
    
    
    frame.setAttribute("frameborder", 0);
    frame.setAttribute("allow", allow);
    frame.setAttribute("allowfullscreen", "");
    frame.style.padding = "20px";
    h2.style.color = "red";
    vds.appendChild(h2);
    vds.appendChild(frame);

    link = "";
    document.getElementById("link").value = "";
    console.log(numOfVedios);
    }
}


document.getElementById("delete").onclick = () => {
   link = document.getElementById('link').value;
   let allVds = document.querySelectorAll(".vds iframe");
   allVds[link - 1].remove();
   console.log(allVds);
   numOfVedios --;
   console.log(numOfVedios);
}

document.getElementById("delete-all").onclick = () => {
    console.log("clicked");
    let allVds = document.querySelectorAll(".vds iframe");
    console.log(allVds);
    for (let v of allVds) {
        v.remove();
        numOfVedios = 0;
    }
}