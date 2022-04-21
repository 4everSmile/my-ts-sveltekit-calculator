import { types } from 'mobx-state-tree';
import { onSnapshot } from 'mobx-state-tree';

const useMstSnapshot = <T>(store: T) => ({
	subscribe: (method: (value: T) => void) => {
		method(store);

		return onSnapshot(store, () => {
			method(store)
		});
	}
});

const CalculatorStore = types
	.model({ value: '' })
	.actions((state) => {
		return {
			setValue: (newValue: string) => {
				state.value = newValue;
			}
		};
	});

const calculatorStore = useMstSnapshot(CalculatorStore.create()); 

export default calculatorStore;
