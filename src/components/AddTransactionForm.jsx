import { Button, Input, SimpleGrid, VStack } from '@chakra-ui/react';

const AddTransactionForm = () => {
	return (
		<>
			<SimpleGrid minChildWidth="120px" spacing="40px">
				<Input type="date" />

				<Input placeholder="Description" />

				<Input placeholder="Category" />

				<Input type="number" placeholder="Amount" />
			</SimpleGrid>
			<Button>Add Transaction</Button>
		</>
	);
};

export default AddTransactionForm;
