import { useEffect, useState } from 'react';
import { Box, Container, Heading, VStack } from '@chakra-ui/react';

import SearchInput from './components/SearchInput';
import AddTransactionForm from './components/AddTransactionForm';
import TransactionTable from './components/TransactionTable';

const BASE_URL = 'http://localhost:8001/transactions';

function App() {
	const [transactions, setTransactions] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		fetch(BASE_URL)
			.then((res) => res.json())
			.then((transactions) => setTransactions(transactions))
			.catch((err) => console.log(err));
	}, []);

	const filteredTransactions = transactions.filter((transaction) =>
		transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<Box mx={10}>
			<VStack spacing={4} align="stretch">
				<Heading colorScheme="purple">Bank of Flatiron</Heading>

				<SearchInput
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
				/>

				<AddTransactionForm />

				<TransactionTable transactions={filteredTransactions} />
			</VStack>
		</Box>
	);
}

export default App;
