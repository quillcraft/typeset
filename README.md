# Typeset

Some rules for typesetting russian texts.

```js
// non-breaking space UNICODE
const nbsp = '\xA0'

// or HTML entity
const nbsp = '&nbsp;'
```

1. Attach one-letter prepositions to the following word with a non-breaking space:

```js
// double preposition
const doublePrep = /([\s(«])([авикосу])\s([авикосу])\s/ig
result = result.replace(doublePrep, `$1$2${nbsp}$3${nbsp}`)

// single preposition
const singlePrep = /([\s(«])([авикосу])\s/ig
result = result.replace(singlePrep, `$1$2${nbsp}`)
```

2. Don't wrap an em dash on a new line:

```js
// em dash
const dash = /\s[-–—]\s/ig
result = result.replace(dash, `${nbsp}— `)
```

3. Attach units of measurement to the previous number with a non-breaking space:

```js
// units after number
const units = /(\d)\s([а-я]{1,5}[\s,.»)])/ig
result = result.replace(units, `$1${nbsp}$2`)
```

4. Use en dashes in number ranges:

```js
// range of numbers or negative number
const range = /([\d\s])[-–—](\d)/ig
result = result.replace(range, `$1–$2`)
```
