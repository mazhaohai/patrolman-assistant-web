<template>
	<div>

		<div class="page-bar">

			<ul class="page-breadcrumb">

				<li>

					<a href="index.html">版本修改</a>

					<!--<i class="fa fa-angle-right"></i>-->

				</li>

			</ul>

		</div>

		<el-row style="margin-top:10px">

			<el-col :span="6">&nbsp;</el-col>

			<el-col :span="12">



				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

					<el-form-item label="版本号" prop="name">

						<el-input class="el-input2" v-model="ruleForm.name"></el-input>

					</el-form-item>

					<el-form-item label="APK上传" prop="region">

						<el-upload
								class="upload-demo"
								ref="upload"
								action="https://jsonplaceholder.typicode.com/posts/"
								:on-preview="handlePreview"
								:on-remove="handleRemove"
								:file-list="fileList"
								:auto-upload="false">
							<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
							<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
							<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
						</el-upload>

					</el-form-item>

					<el-form-item>
						<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
						<el-button @click="resetForm('ruleForm')">重置</el-button>
					</el-form-item>

				</el-form>



			</el-col>



			<el-col :span="6">&nbsp;</el-col>

		</el-row>





	</div>
</template>

<script>
    export default {



        data() {

            return {
                fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],


                ruleForm: {

                    name: '1.1.1.1',

                    region: '',

                    date1: '',

                    date2: '',

                    delivery: false,

                    type: [],

                    resource: '',

                    desc: ''

                },

                rules: {

                    name: [{

                        required: true,

                        message: '请输入活动名称',

                        trigger: 'blur'

                    },

                        {

                            min: 3,

                            max: 5,

                            message: '长度在 3 到 5 个字符',

                            trigger: 'blur'

                        }

                    ],

                    region: [{

                        required: true,

                        message: '请选择活动区域',

                        trigger: 'change'

                    }],

                    date1: [{

                        type: 'date',

                        required: true,

                        message: '请选择日期',

                        trigger: 'change'

                    }],

                    date2: [{

                        type: 'date',

                        required: true,

                        message: '请选择时间',

                        trigger: 'change'

                    }],

                    type: [{

                        type: 'array',

                        required: true,

                        message: '请至少选择一个活动性质',

                        trigger: 'change'

                    }],

                    resource: [{

                        required: true,

                        message: '请选择活动资源',

                        trigger: 'change'

                    }],

                    desc: [{

                        required: true,

                        message: '请填写活动形式',

                        trigger: 'blur'

                    }]

                }

            };

        },

        methods: {

            submitUpload() {
                this.$refs.upload.submit();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },


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

            resetForm(formName) {

                this.$refs[formName].resetFields();

            }

        }




    }

</script>

<style>

	.el-upload__input{
		display: none!important;
	}

	.el-input2{
		width: 100% !important;
	}

</style>