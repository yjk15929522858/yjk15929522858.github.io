alert("欢迎欢迎！")
function playerName(){
  var name = prompt("请输入你的名字。");
  alert("你好！ " + name + ", 欢迎来到看图猜成语小游戏!");
}
playerName()

function enterAnswer(){
  var answer = prompt("你的答案是：");
  if (answer) {
    document.getElementById("answers").innerHTML = "你输入的答案是：" + answer;
  }
  if (answer === "每况愈下，官官相护，七窍生烟，半壁江山"){
    alert("恭喜你猜对啦！")
  }
  else{
    alert("很抱歉，你猜错啦！")
  }
}

function tip(){
  alert("正确答案应该是：每况愈下，官官相护，七窍生烟，半壁江山。");
}
