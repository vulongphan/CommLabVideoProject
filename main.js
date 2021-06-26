var PagesArray = document.getElementsByClassName("page")
var curPage = 0;


var left_arrow = document.getElementById("left");
var right_arrow = document.getElementById("right");

left_arrow.addEventListener('click', () => {
    if (curPage > 0) {
        curPage -= 1;
        for (let i = 0; i < PagesArray.length; i++) {
            if (i !== curPage) {
                let page = PagesArray[i];
                page.style.display = 'none';
            }
            else {
                let page = PagesArray[i];
                page.style.display = 'block';
            }
        }
    }
});

right_arrow.addEventListener('click', ()=>{
    if (curPage < PagesArray.length-1) {
        curPage += 1
        for (let i = 0; i < PagesArray.length; i++) {
            if (i !== curPage) {
                console.log("Page index to be hidden: ", curPage);
                let page = PagesArray[i];
                page.style.display = 'none';
            }
            else {
                let page = PagesArray[i];
                page.style.display = 'block';
            }
        }
    }
})