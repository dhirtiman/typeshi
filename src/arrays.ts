
const arr: number[] = [1, 2, 3, 4, 5];

function findMax(arr: number[]) {
  let max = 0;
  arr.forEach((num) => {
    console.log(`comparing max = ${max} and num = ${num}`);

    if (num >= max) max = num;
  });

  return max;
}

const max = findMax(arr);

console.log(max);
