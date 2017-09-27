
<template>
	<div>
		<div class="page-bar">
			<ul class="page-breadcrumb">
				<li>
					<a href="index.html">版本管理</a>
					<!--<i class="fa fa-angle-right"></i>-->
				</li>
			</ul>
		</div>

    <el-row :gutter="20">
      <el-col :span="5"><div ><label class="input-label">版本号:</label><el-input ></el-input></div></el-col>
      <el-col :span="5"><div ><label class="input-label">发布人:</label><el-input ></el-input></div></el-col>
      <el-col :span="5"><div ><label class="input-label">开始时间:</label><el-date-picker
        type="date"
        placeholder="选择日期"
        >
      </el-date-picker></div></el-col>
      <el-col :span="5"><div ><label class="input-label">结束时间:</label><el-date-picker
        type="date"
        placeholder="选择日期"
        >
      </el-date-picker></div></el-col>

      <el-col :span="4" class="form-button-search">
        <el-button type="primary" >查询</el-button>
        <el-button type="primary" v-on:click="createVersion()" >新建</el-button>
      </el-col>
    </el-row>
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
        label="比较版本号"
        >
      </el-table-column>
      <el-table-column
        prop="address"
        label="版本号">
      </el-table-column>
      <el-table-column
        prop="date"
        label="发布时间"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="发布人"
        >
      </el-table-column>
      <el-table-column
        prop="address"
        label="二维码">
      </el-table-column>
      <el-table-column
        prop="date"
        label="安装包下载地址"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="APP访问地址"
        >
      </el-table-column>

      <el-table-column
        inline-template
        prop="address"
        width="200"
        label="操作">
        <template>
          <el-button type="primary" @click="detailVersion(row)">修改</el-button>
          <el-button type="danger" @click="deleteVersion(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
        <div style="text-align:right;">
            <div class="block" style="text-align:right;margin-top: 10px">
                <span class="demonstration"></span>
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="400">
                </el-pagination>
            </div>
        </div>
		<!--<el-button @click="visible = true">按钮</el-button>-->
		<el-dialog v-model="visible" title="提示">
			<h3 style="margin-bottom:20px">你确定要删除么</h3>

            <div style="text-align:right;">
                <el-button type="primary">确定</el-button>
                <el-button @click="visible = false">取消</el-button>
            </div>


		</el-dialog>
	</div>

</template>

<script>
	import { VersionSrv } from './version.service';
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
      ElRow},
    data() {
			return {
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
      createVersion(row){
        // this.$router.push({ name: 'versionCreate', params: {id:row.name}})
        this.$router.push({ name: 'versionCreate'})
      },
      detailVersion(row){
			    console.log(row.address);
          this.$router.push({ name: 'versiondetail', params: {id:row.address}})
      },
      deleteVersion(row){
          this.visible = true;
          console.log(row)
      },
			getList() {
				let params = {
					id: 1
				}
				HomeSrv.list(params).then(res => {
					let result = res.data;
					if(result.code == 0) {
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

  .input-label{
    float: left;
    width: 20%;
    text-align: center;
    height: 36px;
    line-height: 36px;
    margin-bottom: 10px;

  }
  .el-row{
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .el-input{
    float: right;
    width: 80%!important;
  }
  .form-button-search .el-button{

    float: right;
    margin-left: 10px;
  }
</style>
