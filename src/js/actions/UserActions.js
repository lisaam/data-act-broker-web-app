export const SetUserData = (responseObject) => {
  return {
    type: 'SET_USER_DATA',
    userId:    responseObject.body.user_id,
    userEmail : responseObject.body.email,
    userName : responseObject.body.name,
    userTitle : responseObject.body.title,
    userAgency : responseObject.body.agency,
    userPermssions : responseObject.body.permissions
  }
}

export const LogOutUser = () => {
  return {
    type: 'LOG_OUT'
  }
}
