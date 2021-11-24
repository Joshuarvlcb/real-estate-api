var jump = function (nums) {
  if (nums.length == 1) return 0;

  let pointer = 0;
  let count = 0;
  let copy = [...nums];
  while (pointer < nums.length - 1) {
    const possibleJumps = new Array(nums[pointer]).fill("").map((_, i) => {
      return i + 1;
    });
    console.log(possibleJumps);
    const jumpValue = possibleJumps
      .map((jumpValue, i) => {
        console.log(jumpValue);
        console.log(jumpValue + nums.indexOf(nums[pointer + jumpValue]));
        return (
          jumpValue +
          nums.indexOf(nums[pointer + jumpValue]) +
          nums[pointer + jumpValue]
        );
      })
      .reduce((acc, jump) => {
        return Math.max(jump, acc);
      }, 0);
    console.log(jumpValue, "jumpValue");
    pointer += jumpValue;
    count += 1;
  }
  console.log(count);
  return count;
};
jump([2, 3, 0, 1, 4]);
