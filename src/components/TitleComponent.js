import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from "prop-types";

export const TitleComponent = (props) => {
    return (
        <Helmet>
            <title>{props.title}</title>
        </Helmet>
    );
};

TitleComponent.validProps={
    title : PropTypes.string
};

TitleComponent.defaultProps = {
    title: 'Forms'
};

