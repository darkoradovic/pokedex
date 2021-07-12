const Modal = ({ handleClose, show, children, name }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h3>List of pokemons type: {name}</h3>
        <button className="close" onClick={handleClose}>
          X
        </button>

        <section className="modallist">{children}</section>
      </section>
    </div>
  );
};
export default Modal;
