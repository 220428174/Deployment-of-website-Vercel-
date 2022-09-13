import { Button, PasswordInput, Stack, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { auth } from "./utils";
import { createUserWithEmailAndPassword } from "firebase/auth";




export default function Register() {
    let navigate = useNavigate();
    
    let form = useForm({
      initialValues: {
        email: "",
        password: "",
      },
    });

    const onSubmit = async (values) => {
        await createUserWithEmailAndPassword(auth, values.email, values.password)
          .then((user) => {
            console.log(user);
            navigate("/login");
          })
          .catch((error) => {
            console.log(error);
          });
      };
  
    return (

      <form onSubmit={form.onSubmit((values) => onSubmit(values))}>

        <Stack>
          <Title>Register</Title>
          <TextInput label={"Email"} required {...form.getInputProps("email")} />
          <TextInput label={"Name"} required {...form.getInputProps("name")} />
          <PasswordInput
            label={"Password"}
            required
            {...form.getInputProps("password")}
          />
          <PasswordInput
            label={"Confirm Password"}
            required
            {...form.getInputProps("password2")}
          />
          <Button type={"submit"}>Login</Button>
        </Stack>

      </form>
    );
  }


  