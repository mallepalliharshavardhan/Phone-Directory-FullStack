import { useState } from "react";

const Contactform = ({ onSubmit,existing }) => {
  const [name, setName] = useState(existing?.name ?? "");
  const [phone, setPhone] = useState(existing?.phone ?? "");
  const [email, setEmail] = useState(existing?.email ?? "");

  const handleAdd = async (e) => {
    e.preventDefault();
    await onSubmit({ name, phone, email });
    if (!existing) {
      setName("");
      setPhone("");
      setEmail("");
    }
  }

  return (
    <section className="rounded-xl bg-white p-6 shadow-lg shadow-slate-900/10 sm:p-8">
      <h2 className="mb-6 text-center text-2xl font-semibold text-slate-800">
        Contact form
      </h2>
      <form className="flex flex-col gap-4" onSubmit={handleAdd}>
        <input
          className="w-full rounded-lg border border-slate-300 px-4 py-1 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          type="text"
          placeholder="Enter name"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          className="w-full rounded-lg border border-slate-300 px-4 py-1 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          type="text"
          placeholder="Enter phone"
          required
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
        <input
          className="w-full rounded-lg border border-slate-300 px-4 py-1 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          type="email"
          placeholder="Enter email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button
          className=" hover:bg-blue-300 rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
          type="submit"
        >
          {existing ? "Update contact" : "Add contact"}
        </button>
      </form>
    </section>
  )
};

export default Contactform;