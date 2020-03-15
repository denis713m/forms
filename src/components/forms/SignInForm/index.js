import React from 'react';
import {Form, withFormik, Field, FieldArray} from 'formik';
import Input from '../Input';
import Label from '../Label';
import StyledErrorMessage from '../StyledErrorMessage';

import styles from './SignInForm.module.scss';
import Button from '../Button';
import {validationSignInForm, validProps} from "../../validation/validation";

const SignInForm = (props) => {

    return (
        <Form className={styles.form}>
            <FieldArray
                name="fields"
                render={() => (props.fields.map((value, index) =>
                        (<Field key={`${value.name}-${index}`} name={value.name} value={value.name}>
                                {
                                    fieldProps => {
                                        return (
                                            <Label className={styles.fieldWrapper}>
                                                <Input placeholder={value.placeholder}
                                                       type={value.type} {...fieldProps} value={value.name}/>
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
            <Button className={styles.submitButton} disabled={props.isSubmitting} type='submit'>login</Button>
        </Form>
    );
};

SignInForm.propTypes = validProps;

export default withFormik({
    handleSubmit: (values, formikBag) => {
        alert(JSON.stringify(values, null, 4));
    },
    mapPropsToValues: () => ({email: '', password: ''}),
    validationSchema: validationSignInForm
})(SignInForm);

