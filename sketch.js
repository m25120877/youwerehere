var dropzone;
//var img;
var imgArray=new Array();
var isok;
var imgnumber = 0;

function preload() {
    imgArray.push(loadImage('YOUWEREHERE_02.jpg'));
    imgArray.push(loadImage('20180201_153714.jpg'));
    imgArray.push(loadImage('k.jpg'));
    imgArray.push(loadImage('IMG_2426.jpg'));
    
}

function setup() {
  // put setup code here
    createCanvas(800,windowHeight);
    background(255);
    noStroke();
    fill(220,220,150);
    rect(0,0,800,600);

    
    dropzone =select('#dropzone');
    dropzone.dragOver(highlight);
    dropzone.dragLeave(unhighlight);
    dropzone.drop(getFile,unhighlight);
    isok = false;
}

function getFile(file){
    console.log(file.name);
    if (file.name=='YOUWEREHERE_02.jpg'){
        console.log('yes!');
        isok = true;
        imgnumber = 0;
    } else if (file.name=='20180201_153714.jpg'){
        console.log('yes!');
        isok = true;
        imgnumber = 1;
    } else if (file.name=='k.jpg'){
        console.log('yes!');
        isok = true;
        imgnumber =2;
    } else if (file.name=='IMG_2426.jpg'){
        console.log('yes!');
        isok = true;
        imgnumber = 3;
    }
        
        
           
}
 
    

function highlight(){
    dropzone.style('background-color','#DAA520');
    
}
function unhighlight(){
    dropzone.style('background-color','#fff');
}

function draw() {
    
    fill(0);
    strokeWeight(1);
    textSize(40);
    text("Voyager converter",50,80);
    textSize(18);
    text("The sound of us",50,130);
  // put drawing code here
    if (isok) {
       // resizeCanvas(windowWidth,windowHeight)
        background(255)
        image(imgArray[imgnumber],0,0,800);
        //console.log(imgArray[imgnumber]);
       
       
    }
        

}

