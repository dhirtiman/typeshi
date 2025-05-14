function getFirstElement<T>(arr: T[]) {
  return arr[0];
}

const el = getFirstElement<string>(["harkiratSingh", "ramanSingh"]);
const el2 = getFirstElement([1,2]);
console.log(el.toLowerCase())
console.log(el2);
