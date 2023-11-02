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

const TransactionTable = () => {
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
					</Tr>
				</Thead>

				<Tbody>
					<Tr>
						<Td>2020</Td>
						<Td>Description</Td>
						<Td>Movies</Td>
						<Td>200</Td>
					</Tr>

					<TransactionItem
						date={'2023'}
						description={'Nice'}
						category={'Film'}
						amount={200}
					/>
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default TransactionTable;
