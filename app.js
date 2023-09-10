// function checkbmi(){
//     let height = document.getElementById("height");
//     let weight = document.getElementById("weight");

//     //weight / height 2
//     let bmi = weight.value / (height.value * height.value);

//     if(bmi < 16){
//       document.getElementById("result").innerHTML = "Way Too Thin !! Eat UP";
//     }
//     else if(bmi > 16 && bmi < 17){
//         document.getElementById("result").innerHTML = "Thinner!! Eat UP";
//     }
//     else if(bmi > 17 && bmi < 18.5){
//         document.getElementById("result").innerHTML = "Thin !!";
//     }
//     else if(bmi > 18.5 && bmi < 25){
//         document.getElementById("result").innerHTML = "Your'e BMI is Perfect"
//     }
//     else if(bmi > 25 && bmi < 30){
//         document.getElementById("result").innerHTML = "You are a little above the Perfect BMI Line !! Consider Dieting"
//     }
//     else if(bmi > 30 && bmi <= 45){
//         document.getElementById("result").innerHTML = "Way too Above the Line"
//     }
// }
function bmi(){
    let height = document.getElementById('height');
    let weight = document.getElementById('weight')

    let result = weight.value / (height.value * height.value)
    if(result < 18.5){
        document.getElementById('result').innerHTML = 'Way Too Thin !! Eat UP'
    }
    else if(result>18.5 && result <24.9){
        document.getElementById('result').innerHTML = 'Your BMI is Perfect'
    }
    else if(result>25 && result <29.9){
        document.getElementById('result').innerHTML = 'You are a little above the Perfect BMI Line !! Consider Dieting'
    }
    else if(result>30 && result <35){
        document.getElementById('result').innerHTML = 'obesity 😔'
    }
    else{
        document.getElementById('result').innerHTML = 'Way too Above the Line'

    }
}