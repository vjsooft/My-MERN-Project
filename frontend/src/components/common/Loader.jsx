const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center my-3">
      <div
        className="spinner-border"
        role="status"
        aria-hidden="true"
      ></div>

      <span className="ms-2">
        Please wait...
      </span>
    </div>
  );
};

export default Loader;