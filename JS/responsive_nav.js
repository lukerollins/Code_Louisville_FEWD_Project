function moreFun() {
    var x = document.getElementById("repoNavTop");
    if (x.className === "navtop") {
        x.className += "responsive";
    } else {
        x.className = "navtop";
    }
}