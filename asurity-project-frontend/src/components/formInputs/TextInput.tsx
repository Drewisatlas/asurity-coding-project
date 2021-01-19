import {useField, FieldHookConfig } from 'formik';

const TextInput = (props: FieldHookConfig<string>) => {
   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
   // which we can spread on <input>. We can use field meta to show an error
   // message if the field is invalid and it has been touched (i.e. visited)
   const [field, meta] = useField(props);
   return (
     <>
       <input {...field} type= {props.type} className={props.className} placeholder={props.placeholder} />
       {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
     </>
   );
 };

 export default TextInput;