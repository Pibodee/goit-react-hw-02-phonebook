import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
      excludeEmptyString: true,
    })
    .required('Required'),
});

const initialValues = {
  name: '',
};

export const ContactForm = ({onFormSubmit}) => {
  const handleSubmit = (values, { resetForm }) => {
    onFormSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <label htmlFor="name">
          Name
          <Field type="text" name="name"></Field>
          <ErrorMessage name="name" />
        </label>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};
