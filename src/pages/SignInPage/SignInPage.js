import React          from 'react';
import { withRouter } from 'react-router';
import SignInForm     from '../../components/forms/SignInForm';
import fields from './SignInFields'
import {TitleComponent} from "../../components/TitleComponent";

const SignInPage = props => {
  return (
    <>
        <TitleComponent title='Sign in'/>
      <SignInForm fields={fields}/>
    </>
  );
};

export default withRouter( SignInPage );