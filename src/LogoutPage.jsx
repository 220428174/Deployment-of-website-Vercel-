import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function LogoutPage() {
  
  let navigate = useNavigate();

  useEffect(() => {

    getAuth().signOut();
    navigate("/");

  }, []);

  return ;

}

