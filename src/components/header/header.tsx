import { Link } from "react-router-dom";

import Logo from "../../assets/Exotic Cars  2.png";

import { FiLogIn, FiUserCheck } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";


export function Header() {
  const { signed, loadingAuth  } = useContext(AuthContext);


    return (
      <>
  
        <div 
        className="w-full flex items-center justify-center bg-blue-300 h-20 drop-shadow mb-4 "
        >
        <header 
        className="flex w-full max-w-7xl items-center justify-between px-4 mx-auto"
        >
          <Link to="/">
          <img 
          src={Logo}
          alt="Logo"
          className="w-44 h-40"
          
          

          />
          </Link>  

          {/* {!loadingAuth && signed}: Esta parte é uma expressão condicional. Se loadingAuth for falso e signed for verdadeiro, o bloco de código dentro dos parênteses será renderizado. */}

          {!loadingAuth && signed && (
            <Link to="/dashboard" >
            <div
            className="border-2 rounded-full p-2 border-black"
            >
            <FiUserCheck size={20} color="#000" />
           
            </div>
            </Link> 
          )} 


          {/* Se a condição não for verdadeira, ou seja, se loadingAuth for verdadeiro ou se signed for verdadeiro, o bloco de código não será renderizado. */}
          {!loadingAuth && !signed && (
            <Link to="/dashboard" >
            <div 
             className="border-2 rounded-full p-2 border-black"
            >
              <FiLogIn size={20} color="#000" />
            </div>
            </Link> 
          )}      
       </header>
        </div>
  
  
      </>
    )
  }
  
  