:recycle: [@array-like/realloc](https://array-like.github.io/realloc)
==

ArrayLike reallocation for JavaScript.
See [docs](https://array-like.github.io/realloc/index.html).

```js
import {alloc} from '@array-like/alloc';
import {iota} from '@array-like/fill';
import {realloc} from '@array-like/realloc':

const a = alloc(100);
iota(a, 0, 100, 0);
const b = realloc(a, 200); // 0 1 2 .. 98 99 undefined undefined ...
```

[![License](https://img.shields.io/github/license/array-like/realloc.svg)](https://raw.githubusercontent.com/array-like/realloc/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@array-like/realloc.svg)](https://www.npmjs.org/package/@array-like/realloc)
[![Tests](https://img.shields.io/github/actions/workflow/status/array-like/realloc/ci.yml?branch=main&event=push&label=tests)](https://github.com/array-like/realloc/actions/workflows/ci.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/array-like/realloc.svg)](https://github.com/array-like/realloc/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/array-like/realloc.svg)](https://github.com/array-like/realloc/issues)
[![Downloads](https://img.shields.io/npm/dm/@array-like/realloc.svg)](https://www.npmjs.org/package/@array-like/realloc)

[![Code issues](https://img.shields.io/codeclimate/issues/array-like/realloc.svg)](https://codeclimate.com/github/array-like/realloc/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/array-like/realloc.svg)](https://codeclimate.com/github/array-like/realloc/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/array-like/realloc/main.svg)](https://codecov.io/gh/array-like/realloc)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/array-like/realloc.svg)](https://codeclimate.com/github/array-like/realloc/trends/technical_debt)
[![Documentation](https://array-like.github.io/realloc/badge.svg)](https://array-like.github.io/realloc/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@array-like/realloc)](https://bundlephobia.com/result?p=@array-like/realloc)
