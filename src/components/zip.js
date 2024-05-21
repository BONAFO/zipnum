import SPLIT from "./split";
import { zip_string } from "./zip_name";

let table = [];
let counter = 0;

// const gen_binary = (entry) => {
//   console.clear();
//   entry = Math.pow(2, entry);
//   const seed = [];

//   for (let i = 0; i <= entry; i++) {
//     console.log("--------------------");
//     console.log(i);
//     console.log("BINARIO");
//     console.log(i.toString(2));
//     console.log("HEX");
//     console.log(i.toString(16));
//     console.log("--------------------");
//   }
// };

// // alert(Math.pow(2,11))

// const add_iterations = (start) => {
//   const it = [];
//   for (let i = 0; i < seed.length; i++) {
//     // it.push([start + seed[i].toString(), counter])
//     if (table.indexOf(start + seed[i].toString()) == -1) {
//       it.push(start + seed[i].toString());
//     }

//     // console.log(counter);
//     counter++;
//   }
//   return it;
// };

// const gen_zip_table = () => {
//   console.clear();

//   table = table.concat(seed);
//   seed.map((s) => {
//     let start = "";
//     start = add_iterations(s);
//     table = table.concat(start);

//     // start.map(s1 => {
//     //     let start = "";
//     //     start = add_iterations(s1);
//     //     table = table.concat(start);
//     //     // start.map((s2, i) => {
//     //     //     if(i == 0){
//     //     //         console.log(s2);
//     //     //     }
//     //     //     let start = "";
//     //     //     start = add_iterations(s2[0]);
//     //     //     table = table.concat(start);
//     //     // })

//     // })
//   });

//   console.log(table.length);
//   // console.log(Math.pow(seed.length, 2) + seed.length);

//   // create_start_values(table)
// };

// // gen_binary(2);

// // genen_seed_zip();

// // console.log(
// //   parseBinary([1,1,1,1,1,1,1,1,1,1,1,1])
// // );
// // console.log([1,1,1,1,1,1,1,1,1,1,1,1].length);

// // console.log( parseInt(4095).toString(16));

// // console.log(parseInt(4000).toString(16));

// /*
// LIMITS 3 DIG

// 12 costumes
// number 4095
// $=> SEPARATOR

// TOKEN START >[ ] <TOKEN END
// @PLUS
// */

// const create_start_values = (json) => {
//   json = JSON.stringify(json);
//   const blob = new Blob([json], { type: "application/json" });
//   const url = window.URL.createObjectURL(blob);
//   const a = document.createElement("a");
//   a.href = url;
//   a.download = "values.json";
//   document.body.appendChild(a);
//   a.click();
//   window.URL.revokeObjectURL(url);
//   document.body.removeChild(a);
// };
// genen_seed_zip();
// gen_zip_table();

// console.log(Math.pow(seed.length, 3) + seed.length);

//FUNCIONAL CON 2 SIGLAS
// const genzip = (val) => {
//     console.log("----------------------");
//     if (val <= seed.length - 1) {
//       return seed[val] + "$";
//     } else {
//       let rounds = 0;
//       do {
//         if (Math.pow(seed.length, rounds) + seed.length > val) {
//           break;
//         } else {
//           rounds++;
//         }
//       } while (true);
//       // let rounds = Math.floor((val / seed.length) / seed.length) + 1;

//       console.log(rounds);

//       switch (rounds) {
//         case 2:
//           let zipchar = Math.pow(seed.length, rounds) + seed.length;
//           let values = [];
//           let first = Math.floor(val / seed.length - 1);
//           let last =  val - ((first + 1) * (seed.length));

//           values.push(seed[first].toString());
//           values.push(seed[last].toString());
//           return values.join("") + "$";

//         default:
//           for (let i = 0; i < rounds; i++) {

//           }
//           return val;
//       }
//     }
//   };

//FUNCIONAL CON 2 SIGLAS

// const genzip = (val) => {
//   console.log("----------------------");
//   if (val <= seed.length - 1) {
//     return seed[val] + "$";
//   } else {
//     let rounds = 0;
//     do {
//       if (Math.pow(seed.length, rounds) >= val) {
//         break;
//       } else {
//         rounds++;
//       }
//     } while (true);
//     // let rounds = Math.floor((val / seed.length) / seed.length) + 1;
// ;

//     let max = Math.pow(seed.length, rounds) + seed.length ;

//     console.log("max", max);
//     // for (let i = 1; i <= rounds; i++) {
//     //     let max = Math.pow(seed.length, i);
//     //     console.log("CICLOS",Math.floor(max /( seed.length)));
//     //     let first = Math.floor(val / seed.length - 1);
//     //     // console.log("{{{{{"+seed[first] + "}}}}}");

