import { Container, Heading, VStack } from '@chakra-ui/react';

import SearchInput from './components/SearchInput';
import AddTransactionForm from './components/AddTransactionForm';
import TransactionTable from './components/TransactionTable';

function App() {
	return (
		<Container maxW="container.sm">
			<VStack spacing={4} align="stretch">
				<Heading colorScheme="purple">Bank of Flatiron</Heading>

				<SearchInput />

				<AddTransactionForm />

				<TransactionTable />
			</VStack>
		</Container>
	);
}

export default App;
