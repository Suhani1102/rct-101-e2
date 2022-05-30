import React from "react";
import { Stack } from "@chakra-ui/react";
import { Text, Image, Box, Heading, Tag, TagLabel } from "@chakra-ui/react";
import styles from "./product.module.css";

const Product = (props) => {
  // console.log(props.item);
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  // console.log(products);
  return (
    <Stack data-cy="product" className={styles.card}>
      <Image data-cy="product-image" src={props.item.imageSrc} />
      <Text data-cy="product-category">{props.item.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{props.item.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{props.item.title}</Heading>
      <Box data-cy="product-price">Rs.{props.item.price}/ unit</Box>
    </Stack>
  );
};

export default Product;
