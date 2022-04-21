<script lang="ts">
	import DisplayInput from './DisplayInput.svelte';
	import Button from './Button.svelte';
	import calculatorStore from '../calculator-store';
	import Logo from '../img/owl1.png';

	const { setValue } = $calculatorStore;

	const handleClearButtonClick = () => {
		setValue('');
	};

	const handleButtonClick = (text: string) => () => {
		//high ordered function (used for extending event callback with text variable)
		setValue($calculatorStore.value + text);
	};

	const handleResultButtonClick = () => {
		try {
			const newValue = eval($calculatorStore.value);
			setValue(newValue + '');
		} catch (err: any) {
			alert(err?.message);
		}
	};
</script>

<div class="container mx-auto ">
	<div class="flex justify-center">
		<img src={Logo} alt="logo" height="200px" width="200px" />
	</div>

	<h2 class="text-center mb-6">My JS Calculator</h2>

	<div class="flex justify-center mb-6"><DisplayInput /></div>

	<div class="flex justify-center">
		<table>
			<tr>
				<td>
					<Button text="C" onClick={handleClearButtonClick} />
					<Button text="**" onClick={handleButtonClick('**')} />
					<Button text="%" onClick={handleButtonClick('%')} />
					<Button text="/" onClick={handleButtonClick('/')} />
				</td>
			</tr>
			<tr>
				<td>
					<Button text="7" onClick={handleButtonClick('7')} />
					<Button text="8" onClick={handleButtonClick('8')} />
					<Button text="9" onClick={handleButtonClick('9')} />
					<Button text="*" onClick={handleButtonClick('*')} />
				</td>
			</tr>
			<tr>
				<td>
					<Button text="4" onClick={handleButtonClick('4')} />
					<Button text="5" onClick={handleButtonClick('5')} />
					<Button text="6" onClick={handleButtonClick('6')} />
					<Button text="-" onClick={handleButtonClick('-')} />
				</td>
			</tr>
			<tr>
				<td>
					<Button text="1" onClick={handleButtonClick('1')} />
					<Button text="2" onClick={handleButtonClick('2')} />
					<Button text="3" onClick={handleButtonClick('3')} />
					<Button text="+" onClick={handleButtonClick('+')} />
				</td>
			</tr>
			<tr>
				<td>
					<Button text="." onClick={handleButtonClick('.')} />
					<Button text="0" onClick={handleButtonClick('0')} />
					<Button
						text="="
						className="w-40 h-20 text-3xl bg-red-400"
						onClick={handleResultButtonClick}
					/>
				</td>
			</tr>
		</table>
	</div>
</div>
