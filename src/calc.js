function add(a, b) {
    return a + b;
}


function mult(a, b) {
    return a * b;
}

function addNotes() {
    let ele = document.querySelector("textarea").value;
    let out = document.querySelector("#out");

    out.append(ele);
}
export { add, mult, addNotes }; 