var PagesArray = document.getElementsByClassName("page");
var ProgressSegmentsArray = document.getElementsByClassName("progress-segment");
var curPage = 0;


var left_arrow = document.getElementById("left");
var right_arrow = document.getElementById("right");

// initial rendering
PagesArray[0].style.display = 'block';
ProgressSegmentsArray[0].style.background = "black";

// display current page based on curPage index
function displayCurrentPage(curPage) {
    for (let i = 0; i < PagesArray.length; i++) {
        let page = PagesArray[i];
        if (i !== curPage) {
            page.style.display = 'none';
        }
        else {
            page.style.display = 'block';
        }
    }
}

// display current progress segment based on curPage index 
function displayCurrentProgressSegment(curPage) {
    for (let i = 0; i < ProgressSegmentsArray.length; i++){
        let progressSegment = ProgressSegmentsArray[i];
        if (i !== curPage) {
            progressSegment.style.background = "white";
        }
        else {
            progressSegment.style.background = "black";
        }
    }
}


// update current page index when user clicks left arrow
left_arrow.addEventListener('click', () => {
    if (curPage > 0) {
        curPage -= 1;
        displayCurrentPage(curPage);
        displayCurrentProgressSegment(curPage);
    }
});

// update current page index when user clicks right arrow
right_arrow.addEventListener('click', ()=>{
    if (curPage < PagesArray.length-1) {
        curPage += 1
        displayCurrentPage(curPage);
        displayCurrentProgressSegment(curPage);
    }
})

