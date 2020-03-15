import React from 'react';
import {Form, withFormik, Field, FieldArray} from 'formik';
import Input from '../Input';
import Label from '../Label';
import StyledErrorMessage from '../StyledErrorMessage';

import styles from './SignUpForm.module.scss';
import Button from '../Button';
import {validationSignUpForm, validProps} from "../../validation/validation";


const SignUpForm = (props) => {

    return (
        <Form className={styles.form}>
            <FieldArray
                name="fields"
                render={() => (props.fields.map((value, index) =>
                        (<Field key={`${value.name}-${index}`} name={value.name} value={value.name }>
                                {
                                    fieldProps => {
                                        return (
                                            <Label className={styles.fieldWrapper}>
                                                <Input placeholder={value.placeholder}
                                                       type={value.type}  {...fieldProps} />
                                                <StyledErrorMessage className={styles.errorWrapper}
                                                                    name={fieldProps.field.name}/>
                                            </Label>)
                                    }
                                }
                            </Field>
                        )
                    )
                )
                }
            />
            <Button className={styles.submitButton} disabled={props.isSubmitting} type='submit'>Register</Button>
        </Form>
    );
};

SignUpForm.propTypes= validProps;

export default withFormik({
    handleSubmit: (values, formikBag) => {
        alert(JSON.stringify(values, null, 4));
    },
    mapPropsToValues: () => ({name:'', surname: '', email: '', password: ''}),
    validationSchema: validationSignUpForm
})(SignUpForm);

