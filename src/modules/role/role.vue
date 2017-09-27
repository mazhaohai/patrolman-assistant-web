<template>

	<div>
		<div class="page-bar">
			<ul class="page-breadcrumb">
				<li>
					<a href="index.html">角色管理</a>
					<!--<i class="fa fa-angle-right"></i>-->
				</li>
			</ul>
		</div>

		<el-form ref="version" :model="version">
			<el-row :gutter="20">


				<div><label class="input-label">角色搜索</label>
					<el-input v-model="version.code"></el-input>
				</div>

				<el-button type="primary" v-on:click="queryVersion()" style="margin-left:10px">查询  <i class="el-icon-search"></i></el-button>
				<el-button type="primary" v-on:click="createRole()" style="float:right">新建 <i
						class="el-icon-plus"></i></el-button>

			</el-row>
		</el-form>
		<el-row>

		</el-row>
		<el-table
				:data="tableData"
				style="width: 100%">
			<el-table-column
					prop="date"
					label="序号"
			>
			</el-table-column>
			<el-table-column
					prop="name"
					label="角色名称"
			>
			</el-table-column>
			<el-table-column
					prop="address"
					label="创建人">
			</el-table-column>
			<el-table-column
					prop="date"
					label="创建时间"
			>
			</el-table-column>
			<el-table-column
					inline-template
					prop="address"
					width="150"
					label="操作">
				<template>
					<el-button type="primary" size="small" @click="detailRole(row)">修改</el-button>
					<el-button size="small"  type="danger" @click="deleteRole(row)" >删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<div style="text-align:right;">

		</div>


		<el-dialog
				title="提示"
				:visible.sync="visible"
				size="tiny">
			<span>确定删除？</span>
			<span slot="footer" class="dialog-footer">
    <el-button @click="visible = false">取 消</el-button>
    <el-button type="primary" @click="visible = false">确 定</el-button>
  </span>
		</el-dialog>
	</div>

</template>

<script>
	import {RoleSrv} from "./role.service";
    import ElRow from "element-ui/packages/row/src/row";
    import ElCol from "element-ui/packages/col/src/col";
    //用户信息
    let _userinfo = {
        name: '',
        age: ''
    };

    export default {
        components: {
            ElCol,
            ElRow
        },
        data() {
            return {
                version:{
                },
                userinfo: _userinfo,
                isopen: true,
                visible: false,
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        created() {

        },
        methods: {
            goPage(path) {
                this.$router.push(path);
            },
            //查询version
            queryVersion(){

                console.log(this.version)
            },
            createRole(row) {//创建
                // this.$router.push({ name: 'versionCreate', params: {id:row.name}})
                this.$router.push({name: 'roleCreate'})
            },
            detailRole(row) {//修改
                console.log(row.address);
                this.$router.push({name: 'roledetail', params: {id: row.address}})
            },
            deleteRole(row) {// 删除
                this.visible = true;
                console.log(row)
            },
            getList() {
                let params = {
                    id: 1
                }
                HomeSrv.list(params).then(res => {
                    let result = res.data;
                    if (result.code == 0) {
                        this.userinfo = result.data.userinfo;
                    } else {
                        alert(data.msg);
                    }

                }).catch(res => {

                })
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>

	.input-label {
		float: left;
		/*width: 20%;*/
		text-align: center;
		height: 36px;
		line-height: 36px;
		margin-bottom: 10px;
		width: 60px;

	}

	.el-row {
		margin:10px 0px!important;
	}

	.el-input {
		float: left;
		/*width: 80%!important;*/

		margin:0 5px;
		width: 160px;

	}

	.form-button-search .el-button {

		float: right;
		margin-left: 10px;
	}
</style>
