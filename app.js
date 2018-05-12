function newItem() {
    var item = document.getElementById('input').value;
    var ul = document.getElementById("list");
    var li = document.createElement('li');

//li.appendChild(document.createTextNode("- "+item));
li.appendChild(document.createTextNode("- "+item))
ul.appendChild(li);
document.getElementById('input').value="";
li.onclick = removeItem;
}

document.body.onkeyup = function(e) {
    if(e.keyCode == 13) {
        newItem();
    }
}

function removeItem(e) {
    e.target.parentElement.removeChild(e.target);
}

/*
function myFunction() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();

    document.myForm.NAME.value = h + ":" + m + ":" + s;
    setTimeOut("myFunction()",1000);
}
*/

var d = new Date();
document.getElementById("demo").innerHTML = d.toDateString();

/*
function displayTime() {
    var today = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();

    document.displayTime = h + ":" + m + ":" + s;
    setTimeOut("displayTime()",1000);

}
*/
