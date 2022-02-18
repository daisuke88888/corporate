

const scoreA = 400;
const scoreB = 320;

console.log(scoreA);
console.log(scoreB);

if (scoreA >= 300 && scoreB >= 300) {
  console.log("素晴らしい");
} else if (scoreA >= 300 || scoreB >= 300){
  console.log("普通");
} else if (scoreA < 300 && scoreB < 300){
  console.log("頑張りましょう");
}

const result = "大凶";

switch (result) {
  case "大吉":
    console.log("大吉です！");
    break;
  case "中吉":
    console.log("中吉です！");
    break;
  case "小吉":
    console.log("小吉です！");
    break;
  case "吉":
    console.log("吉です！");
    break;
  case "凶":
    console.log("ちょっとやばいです");
    break;
  case "大凶":
    console.log("めっちゃやばいです");
    break;
}

const price = 1800;

const result1 = (price < 1000) ? "安い" : (price > 2000) ? "高い" : "ちょうどいい";
console.log(result1);

const array = ["HTML", "CSS", "JavaScript", "PHP"];

const indexOfJS = array.indexOf("JavaScript");
console.log(indexOfJS); 
console.log(array[indexOfJS]); 

// Ruby という要素はないため -1 が返される
console.log(array.indexOf("Ruby")); 