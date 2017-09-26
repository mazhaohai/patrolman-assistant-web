<template>
	<div id="alarm-page">
		<div class="page-bar">
			<ul class="page-breadcrumb">
				<li>
					<a href="index.html">报警管理</a>
				</li>
			</ul>
		</div>
    <label>分类
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
     </el-select>
    </label>
    <el-row :gutter="20">
      <el-col :span="12">
        <ul class="left-list">
            <li v-for="item in leftCameraData" class="list-item">
              <el-row>
                <el-col :span="6">
                  <span>
                     <input type="radio" name="left-item">
                  </span>
                </el-col>
                <el-col :span="9">
                  <span>{{item.name}}</span>
                </el-col>
                <el-col :span="9">
                  <span>{{item.num}}</span>
                </el-col>
              </el-row>
            </li>
        </ul>
      </el-col>
      <el-col :span="12">
        <ul class="right-list">
          <li v-for="item in rightUserData" class="list-item">
            <el-row>
              <el-col :span="4">
                  <span>
                     <el-checkbox v-model="item.isChecked"></el-checkbox>
                  </span>
              </el-col>
              <el-col :span="8">
                <span>{{item.name}}</span>
              </el-col>
              <el-col :span="8">
                <span>{{item.num}}</span>
              </el-col>
            </el-row>
          </li>
        </ul>
      </el-col>
    </el-row>

	</div>

</template>

<script>
	import { AlarmSrv } from './alarm.service';

	export default {
		data() {
			return {
        options: [{
          value: '选项1',
          label: '相机'
        }, {
          value: '选项2',
          label: '人员'
        }],
        value: '相机',
        leftCameraData:null,
        rightUserData:null,

        leftUserData:null,
        rightCameraData:null


			}
		},
		created() {
      this.initData()
		},
		methods: {
		  getCameraList(){
        if(this.leftCameraData) return;
        let params = { }
        AlarmSrv.cameraList(params).then(res => {
//          console.log(res)
          if(res.code == 0) {
            this.leftCameraData = res.data;
          } else {
            alert(res.msg);
          }
        }).catch(err => {
          console.log(err)
        })
      },
      getUserList(){
		    let params={};
        AlarmSrv.userList(params).then(res => {
          if(res.code == 0) {
            this.rightUserData = res.data;
          } else {
            alert(res.msg);
          }
        }).catch(err => {
          console.log(err)
        })
      },
      initData(){

        this.getCameraList();
        this.getUserList();

      }
    }
}
</script>

<style scoped>
  #alarm-page{

  }
  #alarm-page .left-list,#alarm-page .right-list{
    height: 400px;
    overflow-y: auto;
  }
  #alarm-page .list-item{
    text-align: center;
    line-height: 40px;
  }

</style>
