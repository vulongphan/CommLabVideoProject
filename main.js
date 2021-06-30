var PagesArray = document.getElementsByClassName("page");
var ProgressSegmentsArray = document.getElementsByClassName("progress-segment");
var curPage = 0;


var left_arrow = document.getElementById("left");
var right_arrow = document.getElementById("right");

// initial rendering
PagesArray[0].style.display = 'block';
ProgressSegmentsArray[0].style.background = "black";
left_arrow.style.display = "none";

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
            if (i == 0) progressSegment.style.background = 'black';
            if (i == 1) progressSegment.style.background = '#FFD55A';
            if (i == 2) progressSegment.style.background = '#293250';
            if (i == 3) progressSegment.style.background = '#6DD47E';
        }
    }
}

//display arrows depending on curPage index
function displayArrows(curPage) {
    if (curPage === 0) {
        left_arrow.style.display = "none";
    }
    else {
        left_arrow.style.display = "block";
        right_arrow.style.display = "block";
    }
}


// update current page index when user clicks left arrow
left_arrow.addEventListener('click', () => {
    if (curPage > 0) {
        curPage -= 1;
        displayCurrentPage(curPage);
        displayCurrentProgressSegment(curPage);
        displayArrows(curPage);
    }
});

// update current page index when user clicks right arrow
right_arrow.addEventListener('click', ()=>{
    if (curPage < PagesArray.length-1) {
        curPage += 1
        displayCurrentPage(curPage);
        displayCurrentProgressSegment(curPage);
        displayArrows(curPage);
    }
})

