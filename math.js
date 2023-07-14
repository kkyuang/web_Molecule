//수학 관련 계산 클래스

//벡터 계산
class Vector3 {
    constructor (x,y,z) {
        this.x = x
        this.y = y
        this.z = z
    }
    
    //영벡터
    zeroVector = new Vector3(0, 0, 0)

    //거리
    distance(a, b){
        return Math.sqrt((a.x-b.x)**2 + (a.y-b.y)**2 + (a.z-b.z)**2)
    }
    //덧셈
    add(a, b){
        return {x: a.x+b.x, y: a.y+b.y, z:a.z+b.z}
    }
    
    //뺄셈
    sub(a, b){
        return {x: a.x-b.x, y: a.y-b.y, z:a.z-b.z}
    }
    
    //상수배
    scalarmul(a, k){
        return {x: a.x*k, y: a.y*k, z:a.z*k}
    }
    
    //내적
    dotproduct(a, b){
        return a.x*b.x + a.y*b.y + a.z*b.z
    }

    //단위벡터
    unitvector(a){
        return Vector3.scalarmul(a, 1/Vector3.distance(Vector3.zeroVector, a))
    }
}



