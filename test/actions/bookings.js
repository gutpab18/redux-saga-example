// What are you testing?
// What should it do?
// What is the actual output?
// What is the expected output?
// How can the test be reproduced?

import test from 'ava';

// For each unit test you write,
// answer these questions:
test('What component aspect are you testing?', assert => {
	const actual = 'What is the actual output?';
	const expected = 'What is the expected output?';

	assert.equal(actual, expected, 'What should the feature do?');

	assert.end();
});
