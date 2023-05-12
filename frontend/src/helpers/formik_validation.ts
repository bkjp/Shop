import { FormikProps, FormikErrors } from "formik";
import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Le mot de passe est obligatoire")
    .min(8, "le mot de passe doit avoir au minimum 8 caracteres"),
});

export const registerSchema = Yup.object({
  username: Yup.string().notRequired(),
  first_name: Yup.string().required("You must provide your first name"),
  last_name: Yup.string().required("You must provide your last name"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  phone: Yup.number()
    .required("Phone is required")
    .typeError("Veuillez entrer un numero de tel."),
  password: Yup.string()
    .required("Le mot de passe est obligatoire")
    .min(8, "le mot de passe doit avoir au minimum 8 caracteres"),
  re_password: Yup.string()
    .oneOf([Yup.ref("password")], "Les mots de passe ne correspondent pas")
    .required("Veuillez confirmer votre mot de passe")
    .min(8, "le mot de passe doit avoir au minimum 8 caracteres"),
  accept_tnc: Yup.boolean().oneOf(
    [true],
    "Veuillez accepter les termes d'utilisation"
  ),
});

/////////////////////////////////////////////////////////////////////////

export const DeliveryValidationForm = Yup.object({
  deliveryFirstName: Yup.string().required("First name is required"),
  deliveryLastName: Yup.string().required("Last name is required"),

  deliveryEmail: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  deliveryPhoneNumber: Yup.number()
    .required("Phone number is required")
    .typeError("Veuillez entrer un numero de tel."),

  deliveryCountry: Yup.string()
    .required("Phone number is required")
    .typeError("Veuillez entrer un numero de tel."),
  deliveryProvince: Yup.string()
    .required("Phone number is required")
    .typeError("Veuillez entrer un numero de tel."),
  deliveryTown: Yup.string()
    .required("Phone number is required")
    .typeError("Veuillez entrer un numero de tel."),

  deliveryAddress: Yup.string().required("Last name is required"),
  deliveryZipCode: Yup.string().required("Last name is required"),
  deliveryUnitNumber: Yup.number()
    .required("Unit is required")
    .typeError("This field is required."),
});

export const BillingValidationForm = Yup.object({
  billingFirstName: Yup.string().required("First name is required"),
  billingLastName: Yup.string().required("Last name is required"),

  billingEmail: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  billingPhoneNumber: Yup.number()
    .required("Phone number is required")
    .typeError("Veuillez entrer un numero de tel."),

  billingCountry: Yup.string()
    .required("Phone number is required")
    .typeError("Veuillez entrer un numero de tel."),
  billingProvince: Yup.string()
    .required("Phone number is required")
    .typeError("Veuillez entrer un numero de tel."),
  billingTown: Yup.string()
    .required("Phone number is required")
    .typeError("Veuillez entrer un numero de tel."),

  billingAddress: Yup.string().required("Last name is required"),
  billingZipCode: Yup.string().required("Last name is required"),
  billingUnitNumber: Yup.number()
    .required("Unit is required")
    .typeError("This field is required."),
});
