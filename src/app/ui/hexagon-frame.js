import classes from "./hexagon-frame.module.css";

function HexagonFrame(props) {
  return <div className={classes.hexagonFrame}>{props.children}</div>;
}
export default HexagonFrame;
