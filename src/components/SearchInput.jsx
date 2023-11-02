import { Input } from '@chakra-ui/react';

const SearchInput = ({ searchTerm, setSearchTerm }) => {
	return (
		<Input
			placeholder="Search transactions"
			size="md"
			value={searchTerm}
			onChange={(e) => setSearchTerm(e.target.value)}
		/>
	);
};

export default SearchInput;
