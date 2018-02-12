var dropzone;
//var img;
var imgArray=new Array();
var isok;
var imgnumber = 0;


function preload() {
    imgArray.push(loadImage('KateL.jpg'));
    imgArray.push(loadImage('Ma Myat Theingi.jpg'));
    imgArray.push(loadImage('minjunk.jpg'));
    imgArray.push(loadImage('amina.jpg'));
    imgArray.push(loadImage('ariel.jpg'));
    imgArray.push(loadImage('bojana.jpg'));
    imgArray.push(loadImage('carl002.jpg'));
    imgArray.push(loadImage('Jasmin_N_Ariel.jpg'));
    imgArray.push(loadImage('jessie.jpg'));
    imgArray.push(loadImage('kcj.png'));
    imgArray.push(loadImage('LennartN.jpg'));
    imgArray.push(loadImage('mafer.jpg'));
    imgArray.push(loadImage('Marco.jpg'));
    imgArray.push(loadImage('max.jpg'));
    
}

function setup() {
  // put setup code here
    createCanvas(1200,windowHeight);
    background(255);
    noStroke();
    fill(220,220,150);
    rect(0,0,1200,300);

    
    dropzone =select('#dropzone');
    dropzone.dragOver(highlight);
    dropzone.dragLeave(unhighlight);
    dropzone.drop(getFile,unhighlight);
    isok = false;
}

function getFile(file){
    console.log(file.name);
    if (file.name=='Kate Laster.wav'){
        console.log('yes!');
        isok = true;
        imgnumber = 0;
    } else if (file.name=='Myat Theingi.wav'){
        console.log('yes!');
        isok = true;
        imgnumber = 1;
    } else if (file.name=='Minjun Kim.wav'){
        console.log('yes!');
        isok = true;
        imgnumber =2;
    } else if (file.name=='Amina Shah.wav'){
        console.log('yes!');
        isok = true;
        imgnumber = 3;
    } else if (file.name=='Ariel Huang.wav'){
        console.log('yes!');
        isok = true;
        imgnumber = 4;
    } else if (file.name=='Bojana Rankovic.wav'){
        console.log('yes!');
        isok = true;
        imgnumber = 5;
    } else if (file.name=='Carl Tianhu Kang.wav'){
        console.log('yes!');
        isok = true;
        imgnumber = 6;
    } else if (file.name=='Jasmine n Ariel.wav'){
        console.log('yes!');
        isok = true;
        imgnumber = 7;
    } else if (file.name=='Jusun Seo.wav'){
        console.log('yes!');
        isok = true;
        imgnumber = 8;
    } else if (file.name=='Kuo Chen Jung.wav'){
        console.log('yes!');
        isok = true;
        imgnumber = 9;
    } else if (file.name=='Lennie Nelson.wav'){
        console.log('yes!');
        isok = true;
        imgnumber = 10;
    } else if (file.name=='Mafer Hernandez.wav'){
        console.log('yes!');
        isok = true;
        imgnumber = 11;
    } else if (file.name=='Marco Castaneda.wav'){
        console.log('yes!');
        isok = true;
        imgnumber = 12;
    } else if (file.name=='Max Chao.wav'){
        console.log('yes!');
        isok = true;
        imgnumber = 13;
    }
         
        
           
}
 
    

function highlight(){
    dropzone.style('background-color','#DAA520');
    
}
function unhighlight(){
    dropzone.style('background-color','#fff');
    
}
function getImgSize(imgSrc){
    
}

function draw() {
    
    fill(0);
    strokeWeight(0);
    textSize(40);
    text("Voyager converter ver.1",50,80);
    textSize(30);
    text("This is a convenience tool that helps you translate alien's language.",50,130);
    text("They are usually friendly, and please treat them gently and politely.",50,180);
    textSize(32);
    fill(100);
    text("Any problem please contact: QXJpZWwgSHVhbmcgYW5kIENhcmwgS2FuZw==",50,240);
  // put drawing code here
    if (isok) {
        fill(255);
        rect(0,0,1200.2000)
        image(imgArray[imgnumber],0,0);
        console.log(imgArray[imgnumber]);
       // resizeCanvas(img.width,img.height);
    }
}