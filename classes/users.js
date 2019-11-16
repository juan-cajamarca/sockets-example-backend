class Users {

	constructor() {
		this.users = []
	}

	addUser(id, name) {
		const user = { id, name }
		this.users.push(user)
		return this.users
	}

	getUser(id) {
		return this.users.filter(u => u.id === id)[0]
	}

	getUsers() {
		return this.users
	}

	getUsersByGroup(group) {
	}

	deleteUser(id) {
		const userDeleted = this.getUser(id)
		this.users = this.users.filter(user => user.id !== id)
		return userDeleted
	}

}

module.exports = Users