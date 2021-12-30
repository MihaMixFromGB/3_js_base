let config = {
    questions: [
        new Question(
            1,
            'Что находится между горой и долиной?',
            [
                { content: 'поле', match: false },
                { content: 'лес', match: false },
                { content: 'буква', match: true },
                { content: 'барбара стрейзанд', match: false }
            ]),
        new Question(
            2,
            'Сколько программистов нужно, чтобы закрутить лампочку?',
            [
                { content: 'один', match: false },
                { content: 'два', match: false },
                { content: 'ни одного (это аппаратный вопрос)', match: true },
                { content: 'команда', match: false }
            ]),
        new Question(
            3,
            "'Весь покрытый зеленью, абсолютно весь ...' - кто это?!",
            [
                { content: 'остров', match: false },
                { content: 'лес', match: false },
                { content: 'новый русский', match: true },
                { content: 'крокодил', match: false }
            ]),
        new Question(
            4,
            'Не лёд, а тает, не лодка, а уплывает.',
            [
                { content: 'снег', match: false },
                { content: 'чушь', match: false },
                { content: 'зарплата', match: true },
                { content: 'черная дыра', match: false }
            ]),
        new Question(
            5,
            'Под каким деревом сидит заяц, когда идет дождь?',
            [
                { content: 'березой', match: false },
                { content: 'сосной', match: false },
                { content: 'мокрым', match: true },
                { content: 'нет правильного ответа', match: false }
            ]),
        new Question(
            6,
            'Кто ходит сидя?',
            [
                { content: 'гусь', match: false },
                { content: 'сидеход', match: false },
                { content: 'шахматист', match: true },
                { content: 'барбара стрейзанд', match: false }
            ]),
        new Question(
            7,
            'Чего нет в женской сумочке?',
            [
                { content: 'ключей', match: false },
                { content: 'денег', match: false },
                { content: 'порядка', match: true },
                { content: 'помадки', match: false }
            ])
    ]
};