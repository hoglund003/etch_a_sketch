const container = document.querySelector(".container");
const button = document.querySelector(".btn.change");

function renderFrame(length_x, length_y) {
    container.innerHTML = "";

    for (let x = 0; x < length_x; x++) {
        var x_div = document.createElement("div");
        x_div.setAttribute("class", `x ${x.toString()}`);
        container.appendChild(x_div);
    
        for (let y = 0; y < length_y; y++) {
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
    var length_x = prompt("Length x:");
    var length_y = prompt("Length y:");

    if (length_x >= 100) {
        length_x = 100;
    }
    if (length_y >= 100) {
        length_y = 100;
    }
    if (length_x < 1) {
        length_x = 1;
    }
    if (length_y < 1) {
        length_y = 1;
    }

    renderFrame(length_x, length_y);
});

renderFrame(80, 80);