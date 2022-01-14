import { Box, Flex, Icon, Text } from '@chakra-ui/react'

import { BsFilter } from 'react-icons/bs'
import Image from 'next/image'
import { Property } from '../components/Property'
import { SearchFilters } from '../components/SearchFilters'
import noResult from '../assets/images/noresult.svg'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Search = () => {
  const [searchFilters, setSearchFilters] = useState(false)
  const router = useRouter()

  return (
    <Box>
      <Flex
        cursor='pointer'
        bg='gray.100'
        borderBottom='1px'
        borderColor='gray.200'
        p='2'
        fontWeight='black'
        fontSize='lg'
        justifyContent='center'
        alignItems='center'
        onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
      >
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft='2' w='7' as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize='2xl' p='4' fontWeight='bold'>
        Properties {router.query.purpose}
      </Text>
      <Flex flexWrap='wrap'>
        {[].map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      {[].length === 0 && (
        <Flex
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          marginBottom='5'
          marginTop='5'
        >
          <Image src={noResult} alt='No Result' />
        </Flex>
      )}
    </Box>
  )
}
export default Search
