"use client";
export default function Home() {
  return (
    <main className="@container m-4">
      <div className="login-container bg-secondary m-auto py-10 rounded-md flex justify-center items-center text-white flex-col gap-4">
        <h2>Login</h2>
        <input className="bg-sky-50 p-2 placeholder:text-gray-500 text-black rounded-md" type="text" name="" id="" placeholder="username"/>
        <input className="bg-sky-50 p-2 placeholder:text-gray-500 text-black rounded-md" type="password" name="" id="" placeholder="password"/>
        <button className="bg-light-text-primary px-6 py-2 rounded-md hover:bg-light-text-secondary" type="button">Login</button>
      </div>
    </main>
  );
}
