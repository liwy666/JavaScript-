/**Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。
 * 就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。*/

//Getter 接受 state 作为其第一个参数：
const store = new Vuex.Store({
    state: {
        todos: [
            {id: 1, text: '...', done: true},
            {id: 2, text: '...', done: false}
        ]
    },
    getters: {
        //Getter 接受 state 作为其第一个参数：
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        //Getter 也可以接受其他 getter 作为第二个参数：
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length
        },
        //你也可以通过让 getter 返回一个函数，来实现给 getter 传参。在你对 store 里的数组进行查询时非常有用
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id)
        }
    }
});
//Getter 会暴露为 store.getters 对象，你可以以属性的形式访问这些值：
this.$store.getters.doneTodos;
//为getter传参
//注意，getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果。
//注意，getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果。
store.getters.getTodoById(2);
//我们可以很容易地在任何组件中使用它：
computed: {
    doneTodosCount()
    {
        return this.$store.getters.doneTodosCount
    }
}
/**mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：*/
import {mapGetters} from 'vuex'

export default {
    // ...
    computed: {
        // 使用对象展开运算符将 getter 混入 computed 对象中
        ...mapGetters([
            'doneTodosCount',
            'anotherGetter',
            // ...
        ])
    }
}
//如果你想将一个 getter 属性另取一个名字，使用对象形式：
export default {
    // ...
    computed: {
        // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
        ...mapGetters({
                doneCount: 'doneTodosCount'
            }
        )
    }
}