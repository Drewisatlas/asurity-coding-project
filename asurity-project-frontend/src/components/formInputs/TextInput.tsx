import {useField, FieldHookConfig } from 'formik';
import '../../styling/TextInput.css';

const TextInput = (props: FieldHookConfig<string>) => {
   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
   // which we can spread on <input>. We can use field meta to show an error
   // message if the field is invalid and it has been touched (i.e. visited)
   const [field, meta] = useField(props);
   return (
     <>
      <div className ="Input-Container">
        {meta.touched && meta.error ? (<div className="Error-Message">{meta.error}</div>) : null}
       <input {...field} type= {props.type} className="Text-Input" placeholder={props.placeholder} />
       </div>
     </>
   );
 };

 export default TextInput;