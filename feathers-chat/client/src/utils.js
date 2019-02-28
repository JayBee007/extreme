export const getAuthToken = () => {
  try {
    const token = window.localStorage.getItem('feathers-jwt');
    return token;
  } catch (error) {
    return null;
  }
}

export const removeAuthToken = () => {
  window.localStorage.clear();
}

export const isAuthenticated = () => (toState, fromState)=> {

  return new Promise((resolve,reject) => {
    const token = getAuthToken();
    
    if(token) {
      reject({
        redirect: { name: 'chat'}
      })
    }else {
      resolve();
    }

  })
};