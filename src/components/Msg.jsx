function Msg(props) {
  const { name } = props; // Destructuring props
  return (
    <div className="msg">
      <h2>Message Components</h2>
      <h3>Hi {name}</h3>
    </div>
  );
}
export default Msg;
