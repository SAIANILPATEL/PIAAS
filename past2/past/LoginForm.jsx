export default function Loginform()
{
    return(
        <div class=" grid justify-center items-center auto-rows-[200px]">
          <div class="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h1 class="text-2xl font-bold mb-6 text-zinc-950 text-center">Login</h1>
          <form>
            <div className="mb-4"   >
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Enter your email"></input>
            </div>
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Enter your password"></input>
            </div>
           
            <div className=" ">
                <button className=" m-5 bg-blue-800 hover:bg-blue-900 text-white font-sans py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button">Login</button>
                </div>
          </form>
        </div>
        </div>
    );
}