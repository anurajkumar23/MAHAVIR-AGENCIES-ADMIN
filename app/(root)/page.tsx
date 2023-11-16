import { UserButton } from "@clerk/nextjs";

 const SetupPage = () => {
  return (
    <div className='p-4'>
        <UserButton afterSignOutUrl="/"/>
        <p className="flex items-center justify-center h-full">Welcome to Home page 🔥</p>
    </div>
  )
}

export default SetupPage;