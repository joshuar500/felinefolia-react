import { request } from './request';

export const getContact = async () => {
  try {
    const response = await request.get('/contact');
    return await response;
  } catch (error) {
    console.error(error);
  }
}

export const preRegister = async (email, optional) => {
  try {
    const response = await request.post('/preregister', { email, optional });
    return await response;
  } catch(error) {
    console.log(error);
  }
}