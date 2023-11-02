import { Button, Td, Tr } from '@chakra-ui/react';

/**
 * handleDelete prop is a good example of prop drilling,
 * where a prop is passed down btwn multiple components
 *
 * App
 *
 * TransactionTable
 *
 * TrancationItem
 */
const TransactionItem = ({
	id,
	date,
	description,
	category,
	amount,
	handleDelete,
}) => {
	return (
		<Tr>
			<Td>{date}</Td>
			<Td>{description}</Td>
			<Td>{category}</Td>
			<Td>{amount}</Td>
			<Td>
				<Button colorScheme="red" onClick={() => handleDelete(id)}>
					Delete
				</Button>
			</Td>
		</Tr>
	);
};

export default TransactionItem;
