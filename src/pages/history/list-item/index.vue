<template>
	<view class="list-item" @click="onClick">
		<text class="content-title">{{ title }}</text>
		<text v-if="note" class="content-note">{{ note }}</text>
	</view>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: ''
		},
		note: {
			type: String,
			default: ''
		}
	},
	methods: {
		onClick() {
			this.$emit('click');
		}
	}
};
</script>

<style lang="scss" scoped>
.list-item {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	// padding-left: $uni-spacing-row-lg;
	border-top-color: $uni-border-color;
	border-top-style: solid;
	border-top-width: 1px;
	padding: $uni-spacing-row-sm;
	.content-title {
		font-size: $uni-font-size-base;
		color: $uni-text-color-placeholder;
	}
	.content-note {
		font-size: $uni-font-size-sm;
		color: $uni-text-color-grey;
	}
}
</style>
