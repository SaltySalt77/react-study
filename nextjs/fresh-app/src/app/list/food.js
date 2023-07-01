import Image from "next/image";

const Food = (props) => {
  return (
    <div className={props.className}>
      <h4>{props.item} $40</h4>
      <Image src={props.image} alt={props.alt} className="food-img" />
    </div>
  );
};

export default Food;
