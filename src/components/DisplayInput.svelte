<script lang="ts">
	import calculatorStore from '../calculator-store';
</script>

<p class="text-align-center">
	<input class="display-input" type="text" readonly bind:value={$calculatorStore.value} />
	<!--input HTML tag will be rerendered when value 
        property changes due to bind-->
</p>

<style>
	.display-input {
		padding: 12px 20px;
		font-size: 150%;
	}
</style>
