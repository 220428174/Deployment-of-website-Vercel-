import React from "react";
import "./Footer.css"
import { Button, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

const Footer = (props) => {

    let form = useForm({
        initialValues: {
          email: "",
        },
    });

    const onSubmit = async (values) => {
        await fetch("http://localhost:7000/", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            email: values.email,
          }),
        }).then((response) => console.log(response));
      };

    return (
        <div className="footer-div">
             <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
            
            
            <TextInput
            placeholder="Your email"
            {...form.getInputProps("email")}
            />
            <Button type={"submit"}>SIGN UP</Button>

            
            
            
            </form>
        
            
        </div>
    )

}



export default Footer;