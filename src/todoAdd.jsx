import { Box, Button } from "@mui/material";
import { useState } from "react";
function ListName(props) {
  const onClickDelete = () => {
    console.log(props);
    const sliced = props.arr.splice(props.index, 1);
    console.log(props.arr);
    props.updateDelete(sliced);
  };
  // console.log(props);
  return (
    <Box className="content" style={{ display: "flex" }} key={props.index}>
      {/* <p>{props.list}</p> */}
      <p> {props.list}</p>
      <Button variant="contained" onClick={onClickDelete}>
        delete
      </Button>
    </Box>
  );
}
export default ListName;
