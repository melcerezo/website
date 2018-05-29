// wait for page to load before registering events
window.addEventListener('load',registerEvents,false);


// register event listeners
function registerEvents(e) {

  document.getElementById("burger").addEventListener('click', function() {
    this.classList.toggle('is-active');
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  }, false);

  // register click event with each link in navbar
  var links = document.getElementsByClassName("anc-link");
  for(var i = 0; i <links.length; i++){
    links[i].addEventListener('click',function(){
      var thisTo = this.getAttribute('data-anchorId');
      document.getElementById(thisTo).scrollIntoView('smooth');
    }, false);


}

// function windowSize(windowWidth, links){
//   console.log(windowWidth);
//   if(windowWidth >= 800){
//     for(var i = 0; i <links.length; i++){
//       links[i].removeEventListener
//       links[i].addEventListener('click',function(){
//         var thisTo = this.getAttribute('data-anchorId');
//         scrollTo(document.documentElement, document.getElementById(thisTo).offsetTop, 600)
//       }, false);
//     }
//   }else{
//     for(var i = 0; i <links.length; i++){
//       links[i].addEventListener('click',function(){
//         var thisTo = this.getAttribute('data-anchorId');
//         document.getElementById(thisTo).scrollIntoView('smooth');
//       }, false);
//     }
//   }
// }


// function scrollTo(element, to, duration){
//   if(duration <= 0){
//     return;
//   }
//   var difference = to - element.scrollTop;
//   var perTick = difference / duration * 10;
//
//   setTimeout(function() {
//     element.scrollTop = element.scrollTop + perTick;
//     if(element.scrollTop === to) return;
//     scrollTo(element, to, duration - 10);
//   }, 10);
// }
