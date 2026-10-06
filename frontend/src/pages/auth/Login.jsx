import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../components/formFields/Inputfields";
import FormButton from "../../components/formFields/FormButton";
import { loginSchema } from "../../schemas/auth/loginSchema";
import { userLogin } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);  
  // 1. React Hook Form
  const methods = useForm({
    // 2. Zod ko React Hook Form se connect
    resolver: zodResolver(loginSchema),
    // 3. Initial values
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 4. Form Submit
  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    try {
      const response = await userLogin(data);
      setUser(response.user);
      navigate("/profile");
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4">Login </h2>
          {/* 5. FormProvider */}
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              {/* 6. Reusable Input */}
              <FormInput
                name="email"
                label="Email"
                type="email"
                placeholder="Enter email"
              />

              {/* 7. Reusable Input */}
              <FormInput
                name="password"
                label="Password"
                type="password"
                placeholder="Enter password"
              />
              {/* 8. Reusable Button */}
              <FormButton>Login</FormButton>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default Login;
