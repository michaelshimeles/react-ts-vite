import { ArrowTrendingUpIcon, ShoppingCartIcon, UserGroupIcon } from "@heroicons/react/24/outline"

export const Home = () => {
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
      <h2 className="text-2xl font-semibold mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Widget 1 */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Total Revenue</h3>
            <ArrowTrendingUpIcon className="h-6 w-6 text-green-500" />
          </div>
          <p className="text-3xl font-bold mt-2">$24,680</p>
          <p className="text-sm text-gray-500 mt-2">+12% from last month</p>
        </div>

        {/* Widget 2 */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">New Orders</h3>
            <ShoppingCartIcon className="h-6 w-6 text-indigo-500" />
          </div>
          <p className="text-3xl font-bold mt-2">356</p>
          <p className="text-sm text-gray-500 mt-2">-3% from last week</p>
        </div>

        {/* Widget 3 */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Active Users</h3>
            <UserGroupIcon className="h-6 w-6 text-blue-500" />
          </div>
          <p className="text-3xl font-bold mt-2">1,245</p>
          <p className="text-sm text-gray-500 mt-2">+8% from yesterday</p>
        </div>
      </div>

      {/* Additional content */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Recent Transactions</h3>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { id: 1, customer: 'John Doe', amount: '$120.00', status: 'Completed' },
                { id: 2, customer: 'Jane Smith', amount: '$75.50', status: 'Pending' },
                { id: 3, customer: 'Bob Johnson', amount: '$200.00', status: 'Completed' },
              ].map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    #{transaction.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{transaction.customer}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${transaction.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                        }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}