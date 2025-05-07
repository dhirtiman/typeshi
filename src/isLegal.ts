function isLegal(user: User) {
  if (user.age >= 18) {
    return true;
  }
  return false;
}

interface User {
  firstName: string;
  lastName: string;
  email?: string;
  age: number;
}

const user1: User = {
  firstName: "dhirtiman",
  lastName: "khati",
  email: "dhirtimankhati@gmail.com",
  age: 22,
};

const user2: User = {
  firstName: "lil",
  lastName: "nigga",
  age: 10,
};

const user3: User = {
  firstName: "type",
  lastName: "shi",
  age: 18,
};

const user4: User = {
  firstName: "sig",
  lastName: "hiel",
  age: 6,
};

const users: User[] = [user1, user2, user3, user4];

function filterUsers(users: User[]) {
  const filteredUsers = users.filter(isLegal);
  return filteredUsers;
}

const legalUsers = filterUsers(users);
console.log("Legal users:", legalUsers);
