<script>
import Frame from "~/components/Frame.vue";

export default {
	components: {
		Frame
	},
	props: {
		text: String,
		highlightedCharacterIndex: Number,
		gameInteractable: Boolean
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
	<div class="character-grid" :class="{loaded: loaded, interactable: gameInteractable}">
		<Frame />
		<span
			v-for="(character, i) in characters"
			:key="i"
			:class="{
				dark: i > 9 && i < 20,
				light: i < 5 || i > 24,
				flipped: i < 10 || i > 19,
				highlighted: i === highlightedCharacterIndex
			}"
			class="character"
			@click="$emit('character-clicked', i)"
		>{{ character }}</span>
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
	&:not(.interactable)
		pointer-events: none

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
	&.highlighted
		background-color: red !important

.loaded .character
	opacity: 1

// @for $i from 1 through 30
// 	.character:nth-of-type(#{$i})
// 		// transition-delay: calc(#{$i} * 0.03s)
// 		transition: opacity 0.5s ease calc(#{$i} * 0.03s)
// 		// transition: property name | duration | timing function | delay

</style>
