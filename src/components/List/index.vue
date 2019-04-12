<template>
    <filter-condition :datas="dataList"></filter-condition>
</template>
<script>
import FilterCondition from './FilterCondition'

export default {
    data(){
        return {
            dataList:[
                {name:'A1',type:'String'},
                {name:'A2',type:'String',require:true},
                {name:'B',type:'Number'},
                {name:'D',type:'Date'},
                {name:'E',type:'Select'},
                {name:'F',type:'checkbox',children:['a','b','c']},
                {name:'G',type:'between-number'}
            ]
        }
    }
}
</script>
