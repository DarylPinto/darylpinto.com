<script>
import Frame from "~/components/Frame.vue";

export default {
	components: {
		Frame
	},
	props: {
		text: String
	},
	data() {
		return {
			loaded: false
		};
	},
	computed: {
		characters() {
			return this.text.toUpperCase().split("");
		}
	},
	mounted() {
		setTimeout(() => {
			this.loaded = true;
		}, 1100);
	}
};
</script>

<template>
	<div class="character-grid" :class="{loaded: loaded}">
		<Frame />
		<span
			v-for="(character, i) in characters"
			:key="i"
			:class="{
				dark: i > 9 && i < 20,
				light: i < 5 || i > 24,
				flipped: i < 10 || i > 19
			}"
			class="character"
			@click="$emit('character-clicked', i)"
		>
			{{ character }}
		</span>
	</div>
</template>

<style lang="sass" scoped>
$padding: 100px

div.character-grid
	display: flex
	flex-wrap: wrap
	height: calc(100vh - #{$padding})
	width: calc(100vw - #{$padding})
	position: relative

.character
	// Other font options: Bungee Hairline, Megrim, Limelight, Cabin Sketch, Fredericka the Great, Major Mono Display
	font-family: "Megrim", sans-serif
	font-weight: 800
	display: inline-flex
	justify-content: center
	align-items: center
	width: 20%
	height: 16.66%
	font-size: 50px
	opacity: 0
	transition: 0.5s
	user-select: none
	pointer-events: auto
	color: rgba(0, 0, 0, 0.4)
	z-index: 1
	&.dark
		color: black
	&.light
		color: rgba(0, 0, 0, 0.15)
	&.flipped
		transform: rotateX(180deg)

.loaded .character
	opacity: 1

@for $i from 1 through 30
	.character:nth-of-type(#{$i})
		transition-delay: calc(#{$i} * 0.03s)

</style>
