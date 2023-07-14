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