import React, { useState , useEffect } from 'react'
import User from './User'
import EditUser from './EditUser';

const UserList = ({user}) => {
    const USER_API_BASE_URL = "http://localhost:8080/api/v1/users";
    const [users, setusers] = useState(null);
    const [Loading, setLoading] = useState(true);
    const [userId, setuserId] = useState(null)
    const [ResponseUser, setResponseUser] = useState(null)

    useEffect(() => {
        const fetchData = async ()=>{
            setLoading(true)
            try {
                const response = await fetch(USER_API_BASE_URL,{
                    method: "Get",
                    headers: {
                        "Content-type": "application/json",
                    },
                });
                const users = await response.json();
                setusers(users);

            } catch (error) {
                console.log(error)
            }
            setLoading(false);
        };
        fetchData();
    },[user,ResponseUser]);
    
    const deleteUser = (e,id) => {
        e.preventDefault();
        fetch(USER_API_BASE_URL + "/" + id,{
            method: "DELETE",
        }).then((res)=>{
            if(users){
                setusers((prevElement)=>{
                    return prevElement.filter((user)=> user.id !==id);
                });
            }
        })
    }
    const editUSer = (e,id) => {
        e.preventDefault();
        setuserId(id);
    }

   return (
    <>
    <div className="container mx-auto my-8"> 
        <div className="flex shadow border-b">
            <table className= "min-w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">First Name</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6"> Last Name</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">EmailId</th>
                        <th className="text-right font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Action</th>
                    </tr>
                </thead>
                {!Loading && (
                <tbody className="bg-white">
                    {users?.map((user) => (
                        <User user={user} key={user.id} deleteUser={deleteUser} editUSer={editUSer}/>
                ))}
                  
                </tbody>
                )}
            </table>
        </div>
    </div>
    <EditUser userId={userId} setResponseUser={setResponseUser}/>
    </>
  )
}

export default UserList