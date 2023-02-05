export function If(props) {
  let { condition } = props;

  if (condition) {
    return props.children;
  } else {
    return null;
  }
}
