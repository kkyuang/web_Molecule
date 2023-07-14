//수학 관련 계산 클래스

//벡터 계산
class Vector3 {
    constructor (x,y,z) {
        this.x = x
        this.y = y
        this.z = z
    }


    //동적함수
    //거리
    distance(a){
        return Math.sqrt((a.x-this.x)**2 + (a.y-this.y)**2 + (a.z-this.z)**2)
    }
    //단위벡터
    unitvector(){
        return Vector3.scalarmul(this, 1/Vector3.distance(Vector3.zeroVector, this))
    }
    //덧셈
    add(a){
        return new Vector3( a.x+this.x, a.y+this.y, a.z+this.z)
    }
    //뺄셈
    sub(a){
        return new Vector3(this.x+a.x, this.y-a.y, this.z-a.z)
    }
    //상수배
    scalarmul(k){
        return new Vector3(this.x*k, this.y*k, this.z*k)
    }
    //내적
    dotproduct(a){
        return a.x*this.x + a.y*this.y + a.z*this.z
    }
    //동치
    isEqual(a, b){
        if(a.x == b.x && a.y == b.y && a.z == b.z){
            return true
        }
        else{
            return false
        }
    }
    norm(){
        return Vector3.distance(Vector3.zeroVector, this)
    }

    
    //정적함수
    //영벡터
    static zeroVector = new Vector3(0, 0, 0)
    //거리
    static distance(a, b){
        return Math.sqrt((a.x-b.x)**2 + (a.y-b.y)**2 + (a.z-b.z)**2)
    }
    //덧셈
    static add(a, b){
        return new Vector3(a.x+b.x, a.y+b.y, a.z+b.z)
    }
    
    //뺄셈
    static sub(a, b){
        return new Vector3(a.x-b.x, a.y-b.y, a.z-b.z)
    }
    
    //상수배
    static scalarmul(a, k){
        return new Vector3(a.x*k, a.y*k, a.z*k)
    }
    
    //내적
    static dotproduct(a, b){
        return a.x*b.x + a.y*b.y + a.z*b.z
    }

    //단위벡터
    static unitvector(a){
        return Vector3.scalarmul(a, 1/Vector3.distance(Vector3.zeroVector, a))
    }

    //동치
    static isEqual(a){
        if(a.x == this.x && a.y == this.y && a.z == this.z){
            return true
        }
        else{
            return false
        }
    }
}



