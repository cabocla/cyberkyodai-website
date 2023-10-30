export default function WhitelistedDialog(props) {
  return (
    <div>
      {props.whitelisted ? (
        <div>Whitelisted, congrats!</div>
      ) : (
        <div>Not whitelisted, sorry...</div>
      )}
      <button onClick={props.handleReset}>Reset</button>
    </div>
  );
}
