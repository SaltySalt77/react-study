import "../globals.css";

const Food = (props) => {
  return (
    <div className={props.className}>
      <h4>{props.item} $40</h4>
    </div>
  );
};

export default Food;
