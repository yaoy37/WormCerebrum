<template>
    <div>
      <el-form :model="form" label-width="80px">
        <div v-if="is_register">
          <div>LoginPage</div>
          <el-form-item label="userName">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="userPwd">
            <el-input v-model="form.userpwd" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="toRegister">注册</el-button>
            <el-button type="primary" @click="onSubmit">进入</el-button>
          </el-form-item>
        </div>
        <div v-if="!is_register">
          <div>RegisterPage</div>
          <el-form-item label="userName">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="userPwd">
            <el-input v-model="form.userpwd" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="toRegister">注--册</el-button>
            <el-button type="primary" @click="onSubmit">进--入</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
</template>

<script>
    export default {
      name: "login",
      data () {
        return {
          is_register : true,
          form : {
            username:'',
            userpwd:''
          }
        }
      },
      methods:{
        toRegister ()  {
          this.is_register = !this.is_register
        },
        onSubmit () {
          this.$message({
            message: '点击进入成功',
            customClass: 'message-global',
            type: 'success'
          })
        }
      }
    }
</script>

<style scoped>

</style>
