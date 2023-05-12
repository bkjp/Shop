import React from "react";
import styled from "styled-components";
import { useField, FieldProps, ErrorMessage, FieldHookConfig } from "formik";

///////////////////////////////////////////////////////////////////

const SContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    height: 5vh;
    padding: 5px 10px;
    outline: none;
    border: 1px solid #f8a6a6;
    border-radius: 5px;
  }
`;

//////////////////////////////////////////////////////////////////

// intersecting
interface ICustomFieldProps {
  label: string;
}

///////////////////////////////////////////////////////////////////

// FieldHookConfig accepts value type as an argument,
// it is 'string' for input elements

const CShippingInput: React.FC<
  FieldHookConfig<string> & Partial<ICustomFieldProps>
> = ({ label, ...props }) => {
  // field will contains ( name, onBlur, onChange, value) while
  // meta contains (error, initialError, initialTouched, initialValue, touched and value)
  const [field, meta, helpers] = useField(props);

  return (
    <SContainer>
      <div>{label} </div>
      <input type={props.type} {...field} placeholder={props.placeholder} />
      <p>{meta.touched && meta.error && <ErrorMessage name={field.name} />}</p>
    </SContainer>
  );
};

export default CShippingInput;
