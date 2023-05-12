import React from "react";
import styled from "styled-components";
import { useField, FieldProps, ErrorMessage, FieldHookConfig } from "formik";

///////////////////////////////////////////////////////////////////

const SContainer = styled.div`
  input {
    width: 100%;
    padding: 5px 10px;
    outline: none;
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

const CCouponInput: React.FC<
  FieldHookConfig<string> & Partial<ICustomFieldProps>
> = ({ label, ...props }) => {
  // field will contains ( name, onBlur, onChange, value) while
  // meta contains (error, initialError, initialTouched, initialValue, touched and value)
  const [field, meta, helpers] = useField(props);

  return (
    <SContainer>
      <div>{label} </div>
      <input type={props.type} {...field} placeholder={props.placeholder} />
    </SContainer>
  );
};

export default CCouponInput;
