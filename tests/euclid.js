'use strict';

QUnit.module('Тестируем функцию euclid', function () {
	QUnit.test('На входе всего одно число', function (assert) {
		assert.strictEqual(euclid(1), 1, 'euclid(1) === 1');
		assert.strictEqual(euclid(2), 2, 'euclid(2) === 2');
		assert.strictEqual(euclid(7), 7, 'euclid(7) === 7');
		assert.strictEqual(euclid(6006), 6006, 'euclid(6006) === 6006');
	});

	QUnit.test('Функция должна правильно находить НОД трёх натуральных чисел', function (assert) {
		assert.strictEqual(euclid(1, 1, 1), 1, 'euclid(1, 1, 1) === 1');
		assert.strictEqual(euclid(2, 2, 2), 2, 'euclid(2, 2, 2) === 2');
		assert.strictEqual(euclid(13, 13, 26), 13, 'euclid(13, 13, 26) === 13');
		assert.strictEqual(euclid(3, 7, 1), 1, 'euclid(3, 7, 1) === 1');
		assert.strictEqual(euclid(7, 7, 13), 1, 'euclid(7, 7, 13) === 1');
		assert.strictEqual(euclid(2, 14, 16), 2, 'euclid(2, 14, 16) === 2');
		assert.strictEqual(euclid(7, 14, 21), 7, 'euclid(7, 14, 21) === 7');
		assert.strictEqual(euclid(6006, 3738735, 51051), 3003, 'euclid(6006, 3738735, 51051) === 3003');
	});

	QUnit.test('Функция должна правильно работать с любым количеством аргументов', function (assert) {
		assert.strictEqual(euclid(1, 1, 1, 1, 1, 1, 1), 1);

		const n = 17;
		assert.strictEqual(euclid(3 * n, 2 * n, 4 * n, 7 * n, n, 21 * n), n);

		const temp = [ 80325, 55275, 8746650, 3000000, 45672375, 225, 54675 ];
		assert.strictEqual(euclid(...[ ...temp, ...temp, ...temp, ...temp, ...temp ]), euclid(...temp));
	});

	QUnit.test('Поведение при подаче некорректных аргументов', function (assert) {
		assert.throws(euclid(), undefined, 'No args');
		assert.throws(function() {
				euclid('abacaba');
			},
			new TypeError('Wrong type is given, expected number'),
			'String arg (one)'
		);
		assert.throws(
			function() {
				euclid('abacaba', 'testtest');
			},
			new TypeError('Wrong type is given, expected number'),
			'String args (many)'
		);
		assert.throws(
			function() {
				euclid({}, {});
			},
			new TypeError('Wrong type is given, expected number'),
			'Object args'
		);
		assert.throws(
			function() {
				euclid(null);
			},
			new TypeError('Wrong type is given, expected number'),
			'Null arg'
		);
		assert.throws(
			function() {
				euclid(undefined);
			},
			new TypeError('Wrong type is given, expected number'),
			'Undefined arg'
		);
		assert.throws(
			function() {
				euclid(true, false);
			},
			new TypeError('Wrong type is given, expected number'),
			'Boolean args'
		);
		assert.throws(
			function() {
				euclid(function() {}, function() {});
			},
			new TypeError('Wrong type is given, expected number'),
			'Function args'
		);
	});
});
