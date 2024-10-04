import { Header } from "./header";
import { Sidebar } from "./sidebar";

export const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-100 min-w-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />
        {children}
      </div>
    </div>
  )
}