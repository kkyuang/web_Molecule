//전역변수(입자 정보)


var angleCount = 0
var angleAv = 0

function refreshMolecules(arr, canvas){
    for(var i = 0; i < arr.length; i++){
        arr[i].acceleration = Vector3.scalarmul(arr[i].electricforceSum(arr), 1/arr[i].mass)
        if(i != 0){
            arr[i].refreshPositionInSphere(5)
        }
        else{
            arr[i].refreshPosition()
            //결합각의 평균을 구해보자.
            angle = Math.acos(Vector3.dotproduct(arr[2].position, arr[1].position)/(arr[1].position.norm()*arr[2].position.norm()))*180/Math.PI
            angleCount += 1
            angleAv = (angleAv + angle) / angleCount
            console.log(angleAV)
        }
        dpMolecule(arr[i], canvas)
    }
}

//메인 코드 동작부
$(document).ready(function () {
    var canvas = $("#myCanvas")[0];
    var ctx = canvas.getContext('2d');
    molecules = []
    molecules[0] = new Molecule(137000, 2, new Vector3(0,0, 0), new Vector3(0,0,0), new Vector3(0,0,0))
    molecules[1] = new Molecule(1, -1, new Vector3(1, 5, 0), new Vector3(0,0,0), new Vector3(0,0,0))
    molecules[2] = new Molecule(1, -1, new Vector3(-5, 0, 0), new Vector3(0,0,0), new Vector3(0,0,0))
    molecules[3] = new Molecule(1, -1, new Vector3(5, 0, 0), new Vector3(0,0,0), new Vector3(0,0,0))
    setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fundermentalDrawing(canvas)
        refreshMolecules(molecules, canvas) 
    }, 10)
});
  