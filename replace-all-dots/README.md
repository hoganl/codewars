The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task
Fix the bug so we can all go home early.

Notes
String str will never be null.

https://www.codewars.com/kata/fixme-replace-all-dots/train/javascript

Process: According to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace, a g needs to be added after last forward slash and before the comma. Additionally, since the period is a special character, you need to add an escape (\) before the period. 