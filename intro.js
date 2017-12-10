var h = document.getElementById('h');
var originalHeader = h.innerHTML;

var replaceCallback = function(e) {
    h.innerHTML = e.path[0].innerHTML;
};
var thelist = document.getElementById('thelist');

var originalCallback = function(e) {
    console.log(e);
    h.innerHTML = originalHeader;
};

thelist.addEventListener( 'mouseover' , replaceCallback );
thelist.addEventListener( 'mouseout' , originalCallback );
