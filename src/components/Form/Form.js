import { Formik, Form, Field } from 'formik';
import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup.string().required()
})

const initialValues = {
  name: '',
};

export const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label htmlFor="name">
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
           required></Field>
        </label>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};
