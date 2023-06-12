var d = localStorage.getItem("data");
const data = d.split("|");

const normal = "Keeping your weight in the normal range is an important part of healthy aging. As in other stages of life, elevated body mass index (BMI) in older adults can increase the likelihood of developing health problems. These include heart disease, high blood pressure, stroke, and diabetes. Losing weight or maintaining a healthy weight can help decrease these risks."
const underweight = "Being underweight can represent as many health concerns to an individual as being overweight can. If a person is underweight, their body may not be getting the nutrients it needs to build healthy bones, skin, and hair. While some people may have a genetic background or a medical illness that prevents them from putting on weight, there are interventions doctors can recommend to help a person gain weight."
const obese = "Like tobacco, obesity causes or is closely linked with a large number of health conditions, including heart disease, stroke, diabetes, high blood pressure, unhealthy cholesterol, asthma, sleep apnea, gallstones, kidney stones. No less real are the social and emotional effects of obesity, including discrimination, lower wages, lower quality of life and a likely susceptibility to depression."
const overweight = "Closing related to obesity, but overweight is a condition where body can work a little harder to reach the state of normal weight. When there is increase in body fat, it means that the body requires more nutrients and oxygen to support body tissues (Burniat 223). Since these elements can only be transported by the blood to various parts of the body, the workload of the heart is increased."


var bmi = document.querySelector("#bmi");
var u_name = document.querySelector("#uname");
var btype = document.querySelector("#type");
var describe = document.querySelector("#desc");
var calorie = document.querySelector("#cal");
var intake = document.querySelector("#in");
var loss = document.querySelector("#loss");
var gain = document.querySelector("#gain");
var w = document.querySelector("#w");
var lorg = document.querySelector("#lorg")

const cal = parseInt(data[3]) * 10 + parseInt(data[4]) * 6.25 - parseInt(data[1]) * 5 - 161 + parseInt(data[3]) * 6.127;
const bmi_value = Math.round(((parseInt(data[3]) * 10000) / (parseInt(data[4]) * parseInt(data[4]))) * 10) / 10;
bmi.textContent = bmi_value;
const weigh = (20 * (parseInt(data[4]) * parseInt(data[4]))) / 10000;
const loss_or_gain = Math.round(weigh - parseInt(data[3]));
w.textContent = Math.abs(loss_or_gain);
if (loss_or_gain >= 0) {
    lorg.textContent = "Gain"
}
else {
    lorg.textContent = "Lose"
}
u_name.textContent = data[0];
calorie.textContent = Math.round(cal);
intake.textContent = Math.round(cal);
gain.textContent = Math.round(cal) + 500;
loss.textContent = Math.round(cal) - 400;

if (bmi_value < 18.5) {
    btype.textContent = "UnderWeight";
    describe.textContent = underweight;
}
else if (bmi_value >= 18.5 && bmi_value < 24.9) {
    btype.textContent = "Normal";
    describe.textContent = normal;
}
else if (bmi_value >= 24.9 && bmi_value < 29.9) {
    btype.textContent = "OverWeight";
    describe.textContent = overweight;
}
else if (bmi_value >= 30) {
    btype.textContent = "Obese";
    describe.textContent = obese;
}
else {
    window.location.href = "error.html"
}


