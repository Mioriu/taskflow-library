// Task management module
class Task {
    constructor(title, description) {
        this.id = Date.now();
        this.title = title;
        this.description = description;
        this.status = 'todo';
        this.createdAt = new Date();
        // В конструктор после this.createdAt
        this.priority = 'medium';

    }

    updateStatus(status) {
        const validStatuses = ['todo', 'in-progress', 'done'];
        if (validStatuses.includes(status)) {
            this.status = status;
        }
    }

    setPriority(priority) {
    const validPriorities = ['low', 'medium', 'high', 'urgent'];
    if (priority && typeof priority === 'string') {
        const normalized = priority.toLowerCase();
        if (validPriorities.includes(normalized)) {
            this.priority = normalized;
            return true;
        }
    }
    return false;
 }

}

module.exports = Task;
