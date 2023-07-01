import Food from "/src/app/list/Food";

const List = () => {
  let items = ["Tomatoes", "Pasta", "Coconut"];
  return (
    <div>
      <h3 className="title">상품목록</h3>
      {items.map((item, i) => {
        return (
          <Food
            key={i}
            className="food"
            item={item}
            image={`/food${i}.png`}
            alt={item}
          />
        );
      })}
    </div>
  );
};

export default List;
