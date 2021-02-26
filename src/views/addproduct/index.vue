<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Item Id">
        <!-- 接收参数 -->
        <!-- 在标签中不能用插值符号 -->
        <el-input v-model="form.id" />
      </el-form-item>

      <el-form-item label="Item title">
        <el-input v-model="form.title" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      form: {
        id: '',
        title: ''
      }
    }
  },
  methods: {
    onSubmit() {
      var vm = this
      this.axios.post("http:localhost/9000/todo", {"id": vm.form.id, "title": vm.form.title, "status": false}).then(response => console.log(response.data))
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

