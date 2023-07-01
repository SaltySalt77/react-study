const List = () => {
  let items = ["Tomatoes", "Pasta", "Coconut"];
  return (
    <div>
      <h3 className="title">상품목록</h3>
      {items.map((item, i) => {
        return (
          <div className="food" key={i}>
            <h4>{item} $40</h4>
          </div>
        );
      })}
    </div>
  );
};

export default List;
