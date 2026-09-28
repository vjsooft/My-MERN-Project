const FormButton = ({
  children,
  loading = false,
}) => {

  return (
    <button
      type="submit"
      className="btn btn-primary"
      disabled={loading}
    >
      {loading ? "Please wait..." : children}
    </button>
  );
};

export default FormButton;