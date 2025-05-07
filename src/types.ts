
interface User {
    firstName: string;
    lastName: string;
    email?: string;
    age: number;
}

type Userr  = { 
    firstName: string, 
    lastName: string, 
    email?: string,
    age: number,
}

type StringOrNum = string | number;

function printId(id: StringOrNum) {
    console.log(`ID:${id}`);
    
}

printId(101)
printId('123')
