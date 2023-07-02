import classes from './TodoItem.module.css'

const TodoItem: React.FC<{text: string, onRemoveTodo: () => void}> = (props) => {
  // const onClickHandler = (event: React.MouseEvent) => {
  //   props.onRemoveTodo(props.text);
  // };

  return <li onClick={props.onRemoveTodo} className={classes.item}>{props.text}</li>
}

export default TodoItem;