import * as yup from "yup";

const clinicRegisterSchema = yup.object({
  firstName: yup
    .string()
    .required("First name is required")
    .min(1, "First name must be at least 1 character long")
    .max(50, "First name must be less than 50 characters long"),

  lastName: yup
    .string()
    .required("Last name is required")
    .min(1, "Last name must be at least 1 character long")
    .max(50, "Last name must be less than 50 characters long"),

  email: yup
    .string()
    .required("Email is required")
    .email("Please provide a valid email address"),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),

  passwordConfirmation: yup
    .string()
    .required("Password confirmation is required")
    .oneOf([yup.ref("password")], "Passwords do not match"),

  role: yup
    .string()
    .oneOf(["doctor", "patient", "assistant", "admin", "user"], "Invalid role")
    .default("admin"),

  subdomain: yup
    .string()
    .test(
      "is-valid-domain",
      "Please provide a valid subdomain",
      (value) =>
        !value ||
        /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(
          value
        )
    ),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(
      /^01[0125][0-9]{8}$/,
      "Please provide a valid Egyptian phone number"
    ),

  permission: yup.string().required("permission is required"),
});

export type IUser = yup.InferType<typeof clinicRegisterSchema>;

export { clinicRegisterSchema };
