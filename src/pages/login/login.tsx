import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Exotic Cars  2.png";
import { Container } from "../../components/container/container";
import { Input } from "../../components/input/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
import { useEffect } from "react";



const schema = z.object({
  email: z.string().email("Enter a valid email...").nonempty("The email field is mandatory"),
  password: z.string().nonempty("The password field is mandatory")
})

type FormData = z.infer<typeof schema>




export function Login() {

    const navigate = useNavigate()
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




    function onSubmit(data: FormData) {
     signInWithEmailAndPassword(auth, data.email, data.password).then((user) => {
      console.log("SIGNED IN SUCCESSFULLY")
      console.log(user)
      navigate("/dashboard", { replace: true })
     })
     .catch(err => {
      console.log("ERROR WHEN LOGGING IN")
      console.log(err);
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
            Access
            </button>

            </form>

            <Link to="/register">
            Don't have an account yet? Register!
            </Link>

          </div>
        </Container>
  
  
      </>
    )
  }
  
  