//     // }
//     // switch (rounds) {
//     //   case 2:
//     //     let zipchar = Math.pow(seed.length, rounds) + seed.length;
//     //     let values = [];
//     //     let first = Math.floor(val / seed.length - 1);
//     //     let last =  val - ((first + 1) * (seed.length));

//     //     values.push(seed[first].toString());
//     //     values.push(seed[last].toString());
//     //     return values.join("") + "$";

//     //   default:
//     //     for (let i = 0; i < rounds; i++) {

//     //     }
//     //     return val;
//     // }
//   }
// };

const genzip = (val) => {
  let codeZip = "";
  let base = seed.length;

  let numChars = 1;
  while (Math.pow(base, numChars) <= val) {
    numChars++;
  }

  // console.log("asasdsdsdas " + numChars);

  // // Construir el código zip
  //   for (let i = 0; i < numChars; i++) {
  //     //  let divisor = Math.pow(base, numChars);
  //     //   let index = Math.floor(val / divisor);
  //     //   console.log(index);
  //     //   codeZip += seed[index];
  //     //   val %= divisor;
  //   }

  //   if(numChars == 1){
  //     return seed[val];
  //   }else{

  //     let ciclos = [Math.floor(val / base)];

  //     console.log(Math.abs(base * ciclos[0] - val));

  //     // for (let i = 0; i < numChars; i++) {
  //     //     const num = val - base;
  //     //     co
  //     // }

  //     console.log(Math.floor(val / base));
  //     return codeZip
  //   }

  //   let ciclos = [Math.floor(val / base) + 1, Math.floor(val / base) + 2];
  //   console.log(ciclos);

  //   for (let i = 1; i <= numChars; i++) {

  //   }

  // // ciclos = [];

  // console.log(ciclos[0] * base , ciclos[1] * base);
  // console.log(ciclos);

  //   switch (numChars) {
  //     case 1:
  //       return seed[val];
  //     case 2:

  //         codeZip += (Math.floor(val / base) - 1).toString()
  //         codeZip += seed[]

  //      return codeZip
  //     default:
  //       break;
  //   }
};

// function nombreToBase64(nombre) {
//     const seed = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

//     let hash = 0;

//     if (nombre.length == 0) return seed[hash];

//     for (let i = 0; i < nombre.length; i++) {
//         const char = nombre.charCodeAt(i);
//         hash = ((hash << 5) - hash) + char;
//     }

//     let result = '';
//     while (hash > 0) {
//         result = seed[hash % 64] + result;
//         hash = Math.floor(hash / 64);
//     }

//     return result || seed[0];
// }

// function base64ToNombre(numeroBase64) {
//     const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
//     let hash = 0;

//     if (numeroBase64.length == 0 || !numeroBase64.match(/^[A-Za-z0-9+/]+$/)) return '';

//     for (let i = 0; i < numeroBase64.length; i++) {
//         const char = symbols.indexOf(numeroBase64[i]);
//         hash = ((hash << 6) - hash) + char;
//     }

//     let result = '';
//     while (hash > 0) {
//         result = String.fromCharCode(hash % 65536) + result;
//         hash = Math.floor(hash / 65536);
//     }

//     return result;
// }

// const nombre = "HOLA";
// const numeroBase64 = nombreToBase64(nombre);
// console.log(numeroBase64); // Salida: 'Clyl'
// console.log(base64ToNombre(numeroBase64)); // Salida: 'Clyl'

// const numeros = [57382456, 2456, 897, 573824566894, 6894, 1187, 3562, 7743, 1992, 546, 8888, 3333, 7129, 4650, 921];

// for (let i = 0; i < numeros.length; i++) {
//     console.log("--------------------------");
//     const num = convertToBase(numeros[i]);
//     console.log("result " +  numeros[i]+": " + num);
//     console.log("result " +  num+": " + convertFromBase(num));
// }

// console.log(convertToBase(10 * 10 *10 *10 *10 *10 * 10));
// // console.log(parseInt("1").toString(36));
// console.log("result 60: " + genzip(60));
// console.log("TABLE:" + table[60] + "$");
// console.log("result 69: " + genzip(69));
// console.log("TABLE:" + table[69] + "$");
// // console.log("result 50: " + genzip(50));
// // console.log("TABLE:" + table[50] + "$");
// // console.log("result 11: " + genzip(11));
// // console.log("TABLE:" + table[11] + "$");
// // console.log("result 2222: " + genzip(2222));
// // console.log("TABLE:" + table[2222] + "$");
// // console.log("result 66: " + genzip(66));
// // console.log("TABLE:" + table[66] + "$");
// // console.log("result 287: " + genzip(287));
// // console.log("TABLE:" + table[287] + "$");
// // console.log("result 2997: " + genzip(2997));
// // console.log("TABLE:" + table[2997] + "$");
// // console.log("result 4500: " + genzip(4500));
// // console.log("TABLE:" + table[4500] + "$");
// // console.log("result 4830: " + genzip(4830));

