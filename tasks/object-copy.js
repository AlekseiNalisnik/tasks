/*
Петя очень любит изучать различные характеристики звёзд. Для того, чтобы в любой момент можно было найти характеристики изучаемой звезды, Петя создаёт объекты с произвольным набором характеристик и их значений
peterObj = {
  luminosity: "light",
  size: {
      temperature: 4000,
      volume: {
          radius: 350,
          color: {
              class: "A"
          }
      }
  }    
}
У Пети есть друг Дима, который тоже собирает различные характеристики звёзд: некоторые его характеристики отличаются (от характеристик Пети) и являются более актуальными на данный момент
dimaObj = {
  luminosity: "dark",
  size: {
      temperature: 4000,
      volume: {
          radius: 349,
          weight: 3500000,
          color: {
              class: {
                  galaxy: "Milky Way",
                  designation: "A",
              }
          }
      }
  }  
}
Петя хочет реализовать некий алгоритм (solution(peterObj, dimaObj)), который не будет изменять структуру его объекта для изучения (так как именно эти и только эти поля нужны Пете в данный момент), но с помощью наиболее актуальной информации Димы Петя хочет обновлять текущие характеристики "звёздного" объекта.

Задание: Написать функцию solution(peterObj, dimaObj), которая принимает первым аргументом изначальный объект Пети, вторым аргументом улучшенный объект Димы, и заменяет ТОЛЬКО те поля, которые есть в изначальном объекте Пети.
resultObj = {
    luminosity: "dark",
    size: {
        temperature: 4000,
        volume: {
            radius: 349,
            color: {
                class: {
                    galaxy: "Milky Way",
                    designation: "A",
                }
            }
        }
    }  
}
*/

function solution(mainObj, secondaryObj) {
    Object.keys(mainObj).forEach(key => {
        if (typeof(mainObj[key]) === 'object') {
            if (typeof(secondaryObj[key]) === 'object') {
            mainObj[key] = solution(mainObj[key], secondaryObj[key]);
            } else {
            mainObj[key] = solution(mainObj[key], secondaryObj);
            }
        } else if (secondaryObj[key]) {
            mainObj[key] = secondaryObj[key];
        }
    });
  
    return mainObj;
}

const mainObj = {
    f1: 'value1',
    f2: {
        f3: 'value3',
        f4: {
            f5: 'value5',
            f6: {
                f7: 'latest'
            }
        }
    }    
};

const secondaryObj = {
    f1: 'NEW_VALUE',
    f2: {
        f4: {
            f6: {
                f7: 'NEW_F7_VALUE',
                f111: '111_test',
                f8: {
                    f9: 'test',
                }
            }
        }
    }
};

console.log(solution(mainObj, secondaryObj));
