export default function SideBar(props) {
  const { handleToggleModal } = props;
  return (
    <div className="sidebar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>Brutal Martial Landscape</h2>
        <div>
          <p>Discription</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,
            dicta cumque adipisci bl Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Possimus aspernatur commodi nam minima temporibus
            adipisci nulla alias expedita sequi maxime reprehenderit ratione
            voluptate officia atque, veniam esse porro ut quia.
          </p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-right-long"></i>
        </button>
      </div>
    </div>
  );
}
