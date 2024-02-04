new Vue({
    el: '#app',
    data: {
        newTask: {
            title: '',
            description: ''
        },
        kanbanColumns: [
            { title: 'Запланированные задачи', tasks: [] },
            { title: 'Задачи в работе', tasks: [] },
            { title: 'Тестирование', tasks: [] },
            { title: 'Выполненные задачи', tasks: [] }
        ]
    },
    methods: {
        addTask() {
            if (this.newTask.title && this.newTask.description) {
                this.kanbanColumns[0].tasks.push({
                    title: this.newTask.title,
                    description: this.newTask.description
                });
                this.newTask.title = '';
                this.newTask.description = '';
            }
        }
    }
});
