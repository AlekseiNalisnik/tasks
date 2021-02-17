snail = function(array) {
  let n = array.length;
  
  let i = 0;
  let j = 0;
  let leftBorder = 0;
  let topBorder = 0;
  
  let ans = [];

  if (!array[0][0]) {
    return ans;
  }
  
  while (n > 0) {
    while(j < n) {
      ans.push(array[i][j]);
      j++;
    }

    topBorder++;

    j--;
    i++;

    while(i < n) {
      ans.push(array[i][j]);
      i++;
    }

    i--;
    j--;

    while(j >= leftBorder) {
      ans.push(array[i][j]);
      j--;
    }

    j++;
    i--;

    while(i >= topBorder) {
      ans.push(array[i][j]);
      i--;
    }

    i++;
    j++;

    leftBorder++;
    n--;
  }
  
  return ans;
}

console.log(
  snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
);

console.log(
  snail([[]])
);
