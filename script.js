var mynav = $(".navbar")
window.onscroll= function(){
    if(document.documentElement.scrollTop>=100){
        mynav.addClass('bg-dark')
    }
    else{
        mynav.removeClass('bg-dark')
    }
}