import { request } from './request';

export const subscribe = async (payload) => {
  try {
    const response = await request.post('/subscribe', { ...payload });
    return await response;
  } catch (error) {
    console.error(error);
  }
}