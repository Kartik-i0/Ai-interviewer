
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { toast } from "sonner"
import axios from 'axios'
import { BACKEND_URL } from "@/lib/config";

export function Form() {
    const [github , setGithub] = useState("");


    const onSubmit = async () =>{
            if(!github ){
                //Todo :: Add more validation here 
                toast("Please Provide valid github url" ,{position:"bottom-left"})
                return
            }

            await axios.post(`${BACKEND_URL}/api/v1/pre-interview`,{
                github
            })
            
    }

  return (
      <div className="w-screen h-screen flex justify-center items-center" >
        <div>
          <h1 className="p-1 scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
            Ai Interview kickstart
          </h1>   
          <div className="p-2">
            <Input placeholder="Enter Github" onChange={e=>setGithub(e.target.value)} />
          </div>
          <div className="flex justify-center p-2">
            <Button onClick={onSubmit}>Start interview</Button> 
          </div>
        </div>
      </div>
  );
}

export default Form;
