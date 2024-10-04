
export const Header = () => {
  return (
    <header className="bg-gray-100 shadow-sm p-4 border-b">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-end w-full space-x-4 mr-5">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 text-gray-800 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {/* <MagnifyingGlassIcon className="h-5 w-5 text-gray-800" /> */}
          <img
            src="https://i.pravatar.cc/300"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </header>
  )
}