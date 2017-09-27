<template>
	<div>
		<div class="page-bar">
			<ul class="page-breadcrumb">
				<li>
					<a @click="backFn">用户管理 > 新建用户</a>
					<!--<i class="fa fa-angle-right"></i>-->
				</li>
			</ul>
		</div>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
	  		<el-form-item label="用户名" prop="yhm">
	    		<el-input v-model="ruleForm.yhm"></el-input>
	  		</el-form-item>
	  		<el-form-item label="警号" prop="jh">
	    		<el-input v-model="ruleForm.jh"></el-input>
	  		</el-form-item>
	  	
	  		<el-form-item label="身份证号" prop="sfz">
	    		<el-input v-model="ruleForm.sfz"></el-input>
	  		</el-form-item>

	  		<el-form-item label="上传头像" prop="sctx">
	    		<el-upload
				  class="avatar-uploader"
				  action="https://jsonplaceholder.typicode.com/posts/"
				  :show-file-list="false"
				  :on-success="handleAvatarSuccess"
				  :before-upload="beforeAvatarUpload">
				  <img v-if="imageUrl" :src="imageUrl" class="avatar">
				  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
	  		</el-form-item>

	  		<el-form-item label="手机号" prop="sjh">
	    		<el-input v-model="ruleForm.sjh"></el-input>
	  		</el-form-item>
	  	
	  		<el-form-item label="姓名" prop="name">
	    		<el-input v-model="ruleForm.name"></el-input>
	  		</el-form-item>
		  	<el-form-item label="上级部门" prop="sjbm">
			    <el-select v-model="ruleForm.sjbm" placeholder="请选择上级部门">
			      	<el-option label="湖北省武汉市公安局" value="bubei"></el-option>
			      	<el-option label="湖南省武汉市公安局" value="hunan"></el-option>
			    </el-select>
			</el-form-item>
		  	<el-form-item label="角色" prop="js">
		    	<el-select v-model="ruleForm.js" placeholder="请选择角色">
			      	<el-option label="超级管理员" value="chaoji"></el-option>
			      	<el-option label="管理员" value="guanli"></el-option>
			      	<el-option label="普通用户" value="putong"></el-option>
		    	</el-select>
		  	</el-form-item>
	  		<el-form-item label="初始密码" prop="csmm">
	    		<el-input v-model="ruleForm.csmm"></el-input>
	  		</el-form-item>
	  		<el-form-item label="备注" prop="bz">
	    		<el-input v-model="ruleForm.bz"></el-input>
	  		</el-form-item>
		  	<el-form-item>
			    <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
			    <el-button @click="backFn">取消</el-button>
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
        imageUrl: '',
        rules: {
          name: [
          	{ required: true, message: '请输入用户姓名', trigger: 'blur' },
            { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
          ],
          yhm: [
          	{ required: true, message: '请输入用户名称', trigger: 'blur' },
            { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
          ],
          jh: [
          	{ required: true, message: '请输入警号', trigger: 'blur' },
           	{ min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          sfz: [
          	{ required: true, message: '请输入身份证号码', trigger: 'blur' },
           	{ min: 18, max: 24, message: '长度在 18 到 24 个字符', trigger: 'blur' }
          ],
          sjh: [
          	{ required: true, message: '请输入手机号码', trigger: 'blur' },
           	{ min: 11, max: 11, message: '长度在 11 个字符', trigger: 'blur' }
          ],
          csmm: [
          	{ required: true, message: '请输入初始密码', trigger: 'blur' },
           	{ min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
          ],
          sjbm: [
            { required: true, message: '请选择上级部门', trigger: 'change' }
          ],
          js: [
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
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>

<style scoped>
	.el-form {
		width:500px;
	    margin: 0 auto;
    	margin-top: 20px;
	}
	.el-select {
		width: 100%;
	}
</style>