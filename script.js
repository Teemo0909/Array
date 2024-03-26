let N = document.getElementById("num")
let R = document.getElementById("result")
let RS = document.getElementById("Resum")
let Rs2 = document.getElementById("Resum2")
console.log(N)
console.log(R)
console.log(RS)



let score = [];

function putData(){
    let Number = N.value
    score.push(Number)

    R.innerHTML = ""
    for (let i in score){
        console.log(i,score[i])
        R.innerHTML = R.innerHTML+i+" , "+score[i]+"<br>";
    }
    N.value = "";
}


function sumNum(){
    let sum = 1;
    let sumr1 = 0;
    let sum1 = 1;
    let sumr2 = 0
        for (let item of score) {
            item = parseFloat(item)
            if(item%2 == 0){
                console.log(item)
                sum = sum*item
                sumr1 = sum
            }
            
            else {
                sum1 = sum1*item
                sumr2 = sum1
            }
            
        }
        RS.innerHTML = "เลขคู่: " + sum;
        Rs2.innerHTML = "เลขคี่: " + sumr2;

}


function Reset(){
    console.log("-- before -- ");
    console.log(score);
    score = [];
    R.innerHTML = "";
    RS.innerHTML = "";
    Rs2.innerHTML = "";
    console.log("-- afer -- ");
    console.log(score);
}