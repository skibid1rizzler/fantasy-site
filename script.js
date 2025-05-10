document.addEventListener("DOMContentLoaded", function () {
    let backgroundColor = localStorage.getItem("backgroundColor") || "#4a3d8f";
    document.body.style.background = backgroundColor;
});

function changeBackground(color) {
    document.body.style.background = color;
    localStorage.setItem("backgroundColor", color);
}
