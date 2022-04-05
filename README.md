# Typeset

Some rules for typesetting russian texts.

```js
	// non-breaking space
	const nbsp = '\xA0'
```

## Javascript

1. Attach one-letter prepositions to the next word with a non-breaking space:

```js
	// double preposition
	const doublePrep = /([\s(«])([авикосу])\s([авикосу])\s/ig
	result = result.replace(doublePrep, `$1$2${nbsp}$3${nbsp}`)

	// single preposition
	const singlePrep = /([\s(«])([авикосу])\s/ig
	result = result.replace(singlePrep, `$1$2${nbsp}`)
```

2. Don't wrap the em dash on a new line:

```js
	// em dash
	const dash = /\s[-–—]\s/ig
	result = result.replace(dash, `${nbsp}— `)
```

3. Abbreviations of units of measurement are connected with the previous number with a non-breaking space:

```js
	// units after number
	const units = /(\d)\s([а-я]{1,5}[\s,.»)])/ig
	result = result.replace(units, `$1${nbsp}$2`)
```

4. Number ranges use en dashes:

```js
	// range of numbers or negative number
	const range = /([\d\s])[-–—](\d)/ig
	result = result.replace(range, `$1–$2`)
```

## CSS

```css
	-webkit-hyphens: auto;
	-moz-hyphens: auto;
	-ms-hyphens: auto;
	hyphens: auto;
```

5. More than three lines in a row cannot end with a soft hyphen:

```css
	-webkit-hyphenate-limit-lines: 3;
	-moz-hyphenate-limit-lines: 3;
	-ms-hyphenate-limit-lines: 3;
	hyphenate-limit-lines: 3;
```

6. Do not break the last word of the paragraph with a soft hyphen.

```css
	-webkit-hyphenate-limit-last: always;
	-moz-hyphenate-limit-last: always;
	-ms-hyphenate-limit-last: always;
	hyphenate-limit-last: always;
```

7. Do not break the last word of the paragraph with a soft hyphen.

```css
	-webkit-hyphenate-limit-chars: 6 3 2;
	-moz-hyphenate-limit-chars: 6 3 2;
	-ms-hyphenate-limit-chars: 6 3 2;
	hyphenate-limit-chars: 6 3 2;
```
