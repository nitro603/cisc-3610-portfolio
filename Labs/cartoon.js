function draw() {
    var canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
  
      // flip the coordinate frame
      ctx.save();
      drawbackDrop(ctx, 0, 0);
      drawMountainAt(ctx,0,500);
      drawCloudAt(ctx,300, 100,40);
      drawSunAt(ctx,20,20,75);
      drawTreeAt(ctx,200,425,90,20,30);
      drawGroundAt(ctx, 0, 500, 800, 100);
      drawHouseAt(ctx,300,390);
      drawGrassAt(ctx,0,500);
      ctx.font = "30px Arial";
      ctx.fillText("Home", 300, 250);
      ctx.restore();
    }
  }
  
  
  function drawGrassAt(ctx, x, y) {
    for (var i = 0; i < 100; i++) {
      ctx.beginPath();
      ctx.moveTo(x,y);
      ctx.lineTo(x+10,y);
      ctx.lineTo(x+5,y-10);
      ctx.fillStyle = "green";
      ctx.fill();
      x = x+10;
    }
  }
  
  function drawCloudAt(ctx, x, y, radius) {
     ctx.beginPath();
     ctx.arc(x+10, y, radius, 0, 2 * Math.PI);
     ctx.arc(x-50, y, radius+5, 0, 2 * Math.PI);
     ctx.arc(x+70, y, radius+5, 0, 2 * Math.PI);
     ctx.fillStyle = "white";
     ctx.fill();
  }
  
  function drawbackDrop(ctx, x, y) {
    ctx.fillStyle = "lightblue";
    ctx.fillRect(x, y, 800, 600);
  }
  function drawHouseAt(ctx, x, y) {
    ctx.fillStyle = "brown";
    ctx.fillRect(x, y, 100, 110);
  
    ctx.beginPath();
    ctx.moveTo(x+100,y);
    ctx.lineTo(300,390);
    ctx.lineTo(350,320);
    ctx.fillStyle = "orange";
    ctx.fill();
  
    ctx.fillStyle = "black";
    ctx.fillRect(x+20, y+70, 20, 40);
  
    ctx.fillStyle = "white";
    ctx.fillRect(x+60, y+40, 20, 20);
  }
  function drawSunAt(ctx,x,y,radius){
    ctx.beginPath();
    ctx.arc(x,y, radius,0,Math.PI*2);
    ctx.fillStyle = "yellow";
    ctx.fill();
  }
  function drawMountainAt(ctx,x,y){
    ctx.beginPath();
    ctx.moveTo(x+300,y);
    ctx.lineTo(600,200);
    ctx.lineTo(800,600);
    ctx.fillStyle = "gray";
    ctx.fill();
  }
  function drawTreeAt(ctx,x,y,height,width,radius) {
     ctx.fillStyle= "brown";
     ctx.fillRect(x, y, width,height);
     ctx.beginPath();
     ctx.arc(x+10, y, radius, 0, 2 * Math.PI);
     ctx.fillStyle = "green";
     ctx.fill();
  }
  
  function drawGroundAt(ctx, x, y, height, width) {
    ctx.fillStyle = "rgb(104,55,45)" ;
    ctx.fillRect(x, y, height, width) ;
  }
  
  draw()