<template>
    <table class="hovertable">
        <tr><th v-for="(title,index) in titles" :key="index">{{title}}</th></tr>
        <tr v-for="(data,index) in datas" :key="index" @click="chooseTr(index)">
            <td  v-for="([key,value],i) in Object.entries(data)" :key="i" v-show="key!='isEdit'">
                   <span v-show="!data.isEdit"> {{data[key]}}</span>
                   <span v-show="data.isEdit"><input type="text"  v-model="data[key]"/></span>
            </td>
        </tr>
    </table>
</template>

<script>
export default {
    data:function(){
        return {
            titles:['A','B','C'],
            datas:[
                {a:'0',b:'0',c:'0',isEdit:false},
                {a:'1',b:'1',c:'1',isEdit:false},
                {a:'2',b:'2',c:'2',isEdit:false},
            ]
        }
    },
    methods:{
        /* eslint-disable */
        chooseTr(index){
            this.delChoose();
            this.datas[index].isEdit=true;
        },
        delChoose(){//将其他设置为不可编辑
            for(let data of this.datas){
                data.isEdit=false;
            }
        }
    }
}
</script>

<style lang="less" scoped>
  .hovertable {
      width: 100%;
      font-family: verdana,arial,sans-serif;
      font-size:11px;
      color:#333333;
      border-width: 1px;
      border-color: #999999;
      border-collapse: collapse;
    th {
        background-color:#c3dde0;
        border-width: 1px;
        padding: 8px;
        border-style: solid;
        border-color: #a9c6c9;
    }
     tr {
     
        td {
        border-width: 1px;
        padding: 8px;
        border-style: solid;
        border-color: #a9c6c9;
        }
    }
 }
</style>

