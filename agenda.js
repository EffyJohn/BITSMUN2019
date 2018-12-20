var logos = document.getElementsByClassName("committee");

script.addEventListener("load", function(){
    for (i = 0; i < logos.length; i++)
    {
        logos[i].addEventListener("click", function(){
            if (this.classList.contains("clicked"))
            {
                
            }
        });
    }
});