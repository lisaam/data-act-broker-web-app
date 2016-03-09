export const InitialUserSession ={
  isLogin: false,
  uid: null,
  email: null,
  name: null,
  title: null,
  agency: null,
  agency: null,
  permssions : []
};



export const UserSession = (state, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        isLogin: true,
        uid: action.userId,
        email: action.userEmail,
        name: action.userName,
        title: action.userTitle,
        agency: action.userAgency,
        permssions : action.permssions
      };
    case 'LOG_OUT':
      return {
        isLogin: false,
        uid: null,
        email: null,
        name: null,
        title: null,
        agency: null,
        agency: null,
        permssions : []
      };
    default:
      return state;
  }
}
