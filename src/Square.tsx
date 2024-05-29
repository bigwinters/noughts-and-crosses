const Square = (props: any) => {
  return (
    <button
      className={'square btn rounded active value-' + props.value}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};

export default Square;
