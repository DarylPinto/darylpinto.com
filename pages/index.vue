<script>
import CharacterGrid from "~/components/CharacterGrid.vue";
import shuffle from "lodash.shuffle";

// Text to show on front page
const GRID_TEXT = "DarylDarylDarylPintoPintoPinto";
// Random sequence used as "correct" order for Simon Says game
const CORRECT_SEQUENCE = shuffle(GRID_TEXT.split("").map((_, i) => i));

export default {
	components: {
		CharacterGrid
	},
	data() {
		return {
			grid_text: GRID_TEXT,
			correct_sequence: CORRECT_SEQUENCE,
			entered_sequence: [],
			game_turn: 0
		};
	},
	methods: {
		checkSequence(index) {
			this.entered_sequence.push(index);
			const sequenceIsCorrect = this.correct_sequence
				.toString()
				.startsWith(this.entered_sequence.toString());

			if (sequenceIsCorrect) {
				console.log(true);
				this.game_turn += 1;
			} else {
				console.log(false);
				this.entered_sequence = [];
				this.game_turn = 0;
			}
		}
	}
};
</script>

<template>
	<section>
		<main>
			<CharacterGrid
				:text="grid_text"
				@character-clicked="checkSequence"
			/>	
		</main>
		<aside />
	</section>
</template>

<style lang="sass" scoped>
section
	display: flex
	justify-content: flex-end
main
	display: flex
	justify-content: center
	align-items: center	
	height: 100vh
	width: 85vw
aside
	height: 100vh
	width: 10vw
	margin-left: 2.5vw
	background-color: #DDD
</style>
