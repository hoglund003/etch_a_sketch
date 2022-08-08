const container = document.querySelector(".container");

for (let x = 0; x < 16; x++) {
    var x_div = document.createElement("div");
    x_div.setAttribute("class", `x ${x.toString()}`);
    container.appendChild(x_div);

    for (let y = 0; y < 16; y++) {
        var y_div = document.createElement("div");
        y_div.setAttribute("class", `y ${y.toString()}`);
        x_div.appendChild(y_div);
    }
}