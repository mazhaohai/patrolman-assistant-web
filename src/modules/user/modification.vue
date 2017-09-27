<template>
	<div>
		<div class="page-bar">
			<ul class="page-breadcrumb">
				<li>
					<a href="#/">用户管理</a>
					<!--<i class="fa fa-angle-right"></i>-->
				</li>
			</ul>
		</div>
		<el-form :model="userinfo" :rules="rules" ref="userinfo" label-width="100px" class="demo-userinfo">
	  		<el-form-item label="用户名" prop="yhm">
	    		<el-input v-model="userinfo.yhm"></el-input>
	  		</el-form-item>
	  		<el-form-item label="警号" prop="jh">
	    		<el-input v-model="userinfo.jh"></el-input>
	  		</el-form-item>
	  	
	  		<el-form-item label="身份证号" prop="sfz">
	    		<el-input v-model="userinfo.sfz"></el-input>
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
	    		<el-input v-model="userinfo.sjh"></el-input>
	  		</el-form-item>
	  	
	  		<el-form-item label="姓名" prop="name">
	    		<el-input v-model="userinfo.name"></el-input>
	  		</el-form-item>
		  	<el-form-item label="上级部门" prop="sjbm">
			    <el-select v-model="userinfo.sjbm" placeholder="请选择上级部门">
			      	<el-option label="湖北省武汉市公安局" value="shanghai"></el-option>
			      	<el-option label="湖北省武汉市公安局" value="beijing"></el-option>
			    </el-select>
			</el-form-item>
		  	<el-form-item label="角色" prop="js">
		    	<el-select v-model="userinfo.js" placeholder="请选择角色">
			      	<el-option label="超级管理员" value="shanghai"></el-option>
			      	<el-option label="管理员" value="beijing"></el-option>
			      	<el-option label="普通用户" value="beijing"></el-option>
		    	</el-select>
		  	</el-form-item>
	  		<el-form-item label="初始密码" prop="csmm">
	    		<el-input v-model="userinfo.csmm"></el-input>
	  		</el-form-item>
	  		<el-form-item label="备注" prop="bz">
	    		<el-input v-model="userinfo.bz"></el-input>
	  		</el-form-item>
		  	<el-form-item>
			    <el-button type="primary" @click="updateUserInfo('userinfo')">立即创建</el-button>
			    <el-button @click="backFn">返回</el-button>
		  	</el-form-item>
		</el-form>

	</div>
</template>

<script>
import UserSrv from './user.service';
export default {
    
    data() {
      return {
        userinfo:{},
        imageUrl:"",
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
    created(){
      console.log(this.userinfo);
      console.log(this.$route.params.id);
      this.userinfo = {
                yhm: '郎就一个字',
                jh:'0000000000000001',
                sfz:'147858963308740214',
                tx:'',
                sjh:'17858952589',
                name: '王小虎',
                js:'超级管理员',
                bz:'',
                csmm:'123456',
                address: '上海市普陀区金沙江路 1518 弄'
              };
    },
    methods: {
      updateUserInfo(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      createUser(){
        let params = this.userinfo;
        UserSrv.createUser(params).then(red=>{
          if(res.code==0){

          }else{

          }
        })
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
	.el-form{
		width:500px;
    margin: 0 auto;
    margin-top: 20px;
	}
  .el-select{
    width: 100%;
  }
</style>