import Image from "next/image";

const Food = (props) => {
  return (
    <div className={props.className}>
      <Image
        src={props.image}
        alt={props.alt}
        className="food-img"
        width="500"
        height="500"
      />
      <h4>{props.item} $40</h4>
    </div>
  );
};

export default Food;
