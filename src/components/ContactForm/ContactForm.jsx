import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .required("Required")
    .max(50, "Too long")
    .matches(/^[A-Za-z\s]+$/, "Only letters are allowed"),
  number: Yup.string()
    .min(9, "Too short!")
    .required("Required")
    .max(9, "Too long"),
});

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    const newContact = { id: nanoid(4), ...values };
    onAdd(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.filed_wrap}>
          <label>Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </div>
        <div className={css.filed_wrap}>
          <label>Number</label>
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="span" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
