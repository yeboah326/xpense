import { FormFieldStyles, FormFieldLabelStyles } from "./styles";

export default function FormField(label, type) {
  return (
    <>
      <FormFieldLabelStyles>{label}</FormFieldLabelStyles>
      <FormFieldStyles type={type} />
    </>
  );
}
