/**
1) In this task, we are asked to do a word application.
2) The English meaning of a German word will be presented to the user among other words.
3) One of the given words will be the correct equivalent of the German word.
4) If the answers are correct, the "true" part will be incremented, and if false, the false part will be incremented.
5) With the next button, it will be passed to the next question.
 
  Solution Method
1) First, an object is created for the questions.
2) This "questions object" contains question and answer options.
3) In our application interface, the next button is created to move to the new question.
4) In addition, signboards showing the question number, correct and incorrect total of answers are created in the question section.
5) The "count" variable that we have created as "State" is used both in the sign showing the question number and during the next question phase.
6) The "plus" "minus" variables that we created as "state" are used in the calculation phase of counting the correct and incorrect ones.
  */
import './App.css';
import HeaderComp from "./components/Header"
import Question from "./components/Question"

const App = () => {

  return (
    <div className="App">
      <HeaderComp />
      <Question />

    </div>
  );
}

export default App;
