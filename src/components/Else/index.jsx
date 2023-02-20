export function Else(props) {
  const { condition } = props;

  if (!condition) {
    return props.children;
  } else {
    return null;
  }
}
