function Random(max) {
    return Math.floor(Math.random() * max);
}
for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
        let box = document.createElement("div");
        box.setAttribute("id", "box");
        document.getElementById("container").appendChild(box);
        box.addEventListener("mouseover", function RGBChange() {
            box.style.backgroundColor = `rgb(${Random(255)} ${Random(255)} ${Random(255)})`;
        });
    };
};