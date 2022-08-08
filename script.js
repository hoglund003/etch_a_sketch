const container = document.querySelector(".container");
const button = document.querySelector(".btn.change");

function renderFrame(size) {
    container.innerHTML = "";

    for (let x = 0; x < size; x++) {
        var x_div = document.createElement("div");
        x_div.setAttribute("class", `x ${x.toString()}`);
        container.appendChild(x_div);
    
        for (let y = 0; y < size; y++) {
            var y_div = document.createElement("div");
            y_div.setAttribute("class", `y ${y.toString()}`);
            x_div.appendChild(y_div);
        }
    }

    var y_divs = document.querySelectorAll(".y");
    for (let i = 0; i < y_divs.length; i++) {
        y_divs[i].addEventListener("mouseover", () => {
            y_divs[i].style.backgroundColor = "red";
        });
        
    }
}

button.addEventListener("click", function(e) {
    var size = prompt("Size: ");

    if (size > 100) {
        size = 100;
    }
    if (size < 1) {
        size = 1;
    }

    renderFrame(size);
});

renderFrame(80);