const width = 560;
const height = 315;
let link;
const src = (url = link) => `https://www.youtube.com/embed/${url}`;
const frameborder = 0;
const allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
let allowfullscreen;
const videosId = [document.getElementById("vid0"), document.getElementById("vid1"),
                  document.getElementById("vid2"), document.getElementById("vid3"), 
                  document.getElementById("vid4"), document.getElementById("vid5"),
                  document.getElementById("vid6"), document.getElementById("vid7"),
                  document.getElementById("vid8"), document.getElementById("vid9"),
                  document.getElementById("vid10"), document.getElementById("vid11")]
let numOfVedios = 0;
console.clear();


document.getElementById("MainBtn").onclick = () => {
    link = document.getElementById("link").value;

    let vds = document.getElementById("vds");
    frame = document.createElement("iframe");
    frame.setAttribute("width", width);
    frame.setAttribute("height", height);
    frame.setAttribute("src", src());
    frame.setAttribute("frameborder", 0);
    frame.setAttribute("allow", allow);
    frame.setAttribute("allowfullscreen", "");
    vds.appendChild(frame);

    link = "";
    document.getElementById("link").value = "";
}