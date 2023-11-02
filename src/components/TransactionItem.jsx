import { Td, Tr } from '@chakra-ui/react';

const TransactionItem = ({ date, description, category, amount }) => {
	return (
		<Tr>
			<Td>{date}</Td>
			<Td>{description}</Td>
			<Td>{category}</Td>
			<Td>{amount}</Td>
		</Tr>
	);
};

export default TransactionItem;
