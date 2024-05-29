const ResetButton = (props: any) => {
  return (
    <button
      id="resetButton"
      className="btn btn-primary mt-2"
      onClick={props.onClick}
    >
      Reset
    </button>
  );
};

export default ResetButton;
