import test from 'ava';
import {alloc} from '@array-like/alloc';
import {iota} from '@array-like/fill';

import {realloc} from '#module';

test('realloc', (t) => {
	const m = 1000;
	const n = 733;

	const a = alloc(m);
	let b = alloc(n);

	iota(a, 0, m, 0);
	iota(b, 0, n, 0);

	b = realloc(b, m);
	iota(b, n, m, n);

	t.deepEqual(b, a, 'b is a after growing');

	a.splice(n, m - n);
	b = realloc(b, n);

	t.deepEqual(b, a, 'b is a after shrinking');
});
