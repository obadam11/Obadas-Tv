const width = 560;
const height = 315;
let link;
const src = (url = link) => `https://www.youtube.com/embed/${url}`;
const frameborder = 0;
const allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";


console.clear();
const toTwoDigits = (x) => (x < 10) ? `0${String(x)}` : x;

function readLocalStorage() {
    let vds = document.getElementById("vds");
    vds.style.alignContent = "center";


    for (let i = 0; i < localStorage.length; i++) {
        let f = document.createElement("iframe");
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        let h2 = document.createElement("h2");
        let h2txt = document.createTextNode(toTwoDigits(i + 1));
        h2.appendChild(h2txt);
        h2.style.color = "#187EFF";
        h2.style.textAlign = "center";

        f.setAttribute("src", value);
        f.setAttribute("width", width);
        f.setAttribute("height", height);
        f.setAttribute("frameborder", 0);
        f.setAttribute("allow", allow);
        f.setAttribute("allowfullscreen", "");
        f.style.padding = "25px";
        vds.appendChild(h2);
        vds.appendChild(f);
    }

};
readLocalStorage();


const submit = document.getElementById("MainBtn").onclick = () => {
    link = document.getElementById("link").value;

    if (link != "") {
    let vds = document.getElementById("vds");
    // This is for numbering
    let allVds = document.querySelectorAll(".vds iframe");
    let frame = document.createElement("iframe");

    let h2 = document.createElement("h2");
    let h2txt = document.createTextNode(toTwoDigits(allVds.length + 1));
    h2.appendChild(h2txt);
    console.log(h2txt);

    frame.setAttribute("width", width);
    frame.setAttribute("height", height);
    if (link.startsWith("https://www.youtube.com/embed/")) {
        frame.setAttribute("src", link);
        localStorage.setItem(String(link), String(link));
    }

    else if (link.startsWith("https://youtu.be/")) {
        let linkSub = link.slice(16);
        frame.setAttribute("src", src(linkSub));

        localStorage.setItem(String(src(linkSub)), String(src(linkSub)));

        
    }
    
    else {
        frame.setAttribute("src", src());

        localStorage.setItem(String(src()), String(src()));

    }
    
    
    frame.setAttribute("frameborder", 0);
    frame.setAttribute("allow", allow);
    frame.setAttribute("allowfullscreen", "");
    frame.style.padding = "10px";
    
    h2.style.color = "#187EFF";
    h2.style.textAlign = "center";
    vds.appendChild(h2);
    vds.style.alignContent = "center";
    vds.appendChild(frame);

    


    link = "";
    document.getElementById("link").value = "";

    

    }
}


document.getElementById("delete").onclick = () => {
   link = document.getElementById('link').value;
   let allVds = document.querySelectorAll(".vds iframe"); 
   let allH2Tags = document.querySelectorAll(".vds h2");
   allVds[link - 1].remove();
   allH2Tags[link - 1].remove();

    // Manipulating Loacal Storage
   localStorage.removeItem(allVds[link - 1].getAttribute("src"));
   


   location.reload();
   
   
}

document.getElementById("delete-all").onclick = () => {
   let sure = confirm("Are you sure you eant to delete all your viedos?");
   if (sure) {
    console.log("clicked");
    let allVds = document.querySelectorAll(".vds iframe");
    let allH2 = document.querySelectorAll(".vds h2");
    console.log(allVds);
    for (let v of allVds) {
        v.remove();
        numOfVedios = 0;
    }
    for (let h of allH2) {
        h.remove();
    }
    // Manipulating Local Storage
    localStorage.clear();
    
   }
}

addEventListener('keypress', e => {
    if(e.key === 'Enter') {
        submit();
    }
});