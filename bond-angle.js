//전역변수(입자 정보)

var Animeinterval

function refreshMolecules(arr, canvas){
    for(var i = 0; i < arr.length; i++){
        arr[i].acceleration = Vector3.scalarmul(arr[i].electricforceSum(arr), 1/arr[i].mass)
        if(i != 0){
            arr[i].refreshPositionInSphere(5)
        }
        else{
            arr[i].refreshPosition()
        }
        dpMolecule(arr[i], canvas)
        $("#bond-angle").text('결합각: ' + Molecule.bondangle(arr[1], arr[2])) 
    }
}

//메인 코드 동작부
$(document).ready(function () {
    var canvas = $("#myCanvas")[0];
    fundermentalDrawing(canvas)
});

//시뮬레이션 구동
function start_simul(){
    //인터벌 종료
    clearInterval(Animeinterval)

    var canvas = $("#myCanvas")[0];
    var ctx = canvas.getContext('2d');

    var SN = ($("#SN")[0].value) * 1

    molecules = []
    molecules[0] = new Molecule(1730*SN, 0, new Vector3(0,0, 0), new Vector3(0,0,0), new Vector3(0,0,0))
    //입체수 만큼 전자 생성
    for(var i = 1; i < SN+1; i++){
        molecules[i] = new Molecule(1, -1, new Vector3(Math.random(), Math.random(), Math.random()), new Vector3(0,0,0), new Vector3(0,0,0))
    }
    
    Animeinterval = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fundermentalDrawing(canvas)
        refreshMolecules(molecules, canvas) 
    }, 10)
}
function stop_simul(){
    clearInterval(Animeinterval)
}
  