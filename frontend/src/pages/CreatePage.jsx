import { useState } from 'react'
import { Box, Button, Container, Heading, Input, useToast, useColorModeValue, VStack } from '@chakra-ui/react'
import { useProductStore } from '../store/product'

const CreatePage = () => {
  const [newProduct,  setNewProduct] = useState({
    name: "",
    price: "",
    image: "",

  });

  const toast = useToast()
const {createProduct} = useProductStore()
  const handleAddProduct =  async () => {
   const {success, message} = await createProduct(newProduct);
 if(!success){
  toast({
    title: "Error",
    description: message,
    status: "error",
    duration: 3000,
    isClosable: true,
  })}
  else {
    toast({
      title: "Success",
      description: message,
      status: "success",
      duration: 3000,
      isClosable: true,
    })
  }
  setNewProduct({
    name: "",
    price: "",
    image: "",
  })
  }
  return (
    <Container maxW={"container.sm"}>
      <VStack
      spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>CreatePage</Heading>
        <Box
          as={"form"}
          borderWidth={1}
          borderRadius={"lg"}
          p={8}
          boxShadow={"lg"}
          bg={useColorModeValue("white", "gray.800")}
        >
          <VStack spacing={4}>
            <Input placeholder={"Name"} value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}/>
            <Input placeholder={"Price"} type={"number"} value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}/>
            <Input placeholder={"Image URL"} value={newProduct.image} onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}/>
            <Button colorScheme='blue' onClick={handleAddProduct} w={"full"}>Add Product</Button>

          </VStack>
        </Box>
      </VStack>
      </Container>
  )
}

export default CreatePage