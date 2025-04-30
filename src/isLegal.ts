function isLegal(user: User) {
    if (user.age >= 18) {
        console.log(user.firstName + " is legal");
        return true;
    } else {
        console.log(user.firstName + " is not legal");
        return false;
    }
}

interface User {
    firstName: string;
    lastName: string;
    email?: string;
    age: number;
}

const user: User = {
    firstName: "dhirtiman",
    lastName: "khati",
    email: "dhirtimankhati@gmail.com",
    age: 22,
}

console.log(user);



console.log(isLegal(user));

