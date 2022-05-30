import React, { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import styles from "./pagination.module.css";

const Pagination = (props) => {
  const [page, setPage] = useState(props.page);
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;

  const prev = () => {
    setPage(page - 1);
    props.updatePage(page);
  };

  const next = () => {
    setPage(page + 1);
    props.updatePage(page);
  };

  return (
    <ButtonGroup variant="outline" className={styles.pagination}>
      <Button size="md" disabled={page <= 1} data-cy="pagination-first-button">
        First
      </Button>
      <Button
        size="md"
        disabled={page <= 1}
        onClick={prev}
        data-cy="pagination-previous-button"
      >
        Previous
      </Button>
      <Select size="md" data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button
        size="md"
        disabled={props.totalCount < page * 5}
        onClick={next}
        data-cy="pagination-next-button"
      >
        Next
      </Button>
      <Button
        size="md"
        disabled={props.totalCount < page * 5}
        data-cy="pagination-last-button"
      >
        Last
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;
