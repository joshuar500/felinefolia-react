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

export const register = async (email, password) => {
  try {
    const response = await request.post('/register', { email, password });
    return await response;
  } catch(error) {
    console.log(error);
  }
}

export const login = async(email, password) => {
  try {
    const response = await request.post('/login', { username: email, password });
    return await response;
  } catch(error) {
    console.log(error);
  }
}

export const getAccount = async() => {
  try {
    const response = await request.get('/account', { withCredentials:true });
    return await response;
  } catch(error) {
    console.log(error);
  }
}

export const getUsers = async() => {
  try {
    const response = await request.get('/users', { withCredentials:true });
    return await response;
  } catch(error) {
    console.log(error);
  }
}