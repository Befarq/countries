import ReactDOM from "react-dom";
import "./Loader.css";
function Loader() {
  return ReactDOM.createPortal(
    <>
      {" "}
      <div className="loader">
        <p id="loading">Loading...</p>
      </div>
    </>,
    document.body
  );
}

export default Loader;
