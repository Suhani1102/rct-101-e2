import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import AddProduct from "./AddProduct";
import Product from "./Product";
import { Flex } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import axios from "axios";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const [page, setPage] = useState(1);
  // const [totalCount, setTotalCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/products?_page=1&_limit=5`)
      .then((r) => {
        setProducts(r.data);
        // setTotalCount(Number(r.headers["x-total-count"]));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  console.log(products);
  return (
    <Flex>
      {/*  AddProduct */}
      <AddProduct />
      <Grid>
        <GridItem>
          <Product />
        </GridItem>
      </Grid>
      {/* Pagination */}
      <Pagination />
    </Flex>
  );
};

export default Products;
