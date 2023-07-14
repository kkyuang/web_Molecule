//입자 클래스 선언
class Molecule {
    //생성 함수
    constructor (mass, charge, position, velocity, acceleration) {
        //mass(질량): float
        //charge(전하량): float
        //position(위치): {x: float, y:float, z:float}
        //velocity(속도): {x: float, y:float, z:float}
        //acceleration(가속도): {x: float, y:float, z:float}

        this.mass = mass;
        this.charge = charge;

        //벡터 자료형이 아닐 때 오류를 반환
        if(typeof(position.x) != Number && typeof(position.y) != Number  && typeof(position.z) != Number ){
            throw new Error('position shoud be Vector');
        }
        //벡터 자료형이 아닐 때 오류를 반환
        if(typeof(velocity.x) != Number && typeof(velocity.y) != Number  && typeof(velocityn.z) != Number ){
            throw new Error('velocity shoud be Vector');
        }

        //벡터 자료형이 아닐 때 오류를 반환
        if(typeof(acceleration.x) != Number && typeof(acceleration.y) != Number  && typeof(acceleration.z) != Number ){
            throw new Error('acceleration shoud be Vector');
        }


        this.position = position;
        this.velocity = velocity;
        this.acceleration = acceleration;

    }
    
}

//전역변수(입자 정보)
molecules = []


//메인 코드 동작부
$(document).ready(function () {
    var canvas = $("#myCanvas")[0];
    drawCircle(canvas);
});
  