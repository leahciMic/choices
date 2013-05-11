/**
 * Prompts the user for multiple choice
 *
 * `choices` are displayed in an ordered list, user is prompted with message,
 * callback is returned with the index of the choice.
 *
 * @param prompt String Message to show users
 * @param choices Array[String] Names of the choices
 * @param callback Function Callback the function when a valid choice is made
 *
 * @install
 * npm install choices
 *
 * @example
 *
 * var choices = require('choices');
 * var options = ['First Option', 'Second option', 'Third option'];
 * choices('Pick an option', options, function(idx) {
 *   console.log('You picked ' + options[idx]);
 * });
 *
 *   1: First option
 *   2: Second option
 *   3: Third option
 * Pick an option>> 2
 * You picked Second option
 *
 * @todo Add support for more than 9 options (key number + enter)
 *
 */

module.exports = function(prompt, choices, callback) {
  var stdin = process.stdin;
  if (choices.length > 9)
    throw new Error('choices only supports < 9 choices');
  choices.forEach(function(name, idx) {
    console.log('  ' + (idx + 1) + ': ' + name);
  });
  process.stdout.write(prompt + '>> ');
  stdin.setRawMode(true);
  stdin.resume();

  stdin.once(
    'data',
    function(key) {
      var idx;
      stdin.pause();
      stdin.setRawMode(false);

      if (key === '\u0003')
        process.exit();

      console.log(key);

      idx = +key;

      if (idx > 0 && idx <= choices.length)
        return callback(idx - 1);

      process.nextTick(function() {
        choices(prompt, choices, callback);
      });
    }
  );
};
