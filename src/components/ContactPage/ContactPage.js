import React, { Component } from "react";
import styled from "styled-components";
import { Formik } from "formik";
import { Form, Input, Title, Text, Button, Label } from "./theme";

class App extends Component {
  render() {
    return (
      <div>
        <Title>Contact Me</Title>
        {/* FORMIK */}
        <Formik
          render={({
            touched,
            errors,
            values,
            handleChange,
            handleBlur,
            handleSubmit
          }) => (
            <Form
              className="mt-5"
              action="https://formspree.io/xwkkgoze"
              method="POST"
            >
              <Label>
                Name *
                <Input
                  border={errors.email && "1px solid red"}
                  type="text"
                  name="firstName"
                  placeholder="john smith"
                />
              </Label>
              <Label>
                Email *
                <Input
                  border={errors.password && "1px solid red"}
                  type="email"
                  name="email"
                  placeholder="email@email.com"
                />
              </Label>
              <Label>
                {" "}
                Your Message
                <textarea
                  name="message"
                  rows="10"
                  placeholder="Add message here"
                />
              </Label>

              <Button type="submit">Send Mail</Button>
            </Form>
          )}
        />
        {/* END OF FORMIK */}
      </div>
    );
  }
}
export default App;
