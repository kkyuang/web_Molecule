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
        this.position = position;
        this.velocity = velocity;
        this.acceleration = acceleration;
    }

    static coulombC = 1000
    static dt = 0.01

    //전기력 계산
    electricforce(a){ //a: Molecule
        return Vector3.scalarmul(Vector3.unitvector(Vector3.sub(this.position, a.position)), (Molecule.coulombC) * (a.charge * this.charge) / (Vector3.distance(a.position, this.position) ** 2))
    }
    static electricforce(a, b){ //a: Molecule, b: Molecule. a 기준 (b가 a에게 작용하는 전기력)
        return Vector3.scalarmul(Vector3.unitvector(Vector3.sub(a.position, b.position)), (Molecule.coulombC) * (a.charge * b.charge) / (Vector3.distance(a.position, b.position) ** 2))
    }

    //합력 계산
    electricforceSum(arr){ //arr: Molecule Array
        var sumF = Vector3.zeroVector
        for(var i = 0; i < arr.length; i++)
        {
            if(!arr[i].position.isEqual(this.position, arr[i].position)){
                sumF = sumF.add(this.electricforce(arr[i]))
            }
        }        
        return sumF
    }

    //위치 새로고침
    refreshPosition(){
        this.velocity = this.velocity.add(this.acceleration.scalarmul(Molecule.dt)) // dv=a*dt
        this.position = this.position.add(this.velocity.scalarmul(Molecule.dt)) // dx=v*dt
    }
    //위치 새로고침(구면상에서)
    refreshPositionInSphere(radius){
        this.velocity = this.velocity.add(this.acceleration.scalarmul(Molecule.dt)) // dv=a*dt
        //this.velocity = this.velocity.sub(this.velocity.scalarmul(Molecule.dt)) //감쇠
        this.position = this.position.add(this.velocity.scalarmul(Molecule.dt)) // dx=v*dt
        this.position = Vector3.unitvector(this.position).scalarmul(radius)
    }

    //결합각
    bondangle(a){
        var angle = Math.acos(Vector3.dotproduct(a.position, this.position)/(a.position.norm()*this.position.norm()))*180/Math.PI
        return angle
    }

    static bondangle(a, b){
        var angle = Math.acos(Vector3.dotproduct(a.position, b.position)/(a.position.norm()*b.position.norm()))*180/Math.PI
        return angle
    }
    /*
    //구면 상에서 위치 새로고침
    refreshPositionInSphere(radius){
        //합력을 다시 구하자
        //법선벡터 구하기
        var Normal = Vector3.unitvector(Vector3.scalarmul(this.position, -1)) //법선벡터
        var Fsum0 = Vector3.scalarmul(this.acceleration, this.mass) //원래 합력
        var Pjv = Vector3.dotproduct(Normal, Fsum0) //내적값(법선벡터방향의 힘의크기)

        var Fsum = Vector3.zeroVector //최종 합력 초기화

        var speed = this.velocity.distance(Vector3.zeroVector)

        var FaceSpeed2 = speed**2 - Vector3.dotproduct(Normal, this.velocity)**2
        

        var CentralF = Normal.scalarmul(((FaceSpeed2) * this.mass) / -radius) //구심가속도

        console.log(Pjv)

        Fsum = Fsum.add(Fsum0.add(Normal.scalarmul(Pjv).add(CentralF)))//최종 합력
        this.acceleration = Vector3.scalarmul(Fsum, 1/this.mass)


        this.velocity = this.velocity.add(this.acceleration.scalarmul(Molecule.dt)) // dv=a*dt
        this.position = this.position.add(this.velocity.scalarmul(Molecule.dt)) // dx=v*dt
    }*/
}

//이온 클래스 선언
class Ion{

}