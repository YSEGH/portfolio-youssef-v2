import React, { useCallback, useState } from "react";
import "../1-css/FormContact.css";
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { LoadingSVG } from "./LoadingSpinner";

const validationSchema = yup.object({
  lastname: yup.string().required("Merci de saisir votre nom."),
  email: yup
    .string()
    .email("Merci de saisir une adresse email valide.")
    .required("Merci de saisir une adresse email."),
  message: yup.string().required("Merci de saisir votre message."),
});

const useYupValidationResolver = (validationSchema) =>
  useCallback(
    async (data) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );

export default function FormContact() {
  const [loading, setLoading] = useState(false);
  const resolver = useYupValidationResolver(validationSchema);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver });

  const onSubmit = (data) => sendEmail(data);

  const hideForm = (e, close = false) => {
    const formContact = document.querySelector(".form-contact");
    if (
      close ||
      e.target.classList.contains("form-contact") ||
      e.target.classList.contains("close-icon")
    ) {
      formContact.classList.remove("active");
      formContact.classList.add("hidden");
      return;
    }
    return;
  };

  const sendEmail = async (formData) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/mail", formData);
      toast.success(data.message);
      hideForm({}, true);
      reset({});
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div
      className="form-contact"
      onClick={(e) => {
        e.stopPropagation();
        hideForm(e);
      }}
    >
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <MdClose
          className="close-icon"
          size={25}
          onClick={(e) => {
            e.stopPropagation();
            hideForm(e);
          }}
        />
        <h1>On embauche !</h1>
        <div className="form-group">
          <label>Nom</label>
          <input type="text" {...register("lastname")} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" {...register("email")} />
        </div>
        <div className="form-group textarea">
          <label>Message</label>
          <textarea type="text" {...register("message")} />
        </div>
        <button disabled={loading ? true : false}>
          {loading ? <LoadingSVG /> : "Envoyer"}
        </button>
        <div className="error-handler">
          <span>{errors.lastname && errors.lastname.message}</span>
          <span>{errors.email && errors.email.message}</span>
          <span>{errors.message && errors.message.message}</span>
        </div>
      </form>
    </div>
  );
}
