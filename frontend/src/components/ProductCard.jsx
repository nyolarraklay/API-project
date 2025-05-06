import React from 'react'
import { Box, Image, Heading, Text, HStack, IconButton } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'

const ProductCard = ({product}) => {
  return (
    <Box
    shadow={"lg"}
    rounded={"lg"}
    overflow={"hidden"}
    transition={"all 0.3s"}
    _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
    >
{/* <Image
      src={product.image}
      alt={product.name}
      w={"full"}
      h={"48"}
      objectFit={"cover"}
      /> */}
      <Box p={4}>
        <Heading as="h3" size ="md" mb={2}>{product.name}</Heading >

        <Text fontWeight="bold" fontSize="xl" color="textColor" mb={4}>
          ${product.price}
        </Text>

        <HStack spacing={4}>
          <IconButton icon={<EditIcon/>} colorScheme="blue"/><IconButton icon={<DeleteIcon/>} colorScheme="red"/  >
        </HStack>
      </Box>


    </Box>
  )
}

export default ProductCard