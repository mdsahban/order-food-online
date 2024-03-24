let prev = document.querySelector(".prev");
    let next = document.querySelector(".next");
    let box = document.querySelector(".menu-box");
    let modeBtn = document.querySelector("#checkbox");



    modeBtn.onchange = (e) => {
        if (modeBtn.checked === true) {
            document.body.classList.add("dark-mode")
            window.localStorage.setItem('mode', 'dark-mode');
        } else {
            document.body.classList.remove("dark-mode")
            window.localStorage.setItem('mode', 'light-mode');

        }
    }

    const mode = window.localStorage.getItem('mode');
    if (mode == 'dark-mode') {
        modeBtn.checked = true;
        document.body.classList.add("dark-mode")
    }

    if (mode == 'light-mode') {
        modeBtn.checked = false;

        document.body.classList.remove("dark-mode")

    }




    next.addEventListener("click", () => {
        box.style.scrollBehavior = "smooth";
        box.scrollLeft += 600;

    });


    prev.addEventListener("click", () => {
        box.style.scrollBehavior = "smooth";

        box.scrollLeft -= 600;

    });

    let menulist = document.querySelector(".menu");
    menulist.style.maxHeight = "0px";
    let menubtn = document.getElementById("menuicon");

    function myFunction() {
        if (menulist.style.maxHeight == "0px") {
            menulist.style.maxHeight = "400px";
            menubtn.className = "fa fa-times";
            // header.style.background = "#2c1e3e";

        }
        else {
            menulist.style.maxHeight = "0px";
            menubtn.className = "fa fa-bars";
            // header.style.background = "#2c1e3e"

        }
    }

    function myFunction2() {
   if (menulist.style.maxHeight == "295px"){
       menulist.style.maxHeight = "0px";
       menubtn.className ="fa fa-bars";
}

} 