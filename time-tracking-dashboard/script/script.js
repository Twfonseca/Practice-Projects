
let dailyBtn= document.querySelector("#daybtn")
let weeklyBtn= document.querySelector("#weekbtn")
let monthlyBtn= document.querySelector("#monthbtn")
let workTime = document.querySelector("#workTime")
let lwWork = document.querySelector("#worklwTime")
let playTime = document.querySelector("#playTime")
let lwPlay = document.querySelector("#playlwTime")
let studyTime = document.querySelector("#studyTime")
let lwStudy= document.querySelector("#studylwTime")
let exerciseTime = document.querySelector("#exerciseTime")
let lwExercise = document.querySelector("#exerciselwTime")
let socialTime = document.querySelector("#socialTime")
let lwSocial = document.querySelector("#sociallwTime")
let selfTime = document.querySelector("#selfCareTime")
let lwSelf = document.querySelector("#selfcarelwTime")

dailyBtn.addEventListener("click",dailyChange)
weeklyBtn.addEventListener("click",weeklyChange)
monthlyBtn.addEventListener("click",monthlyChange)

function dailyChange(){

    dailyBtn.style.color="white";
    weeklyBtn.style.color="hsl(235, 45%, 61%)";
    monthlyBtn.style.color="hsl(235, 45%, 61%)";
    workTime.innerHTML="5hrs";
    lwWork.innerHTML="Last Week - 7hrs";
    playTime.innerHTML="1hr";
    lwPlay.innerHTML="Last Week - 2hrs";
    studyTime.innerHTML="0hr";
    lwStudy.innerHTML="Last Week - 1hr";
    exerciseTime.innerHTML="1hr";
    lwExercise.innerHTML="Last Week - 1hr";
    socialTime.innerHTML="1hr";
    lwSocial.innerHTML="Last Week - 3hrs";
    selfTime.innerHTML="0hr";
    lwSelf.innerHTML="Last Week - 1hr";

}


function weeklyChange(){

    weeklyBtn.style.color="white";
    dailyBtn.style.color="hsl(235, 45%, 61%)";
    monthlyBtn.style.color="hsl(235, 45%, 61%)";
    workTime.innerHTML="32hrs";
    lwWork.innerHTML="Last Week - 36hrs";
    playTime.innerHTML="10hrs";
    lwPlay.innerHTML="Last Week - 8hrs";
    studyTime.innerHTML="4hrs";
    lwStudy.innerHTML="Last Week - 7hrs";
    exerciseTime.innerHTML="4hrs";
    lwExercise.innerHTML="Last Week - 5hrs";
    socialTime.innerHTML="5hrs";
    lwSocial.innerHTML="Last Week - 10hrs";
    selfTime.innerHTML="2hrs";
    lwSelf.innerHTML="Last Week - 2hrs";

}


function monthlyChange(){

    monthlyBtn.style.color="white";
    weeklyBtn.style.color="hsl(235, 45%, 61%)";
    dailyBtn.style.color="hsl(235, 45%, 61%)";
    workTime.innerHTML="103hrs";
    lwWork.innerHTML="Last week - 128hrs";
    playTime.innerHTML="23hrs";
    lwPlay.innerHTML="Last Week - 8hrs";
    studyTime.innerHTML="13hrs";
    lwStudy.innerHTML="Last Week - 19hrs";
    exerciseTime.innerHTML="11hrs";
    lwExercise.innerHTML="Last Week - 18hrs";
    socialTime.innerHTML="21hrs";
    lwSocial.innerHTML="Last Week - 23hrs";
    selfTime.innerHTML="7hrs";
    lwSelf.innerHTML="Last Week - 11hrs";
}
