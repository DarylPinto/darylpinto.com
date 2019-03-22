<script>
import CharacterGrid from "~/components/CharacterGrid.vue";
import shuffle from "lodash.shuffle";
import sleep from "~/assets/modules/sleep";

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
			highlighted_character_index: CORRECT_SEQUENCE[0],
			game_turn: 1,
			game_interactable: true
		};
	},
	methods: {
		checkSequence(index) {
			this.entered_sequence.push(index);
			const sequenceIsCorrect = this.correct_sequence
				.toString()
				.startsWith(this.entered_sequence.toString());

			if (sequenceIsCorrect) {
				console.log("correct");
				this.highlightSequence(this.game_turn);
				this.game_turn++;
			} else {
				console.log("incorrect");
				this.highlighted_character_index = this.correct_sequence[0];
				this.game_turn = 1;
			}

			this.entered_sequence = [];
		},
		async highlightSequence(amount) {
			if (amount === 1) return this.correct_sequence[0];

			this.game_interactable = false;
			for (let i = 0; i < amount; i++) {
				this.highlighted_character_index = this.correct_sequence[i];
				await sleep(1000);
			}
			this.highlighted_character_index = -1;
			this.game_interactable = true;
		}
	}
};
</script>

<template>
	<section>
		<main>
			<div style="position: fixed; top: 0; background-color: #CCC">
				<p>{{ correct_sequence.toString() }}</p>
				<p>{{ entered_sequence.toString() }}</p>	
			</div>	
			<CharacterGrid
				:text="grid_text"
				:highlighted-character-index="highlighted_character_index"
				:game-interactable="game_interactable"
				@character-clicked="checkSequence"
			/>	
		</main>
		<div style="position: fixed;bottom: 20px;right: 20px;font-size: 20px;">
			{{ entered_sequence.length }}
		</div>
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
