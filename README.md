# choices

Prompts the user for multiple choice

Choices are displayed in a numbered list, user is prompted with a message to make a choice. 

## Install
npm install choices

## Example
```javascript
var choices = require('choices');
var options = ['First Option', 'Second option', 'Third option'];
choices('Pick an option', options, function(idx) {
  console.log('You picked ' + options[idx]);
});
```
```
  1: First option
  2: Second option
  3: Third option
Pick an option>> 2
You picked Second option
```
