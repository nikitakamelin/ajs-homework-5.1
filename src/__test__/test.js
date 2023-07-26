import orderByProps from '../js/OrderByProps';

test('basic test', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const order = ['name', 'level'];

  const result = [
    { key: 'name', value: 'мечник' }, // порядок взят из массива с ключами
    { key: 'level', value: 2 }, // порядок взят из массива с ключами
    { key: 'attack', value: 80 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
    { key: 'defence', value: 40 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
    { key: 'health', value: 10 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
  ];

  expect(result).toEqual(orderByProps(obj, order));
});

test('testing without order', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  // const order = ["name", "level"];

  const result = [
    { key: 'attack', value: 80 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
    { key: 'defence', value: 40 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
    { key: 'health', value: 10 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' }, //
  ];

  expect(result).toEqual(orderByProps(obj));
});
