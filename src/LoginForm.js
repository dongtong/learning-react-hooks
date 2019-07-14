import React, { useEffect }  from 'react';
import { useForm } from './useForm';

export const LoginForm = () => {
  const [values, handleChange] = useForm({email: "", password: ""});

  // useEffect(() => {
  //   const onMouseMove = e => {
  //     console.log(e);
  //   }

  //   window.addEventListener('mousemove', onMouseMove);
  //   return () => {
  //     window.removeEventListener('mousemove', onMouseMove);
  //   }
  // }, [values.email, values.password]);

  useEffect(() => {
    console.log('mount 1')
  }, []);

  useEffect(() => {
    console.log('mount 2')
  }, []);

  return (
    <div>
      <input name="email" value={values.email} onChange={handleChange} />
      <input name="password" type="password" value={values.password} onChange={handleChange} />
    </div>
  )
}