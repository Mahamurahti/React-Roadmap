'use strict';

// REGEXP

// Searches all that have the string "abc" in them
let re = /abc/;

// Searches all numbers
let re1 = /\d+/;

// Searches all letters
let re2 = /[^a-zA-Z]+/g;

// Searches only letters and numbers
let re3 = /[^A-Za-z0-9]+/;

// CHEATSHEET

// PATTERN MODIFIERS
// e — Evaluate replacement
// i — Perform case-insensitive matching
// g — Perform global matching
// m — Perform multiple line matching

// BRACKET MODIFIERS
// [abc] — Find any of the characters between the brackets
// [^abc] — Find any character which is not in the brackets
// [0-9] — Used to find any digit from 0 to 9
// [A-z] — Find any character from uppercase A to lowercase z
// (a|b|c) — Find any of the alternatives separated with |

// METACHARACTERS
// . — Find a single character, except newline or line terminator
// \w — Word character
// \W — Non-word character
// \d — A digit
// \D — A non-digit character
// \s — Whitespace character
// \S — Non-whitespace character
// \b — Find a match at the beginning/end of a word
// \B — A match not at the beginning/end of a word
// \0 — NUL character
// \n — A new line character
// \r — Carriage return character
// \t — Tab character
// \v — Vertical tab character

// QUANTIFIERS
// n+ — Matches any string that contains at least one n
// n* — Any string that contains zero or more occurrences of n
// n? — A string that contains zero or one occurrence of n
// n{X} — String that contains a sequence of X n’s
// n{X,Y} — Strings that contain a sequence of X to Y n’s
// n{X,} — Matches any string that contains a sequence of at least X n’s