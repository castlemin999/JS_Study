function Car(company, engine, wheel, name){
    //this = {};
    this.company = company;
    this.engine = engine;
    this.wheel = wheel;
    this.name = name;

    // 인스턴스를 생성 할 때 마다 똑같은 함수가 메모리에 올라감
    // this.start = function(driver){
    //     console.log(`${driver} 탑승 완료. 시동 걸림`);
    // };

    // this.stop = function(driver){
    //     console.log(`${driver} 하차 완료. 시동 꺼짐`);
    // };
    // return this;
};

// prototype을 활용해서 상속 기능을 구현함
Car.prototype.start = function(driver, name){
    console.log(`${driver} ${name}에 탑승 완료. 시동 걸림`);
};

Car.prototype.stop = function(driver, name){
    console.log(`${driver} ${name}에 하차 완료. 시동 꺼짐`);
};

const g80 = new Car('Hyndai', 'v6', 16, 'G80');
const i8 = new Car('BMW', 'v8', 17, 'I8');
const amg = new Car('Benz', 'v8', 16, 'AMG');
const r8 = new Car('Audi', 'v8', 17, 'R8');

console.log(g80);
console.log(i8);
console.log(amg);
console.log(r8);

g80.start('pinn', g80.name);
g80.stop('pinn', g80.name);

i8.start('jake', i8.name);
i8.stop('jake', i8.name);




