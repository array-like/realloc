import {alloc} from '@array-like/alloc';
import {copy} from '@array-like/copy';

/**
 * Realloc.
 *
 * @param {ArrayLike} data
 * @param {number} length
 * @return {Array}
 */
const realloc = (data, length) => {
	const pt = alloc(length);

	copy(data, 0, Math.min(data.length, length), pt, 0);

	return pt;
};

export default realloc;
