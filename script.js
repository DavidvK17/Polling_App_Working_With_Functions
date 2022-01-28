'use strict';

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: PHP', '3: C++'],
  answers: new Array(4).fill(0),
  // Challenge 1: create a method called registerNewAnswer on the poll object
  // Challenge 1.1: this method displays a promot window for the uster to input the number of the selected option
  //  The prompt should look like this:
  // What is your favourite programming language?
  // 0: JavaScript
  // 1: Python
  // 2: Rust
  // 3: C++
  // (Write option number)
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    // Challenge 1.2: Based on the input number, update the 'answers' array property. For example, if the option is 3, increase the value at position 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g. answer 52 wouldn't make sense)
    if (!isNaN(answer) && answer >= 0 && answer <= 3) {
      this.answers.forEach((val, i) => {
        if (answer === i) {
          this.answers[i] = val + 1;
          // Challenge 4: run the displayResults method at the end of each registerNewAnswer method call
          this.displayResults(this.answers);
        }
      });
    } else alert('Wrong input');
  },
  // Challenge 3: Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1"
  displayResults(type) {
    console.log(type);
    console.log(`Poll results are ${type.join(', ')}`);
  }
};

// Challenge 2: Call this mehtod whenever user clicks the answer poll buttom
const pollBtn = document.getElementById('poll');
const answerPoll = poll.registerNewAnswer;

pollBtn.addEventListener('click', answerPoll.bind(poll));
