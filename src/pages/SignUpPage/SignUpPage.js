import React          from 'react';
import { withRouter } from 'react-router';
import SignUpForm     from '../../components/forms/SignUpForm';
import fields from './SignUpFields'
import {TitleComponent} from "../../components/TitleComponent";

const SignUpPage = props => {

    return (
        <>
            <TitleComponent title='Sign Up'/>
            <SignUpForm fields={fields}/>
        </>
    );
};

export default withRouter( SignUpPage );