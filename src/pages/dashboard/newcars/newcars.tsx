import { FiUpload } from "react-icons/fi";
import { Container } from "../../../components/container/container";
import { PanelHeader } from "../../../panelheader/panelheader";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../../components/input/input";


const schema = z.object({
  name: z.string().nonempty("The name field is required"),
  model: z.string().nonempty("The model is mandatory"),
  year: z.string().nonempty("The year of the car is mandatory"),
  km: z.string().nonempty("The km/h from car is mandatory"),
  price: z.string().nonempty("The price is mandatory"),
  city: z.string().nonempty("The city is mandatory"),
  whatsapp: z.string().min(1, "The Telephone is mandatory").refine((value) => /^(\d{11,12})$/.test(value), {
    message: "Telephone number is mandatory.",
  }),
  description: z.string().nonempty("The description is mandatory"),
})

type FormData = z.infer<typeof schema>;



export function NewCars() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange"
  })

  function onSubmit(data: FormData){
    console.log(data);
    
  }

    return (
      <>
  
        <Container>
        <PanelHeader />

        <div
        className="w-full bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2"
        >
          <button 
          className="border-2 w-48 rounded-lg flex items-center justify-center cursor-pointer border-black h-32 md:w-48"
          >
            <div className="absolute cursor-pointer">
              <FiUpload size={30} color="#000" />
            </div>

            <div className="cursor-pointer">
              <input 
              type="file" accept="image/*"
              className="opacity-0 cursor-pointer"
              />
            </div>
          </button>
        </div>

        <div
        className="w-full bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2 mt-2"
        >
          <form
          className="w-full"
          onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-3">
              <p className="mb-2 font-medium">Car Name</p>
              <Input 
              type="text"
              register={register}
              name="name"
              error={errors.name?.message}
              placeholder="Ex: Porsche 991 Turbo S"
              />
            </div>


            <div className="mb-3">
              <p className="mb-2 font-medium">Car Model</p>
              <Input 
              type="text"
              register={register}
              name="model"
              error={errors.model?.message}
              placeholder="Ex: 911 Turbo S"
              />
            </div>

            <div className="flex w-full mb-3 flex-row items-center gap-4">

            <div className="w-full">
              <p className="mb-2 font-medium">Year</p>
              <Input 
              type="text"
              register={register}
              name="year"
              error={errors.year?.message}
              placeholder="Ex: 2023/2024"
              />
            </div>

            <div className="w-full">
              <p className="mb-2 font-medium">KM/H</p>
              <Input 
              type="text"
              register={register}
              name="km"
              error={errors.km?.message}
              placeholder="Ex: 0.000KM/H"
              />
            </div>   
            </div>




            <div className="flex w-full mb-3 flex-row items-center gap-4">

            <div className="w-full">
              <p className="mb-2 font-medium">Contact Phone / WhatsApp</p>
              <Input 
              type="text"
              register={register}
              name="whatsapp"
              error={errors.whatsapp?.message}
              placeholder="Ex: 031973197244"
              />
            </div>

            <div className="w-full">
              <p className="mb-2 font-medium">City</p>
              <Input 
              type="text"
              register={register}
              name="city"
              error={errors.city?.message}
              placeholder="Ex: Belo Horizonte"
              />
            </div>   
            </div>

            <div className="mb-3">
              <p className="mb-2 font-medium">Price</p>
              <Input 
              type="text"
              register={register}
              name="price"
              error={errors.price?.message}
              placeholder="Ex: $1.546.000,00"
              />
            </div>  


            <div className="w-full">
              <p className="mb-2 font-medium">Description</p>
              <textarea 
              className="border-2 w-full rounded-md h-24 px-2"
              {...register("description")}
              name="description"
              id="description"
              placeholder="Enter the complete description about the vehicle or car...."
              
              />
              {errors.description && <p className="mb-1 text-blue-300">{ errors.description.message }</p>}
             
            </div>    

            <button
            type="submit"
            className="w-full rounded-md bg-blue-300 text-white font-medium h-10"
            >
              Register
            </button>



          </form>
        </div>


        </Container>
  
  
      </>
    )
  }
  
  