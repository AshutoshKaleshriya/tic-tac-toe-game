var count = 1;
function fill(control) {

    if (checkwin()) {
        alert("winner");
        reset();
    }
    else {
        if (count <= 9) {
            if (count % 2 != 0) {
                document.getElementById(control.id).innerHTML = "x";
            }
            else {
                document.getElementById(control.id).innerHTML = "o";
            }
            count++;
        }
        else {
            alert("match tie");
            document.getElementById("checker").innerHTML="winner";
            reset();
        }
    }
}
function reset() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById('div' + i).innerHTML = "";
    }
    count = 1;
}
function checkwin() {
    if (checkcondition('div1', 'div2', 'div3') || checkcondition('div1', 'div5', 'div9') || checkcondition('div1', 'div4', 'div7')
        || checkcondition('div2', 'div5', 'div8') || checkcondition('div3', 'div6', 'div9') || checkcondition('div4', 'div5', 'div6')
        || checkcondition('div7', 'div8', 'div9') || checkcondition('div3', 'div5', 'div')) {
        return true;
    }

}
function getdata(div) {
    return document.getElementById(div).innerHTML;
}
function checkcondition(div1, div2, div3) {
    if (getdata(div1) != "" && getdata(div2) != "" && getdata(div3) != "" && getdata(div1) ==
        getdata(div2) && getdata(div2) == getdata(div3)) {
        return true;
    }
}

