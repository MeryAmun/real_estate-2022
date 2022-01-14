import { Avatar, Box, Flex, Spacer, Text } from '@chakra-ui/react'
import { FaBath, FaBed } from 'react-icons/fa'
import { baseUrl, fetchApi } from '../../utils/fetchApi'

import { BsGridFill } from 'react-icons/bs'
import DefaultImage from '../assets/images/house.jpg'
import { GoVerified } from 'react-icons/go'
import Image from 'next/image'
import { ImageScrollbar } from '../../components/ImageScrollbar'
import Link from 'next/link'
import millify from 'millify'

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => (
  <Box maxWidth='100px' margin='auto' p='4'>
    {photos && <ImageScrollbar data={photos} />}
  </Box>
)

export default PropertyDetails

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`)

  return {
    props: {
      propertyDetails: data,
    },
  }
}
