<template>
    <el-row>
        <el-col :span="6">
           <sidebar></sidebar>
        </el-col>
        <el-col :span="18"><router-view></router-view></el-col>
    </el-row>
</template>
<script>
import sidebar from './Sidebar'
export default {
    components:{sidebar}
}
</script>

