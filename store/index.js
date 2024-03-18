import Vuex from 'vuex'

const store = () => new Vuex.Store({
	state: {
		notes: [
			{ id: 1, title: 'Заметка 1', content: 'Содержание заметки 1' },
			{ id: 2, title: 'Заметка 2', content: 'Содержание заметки 2' }
		]
	},
	mutations: {
		addNote(state, note) {
			state.notes.push(note)
		},
		deleteNote(state, id) {
			state.notes = state.notes.filter(note => note.id !== id)
		}
	}
})

export default store
