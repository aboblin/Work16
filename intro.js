var h = document.getElementById('h');
var originalHeader = h.innerHTML;
var list = document.getElementById("thelist");
var otherlist = document.getElementById("theotherlist");
var listElements = document.getElementsByTagName("li");
var fibNum = 0;
//var otherlistElements = document.getElementsByTagName("li");

var replaceCallback = function(e) {
    h.innerHTML = e.path[0].innerHTML;
};

var originalCallback = function(e) {
    console.log(e);
    h.innerHTML = originalHeader;
};

var addElement = function(e){
    var num = listElements.length; //gives us the # of the next pos since len is 1 more than pos
    var temp = document.createElement("li");
    temp.innerHTML = "item " + num;
    list.appendChild(temp);
};

var addFibonacci = function(e){
    //var num = listElements.length; //gives us the # of the next pos since len is 1 more than pos
    var temp = document.createElement("li");
    temp.innerHTML = "item" + fibonacci(fibNum);
    fibNum += 1;
    otherlist.appendChild(temp);
};

//button orders matter. You can't use the code below if u put it with the other variables at the top
var button = document.getElementById("b");
button.addEventListener("click", addElement);
//----

var otherbutton = document.getElementById("ob");
otherbutton.addEventListener("click", addFibonacci);

var removeElement = function(e){
    this.remove();
}

var fibonacci = function(n) {
    if (n <= 1) {return 1;};
    return fibonacci(n - 2) + fibonacci(n - 1);
};


list.addEventListener( 'mouseover' , replaceCallback );
list.addEventListener( 'mouseout' , originalCallback );

for (num = 0; num < listElements.length; num++){
    listElements[num].addEventListener("click", removeElement)
}
