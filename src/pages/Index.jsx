import { Container, Text, VStack, Box, Heading, Image, Button, HStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header */}
        <Box bg="green.500" color="white" p={4} borderRadius="md" textAlign="center">
          <Heading as="h1" size="xl">
            Herbal Products Co.
          </Heading>
          <Text>Your trusted source for natural herbal products</Text>
        </Box>

        {/* About Section */}
        <Box p={4} borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg" mb={4}>
            About Us
          </Heading>
          <Text>At Herbal Products Co., we are dedicated to providing the highest quality herbal products for both wholesale and retail customers. Our products are sourced from the finest natural ingredients and are crafted with care to ensure the best results for our customers.</Text>
        </Box>

        {/* Products Section */}
        <Box p={4} borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg" mb={4}>
            Our Products
          </Heading>
          <HStack spacing={4}>
            <Box borderWidth="1px" borderRadius="md" overflow="hidden">
              <Image src="https://images.unsplash.com/photo-1615205597144-5c7c885291d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZXJiYWwlMjB0ZWF8ZW58MHx8fHwxNzE2NzY5NTgxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Herbal Tea" />
              <Box p={4}>
                <Heading as="h3" size="md">
                  Herbal Tea
                </Heading>
                <Text>Relax and rejuvenate with our special blend of herbal teas.</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="md" overflow="hidden">
              <Image src="https://images.unsplash.com/photo-1611253468024-df921701df4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZXJiYWwlMjBvaWx8ZW58MHx8fHwxNzE2NzY5NTgxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Herbal Oil" />
              <Box p={4}>
                <Heading as="h3" size="md">
                  Herbal Oil
                </Heading>
                <Text>Experience the healing properties of our pure herbal oils.</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="md" overflow="hidden">
              <Image src="https://images.unsplash.com/photo-1705083649602-03c5fbae2e89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZXJiYWwlMjBzdXBwbGVtZW50c3xlbnwwfHx8fDE3MTY3Njk1ODF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Herbal Supplements" />
              <Box p={4}>
                <Heading as="h3" size="md">
                  Herbal Supplements
                </Heading>
                <Text>Boost your health with our natural herbal supplements.</Text>
              </Box>
            </Box>
          </HStack>
        </Box>

        {/* Contact Section */}
        <Box p={4} borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg" mb={4}>
            Contact Us
          </Heading>
          <Text>If you have any questions or would like to place an order, please get in touch with us.</Text>
          <Button colorScheme="green" mt={4}>
            Contact Us
          </Button>
        </Box>

        {/* Footer */}
        <Box bg="green.500" color="white" p={4} borderRadius="md" textAlign="center">
          <Text>&copy; 2023 Herbal Products Co. All rights reserved.</Text>
          <HStack spacing={4} justify="center" mt={2}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
