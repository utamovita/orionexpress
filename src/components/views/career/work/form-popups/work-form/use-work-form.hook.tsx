import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useWorkFormConfig } from "@components/views/career/work/form-popups/work-form/use-work-form-config.hook";
import { useState } from "react";

type UseWorkFromProps = {
  position: string;
};

export function useWorkForm(props: UseWorkFromProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { schema, fields } = useWorkFormConfig();
  const { position } = props;
  const { control, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      name: fields.name.defaultValue,
      email: fields.email.defaultValue,
      phone: fields.phone.defaultValue,
      message: fields.message.defaultValue,
      file: fields.file.defaultValue,
      agreements: fields.agreements.defaultValue,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("message", data.message);
      formData.append("file", data.file[0]);
      formData.append("agreements", data.agreements ? "1" : "0");
      formData.append("position", position);

      const response = await fetch("/api/email/workcv", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsLoading(false);
        reset();
        return alert(`Aplikacja na stanowisko ${position} została wysłana. Odezwiemy się wkrótce!`);
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
