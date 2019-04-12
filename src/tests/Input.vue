<template>
<div>
<input-clean v-model="logmei" :showClose="true"></input-clean> <button @click="logmei=10" >点击设置</button>
{{logmei}}
</div>
    
    
</template>
<script>
import InputClean from '../components/InputClean'

export default {
    components:{
        InputClean
    },
    data(){
       return {
           logmei:''
       }
    }
}
</script>

