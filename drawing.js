//상수
canvasWidth = 640
canvasHeight = 480
xmin = -12
xmax = 12
ymin = -9
ymax = 9
zmin = -9
zmax = 9

//원을 그리는 코드
function drawCircle(cvs) {
    var ctx = cvs.getContext("2d");

    var centerX = cvs.width / 2;
    var centerY = cvs.height / 2;
    var radius = 10;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();
}

function cvtct(x, y, z) {
    var canvasX = (((x- (z/Math.SQRT2)) - xmin) / (xmax - xmin)) * canvasWidth ;
    var canvasY = canvasHeight - (((y - (z/Math.SQRT2)) - ymin) / (ymax - ymin)) * canvasHeight;
  
    return { x: canvasX, y: canvasY };
}

function cvtctVector3(v3) {
    var canvasX = (((v3.x - (v3.z/Math.SQRT2)) - xmin) / (xmax - xmin)) * canvasWidth ;
    var canvasY = canvasHeight - (((v3.y - (v3.z/Math.SQRT2)) - ymin) / (ymax - ymin)) * canvasHeight;
  
    return { x: canvasX, y: canvasY };
}


function fundermentalDrawing(cvs){
    var ctx = cvs.getContext("2d");

    //x축 그리기
    ctx.beginPath()
    ctx.moveTo(cvtct(xmax, 0, 0).x, cvtct(xmax, 0, 0).y)
    ctx.lineTo(cvtct(xmin, 0, 0).x, cvtct(xmin, 0, 0).y)
    ctx.stroke()

    //y축 그리기
    ctx.beginPath()
    ctx.moveTo(cvtct(0, ymax, 0).x, cvtct(0, ymax, 0).y)
    ctx.lineTo(cvtct(0, ymin, 0).x, cvtct(0, ymin, 0).y)
    ctx.stroke()

    //z축 그리기
    ctx.beginPath()
    ctx.moveTo(cvtct(xmax, xmax, 0).x, cvtct(xmax, xmax, 0).y)
    ctx.lineTo(cvtct(xmin, xmin, 0).x, cvtct(xmin, xmin, 0).y)
    ctx.stroke()
}

function dpMolecule(mc, cvs){
    var ctx = cvs.getContext("2d");
    position = cvtctVector3(mc.position)
    var centerX = position.x
    var centerY = position.y
    var radius = 1* (mc.position.z + xmax);

    
    ctx.beginPath()
    ctx.moveTo(cvtct(0, 0, 0).x, cvtct(0, 0, 0).y)
    ctx.lineTo(cvtctVector3(mc.acceleration.scalarmul(10)).x, cvtctVector3(mc.acceleration.scalarmul(10)).y)
    ctx.stroke()

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();
}