import * as yup from "yup";

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please provide a valid e-mail address").required("Email address is required"),
  checkbox: yup.bool().oneOf([true], 'You must accept the terms and conditions').required('You must accept the terms and conditions'),
});