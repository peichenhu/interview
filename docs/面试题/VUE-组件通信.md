# Vue 组件通信
  
## 全局通信
    
- Root 模式
  
  ```js
  
  const vmA = new Vue({
    data: sourceOfTruth
  });
  
  // this.$root.$data;
  ```
  
- Bus 模式
  
  ```js
  import Vue from 'vue';
  const Bus = new Vue();
  export default Bus;
  
  Bus.$emit('log', 120);
  Bus.$on('log', content => { 
     // content;
  });
  ```
- Vuex 模式
  
  ```js
  const store = new Vuex.Store({
     state: { ... },
     mutations: { ... },
     actions: { 
        asyncAction({ commit, state }, payload){
            commit(someMutationA, payload);
            commit(someMutationB, payload);
        } 
     },
     getters: { ... }
  });
  
  // this.$store.state.count
  // this.$store.getters.someGetter
  this.$store.dispatch('asyncAction', {
    amount: 10
  });
  
  ```
     
## 父 => 子通信

- props模式 

- this.$children

- this.$refs.[child]

```vue
<!--props模式 $emit-on 模式-->
<children-component someProps="someValue" />
```
## 子 => 父通信

- $emit(v-on)

- this.$parent.[method]

```vue
<!--props模式 $emit-on 模式-->

function callFn($payload){ }

<children-component someProps="someValue" v-on:callParent="callFn"></children-component>

Vue.component('children-component', {
  template: `
    <button v-on:click="$emit('callParent', 123)">
      Click me to be welcomed
    </button>
  `
})

```

