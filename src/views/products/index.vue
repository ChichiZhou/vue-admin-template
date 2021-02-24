<template>
  <div class="app-container">
    <!-- 当 listLoading 为 true 的时候，只显示 Loading，不显示别的 -->
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <!-- id -->
      <el-table-column label="ItemID">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <!-- 标题 -->
      <el-table-column label="Title">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <!-- 作者 -->
      <!-- <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column> -->
      <!-- 页数 -->
      <!-- <el-table-column label="Pageviews" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column> -->
      <!-- 状态 -->
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <!-- 修改时间 -->
      <!-- <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column> -->
      <!-- 添加编辑 和 删除-->
      <el-table-column label="Actions" align="center" width="230" class-name="small-padding fixed-width">
        <!-- 什么是 slot-scope -->
        <template slot-scope="scope">
          <!-- 传入id作为参数 -->
          <el-button type="primary" size="mini" @click="editItem(scope.row.id)">
            编辑
          </el-button>
          <el-button size="mini" type="danger" @click="deleteItem(scope.$index, scope.row.id)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { getList } from '@/api/table'
// import { getTodoList } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()    // created 是一个钩子函数，在创建vue之后运行。这里表示创建vue之后会去拿数据 fetchData
  },
  methods: {
    fetchData() {
      var vm = this
      this.listLoading = false
      this.listLoading = true    // flag变量，当获取信息成功之后改变flag值
      this.axios
        .get("http://localhost:9000/v1/todo")      // 这里本来应该是 9000 的 todo
        .then(response => (vm.list = response.data));
      // this.getTodoList().then(response => {
      //   this.list = response.data
      //   this.listLoading = false
      // })
        this.listLoading = false
    },
    editItem(id){
      this.$router.push("/editproducts/index/" + id)   // 注意这里是 router，不是 route
    },
    deleteItem(index, id){
      var vm = this
      this.axios.delete("http://localhost:9000/v1/todo/" + id).then(
        vm.list.splice(index, 1)
      )
    }
  }
}
</script>
