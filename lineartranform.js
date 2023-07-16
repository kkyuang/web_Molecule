//좌표축 그리기
function drawAxis(){
    
    var cvs = $("#myCanvas")[0];
    var ctx = cvs.getContext("2d");
    ctx.strokeStyle = 'black';

    ctx.lineWidth = 2;
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
}

//격자 그리기
function drawGrid(){
    
    var cvs = $("#myCanvas")[0];
    var ctx = cvs.getContext("2d");
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';

    for(var i = ymin; i <= ymax; i++){
        //x축 그리기
        ctx.beginPath()
        ctx.moveTo(cvtct(xmax, i, 0).x, cvtct(xmax, i, 0).y)
        ctx.lineTo(cvtct(xmin, i, 0).x, cvtct(xmin, i, 0).y)
        ctx.stroke()
    }


    for(var i = xmin; i <= xmax; i++){
        //y축 그리기
        ctx.beginPath()
        ctx.moveTo(cvtct(i, ymax, 0).x, cvtct(i, ymax, 0).y)
        ctx.lineTo(cvtct(i, ymin, 0).x, cvtct(i, ymin, 0).y)
        ctx.stroke()
    }
}

//선형변환
function linearTf(x, y, a, b, a1, b1){
    //(a, b)는 기저벡터 i
    //(a1, b1)은 기저벡터 j
    return {x: a*x + b*y, y: a1*x + b1*y}
    
}

//선형변환된 격자 그리기
function drawGridTransformed(a11, a12, a21, a22){
    
    
    var cvs = $("#myCanvas")[0];
    var ctx = cvs.getContext("2d");
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'red';

    for(var i = ymin; i <= ymax; i++){
        if(i==0){
            ctx.lineWidth = 2;
        }
        else{
            ctx.lineWidth = 1;
        }

        ltf = linearTf(xmax, i, a11, a12, a21, a22)
        tfed = new Vector3(ltf.x, ltf.y, 0)
        
        console.log(tfed)
        //x축 그리기
        ctx.beginPath()
        ctx.moveTo(cvtctVector3(tfed).x, cvtctVector3(tfed).y)

        ltf = linearTf(xmin, i, a11, a12, a21, a22)
        tfed = new Vector3(ltf.x, ltf.y, 0)

        ctx.lineTo(cvtctVector3(tfed).x, cvtctVector3(tfed).y)
        ctx.stroke()
    }


    for(var i = xmin; i <= xmax; i++){
        if(i==0){
            ctx.lineWidth = 2;
        }
        else{
            ctx.lineWidth = 1;
        }
        //y축 그리기
        ltf = linearTf(i, ymax, a11, a12, a21, a22)
        tfed = new Vector3(ltf.x, ltf.y, 0)

        ctx.beginPath()
        ctx.moveTo(cvtctVector3(tfed).x, cvtctVector3(tfed).y)

        ltf = linearTf(i, ymin, a11, a12, a21, a22)
        tfed = new Vector3(ltf.x, ltf.y, 0)
        
        ctx.lineTo(cvtctVector3(tfed).x, cvtctVector3(tfed).y)
        ctx.stroke()
    }

}


//선형변환된 기저벡터 그리기
function drawTransformedUnitvector(a11, a12, a21, a22){
    var cvs = $("#myCanvas")[0];
    var ctx = cvs.getContext("2d");
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'blue';

    tfed = new Vector3(0, 0, 0)
    
    ctx.beginPath()
    ctx.moveTo(cvtctVector3(tfed).x, cvtctVector3(tfed).y)
    ltf = linearTf(0, 1, a11, a12, a21, a22)
    tfed1 = new Vector3(ltf.x, ltf.y, 0)
    ctx.lineTo(cvtctVector3(tfed1).x, cvtctVector3(tfed1).y)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(cvtctVector3(tfed).x, cvtctVector3(tfed).y)
    ltf = linearTf(1, 0, a11, a12, a21, a22)
    tfed1 = new Vector3(ltf.x, ltf.y, 0)
    ctx.lineTo(cvtctVector3(tfed1).x, cvtctVector3(tfed1).y)
    ctx.stroke()

}


function view(){
    var cvs = $("#myCanvas")[0];
    var ctx = cvs.getContext("2d");
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    drawAxis()
    drawGrid()
    drawGridTransformed(($("#a11")[0].value) * 1, ($("#a12")[0].value) * 1, ($("#a21")[0].value) * 1, ($("#a22")[0].value) * 1)
    drawTransformedUnitvector(($("#a11")[0].value) * 1, ($("#a12")[0].value) * 1, ($("#a21")[0].value) * 1, ($("#a22")[0].value) * 1)
}



$(document).ready(function () {
    drawAxis()
    drawGrid()
})