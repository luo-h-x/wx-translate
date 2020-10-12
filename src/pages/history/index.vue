<template>
	<view class="history">
		<template>
			<his-list>
				<his-list-item
					@click="copy(his)"
					v-for="his in list"
					:title="his.origin"
					:note="his.target"
					:key="his.id"
				></his-list-item>
			</his-list>
		</template>
		<template v-if="!list.length">
			<view class="empty">暂无历史</view>
		</template>
	</view>
</template>
<script>
import hisList from './list/index.vue';
import hisListItem from './list-item/index.vue';
import storage from '../../utils/storage.js';
import config from '../../config.js';
export default {
	components: {
		hisList,
		hisListItem
	},
	data(){
		return {
			list: []
		}
	},
	// computed: {
	// 	list() {
	// 		return storage.get(config.hiskey);
	// 	}
	// },
	methods: {
		copy(his) {
			uni.setClipboardData({
				data: his.origin,
				success() {
					uni.showToast({
						title: '复制结果成功',
						position: 'bottom'
					});
				}
			});
		}
	},
	onShow(){
		this.list = storage.get(config.hiskey)
	}
};
</script>
<style lang="scss">
.history {
	width: 100%;
	min-height: 100vh;
	background-color: $theme-color-b;
}
.empty {
	text-align: center;
	display: block;
	width: 200rpx;
	margin: 100rpx auto;
	font-size: 30rpx;
	color: #c0c0c0;
}
</style>
