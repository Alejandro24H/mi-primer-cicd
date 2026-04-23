const { sumar, hola } = require('./app');

test('suma 2 + 3 y debe dar 5', () => {
  expect(sumar(2, 3)).toBe(5);
});

test('la función hola devuelve el mensaje correcto', () => {
  expect(hola()).toBe("Hola Arquitectos de Software");
});
