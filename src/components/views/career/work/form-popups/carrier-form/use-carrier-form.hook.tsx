import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { WorkFormProps } from "@components/views/career/work/form-popups/work-form/work-form.component";
import { useState } from "react";
import { useCarrierFormConfig } from "@components/views/career/work/form-popups/carrier-form/use-carrier-form-config.hook";

export function useCarrierForm(props: WorkFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { position } = props;
  const { schema, fields } = useCarrierFormConfig();
  const { control, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      name: fields.name.defaultValue,
      email: fields.email.defaultValue,
      phone: fields.phone.defaultValue,
      message: fields.message.defaultValue,
      agreements: fields.agreements.defaultValue,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      const formData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        agreements: data.agreements,
        position,
      };

      const response = await fetch("/api/email/work", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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
