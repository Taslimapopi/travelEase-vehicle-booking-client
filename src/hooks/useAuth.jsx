import { use } from "react";
import { AuthContext } from "../provider/context";


const useAuth = () => {
  const authInfo = use(AuthContext);
  return authInfo;
};
export default useAuth;