// setTimeout(() => {
// let num = 287;
// for (let i = 0; i <= num; i++) {
//     if (i % seed.length == 0) {
//     console.log("FIN DE CICLO");
//     }
//     console.log(table[i]);
// }
// }, 3000);

let seed = [];
let string_seed = [];

export let zip_char = [];

const genen_seed_zip = () => {
  let seed1 = "23456789".split("");
  let s = "qwertyuiopasdfghjklzxcvbnm".split("");
  let seed3 = ",-{+};:_*".split("");
  let seed2 = [];
  seed = seed.concat(seed1);
  for (let i = 0; i < s.length; i++) {
    seed2.push(s[i]);
    seed2.push(s[i].toUpperCase());
  }
  seed = seed.concat(seed2);
  seed = seed.concat(seed3);
};

const genen_string_seed_zip = () => {
  let s = "qwertyuiopasdfghjklzxcvbnm ".split("");

  let seed2 = [];
  let seed = [];

  for (let i = 0; i < s.length; i++) {
    seed2.push(s[i]);
    seed2.push(s[i].toUpperCase());
  }

  let breaker = true;
  let counter = 0;
  let i = 0;
  do {
    if (i % 10 == 0 || i == 33) {
      seed.push(null);
    } else if (seed2[counter] != undefined) {
      seed.push(seed2[counter]);
      counter++;
    } else {
      break;
    }
    i++;
  } while (breaker);

  seed[32] = null;
  string_seed = string_seed.concat(seed);
};

const parseBoolArr = (bArr) => {
  return bArr.map((v) => (v ? 1 : 0));
};
const parseBinary = (arr) => {
  if (typeof arr[0] == "boolean") {
    arr = parseBoolArr(arr);
  }
  arr = arr.join("");
  return parseInt(arr, 2).toString(16);
};

function convertToBase(number) {
  const base = seed.length; // Base 64
  let result = "";
  while (number > 0) {
    result = seed[number % base] + result;
    number = Math.floor(number / base);
  }

  return result || "0"; // Manejo del caso de número 0
}

function convertFromBase(str) {
  const base = seed.length; // Base 64

  let result = 0;
  for (let i = 0; i < str.length; i++) {
    const digitValue = seed.indexOf(str[i]);
    result = result * base + digitValue;
  }

  return result;
}

const stringToNumber = (str) => {
  let breaker = true;
  let counter = 0;
  let i = 0;
  let final = "";
  do {
    if (str[counter] != undefined) {
      final += string_seed.indexOf(str[counter]);
      final += "0";
      counter++;
    } else {
      break;
    }
  } while (breaker);

  // console.log(final);
  // final = final.split("33");

  return final;
};

const numberToString = (str) => {
  let final = "";
  str = str.replaceAll("33", "");
  str = str.split("0");

  let breaker = true;
  let counter = 0;
  let i = 0;

  do {
    if (str[counter] != undefined && str[counter] != "") {
      final += string_seed[str[counter]];
      counter++;
    } else {
      break;
    }
  } while (breaker);

  return final;
};

// const stringToNumber =(str) => {
//     let number = "0";
//     for (let i = 0; i < str.length; i++) {
//         number += string_seed.indexOf(str[i])

//     }

//     return BigInt(number)
// }

// const numberToString =(number) => {
//     // let number = "";
//     number = number.toString();
//     let string = "";
//     for (let i = 0; i < number.length; i+=2) {
//         string += string_seed[parseInt(number[i] + number[i + 1])]
//     }
//     return string
// }

genen_seed_zip();
genen_string_seed_zip();

// console.log(string_seed);
// const strnumb = stringToNumber("Kurumi y Naomi son unas mimosas")
// console.log(strnumb);
// console.log(numberToString(strnumb));

// console.clear()
// const ori = 1547984641123123142312341231541;
// console.log(ori.toString().length);
// const num11 = convertToBase(parseInt(BigInt(ori)));
// const num22 = convertFromBase(num11);
// console.log(ori);
// console.log(num11);
// console.log(num22);
// console.log(ori == num22);

// const str = "PowesShel69225AA";
// const str1 = stringToNumber(str);
// const str2 = numberToString(str1);
console.clear();
// console.log(str);
// console.log(str1);
// console.log(str2);

// let token = "";
// SPLIT(str1,12).map(num=> {
//   token += convertToBase(parseInt(num))
// })
// console.log(str.length);
// console.log(zip_string(str).length);
// console.log(token.length);
// console.log(SPLIT("12e3sd" , 5));
