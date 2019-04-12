<template>
    <el-input v-model="input" placeholder="请输入内容" class="clean"><i v-if="showClose" slot="suffix" class="el-input__icon el-icon-circle-close" @click="cleanContent"></i></el-input>
</template>
<script>
/* eslint-disable */
export default {
    // props:['value','showClose'],
    props:{
        value:{
            // type:[String,Number,undefined,null,''],
            required:true
        },
        showClose:{
            type:[Boolean],
            default:false
        }
    },
    computed:{
        input:{
            get:function(){
                return this.value;
            },
            set:function(newValue){
                this.$emit('input',newValue);
            }
        }
    },
  
    methods:{
        cleanContent(e){
          this.input=''
        }
    }
}
</script>
<style lang="less" scoped>
    .clean{
       i{
           cursor: pointer;
       } 
    }
</style>
