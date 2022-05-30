import React from "react";
import { Button } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure, FormControl, FormLabel } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";

const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef();

  return (
    <>
      <Button
        colorScheme="gray"
        onClick={onOpen}
        my={4}
        data-cy="add-product-button"
      >
        Add New Product
      </Button>
      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="md"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Product</ModalHeader>
          <ModalCloseButton onClick={onClose} />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input data-cy="add-product-title" />
            </FormControl>
            <FormControl>
              <FormLabel>Category</FormLabel>
              <Select data-cy="add-product-category">
                <option data-cy="add-product-category-shirt">Shirt</option>
                <option data-cy="add-product-category-pant">Pant</option>
                <option data-cy="add-product-category-jeans">Jeans</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <RadioGroup data-cy="add-product-gender">
                <Radio data-cy="add-product-gender-male">Male</Radio>
                <Radio data-cy="add-product-gender-female">Female</Radio>
                <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Price</FormLabel>
              <Input data-cy="add-product-price" />
            </FormControl>
            <ModalFooter>
              <Button colorScheme="teal" data-cy="add-product-submit-button">
                Create
              </Button>
            </ModalFooter>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProduct;
