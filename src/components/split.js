export default function SPLIT_TEXT(arr, num = 0) {
  let newArr = [];
  let auxArr = "";

  if (num != 0) {
    for (let i = 0; i < arr.length; i++) {
      auxArr += arr[i];
      if (i % num == 0 && i != 0) {
        newArr.push(auxArr)
        auxArr = "";
      }
    }

    if(auxArr.length != 0){
        newArr.push(auxArr)
    }
    return newArr
} else {
    return arr;
  }
  //   for (let i = 0; i < arr.length; i++) {
  //     if (num != 0 && i % num == 0 && i != 0) {
  //       newArr.push(auxArr);
  //       auxArr = [];
  //     } else {

  //       auxArr.push(arr[i]);
  //     }
  //   }

  //   if (auxArr.length != 0) {
  //     newArr.push(auxArr);
  //   }
  //   return newArr;
}
