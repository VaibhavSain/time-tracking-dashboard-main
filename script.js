const dailyPara = document.querySelector("#daily-para");
const monthlyPara = document.querySelector("#monthly-para");
const weeklyPara = document.querySelector("#weekly-para");

//this is daily function to change text color
dailyPara.addEventListener("click", () => {
    dailyPara.style.color = "white";
    weeklyPara.style.color = "#6568a9";
    monthlyPara.style.color = "#6568a9";
    dailyData();
});
//this is weekly function to change text color
weeklyPara.addEventListener("click",() => {
    weeklyPara.style.color = "white";
    dailyPara.style.color = "#6568a9";
    monthlyPara.style.color = "#6568a9";
    location.reload();
});
//this is monthly function to change text color
monthlyPara.addEventListener("click",() => {
    monthlyPara.style.color = "white";
    dailyPara.style.color = "#6568a9";
    weeklyPara.style.color = "#6568a9";
    monthlyData();
});
//this function change the text content
function dailyData () {
    document.getElementById("workhrs").textContent = "5hrs";
    document.getElementById("worklast").textContent = "7hrs";
    document.getElementById("playhrs").textContent = "1hrs";
    document.getElementById("playlast").textContent = "2hrs";
    document.getElementById("studyhrs").textContent = "0hrs";
    document.getElementById("studylast").textContent = "1hrs";
    document.getElementById("exerhrs").textContent = "1hrs";
    document.getElementById("exerlast").textContent = "1hrs";
    document.getElementById("selfhrs").textContent = "0hrs";
    document.getElementById("selflast").textContent = "1hrs";
    document.getElementById("socialhrs").textContent = "1hrs";
    document.getElementById("sociallast").textContent = "3hrs";
}
function monthlyData () {
    document.getElementById("workhrs").textContent = "103hrs";
    document.getElementById("worklast").textContent = "128hrs";
    document.getElementById("playhrs").textContent = "23hrs";
    document.getElementById("playlast").textContent = "29hrs";
    document.getElementById("studyhrs").textContent = "13hrs";
    document.getElementById("studylast").textContent = "19hrs";
    document.getElementById("exerhrs").textContent = "11hrs";
    document.getElementById("exerlast").textContent = "18hrs";
    document.getElementById("selfhrs").textContent = "11hrs";
    document.getElementById("selflast").textContent = "18hrs";
    document.getElementById("socialhrs").textContent = "21hrs";
    document.getElementById("sociallast").textContent = "23hrs";
}
