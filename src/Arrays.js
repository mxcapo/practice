export function twoSum(nums, target) {
  const vals = [];
  nums.forEach((curr, idx, orig) => {
    for (let i = idx + 1; i < orig.length; i++) {
      if ((curr + orig[i]) === target) Array.prototype.push.call(vals, idx, i);
    }
  });
  return vals;
}

export function hashSums(nums, target) {
  const vals = {};
  const sum = [];
  nums.forEach((curr, idx) => {
    vals[curr] = idx;
    return true;
  });
  for (let i = 0; i < nums.length; i++) {
    const compl = target - nums[i];
    if (vals[compl]) {
      Array.prototype.push.call(sum, i, vals[compl]);
      break;
    }
  }
  return sum;
}

export function getTriplets(arr) {
  const zeros = {};
  const sorted = arr.sort();
  console.log(arr);
  for (let i = 0; i < sorted.length - 2; i++) {
    for (let j = i + 1; j < sorted.length - 1; j++) {
      for (let k = j + 1; k < sorted.length; k++) {
        if ((arr[i] + arr[j] + arr[k]) === 0) {
          const combo = [arr[i], arr[j], arr[k]];
          const key = combo.join('');
          zeros[key] = combo;
        }
      }
    }
  }
  return zeros;
}
