new Vue({
    el: '#app',
    data: {
        plannedTasks: [],
        inProgressTasks: [],
        testingTasks: [],
        completedTasks: [],
        cardTitle: '',
        cardDesc: '',
        deadline: '',
        addDesc: '',
        timeout: '',
        updatedData: '',
        updatedDesc: '',
        updatedTime: '',
    },
    methods: {
        addCard() {
            const newCard = {
                id: Date.now(),
                title: this.cardTitle,
                description: this.cardDesc,
                deadline: this.deadline,
                addDesc: this.addDesc,
                timeout: this.timeout,
                completedDate: '',
                updated: false,
                updatedData: ''
            };
            this.plannedTasks.push(newCard);
            this.resetForm();
            newCard.createdDate = new Date().toLocaleString();
        },
        removeCard(taskList, card) {
            taskList.splice(taskList.indexOf(card), 1);
        },
        editCard(card) {
            card.updated = true;
        },
        updatedCard(card, text, date) {
            card.description = text;
            card.deadline = date;
            card.updatedData = new Date().toLocaleString();
            card.updated = false;
        },
        cardMove(card, destination) {
            const sourceList = this.findSourceList(card);

            if (sourceList) {
                sourceList.splice(sourceList.indexOf(card), 1);

                if (destination === 'inProgress') {
                    this.inProgressTasks.push(card);
                } else if (destination === 'testing') {
                    this.testingTasks.push(card);
                } else if (destination === 'completed') {
                    this.completedTasks.push(card);
                }
            }
        },
        findSourceList(card) {
            if (this.plannedTasks.includes(card)) {
                return this.plannedTasks;
            } else if (this.inProgressTasks.includes(card)) {
                return this.inProgressTasks;
            } else if (this.testingTasks.includes(card)) {
                return this.testingTasks;
            } else if (this.completedTasks.includes(card)) {
                return this.completedTasks;
            }
            return null;
        },
        resetForm() {
            this.cardTitle = '';
            this.cardDesc = '';
            this.deadline = '';
            this.addDesc = '';
            this.timeout = '';
        }
    }
});
