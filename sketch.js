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
    createCanvas(800,600);
    background(100,200,200);

    
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
    textSize(40);
    text("Voyager converter",50,80);
    textSize(18);
    text("Just for You Were Here",50,130);
  // put drawing code here
    if (isok) {
        image(imgArray[imgnumber],0,0,800,600);
    }
}