import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextInput from '../input/TextInput';
import SelectInput from '../input/SelectInput';

type AddCardFormProps = {
  onSubmit: (values: { title: string; category: string; dueDate: string; column: string }) => void;
};

const AddCardForm = ({ onSubmit }: AddCardFormProps) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      title: '',
      category: '',
      dueDate: '',
      column: 'To-Do'
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('Title is required'),
      category: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Category is required'),
      dueDate: Yup.date(),
      column: Yup.string().required('Status is required')
    }),
    onSubmit: values => onSubmit(values),
  });
  return (
    <form className='w-[400px] flex flex-col gap-4' onSubmit={formik.handleSubmit}>
      <TextInput
        id='title'
        label='Title'
        name='title'
        type='text'
        placeholder='Enter a title'
        onChange={formik.handleChange}
        value={formik.values.title}
        isError={(formik.touched.title && formik.errors.title) ? true : false}
        errorMessage={formik.errors.title}
      />
      <SelectInput
        id='category'
        label='Category'
        options={['Work', 'Personal', 'School']}
        onChange={formik.handleChange}
        value={formik.values.category}
        placeholder='Enter a category'
        isError={(formik.touched.category && formik.errors.category) ? true : false}
        errorMessage={formik.errors.category}
      />
      <TextInput
        id='dueDate'
        label='Due Date'
        name='dueDate'
        type='date'
        placeholder='Enter a due date'
        onChange={formik.handleChange}
        value={formik.values.dueDate}
        isError={(formik.touched.dueDate && formik.errors.dueDate) ? true : false}
        errorMessage={formik.errors.dueDate}
      />
      <SelectInput
        id='column'
        label='Status'
        options={['To-Do', 'In Progress', 'Done']}
        onChange={formik.handleChange}
        value={formik.values.column}
        placeholder='Enter a status'
        isError={(formik.touched.column && formik.errors.column) ? true : false}
        errorMessage={formik.errors.column}
      />
      <button className='h-10 bg-slate-600 text-white rounded-md mt-3' type="submit">Submit</button>
    </form>
  );
};

export default AddCardForm;