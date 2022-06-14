// inheritance 


interface Person{
    name: string;
    age?: number;
    // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
}

interface Developer extends Person{
    skills: string[];
}

const developer1: Developer ={
    name:"Lu",
    age: 26,
    skills: ["C#", "JAVA"]
}

console.log(developer1);