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

      <!-- <el-form-item label="Activity zone">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%;" />
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" type="fixed-time" placeholder="Pick a time" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="Instant delivery">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Online activities" name="type" />
          <el-checkbox label="Promotion activities" name="type" />
          <el-checkbox label="Offline activities" name="type" />
          <el-checkbox label="Simple brand exposure" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources">
        <el-radio-group v-model="form.resource">
          <el-radio label="Sponsor" />
          <el-radio label="Venue" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item> -->
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
        title: '',
        status: ''
      }
    }
  },
  created(){
    this.fetchDataById()
  },
  methods: {
    onSubmit() {
      var vm = this
      this.axios.put("http://localhost:9000/v1/todo", {"id": vm.form.id, "title": vm.form.title, "status": false}).then(response => console.log(response.data))
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },
    fetchDataById() {
      var inputId = this.$route.params.id
      var vm = this
      this.axios.get("http://localhost:9000/v1/todo").then(response => vm.form = response.data[this.$route.params.id - 1])
      // getList().then(response => {
      //   // 由于这里是 params.id，但是需要从数组中去找，所以有一个位的差别
      //   this.form = response.data.items[this.$route.params.id]
      //   console.log(response.data.oneItem)
      }
    }
  }
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

