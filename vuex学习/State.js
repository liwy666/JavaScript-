/*定义store*/
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
/*定义组件*/
const Counter = {
    template: `<div>{{ count }}</div>`,
    computed: {
        count() {
            //每当 store.state.count 变化的时候, 都会重新求取计算属性，并且触发更新相关联的 DOM。
            return store.state.count
        }
    }
};
/*注册组件和store*/
const app = new Vue({
    el: '#app',
    // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
    //组件能通过 this.$store 访问到
    store,
    components: {Counter},
    template: `
    <div class="app">
      <counter></counter>
    </div>
  `
});
/*当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余*/
// 在单独构建的版本中辅助函数为 Vuex.mapState
import {mapState} from 'vuex'

const Counter2 = {
    template: `<div>{{ count }}</div>`,

    computed: mapState({
        // 箭头函数可使代码更简练
        count: state => state.count,

        // 传字符串参数 'count' 等同于 `state => state.count`
        countAlias: 'count',

        // 为了能够使用 `this` 获取局部状态，必须使用常规函数
        countPlusLocalState(state) {
            return state.count + this.localCount
        }
    })
};
//当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
const Counter2 = {
    template: `<div>{{ count }}</div>`,

    computed: mapState([
        // 映射 this.count 为 store.state.count
        'count'
    ])
};

const Counter2 = {
    template: `<div>{{ count }}</div>`,

    computed: {
        localComputed () { /* ... */ },
        // 使用对象展开运算符将此对象混入到外部对象中
        ...mapState({
            // ...
        })
    }
};