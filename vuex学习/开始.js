/**简单的 Store*/

// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
});
store.commit('increment');//触发变更
console.log(store.state.count);//获取状态对象

