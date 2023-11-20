<template>
    <div>
        <el-dialog title="编辑" :visible.sync="dialogVisible" width="30%">
            名称：<el-input v-model="form.name" placeholder="请输入名称"></el-input>
            省份：<el-input v-model="form.province" placeholder="请输入省份"></el-input>
            市区：<el-input v-model="form.city" placeholder="请输入市区"></el-input>
            地址：<el-input v-model="form.address" placeholder="请输入地址"></el-input>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

</template>

<script>
export default {
    data() {
        return {
            dialogVisible: false,
            form:{
                name: '',
                province: '',
                city: '',
                address: '',
            }

        };
    },
    created() {
        this.name = '历史'
        this.pas = '123456'
    },
    methods: {
        open(scope){
            console.log(scope)
            this.dialogVisible = true
            this.form.name = scope.name
            this.form.province = scope.province
            this.form.city = scope.city
            this.form.address = scope.address
        }
    }
}
</script>