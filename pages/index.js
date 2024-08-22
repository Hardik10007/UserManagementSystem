import { Inter } from "next/font/google";
import Head from "next/head";
import NavBar from "./components/NavBar";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import { getSession } from "next-auth/react";
import Login from "./components/Login";

const inter = Inter({ subsets: ["latin"] });

export default function Home({session}) {
  if(!session) return <Login/>;
  return (
    <div>
      <Head>
        <title>User Management App</title>
      </Head>
      <NavBar/>
      
      <main>
        <AddUser/>
      </main>
    </div>
  );
}

export async function getServerSideProps(context){
  const session = await getSession(context);
  return{
    props: {session},
  };
}
