export const AuthCheck=async (e)=>{
    
  const res=await fetch("http://localhost:3000/api/users/access-token",{
    method:"POST",
    credentials: 'include',
    
  });
   const data=await res.json();
   if(res.status==200){

      return data.message;
   }
   else{
    
    return data.message;
      
   }
   };

