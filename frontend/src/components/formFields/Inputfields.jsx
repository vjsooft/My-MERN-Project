import { useFormContext } from "react-hook-form";

const Inputfields = ({name,label,type = "text",placeholder = ""}) => {const {register,formState: { errors }} = useFormContext();

  return (
    <div className="mb-3">

      <label className="form-label">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="form-control"
        {...register(name)}
      />

      {errors[name] && (
        <p className="text-danger">
          {errors[name].message}
        </p>
      )}

    </div>
  );
};

export default Inputfields;
