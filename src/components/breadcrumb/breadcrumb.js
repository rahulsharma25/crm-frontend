import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'react-bootstrap';

export const BreadcrumbComp = ({page}) => {
  return (
    <Breadcrumb>
        <Breadcrumb.Item href="/dashboard">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

BreadcrumbComp.propTypes = {
    page: PropTypes.string.isRequired
};