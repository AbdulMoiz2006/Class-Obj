class Toyotacar{

    constructor(brand,mileage){
    console.log("creating new object");
    this.brandName = brand;
    this.mileage = mileage;
    }     
    start(){
    console.log("start");
    }
    
    stop(){
        console.log("stop");
    }
    }
     
    let fortuner=new Toyotacar("fortuner",10);
    console.log(fortuner);
    let lexus = new Toyotacar("lexus",12);
    console.log(lexus);
    
    
class parent{

Hello(){
    console.log("Hello");
}
}

class child extends parent{}

let obj = new child();


class person{
eat(){
console.log("eat");
}

sleep(){
    console.log("sleep");
}
    
}


class Engineer extends person{
work(){
console.log("Solve problem,build something");
}
};

var Moiz = new Engineer(); 