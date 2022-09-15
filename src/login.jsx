import { Button, PasswordInput, Stack, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./utils";


export default function Login() {
    let navigate = useNavigate();
  
    let form = useForm({
      initialValues: {
        email: "",
        password: "",
      },
    });
    
    const logout = () => {
    localStorage.removeItem('token-info');
    setIsLoggedin(false);
    };

    const onSubmit = async (values) => {
      await signInWithEmailAndPassword(auth, values.email, values.password)
        .then((user) => {
          console.log(user)
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    return (

      <form onSubmit={form.onSubmit((values) => onSubmit(values))}>

        <Stack>
          <Title>Login</Title>
          <TextInput label={"Email"} required {...form.getInputProps("email")} />
          <PasswordInput
            label={"Password"}
            required
            {...form.getInputProps("password")}
          />
          <Button type={"submit"}>Login</Button>
        </Stack>

      </form>
    );
  }


  
