var PagesArray = document.getElementsByClassName("page");
var ProgressSegmentsArray = document.getElementsByClassName("progress-segment");
var curPage = 0;
var submitted = false;
var kahoot = document.getElementById("myAudio");


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
            if (i == 2) progressSegment.style.background = '#B7C5ED';
            if (i == 3) progressSegment.style.background = '#5F79C4';
            if (i == 4) progressSegment.style.background = '#2D4587';
            if (i == 5) progressSegment.style.background = '#1CC5DC';
            if (i == 6) progressSegment.style.background = '#6DD47E';
        }
    }
}

//display arrows depending on curPage index
function displayArrows(curPage) {
    if (curPage === 0) {
        left_arrow.style.display = "none";
    }
    else if (curPage === PagesArray.length-1) {
        right_arrow.style.display = "none";
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
        console.log("left arrow clicked, curPage: ", curPage);
        displayCurrentPage(curPage);
        displayCurrentProgressSegment(curPage);
        displayArrows(curPage);
    }
    refreshVariables();
});

// update current page index when user clicks right arrow
right_arrow.addEventListener('click', ()=>{
    if (curPage < PagesArray.length-1) {
        curPage += 1
        console.log("right arrow clicked, curPage: ", curPage);
        displayCurrentPage(curPage);
        displayCurrentProgressSegment(curPage);
        displayArrows(curPage);
    }
    refreshVariables();
})

function refreshVariables() {
    kahoot.pause();
    document.getElementById("video21").pause();
    document.getElementById("video22").pause();
    document.getElementById("video23").pause();
    document.getElementById("video21").currentTime = 0;
    document.getElementById("video22").currentTime = 0;
    document.getElementById("video23").currentTime = 0;
    document.getElementById("pause21").style.opacity=1;
    document.getElementById("pause22").style.opacity=1;
    document.getElementById("pause23").style.opacity=1;
    document.getElementById("rimg").src="images/right.png";
    kahoot.currentTime = 0;
    submitted= false;
}

function submitStatus(vidName, overName, timeSec) {
    kahoot.pause();
    submitted = true;
    if (vidName.currentTime >= timeSec && submitted == true) {
        
        overName.style.display="none";
    }
    vidName.play();
}

function pauseVideo(vidName, overName, timeSec) {
    if(vidName.currentTime >= timeSec && submitted == false) {
        vidName.pause();
        kahoot.play();
        overName.style.display="block";
    }
}

function videoAction(vidName, pauseVal) {
    if (vidName.paused) {
        vidName.play();
        document.getElementById("pause21").style.opacity=0;
        document.getElementById("pause22").style.opacity=0;
        document.getElementById("pause23").style.opacity=0;
        // ppbutton.innerHTML = "Pause";
        }
    else  {
        vidName.pause();
        document.getElementById("pause21").style.opacity=0.8;
        document.getElementById("pause22").style.opacity=0.8;
        document.getElementById("pause23").style.opacity=0.8; 
        // ppbutton.innerHTML = "Play";
        }
}

function endScreen() {
    document.getElementById("pause21").style.opacity=0.9;
    document.getElementById("pause22").style.opacity=0.9;
    document.getElementById("pause23").style.opacity=0.9;
    document.getElementById("rimg").src="images/move.png";
}