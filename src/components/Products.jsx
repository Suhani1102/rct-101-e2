import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import AddProduct from "./AddProduct";
import Product from "./Product";
import { Flex } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import axios from "axios";
import styles from "./products.module.css";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [products, setProducts] = useState([]);

  const handlePagination = (num) => {
    setPage(num);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/products?_page=${page}&_limit=3`)
      .then((r) => {
        setProducts(r.data);
        setTotalCount(Number(r.headers["x-total-count"]));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [page]);

  return (
    <Flex className={styles.container}>
      {/*  AddProduct */}
      <AddProduct />
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {products.map((item) => (
          <GridItem>
            <Product key={item.id} item={item} />
          </GridItem>
        ))}
      </Grid>
      {/* Pagination */}
      <Pagination
        page={page}
        updatePage={handlePagination}
        count={totalCount}
      />
    </Flex>
  );
};

export default Products;
