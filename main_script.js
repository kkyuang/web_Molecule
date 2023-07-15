//전역변수(입자 정보)


var angleCount = 0
var angleSum = 0

function refreshMolecules(arr, canvas){
    for(var i = 0; i < arr.length; i++){
        arr[i].acceleration = Vector3.scalarmul(arr[i].electricforceSum(arr), 1/arr[i].mass)
        if(i != 0){
            arr[i].refreshPositionInSphere(5)
        }
        else{
            arr[i].refreshPosition()
            //결합각의 평균을 구해보자.
            
            //angleCount += 1
            //angleSum += angle
            //angleAv = angleSum / angleCount
            console.log(angle)
        }
        dpMolecule(arr[i], canvas)
    }
}

//메인 코드 동작부
$(document).ready(function () {
    var canvas = $("#myCanvas")[0];
    var ctx = canvas.getContext('2d');
    molecules = []
    molecules[0] = new Molecule(1730*4, 0, new Vector3(0,0, 0), new Vector3(0,0,0), new Vector3(0,0,0))
    molecules[1] = new Molecule(1, -1, new Vector3(0, 5, 0), new Vector3(0,0,0), new Vector3(0,0,0))
    molecules[2] = new Molecule(1, -1, new Vector3(0, 0, 5), new Vector3(0,0,0), new Vector3(0,0,0))
    molecules[3] = new Molecule(1, -1, new Vector3(5, 0, 0), new Vector3(0,0,0), new Vector3(0,0,0))
    //molecules[4] = new Molecule(1, -1, new Vector3(0, 0, -5), new Vector3(0,0,0), new Vector3(0,0,0))
    //molecules[5] = new Molecule(1, -1, new Vector3(0, -5, 0), new Vector3(0,0,0), new Vector3(0,0,0))
    //molecules[6] = new Molecule(1, -1, new Vector3(-5, 0, 0), new Vector3(0,0,0), new Vector3(0,0,0))
    //molecules[7] = new Molecule(1, -1, new Vector3(-5, 5, 0), new Vector3(0,0,0), new Vector3(0,0,0))
    //molecules[8] = new Molecule(1, -1, new Vector3(-5, 8, 0), new Vector3(0,0,0), new Vector3(0,0,0))
    setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fundermentalDrawing(canvas)
        refreshMolecules(molecules, canvas) 
    }, 10)
});
  