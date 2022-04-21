<script lang="ts">
	export let text: string;
	export let className = 'w-20 h-20 text-3xl mb-0 bg-white'; // default value for className property (will be used when className is not passed to component)
	export let onClick: () => void;
</script>

<button class={className} on:click={onClick}>{text}</button>
