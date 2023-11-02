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

	// filter all transactions according to the search input
	const filteredTransactions = transactions
		.filter((transaction) =>
			transaction.description
				.toLowerCase()
				.includes(searchTerm.toLowerCase())
		)
		// sort all transactions in a descending manner using the ids
		.sort((a, b) => b.id - a.id);

	// persist the transaction gotten from AddTransactionForm component to db.json
	const handleSaveTransaction = (transaction) => {
		fetch(BASE_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(transaction),
		})
			.then((res) => res.json())
			.then((newTransaction) =>
				// update the transactions state
				setTransactions((transactions) => [
					...transactions,
					newTransaction,
				])
			)
			.catch((err) => console.log(err));
	};

	// delete a transaction from the db.json
	const handleDelete = (id) => {
		fetch(`${BASE_URL}/${id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then(() =>
				// filter out the deleted transaction and updated the transactions
				setTransactions(
					transactions.filter((transaction) => transaction.id !== id)
				)
			)
			.catch((err) => console.log(err));
	};

	return (
		<Box mx={10}>
			<VStack spacing={4} align="stretch">
				<Heading colorScheme="purple">Bank of Flatiron</Heading>

				<SearchInput
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
				/>

				<AddTransactionForm
					handleSaveTransaction={handleSaveTransaction}
				/>

				<TransactionTable
					transactions={filteredTransactions}
					handleDelete={handleDelete}
				/>
			</VStack>
		</Box>
	);
}

export default App;
