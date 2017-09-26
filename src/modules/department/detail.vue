<template>
	<div>
		<div class="page-bar">
			<ul class="page-breadcrumb">
				<li>
					<a href="index.html">部门管理</a>
					<!--<i class="fa fa-angle-right"></i>-->
				</li>
			</ul>
		</div>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
	  		<el-form-item label="部门名称" prop="bmmc">
	    		<el-input v-model="ruleForm.yhm"></el-input>
	  		</el-form-item>
		  	<el-form-item label="上级部门" prop="sjbm">
			    <el-select v-model="ruleForm.sjbm" placeholder="请选择上级部门">
			      	<el-option label="湖北省武汉市公安局" value="shanghai"></el-option>
			      	<el-option label="湖北省武汉市公安局" value="beijing"></el-option>
			    </el-select>
			</el-form-item>
		  	<el-form-item label="部门类型" prop="bmlx">
		    	<el-select v-model="ruleForm.bmlx" placeholder="请选择部门类型">
			      	<el-option label="超级管理员" value="shanghai"></el-option>
			      	<el-option label="管理员" value="beijing"></el-option>
			      	<el-option label="普通用户" value="beijing"></el-option>
		    	</el-select>
		  	</el-form-item>
	  		<el-form-item label="备注" prop="bz">
	    		<el-input v-model="ruleForm.bz"></el-input>
	  		</el-form-item>
		  	<el-form-item>
			    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
			    <el-button @click="backFn">返回</el-button>
		  	</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
    data() {
      return {
        ruleForm: {
          name: '',
          yhm: '',
          jh:'',
          sfz:'',
          sjh:'',
          csmm:'123456',
          type: [],
          sjbm: '',
          js:''
        },
        rules: {
          bmmc: [
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
      	this.$router.push('/');
      }
    }
  }
</script>

<style>
</style>