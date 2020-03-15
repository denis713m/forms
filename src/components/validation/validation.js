import PropTypes from "prop-types";
import * as Yup from "yup";


export const validProps={
        fields: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            type: PropTypes.oneOf(['text', 'email', 'password'],''),
            placeholder: PropTypes.string
        }))
    }
;

export const validationSignUpForm = Yup.object({
    name: Yup.string().matches(/^[A-Z][a-z]{1,10}$/, 'Name should be in format \'[A-Z][a-z]{1, 10}\'').required(),
    surname: Yup.string().matches(/^[A-Z][a-z]{1,10}$/, 'Surname should be in format \'[A-Z][a-z]{1, 10}\'').required(),
    email: Yup.string().email().required(),
    password: Yup.string().min( 5, 'Must be more than 5 characters').required(),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null],'Must be equal to password')
        .required(),
});

export const validationSignInForm = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().min( 5, 'Must be more than 5 characters').required(),
})