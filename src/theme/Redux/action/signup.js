const user = JSON.parse(localStorage.getItem('obj'));
const initialState = user;

console.log(user)
//eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "REGISTER_SUCCESS":
      return {
        ...state,
        user: payload,
        message:"done"
      };
    case "LOGIN_SUCCESS" :
      return{
        isLogin:true,
        payload:"login successful",
      }     
    case "LOGIN_FAIL":
      return{
        islogin:false,
        payload:"login fail"
      }
    default:
      return state;
  }
}
