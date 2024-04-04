"use client";
import { Button, Group, Stack, TextInput, Textarea } from "@mantine/core";
import React, { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconCross, IconX } from "@tabler/icons-react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const ContactForm = () => {
  const { width, height } = useWindowSize();
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
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

  const sendEmail = async (e: FormEvent) => {
    if (!isFormValid) return;
    setLoading(true);
    e.preventDefault();

    const id = notifications.show({
      loading: true,
      title: "Please wait",
      message: "Sending email...",
      autoClose: false,
      withCloseButton: true,
    });

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { ...formValues, "g-recaptcha-response": recaptchaToken },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );

      if (response.status === 200) {
        setSuccess(true);
        setFormValues({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        notifications.update({
          id,
          loading: false,
          color: "teal",
          title: "Hoorah!!",
          message:
            "Your email has been received, will get back to you shortly!",
          autoClose: 5000,
          withCloseButton: true,
          icon: <IconCheck size="1.5rem" />,
        });
        setLoading(false);
        setRecaptchaToken(null);
      } else {
        notifications.update({
          id,
          loading: false,
          color: "red",
          title: "Error",
          message: "Something went wrong",
          autoClose: 5000,
          withCloseButton: true,
          icon: <IconCross size="1.5rem" />,
        });
      }
    } catch (error) {
      console.error(error);
      notifications.update({
        id,
        loading: false,
        color: "red",
        title: "Error",
        message: "Something went wrong",
        autoClose: 5000,
        withCloseButton: true,
        icon: <IconX size="1.5rem" />,
      });
    } finally {
      setLoading(false);
    }
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
        value={formValues.name}
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
        value={formValues.email}
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
        value={formValues.subject}
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
        value={formValues.message}
        onBlur={() => validateInput("message")}
        onChange={handleChange}
        error={errors.message}
      />
      <Group justify="flex-end">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={setRecaptchaToken}
        />
        <Button
          type="submit"
          disabled={!isFormValid || loading}
          loading={loading}
          c="white"
          size="md"
        >
          Send
        </Button>
      </Group>
      {success && (
        <Confetti
          onConfettiComplete={() => setSuccess(false)}
          confettiSource={{ x: width / 2, y: height / 2, w: 100, h: 100 }}
          initialVelocityX={15}
          initialVelocityY={15}
          numberOfPieces={300}
          tweenDuration={100}
          recycle={false}
          width={width}
          height={height + 500}
        />
      )}
    </Stack>
  );
};

export default ContactForm;
