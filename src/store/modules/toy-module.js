import { toyService } from '../../services/toy-service.js'

export default {
    state: {
        toys: null,
    },
    getters: {
        toys(state) {
            return state.toys
        },
    },
    mutations: {
        setToys(state, { toys }) {
            state.toys = toys
        },
        removeToy(state, { id }) {
            const idx = state.toys.findIndex((toy) => toy._id === id)
            state.toys.splice(idx, 1)
        },
        saveToy(state, { toy }) {
            const idx = state.toys.findIndex((currToy) => currToy._id === toy._id)
            if (idx !== -1) state.toys.splice(idx, 1, toy)
            else state.toys.push(toy)
        },
    },
    actions: {
        loadToys({ commit }) {
            toyService.query().then((toys) => {
                commit({ type: 'setToys', toys })
            })
        },
        removeToy({ commit }, { id }) {
            toyService.remove(id).then(() => {
                commit({ type: 'removeToy', id })
            })
        },
        saveToy(context, { toy }) {
            toyService.save(toy).then((toy) => {
                context.commit({ type: 'saveToy', toy })
                context.dispatch({ type: 'loadToys' })
            })
        },
    },
}
