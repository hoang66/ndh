var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// load images
var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();
//tao hinh ảnh cho  bang  gan va hien thi gia tri cua ham image qua new


bird.src = "bird.png";
bg.src = "bg.png";
fg.src = "fg.png";
pipeNorth.src = "pipeNorth.png";
pipeSouth.src = "pipeSouth.png";
//thiet lap nguon  anh bang thuoc tinh src


// some variables

var gap = 135;
//khoang cach 2 ong
var constant;
//de xac dinh toa do y cua ong nuoc phia dứoi
//duoc tính toán bằng cách cộng them gap vào toạ độ y của ông nước phía

var bX = 10;
var bY = 150;
//toạ độ của chim

var gravity = 1.5;
//toc do chim

document.addEventListener("keydown", moveUp);

function moveUp() {
    bY -= 35;
    // fly.play();
//    toc do buov nhay them 35
}

// pipe coordinates

var pipe = [];

pipe[0] = {
    x: cvs.width,
    y: 0
    //vị trí ống đầu tiên

};

// draw images

function draw() {

    ctx.drawImage(bg, 0, 0);
//ve hinh nen

    for (var i = 0; i < pipe.length; i++) {

        constant = pipeNorth.height + gap;
        ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant);
        //phải cộng với constant để tạo ra khoảng trống giữa 2 cột
        pipe[i].x--;

        if (pipe[i].x == 25) {
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height
            });
            //phat hien va cham

            if (bX + bird.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width && (bY <= pipe[i].y + pipeNorth.height || bY + bird.height >= pipe[i].y + constant) || bY + bird.height >= cvs.height - fg.height) {
                location.reload(); // reload the page
            }
        }
    }
    ctx.drawImage(bird, bX, bY);

    bY += gravity;
    //trọng lực
    requestAnimationFrame(draw);
}

draw();
