import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContactFormConfig } from "@components/views/home/contact/contact-form/use-contact-form-config.hook";
import { useState } from "react";

export function useContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { schema, fieldsContact } = useContactFormConfig();
  const { control, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      name: fieldsContact.name.defaultValue,
      email: fieldsContact.email.defaultValue,
      topic: fieldsContact.topic.defaultValue,
      message: fieldsContact.message.defaultValue,
      file: fieldsContact.file.defaultValue,
      agreements: fieldsContact.agreements.defaultValue,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);
      formData.append("file", data.file[0]);
      formData.append("agreements", data.agreements ? "1" : "0");


      const response = await fetch("/api/email/contact", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsLoading(false);
        reset();
        return alert(`Wiadomość została wysłana. Odezwiemy się wkrótce!`);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error sending email:", error);
      setIsLoading(false);
    }
    setIsLoading(false);
  });

  return {
    isSubmitting: formState.isSubmitting,
    onSubmit,
    control,
    isLoading,
  };
}
