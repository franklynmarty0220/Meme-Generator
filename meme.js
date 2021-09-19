const img = document.getElementsByTagName('img');
const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const meme = document.createElement("div");
    const topText = document.createElement("div");
    const lowerText = document.createElement("div");
    const img = document.createElement("img");
    
    let btn = document.createElement("button");
    btn.setAttribute("type","button");

    img.src = document.getElementById('picURL').value;
    topText.classList.add("topText");
    topText.innerHTML = document.getElementById('topText').value;

    lowerText.classList.add('lowerText');
    lowerText.innerHTML = document.getElementById('lowerText').value;

    btn.innerHTML = "Remove";

    meme.classList.add("meme");
    meme.appendChild(topText);
    meme.appendChild(lowerText);
    meme.appendChild(img);
    meme.appendChild(btn);

    const memeLocation = document.getElementById('location');
    memeLocation.appendChild(meme);

    document.getElementById('picURL').value = "";
    document.getElementById('topText').vaule = "";
    document.getElementById('lowerText').value = "";

    btn.addEventListener('click', function(e){
        meme.remove();
    });
});