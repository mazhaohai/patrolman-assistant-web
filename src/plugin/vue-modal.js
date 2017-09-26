export default {
	install(Vue,options){
		console.log(options)
		function createOverlayer(){
			var scrollheight=document.body.scrollHeight;
			//解决在IE浏览器scrollHeight不对的问题
			if(document.documentElement.scrollHeight>scrollheight){
				scrollheight = document.documentElement.scrollHeight;
			}
			
			let div = document.createElement('div');
			div.id='overlayercontainer';
			div.style.background='#000';
			div.style.width='100%';
			div.style.height=scrollheight+'px';
			div.style.position='absolute';
			div.style.overflow='hidden';
			div.style.top='0px';
			div.style.left='0px';
			div.style.filter='alpha(opacity=30)';
			div.style.opacity='0.3';
			div.style.zIndex='99998';
			document.body.appendChild(div);
		}
		function createModal(){
			let div = document.createElement('div');
			div.id='modalcontainer';
			div.style.background='#fff';
			div.style.width='50%';
			div.style.height='200px';
			div.style.position='fixed';
			div.style.overflow='auto';
			div.style.top='100px';
			div.style.left='100px';
			
			div.style.zIndex='99999';
			document.body.appendChild(div);
		}
		Vue.prototype.$modal=function(){
			createOverlayer();
			createModal();
		}
	}
}
