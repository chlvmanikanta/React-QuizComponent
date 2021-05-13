import React, { Component } from 'react';
import QuizQuestion from "./QuizQuestion";
import QuizEnd from "./QuizEnd";
let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz_position: 1
        };
    }
    showNextQuestion() {
        this.setState({
            ...this.state,
            quiz_position: ++this.state.quiz_position
        });
    }
    handleResetClick() {
        this.setState({
            ...this.state,
            quiz_position: 1
        });
    }
    render() {
        const isQuizEnd = quizData.quiz_questions.length === this.state.quiz_position-1;
        return (<div>
            {isQuizEnd ? <QuizEnd resetClickHandler={this.handleResetClick.bind(this)}></QuizEnd> :
                <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} showNextQuestionHandler={this.showNextQuestion.bind(this)} ></QuizQuestion>
            }
        </div>);
    }
}

export default Quiz;