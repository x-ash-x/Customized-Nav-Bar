$('.btn').click(function(){
    $("#container").toggleClass('nav-list-container');
})


function myFunction(x) {
  if (x.matches) {
    $("#container").addClass('nav-list-container');
  }
}

var x = window.matchMedia("(min-width: 700px)")
myFunction(x)
x.addListener(myFunction)
