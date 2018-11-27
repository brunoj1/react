import React from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less'
  }
  return errors
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
  }) => (
  <div>
    <label>{label}</label>
    <div>
      <input className="form-control" {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
) 

let ContactForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>      
      <Field className="form-control" name="firstName" component={renderField} type="text" label="Primeiro Nome"/> 
      <Field className="form-control" name="lastName" component={renderField} type="text" label = "Sobrenome"/>      
      <Field className="form-control" name="email" component={renderField} type="email" label="Email"/>
      <div>
        <button className="btn btn-success" type="submit" disabled={submitting}>
          Submit
        </button>
        <button className="btn" type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

ContactForm = reduxForm({
  form: 'contact',
  validate
})(ContactForm)

export default ContactForm