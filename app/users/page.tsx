'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    async function getData() {
      const res = await fetch('/api/users');
      const data = await res.json()
      setUsers(data.resMsg);
    }
    getData();
  }, [])
  interface User {
    id: number;
    names: string;
  }
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <h3>{users.length > 0 ? "Users List" : "Loading Users"}</h3>
      {users.length < 1 ?
        (<div>
          <p className="bg-white text-black rounded-md px-10 py-4 my-3 animate-pulse w-64">
            ID : 1 <br />
            Names: Loading... <br />
          </p>
          <p className="bg-white text-black rounded-md px-10 py-4 my-3 animate-pulse w-64">
            ID : 2 <br />
            Names: Loading... <br />
          </p>
        </div>)
        :
        (users.map((u: User) => (
          <p className="bg-white text-black rounded-md px-10 py-4 my-3 w-64" key={u.id}>
            ID : {u.id} <br />
            Names: {u.names} <br />
          </p>
        ))
        )
      }
      <Link href="/" className='text-blue-400'>Back to Home</Link>
    </div>
  )
}


export default Users;