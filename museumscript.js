//default tabs
function openMuseum(evt, museumName, n) {
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(museumName).style.display = "block";
    evt.currentTarget.classList.add("active");   
    
    document.getElementById("history" + n).style.display = "block";
    let buttons = document.getElementById("history" + n).parentNode.children[0].children;
    for (let b of buttons) {
        b.classList.remove('active');
    }
    buttons[0].classList.add('active');
} 

document.getElementById("defaultOpen").click(); 

//subTabs 
function openSubTab(eventt,subName) {
    var j, subcontent, subtablinks;

    subcontent = document.getElementsByClassName("sub-content");
    for(j = 0; j < subcontent.length; j++) {
        subcontent[j].style.display = "none";
    }
    subtablinks = document.getElementsByClassName("subtablinks");
    for(j = 0; j < subtablinks.length; j++) {
        subtablinks[j].classList.remove("active");
    }

    document.getElementById(subName).style.display = "block";
    eventt.currentTarget.classList.add("active");   
}

//slideshow
var slideIndex = 1;
function plusSlides(n , num) {
    showSlides(slideIndex += n, num);
}
function showSlides(n, num) {
    var i;
    var slides = document.getElementsByClassName("mySlides" + num);
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}