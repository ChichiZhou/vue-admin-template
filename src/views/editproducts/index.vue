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

      <!-- <el-form-item label="Item status">
        <el-input v-model="form.status" />
      </el-form-item> -->

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
      // this.$message('submit!')
      var vm = this
      console.log(vm.form.id)
      this.axios.put(
        "http://localhost:9000/v1/todo", 
        {
          id: vm.form.id,            // 这里要用 vm.form.id 不能直接用 vm.id
          title: vm.form.title,
          status: vm.form.status
        }
      ).then(
        (response)=>{
          this.$message({
            showClose: true,
            duration: 1500,
            message: response.data.id,
            type: "success"
          });
        }
      )
      console.log(vm.$route.params.id)
      vm.$router.push("/example/table")
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },
    fetchDataById(){
      var inputId = this.$route.params.id
      var vm = this
      console.log(inputId)
      this.axios.get("http://localhost:9000/v1/todo/" + inputId)
      .then(response => (vm.form = response.data))
      // this.axios({
      //   method:'get',
      //   url: "/vue-admin-template/table/list",
      // }).then(function(response){
      //   this.form = response.data.items[1]
      // })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

