let log = function(d){
 console.log(d);
}

const nums = [1,2,3,4,5];
let total = 0;

for(const n of nums) {
  total = total + n;
}

log('1st ' + total);

// callback 함수
const add = (a, b) => a + b;

//reduce는 재귀적으로 중첩으로 작용해 하나의 값으로 누적 하는것
log('2nd ' + add(add(add(add(add(0,1),2),3),4),5));

const reduce = (f, acc, iter) => {
  for(const v of iter) {
    acc = f(acc, v);
  }
  return acc;
};

log('3rd ' + reduce(add, 0, [1, 2, 3, 4, 5]));
// reduce(콜백함수, 첫번째 누적인자, 이터레이터)