import { useState } from "react";
import "../styles/globals.css"
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import Form from "./components/Form";
import Result from './components/Result'
import Interview from './components/Interview'
import { Toaster } from "sonner";



export function App() {
  const [page , setpage] =useState<"form" | "interview" | "result" >("form");
  
  return (
  <>
    {page=="form" &&  <Form/>}
    {page=="interview" &&  <Interview/>}
    {page=="result" &&  <Result/>}
    <Toaster/>
  </>
   
  );
}

export default App;
