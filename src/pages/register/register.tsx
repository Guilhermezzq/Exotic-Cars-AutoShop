

import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Exotic Cars  2.png";
import { Container } from "../../components/container/container";
import { Input } from "../../components/input/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";




const schema = z.object({
  name: z.string().nonempty("The name field is mandatory"),
  email: z.string().email("Enter a valid email...").nonempty("The email field is mandatory"),
  password: z.string().min(6, "Password must be at least 6 characters long").nonempty("The password field is mandatory")
})

type FormData = z.infer<typeof schema>




export function Register() {

    const { handleInfoUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onChange"
    })

    useEffect(() => {
      async function handleLogout() {
        await signOut(auth)
      }

      handleLogout();
    }, [])





    async function onSubmit(data: FormData) {
      createUserWithEmailAndPassword(auth, data.email, data.password).then(async(user) => {
        await updateProfile(user.user, {
          displayName: data.name
        })

        handleInfoUser({
          name: data.name,
          email: data.email,
          uid: user.user.uid
        })

        console.log("REGISTERED SUCCESSFULLY")
        navigate("/dashboard", { replace: true })
      })
      .catch((error) => {
        console.log("ERROR WHEN REGISTERING THIS USER");
        console.log(error);
      })
    }

    return (
      <>
  
        <Container>
          <div 
          className="w-full min-h-screen flex justify-center items-center flex-col gap-4"
          >
            <Link 
            to="/"
            className="mb-6 max-w-sm w-full"
            
            >
              <img 
              src={Logo}
              alt="Logo"
              className="w-full"
              />
            </Link>

            <form
            className="bg-white max-w-xl w-full rounded-lg p-4"
            onSubmit={handleSubmit(onSubmit)}
            >
            <div className="mb-3">
           <Input
            type="text"
            placeholder="Type your full name...."
            name="name"
            error={errors.name?.message}
            register={register}
            
            />
           </div>  



           <div className="mb-3">
           <Input
            type="email"
            placeholder="Type your e-mail...."
            name="email"
            error={errors.email?.message}
            register={register}
            
            />
           </div>

            <div className="mb-3">
            <Input
            type="password"
            placeholder="Type your password..."
            name="password"
            error={errors.password?.message}
            register={register}
            
            />
            </div>  

            <button 
            type="submit"
            className="bg-blue-300 w-full rounded-md text-white h-10 font-medium"
            >
            Register
            </button>

            </form>

            <Link to="/login">
            Already have an account? Log in!
            </Link>

          </div>
        </Container>
  
  
      </>
    )
  }
  
  