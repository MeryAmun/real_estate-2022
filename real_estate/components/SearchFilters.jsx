import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  Select,
  Spinner,
  Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import { MdCancel } from 'react-icons/md'
import { useRouter } from 'next/router'

export const SearchFilters = () => {
  const [filters, setFilters] = useState()
  return (
    <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'></Flex>
  )
}
