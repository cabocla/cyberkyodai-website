function GameScreen(props) {
  return (
    <div className={`${props.hidden ? "hidden" : ""}`}>
      Underworld
      <button>Sign in</button>
    </div>
  );
}

export default GameScreen;
