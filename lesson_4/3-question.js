class Question {
    constructor(id, content, answers) {
        this.id = id,
        this.content = content,
        this.answers = answers
    }
    getQuestionForUser() {
        let content = this.content + '\n'
        for (let i = 0; i < this.answers.length; i++) {
            content += this.getShortAnswer(i) + '. ' + this.answers[i].content + '\n'
        }

        return content
    }
    getCorrectAnswer() {
        let correct = this.answers.findIndex(a => a.match)
        return this.getShortAnswer(correct)
    }
    getShortAnswer(index) {
        return String.fromCharCode(97 + index)
    }
};