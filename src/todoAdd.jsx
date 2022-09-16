function ListName(props) {


  const onClickDelete = () => {
    console.log(props);
    fetch(`https://ragu-hotel-api.herokuapp.com/api/todo/${props.list._id}`, {
      method: 'DELETE'
    })
      .then(response => response.json)
      .then(data => {
        console.log(props.fetchList());
      })
  }


  return (
    <div className="content" style={{ display: "flex" }} key={props.index}>
      {/* <p>{props.list}</p> */}
      <p> {props.list.data}</p>
      <button
        id="dlt"
        onClick={onClickDelete}

      >
        delete
      </button>
    </div >
  );
}
export default ListName;
