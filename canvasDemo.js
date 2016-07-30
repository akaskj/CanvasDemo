  var color;
  var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var width = 850;
  var height = 595;
  var charac;
  var size = 100;
  var mx = 125;
  var my = 125;
  function init() {
    return setInterval(draw, 300);
    //draw();
  }
  function draw(){
    var x= 50;
    var y=130;
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, width, height);
    for (var i = 0; i < alpha.length; i++ ) {

      if(i == 7 || i == 20){
        x = 90;
        y = y + my;
        color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        context.fillStyle = "blue";
        if(size <= 90){
            size = size + 10;
        }
        else{
          size = size - 0.1;
        }
        context.font = size + "px Times New Roman";
        charac = alpha.charAt(i);
        context.fillText(charac, x, y);
        x = x + mx;
      }
      else if(i == 13){
        x = 50;
        y = y + my;
        color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        context.fillStyle = "blue";
        if(size <= 90){
            size = size + 10;
        }
        else{
          size = size - 0.1;
        }
        context.font = size + "px Times New Roman";
        charac = alpha.charAt(i);
        context.fillText(charac, x, y);
        x = x + mx;
      }

      else{
        color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        context.fillStyle = "blue";
        if(size <= 90){
            size = size + 10;
        }
        else{
          size = size - 0.1;
        }
        context.font = size + "px Times New Roman";
        charac = alpha.charAt(i);
        context.fillText(charac, x, y);
        x = x + mx;
      }
    }
  }
  init();