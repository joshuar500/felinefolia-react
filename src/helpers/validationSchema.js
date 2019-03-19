import * as Yup from 'yup';

export const ShippingSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  address1: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  city: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  zip: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
});