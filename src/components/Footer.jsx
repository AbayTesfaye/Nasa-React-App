export default function Footer(props) {
  const { handleToggleModal } = props;
  return (
    <footer>
      <div>
        <div className="bgGradient"></div>
        <h2>The Brutal Martial Landscape</h2>
        <h1>NASA PROJECT</h1>
      </div>
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
