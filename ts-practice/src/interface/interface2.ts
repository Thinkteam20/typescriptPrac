// object interface

// 이번에는 클래스가 아닌 일반 객체를 interface 를 사용하여 타입을 지정하는 방법을 알아보도록 하겠습니다.

interface Person{
    name: string;
    age?: number;
    // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
}

interface Developer{
    name: string;
    age?: number;
    skills: string[];
}


const person: Person ={
    name: "Sangpil Jung",
    age: 30,
};
const expert: Developer ={
    name:"Philip",
    skills:["JS", "Ts"]
}

console.log(person);
console.log(expert)