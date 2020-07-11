import React from 'react';

import { Input } from './form-input.styles';

const FormInput = ({ className, ...props }) => <Input className={className} {...props} />;

export default FormInput;
