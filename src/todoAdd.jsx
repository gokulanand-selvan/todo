function ListName(props) {
  return (
    <div className="content" style={{ display: "flex" }} key={props.index}>
      <p>{props.list}</p>
      <button
        id="dlt"
        onClick={() =>
          props.setArr(props.arr.filter((listItem) => listItem !== props.list))
        }
      >
        delete
      </button>
    </div>
  );
}
export default ListName;
