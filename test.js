import test from 'ava';
import otoa from './';

test('otoa.objectToArray({i-0: 0, i-1: 1}, \'i-\'); should return an array.)', async t => {
    var obj = {'i-0': 0, 'i-1': 1};
    var x = otoa.objectToArray(obj, 'i-');
    t.is(typeof x, typeof []);
    t.is(Array.isArray(x), true);
    t.is(x[0] === obj['i-' + 0] && x[0] === 0, true);
    t.is(x[1] === obj['i-' + 1] && x[1] === 1, true);
    t.is(x[2] === obj['i-' + 2] && x[2] === undefined, true);
});
