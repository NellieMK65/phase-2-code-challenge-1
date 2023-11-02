import { useEffect, useState } from 'react';
import { Box, Flex, Heading, Select, VStack } from '@chakra-ui/react';

import SearchInput from './components/SearchInput';
import AddTransactionForm from './components/AddTransactionForm';
import TransactionTable from './components/TransactionTable';

const BASE_URL = 'http://localhost:8001/transactions';

function App() {
	const [transactions, setTransactions] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [sortBy, setSortBy] = useState('');

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

	// to sort alphabetically (asc)
	// use localCompare method coming from string data type
	const sortedTransactions = filteredTransactions.sort((a, b) => {
		if (sortBy === 'category') {
			return a.category.localeCompare(b.category);
		} else if (sortBy === 'description') {
			return a.description.localeCompare(b.description);
		} else {
			return 0;
		}
	});

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

				<Flex justifyContent={'end'}>
					<Select
						placeholder="Sort by"
						onChange={(e) => setSortBy(e.target.value)}
					>
						<option value="category">Category</option>
						<option value="description">Description</option>
					</Select>
				</Flex>

				<TransactionTable
					transactions={sortedTransactions}
					handleDelete={handleDelete}
				/>
			</VStack>
		</Box>
	);
}

export default App;
