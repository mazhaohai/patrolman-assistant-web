<template>
	<div>
		<div class="page-bar">
			<ul class="page-breadcrumb">
				<li>
					<a @click="backFn">部门管理 > 新建部门</a>
					<!--<i class="fa fa-angle-right"></i>-->
				</li>
			</ul>
		</div>
		<el-form :model="userinfo" :rules="rules" ref="userinfo" label-width="100px" class="demo-userinfo">
	  		<el-form-item label="部门名称" prop="bmmc">
	    		<el-input v-model="userinfo.bmmc"></el-input>
	  		</el-form-item>
		  	<el-form-item label="上级部门" prop="sjbm">
			    <el-select v-model="userinfo.sjbm" placeholder="请选择上级部门">
			      	<el-option label="湖北省武汉市公安局" value="bubei"></el-option>
			      	<el-option label="湖南省武汉市公安局" value="hunan"></el-option>
			    </el-select>
			</el-form-item>
		  	<el-form-item label="部门类型" prop="bmlx">
		    	<el-select v-model="userinfo.bmlx" placeholder="请选择部门类型">
			      	<el-option label="超级管理员" value="chaoji"></el-option>
			      	<el-option label="管理员" value="guanli"></el-option>
			      	<el-option label="普通用户" value="putong"></el-option>
		    	</el-select>
		  	</el-form-item>
	  		<el-form-item label="备注" prop="bz">
	    		<el-input v-model="userinfo.bz"></el-input>
	  		</el-form-item>
		  	<el-form-item>
			    <el-button type="primary" @click="submitForm('userinfo')">确定</el-button>
			    <el-button @click="backFn">取消</el-button>
		  	</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
    data() {
      return {
        userinfo: {},
        rules: {
          bmmc:[
            { required: true, message: '请输入用户姓名', trigger: 'blur' },
            { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
          ],
          sjbm: [
            { required: true, message: '请选择上级部门', trigger: 'change' }
          ],
          bmlx: [
            { required: true, message: '请选择角色', trigger: 'change' }
          ]
        }
      };
    },
    created(){
      this.userinfo = {
                bmmc: '就是浪',
                sjbm:'湖南省武汉市公安局',
                lx:'超级管理员',
                bz:''
              };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      backFn:function(){
      	this.$router.push('/department');
      }
    }
  }
</script>

<style scoped>
  .el-form{
    width:500px;
    margin: 0 auto;
    margin-top: 10px;
  }
  .el-select{
    width: 100%;
  }
</style>