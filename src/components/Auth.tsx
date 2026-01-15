
import "../global.css";
export default function Authentication(){

    const inputStyle = 'bg-white text-black focus:outline-none focus:ring-2 focus:ring-amber-500 p-2';
    const submitStyle = 'bg-green-400 text-white p-2'
return(
    <>
    <div className='min-h-screen flex items-center justify-center bg-neutral-900 '>
        <div className='bg-blue-700 w-104 h-132 p-6 rounded-xl shadow-xl '>
            <h1 className='text-white text-center text-xl p-6 font-bold'>Welcome back!</h1>
<form action="" className="flex flex-col gap-3">
    <input className={inputStyle} type="text" name="" id="" placeholder="username"/>
    <input className={inputStyle} type="password" name="" id="" placeholder="password"/>
    <div className="flex items-center justify-between text-sm text-white">
        <label className='flex items-center gap-1 cursor-pointer'>
        <input type="checkbox" name="" id="" placeholder="Remember me" className='accent-amber-500'/>
        <span>Remeber me</span>
        </label>
        <a href="" className="hover:underline hover:font-bold ">Forgot password?</a>
    </div>
    <input className={submitStyle} type="submit" value="Login"/>
    <input className={submitStyle} type="button" value="Sign up"/>
</form>
</div>
    </div>
    </>
)
}