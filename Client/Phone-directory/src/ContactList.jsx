function ContactList({ contacts ,onDelete,onEdit }) {
  return (
    <section className="  mt-6 rounded-xl bg-white p-6 shadow-lg shadow-slate-900/10 sm:p-8">
      <h2 className="mb-6 text-center text-2xl font-semibold text-slate-800">
        Contact List
      </h2>

      {contacts.length === 0 ? (
        <p className="text-center text-sm text-slate-500">
          No contacts yet. Add one using the form above.
        </p>
      ) : (
        <ul className="flex flex-col gap-3 Justify-around">
          {contacts.map((c) => (
            <li
              className=" flex rounded-lg border border-slate-200 bg-slate-50 p-4"
              key={c._id}
            >
              <p className="break-words font-semibold text-slate-800 m-1">
                {c.name}
              </p>
              <p className="mt-1 break-words text-sm text-slate-600 m-1">
                {c.phone}
              </p>
              <p className="mt-1 break-all text-sm text-slate-600 m-1">
                {c.email}
              </p>
              <button onClick={()=> onEdit(c)} className="hover:bg-yellow-400 bg-yellow-600 p-1 rounded-sm ml-1 ">Edit</button>
              <button onClick={()=> onDelete(c._id)} className="hover:bg-red-400 bg-red-600 p-1 rounded-sm ml-1 ">Delete</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ContactList;