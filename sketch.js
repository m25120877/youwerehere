var dropzone;
function setup() {
  // put setup code here
    createCanvas(500,500);
    background(100,200,200);

    
    dropzone =select('#dropzone');
    dropzone.dragOver(highlight);
    dropzone.dragLeave(unhighlight);

}
 
    

function highlight(){
    dropzone.style('background-color','#ccc');
    
}
function unhighlight(){
    dropzone.style('background-color','#fff');
}

function draw() {
  // put drawing code here
}