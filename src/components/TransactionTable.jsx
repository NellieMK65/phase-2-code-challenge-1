import {
	Table,
	TableCaption,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import TransactionItem from './TransactionItem';

const TransactionTable = ({ transactions, handleDelete }) => {
	return (
		<TableContainer>
			<Table variant="simple">
				<TableCaption>All my transactions</TableCaption>

				<Thead>
					<Tr>
						<Th>Date</Th>
						<Th>Description</Th>
						<Th>Category</Th>
						<Th isNumeric>Amount</Th>
						<Th>Actions</Th>
					</Tr>
				</Thead>

				<Tbody>
					{transactions.map((transaction) => (
						<TransactionItem
							key={transaction.id}
							{...transaction}
							handleDelete={handleDelete}
						/>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default TransactionTable;
