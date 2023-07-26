export default function orderByProps(obj, order = null) {
  // сперва создадим первую часть результирующего массива на базе отправленного
  // порядка сортировки order
  const resultedArrayFirstPart = [];

  if (order) {
    // в цикле добавим в массив несколько соответствующих объектов
    order.forEach((key) => {
      const item = {
        key: `${key}`,
        //! конструкция позволяет пушить данные в соответствии с их типом
        value: typeof obj[key] === 'string' ? `${obj[key]}` : parseInt(`${obj[key]}`, 10),
      };
      resultedArrayFirstPart.push(item);

      // удалим свойства из исходного объекта,
      // которые мы уже использовали для первой части результирующего массива
      delete obj[key];
    });
  }

  // создадим вторую часть результирующего массива, которая
  // будет уже без свойств, которые нам отправили вторым аргументом в функцию
  const resultedArraySecondPart = [];

  for (const key in obj) {
    const item = {
      key: `${key}`,
      value: typeof obj[key] === 'string' ? `${obj[key]}` : parseInt(`${obj[key]}`, 10),
    };
    resultedArraySecondPart.push(item);
  }

  // отсортируем вторую часть результирующего массива в алфавитном порядке
  resultedArraySecondPart.sort((current, next) => current.key.localeCompare(next.key));

  // объединим 1ую и 2ю части
  return resultedArrayFirstPart.concat(resultedArraySecondPart);
}
