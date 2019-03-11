<script>
export default {
	data() {
		return {
			loaded: false
		};
	},
	mounted() {
		this.loaded = true;
	}
};
</script>

<template>
	<div class="frame" :class="{animated: loaded}">
		<div class="left line" />
		<div class="top line" />
		<div class="right line" />
		<div class="bottom line" />
	</div>
</template>

<style lang="sass" scoped>
$distance: 100px

.frame
	position: absolute
	height: 100%
	width: 100%
	top: 0
	left: 0

.line
	position: absolute
	width: 3px
	height: 3px	
	background-color: black
	transition: .3s
	&.left
		top: 0
		left: 0
	&.top
		top: 0
		left: 0
		transition-delay: 0.2s
	&.right
		top: 0
		right: 0
		transition-delay: 0.5s
	&.bottom
		bottom: 0
		left: 0
		transition-delay: 0.8s

.animated
	.line	
	.line.left, .line.right
		height: 100%
		// height: calc(100vh - (2 * #{$distance}))
	.line.top, .line.bottom
		width: 100%
		// width: calc(100vw - (2 * #{$distance}))

</style>
