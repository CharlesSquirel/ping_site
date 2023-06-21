import React from "react";
import { Formik, FormikHelpers, FormikProps } from "formik";
import * as Yup from "yup";
import { StyledForm, StyledInput, StyledButton, InputContainer, ErrorMessage } from "./StyledForm";

interface InputProps {
  hasError: boolean
}

interface InitialValuesProps {
  email: string;
}

const initialValues: InitialValuesProps = {
  email: "",
};

const validationSchema = Yup.object({
  email: Yup.string().required("Email is requred").email("Invalid email format"),
});

const Form: React.FC = () => {
  const handleSubmit = (values: InitialValuesProps, formikHelpers: FormikHelpers<InitialValuesProps>) => {
    alert("Your email has been added");
    formikHelpers.resetForm({ values: initialValues });
  };
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ handleSubmit, getFieldProps, touched, errors }: FormikProps<InitialValuesProps>) => {
        return (
          <StyledForm onSubmit={handleSubmit} noValidate>
            <InputContainer>
              <label htmlFor="email">Your email address</label>
              <StyledInput id="email" type="text" placeholder="Your email address..." {...getFieldProps("email")} autoComplete="off" hasError={touched.email && errors.email}/>
              {touched.email && errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </InputContainer>
            <StyledButton type="submit">Notify Me</StyledButton>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export default Form;
