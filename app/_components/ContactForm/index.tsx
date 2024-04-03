"use client";
import { Button, Group, Stack, TextInput, Textarea } from "@mantine/core";
import React, { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const isFormValid =
    Object.values(errors).every((value) => value === "") &&
    Object.values(formValues).every((value) => value !== "") &&
    recaptchaToken !== null;

  const sendEmail = (e: FormEvent) => {
    if (!isFormValid) return;
    e.preventDefault();
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { ...formValues, "g-recaptcha-response": recaptchaToken },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      )
      .then(
        () => {
          alert("Success!!!");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  function validateInput(name: keyof typeof formValues) {
    const input = formValues[name];
    if (input === "") {
      setErrors({ ...errors, [name]: `Please enter your ${name}` });
      return false;
    }
    switch (name) {
      case "email": {
        const emailRegex = "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$";
        if (!input.match(emailRegex)) {
          setErrors({ ...errors, [name]: "Please enter a valid email" });
          return false;
        }
        break;
      }
      case "subject": {
        if (input === "") {
          setErrors({ ...errors, [name]: "Please enter a subject" });
          return false;
        }
        break;
      }
      case "message": {
        if (input === "") {
          setErrors({ ...errors, [name]: "Please enter a message" });
          return false;
        }
        break;
      }
    }
    return true;
  }

  return (
    <Stack gap="sm" component="form" onSubmit={sendEmail}>
      <TextInput
        radius="md"
        label="Name"
        name="name"
        id="name"
        size="sm"
        required
        withAsterisk
        description="Full or organization name"
        placeholder="John Doe"
        onBlur={() => validateInput("name")}
        onChange={handleChange}
        error={errors.name}
      />
      <TextInput
        radius="md"
        label="Email"
        size="sm"
        withAsterisk
        type="email"
        name="email"
        id="email"
        required
        description="Personal or organization email address"
        placeholder="myemail@example.com"
        onBlur={() => validateInput("email")}
        onChange={handleChange}
        error={errors.email}
      />
      <TextInput
        radius="md"
        label="Subject"
        name="subject"
        id="subject"
        size="sm"
        required
        withAsterisk
        description="Email Subject"
        placeholder="Hi, let's get in touch and have a chat!"
        onBlur={() => validateInput("subject")}
        onChange={handleChange}
        error={errors.subject}
      />
      <Textarea
        label="Message"
        withAsterisk
        required
        rows={5}
        name="message"
        id="message"
        onBlur={() => validateInput("message")}
        onChange={handleChange}
        error={errors.message}
      />
      <Group justify="flex-end">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={setRecaptchaToken}
        />
        <Button type="submit" disabled={!isFormValid}>
          Send Message
        </Button>
      </Group>
    </Stack>
  );
};

export default ContactForm;
