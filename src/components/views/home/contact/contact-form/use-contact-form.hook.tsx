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
      agreements: fieldsContact.agreements.defaultValue,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      const formData = {
        name: data.name,
        email: data.email,
        message: data.message,
        topic: data.topic,
        agreements: data.agreements,
      };

      const response = await fetch("/api/email/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsLoading(false);
        reset();
        return alert("Wiadomość została wysłana. Odezwiemy się wkrótce!");
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
