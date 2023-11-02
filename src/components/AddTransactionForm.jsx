import { useState } from 'react';
import { Button, Flex, Input, SimpleGrid } from '@chakra-ui/react';

const AddTransactionForm = ({ handleSaveTransaction }) => {
	// create object to hold the initial form data
	const transaction = {
		date: '',
		description: '',
		category: '',
		amount: 0,
	};

	const [formData, setFormData] = useState(transaction);

	// function to get form values
	const handleInput = (e) => {
		// destructure name and value from e.target
		const { name, value } = e.target;

		// update the formData state with the new value
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		// prevent the default form behaviour which is reloading when submitted
		e.preventDefault();

		// pass the form data to app component
		handleSaveTransaction(formData);

		// reset the form by passing in the initial transaction values
		setFormData(transaction);
	};

	return (
		<form onSubmit={handleSubmit}>
			<SimpleGrid minChildWidth="120px" spacing="40px">
				<Input
					type="date"
					required
					name="date"
					value={formData.date}
					onChange={handleInput}
				/>

				<Input
					placeholder="Description"
					required
					name="description"
					value={formData.description}
					onChange={handleInput}
				/>

				<Input
					placeholder="Category"
					required
					name="category"
					value={formData.category}
					onChange={handleInput}
				/>

				<Input
					type="number"
					placeholder="Amount"
					required
					name="amount"
					value={formData.amount}
					onChange={handleInput}
				/>
			</SimpleGrid>

			<Flex justifyContent={'center'} mt={5}>
				<Button type="submit">Add Transaction</Button>
			</Flex>
		</form>
	);
};

export default AddTransactionForm;
