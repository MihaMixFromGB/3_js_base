let quiz = {
    current: 0,
    total: 5,
    summary: 0,
    questions: [],
    run: function() {
        let answer = confirm('Хотите выиграть миллион?')
        if (!answer) return
        alert('Вы всегда можете отказаться, нажав Отмена')

        while(true) { 
            if (this.current == 0) this.init()

            let question = this.questions[this.current]
            
            let questionForUser = 'Вопрос ' + (this.current + 1) + '/' + this.total + '\n'
            questionForUser += question.getQuestionForUser()

            answer = prompt(questionForUser)
            if (answer === null) return

            if (this.check(question, answer)) this.summary++

            if ((this.current + 1) == this.total) {
                alert('Игра окончена!\n' + 
                        'Количество правильных ответов ' + this.summary + '/' + this.total + '\n' + 
                        ((this.summary == this.total) ? 'Поздравляем, миллион Ваш!' : 'Не повезло:('))
                
                answer = confirm('Попытаться еще раз?')
                if (!answer) return
                
                this.current = -1
                this.summary = 0
            }

            this.current++
        }
    },
    init: function() {
        let questions = config.questions.slice()
        this.shuffle(questions)
        this.questions = questions.slice(0, this.total)

        for (let i = 0; i < this.questions.length; i++) {
            this.questions.answers = this.shuffle(this.questions[i].answers)
        }
    },
    shuffle: function(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    },
    check: function(question, answer) {
        if (answer == question.getCorrectAnswer()) {
            alert('Правильно!')
            return true
        }
        alert('Упс... не угадали :(')
        return false
    }
};