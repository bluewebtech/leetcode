/**
 * The brute force solution.
 *
 * @param {Number[]} nums
 * @return {Number[][]}
 */
var permute = (nums) => {
  let array = [];

  array.push([nums[0], nums[1], nums[2]]);
  array.push([nums[0], nums[2], nums[1]]);
  array.push([nums[1], nums[0], nums[2]]);
  array.push([nums[1], nums[2], nums[0]]);
  array.push([nums[2], nums[0], nums[1]]);
  array.push([nums[2], nums[1], nums[0]]);

  return array;
};

/**
 * The modulus get it done solution.
 *
 * @param {Number[]} nums
 * @return {Number[][]}
 */
var permute = (nums) => {
  let array = [];

  for (let a = 0; a < nums.length; a++) {
    for (let b = 0; b < 2; b++) {
      array.push([nums[a]]);
    }
  }

  array.forEach((item, key) => {
    for (let a = 0; a < nums.length; a++) {
      if (item.indexOf(nums[a]) === -1) {
        array[key].push(nums[a]);
      }
    }
  });

  array.forEach((item, key) => {
    if(key % 2) {
      const swap1 = array[key][2];
      const swap2 = array[key][1];
      array[key][1] = swap1;
      array[key][2] = swap2;
    }
  });

  return array;
};

/**
 * The recursive solution.
 *
 * @param {Number[]} nums
 * @return {Number[][]}
 */
var permute = (nums) => {
  let ret = [];

  for (let i = 0; i < nums.length; i = i + 1) {
    let rest = permute(nums.slice(0, i).concat(nums.slice(i + 1)));

    if(!rest.length) {
      ret.push([nums[i]])
    } else {
      for(let j = 0; j < rest.length; j = j + 1) {
        ret.push([nums[i]].concat(rest[j]))
      }
    }
  }
  return ret;
};

/**
 * The shifting things around solution.
 *
 * @param {Number[]} nums
 * @return {Number[][]}
 */
var permute = (nums) => {
  let res = [[]];

  for (let i = 0; i < nums.length; i++) {
    while(res[res.length - 1].length === i) {
      let l = res.pop();

      for (let j = 0; j <= l.length; j++) {
        let copy = l.slice();
        copy.splice(j, 0, nums[i]);
        res.unshift(copy);
      }
    }
  }

  res.sort();

  return res;
};
