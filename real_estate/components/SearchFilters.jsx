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
import { filterData, getFilterValues } from '../utils/filterData.js.js'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import { MdCancel } from 'react-icons/md'
import { useRouter } from 'next/router'

export const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData)
  const router = useRouter()

  const searchProperties = (filterValues) => {
    const path = router.pathname
    const { query } = router
    const values = getFilterValues(filterValues)
    values.forEach((item) => {
      query[item.name] = item.value
    })
    router.push({ pathname: path, query })
  }

  return (
    <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
      {filters.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            placeholder={filter.placeholder}
            w='fit-content'
            p='2'
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  )
}
