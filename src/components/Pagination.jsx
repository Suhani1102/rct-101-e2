import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const Pagination = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  const Select = () => <div />;

  return (
    <ButtonGroup variant="outline">
      <Button size="md" data-cy="pagination-first-button">
        First
      </Button>
      <Button size="md" data-cy="pagination-previous-button">
        Previous
      </Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3"></option>
        <option data-cy="pagination-limit-6"></option>
        <option data-cy="pagination-limit-9"></option>
      </Select>
      <Button size="md" data-cy="pagination-next-button">
        Next
      </Button>
      <Button size="md" data-cy="pagination-last-button">
        Last
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;
