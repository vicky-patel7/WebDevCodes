var image;
var imgcanvas;
var avg;

function readyImg(img) {
  return img != null && img.complete();
}

function upload() {
  imgcanvas=document.getElementById("can");
  var fileinput=document.getElementById("finput");
  image=new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
}
function makegrayscale() {
   if (!readyImg(image)){
     alert("The image is not loaded! Please load Image first."); 
   }
  for(var pixel of image.values()){
avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  imgcanvas=document.getElementById("can");
  image.drawTo(imgcanvas);
}

function makered() {
   if (!readyImg(image)){
     alert("The image is not loaded! Please load Image first."); 
   }
  for(var pixel of image.values()){
    pixel.setRed(255);
  }
  imgcanvas=document.getElementById("can");
  image.drawTo(imgcanvas);
}

function clearcanvas() {
  doclear(imgcanvas);
}

function doclear(canvas) {
  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);
}

function makerainbow() {
   if (!readyImg(image)){
     alert("The image is not loaded! Please load Image first."); 
   }
  for(var pixel of image.values()) {
    var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    var y=pixel.getY();
    var height=image.getHeight();
    //Red
    if(y<height/7 && avg<128){
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    if(y<height/7 && avg>=128){
      pixel.setRed(255);
      pixel.setGreen(2*avg-255);
      pixel.setBlue(2*avg-255);
    }
    //Orange
     if(y>=height/7 && y<height*2/7 && avg<128){
      pixel.setRed(2*avg);
      pixel.setGreen(0.8*avg);
      pixel.setBlue(0);
      }
     if(y>=height/7 && y<height*2/7 && avg>=128){
      pixel.setRed(255);
      pixel.setGreen((1.2*avg)-51);
      pixel.setBlue((2*avg)-255);
      }
    //Yellow
     if(y>=height*2/7 && y<height*3/7&& avg<128){
      pixel.setRed(2*avg);
      pixel.setGreen(2*avg);
       pixel.setBlue(0);
      }
     if(y>=height*2/7 && y<height*3/7&& avg>=128){
      pixel.setRed(255);
      pixel.setGreen(255);
      pixel.setBlue((2*avg)-255);
      }
    //Green
     if(y>=height*3/7 && y<height*4/7 && avg<128){
      pixel.setGreen(2*avg);
      pixel.setRed(0);
      pixel.setBlue(0);
    }
     if(y>=height*3/7 && y<height*4/7 && avg>=128){
      pixel.setGreen(255);
      pixel.setRed((2*avg)-255);
      pixel.setBlue((2*avg)-255);
    }
    //Blue
     if(y>=height*4/7 && y<height*5/7 && avg<128){
      pixel.setBlue(2*avg);
      pixel.setGreen(0);
      pixel.setRed(0);
      }
     if(y>=height*4/7 && y<height*5/7 && avg>=128){
      pixel.setBlue(255);
      pixel.setGreen((2*avg)-255);
      pixel.setRed((2*avg)-255);
      }
    //Indigo
     if(y>=height*5/7 && y<height*6/7 && avg<128){
      pixel.setRed(0.8*avg);
      pixel.setBlue(2*avg);
      pixel.setGreen(0);
    }
     if(y>=height*5/7 && y<height*6/7 && avg>=128){
      pixel.setRed((1.2*avg)-51);
      pixel.setBlue(255);
      pixel.setGreen((2*avg)-255);
    }
    //Violet
    if(y>=height*6/7 && avg<128){
      pixel.setRed(1.6*avg);
      pixel.setBlue(1.6*avg);
      pixel.setGreen(0);
    }
      if(y>=height*6/7 && avg>=128){
      pixel.setRed(0.4*avg+153);
      pixel.setBlue(0.4*avg+153);
      pixel.setGreen((2*avg)-255);
    }
  }
  imgcanvas=document.getElementById("can");
  image.drawTo(imgcanvas);
}

function makeblur(){
   if (!readyImg(image)){
     alert("The image is not loaded! Please load Image first."); 
   }
  var width = image.getWidth();
  var height = image.getHeight();
  var Image = new SimpleImage(width, height);
  for (var pixel of image.values()) {
    var random = getRandom();    
    var x = pixel.getX();
    var y = pixel.getY();
    if (random < 0.5) {
      var r = pixel.getRed();
      var g = pixel.getGreen();
      var b = pixel.getBlue();
      var blur = Image.getPixel(x, y);
      blur.setRed(r);
      blur.setGreen(g);
      blur.setBlue(b);      
    } 
    else {
      var randomX = getRandomInt(0, 10);
      var randomY = getRandomInt(0, 10);
      var newX = x+randomX;
      var newY = y+randomY;
      if (newX > width-1) {
        newX = newX-randomX;
      }
      if (newY > height-1) {
        newY = newY-randomY;
      }
      var pixelImage = image.getPixel(newX, newY);
       r = pixelImage.getRed();
       g = pixelImage.getGreen();
       b = pixelImage.getBlue();
       blur = Image.getPixel(x, y);
       blur.setRed(r);
       blur.setGreen(g);
       blur.setBlue(b);
      
    }
	}
  imgcanvas=document.getElementById("can");
  Image.drawTo(imgcanvas);
}

function getRandom(){
  return Math.random();
}

function getRandomInt(min, max){
  return Math.floor(Math.random()*(max-min) + min);
}

function makecwp(){
   if (!readyImg(image)){
     alert("The image is not loaded! Please load Image first."); 
   }
  for (var pixel of image.values()){
    pixel.setBlue(179);
    pixel.setGreen(179);
    var w = image.getWidth();
    var h = image.getHeight();
    var x = pixel.getX();
    var y = pixel.getY();
    if (y <= 20 || y >= h-20 || x <= 20 || x >= w-20 || y > h/2 && y < h/2+10 || x > 1/4*w && x < 1/4*w+10 || x > 1/2*w-5 && x < 1/2*w+5 || x > 3/4*w-10 && x < 3/4*w){
        pixel.setRed(89);
        pixel.setGreen(89);
        pixel.setBlue(89);
    }    
  }
   imgcanvas=document.getElementById("can");
   image.drawTo(imgcanvas);
}

function makemirror() {
  if (!readyImg(image)){
     alert("The image is not loaded! Please load Image first."); 
  }
  var w = image.getWidth();
  var h = image.getHeight();
  var half = Math.floor(w/ 2);    
  //
  for (var y = 0; y < h; y++) {
    for (var x = 0; x < half; x++) {
      var pixL = image.getPixel(x, y);
      var pixR = image.getPixel(w - x - 1, y);
      swapPixels(pixL, pixR);
    }
  }  
   imgcanvas=document.getElementById("can");
   image.drawTo(imgcanvas);
}

function swapPixels(pix1, pix2) {
  var r = pix2.getRed();
  var g = pix2.getGreen();
  var b = pix2.getBlue();
  var a = pix2.getAlpha();
  pix2.setAllFrom(pix1);
  pix1.setRed(r);
  pix1.setGreen(g);
  pix1.setBlue(b);
  pix1.setAlpha(a);
}

function makeduplicatemirror(){
  if (!readyImg(image)){
     alert("The image is not loaded! Please load Image first."); 
  }
  var w = image.getWidth();
  var h = image.getHeight();
  var half = Math.floor(w/ 4);    
  //
  for (var y = 0; y < h; y++) {
    for (var x = 0; x < half; x++) {
      var pixL = image.getPixel(x, y);
      var pixR = image.getPixel(w/2 - x - 1, y);
      swapPixels(pixL, pixR);
    }
  }
  for(var i=0;i<h;i++) {
    for(var j=w/2; j< w;j++){
      var pixA=image.getPixel(x,y);
      var pixB= image.getPixel(w-x/2-1,y);
      swapPixels(pixA,pixB);
    }
  }
  makemirror();
  imgcanvas=document.getElementById("can");
  image.drawTo(imgcanvas);
}