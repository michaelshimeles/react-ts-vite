import { Switch } from '@headlessui/react';
import React, { useState } from 'react';

const SettingsSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-lg font-semibold mb-4 text-gray-800">{title}</h2>
    {children}
  </div>
)

const ToggleSetting = ({ label }: { label: string }) => {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-gray-600">{label}</span>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-blue-600' : 'bg-gray-200'
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white`}
      >
        <span
          className={`${enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
        />
      </Switch>
    </div>
  )
}

export default function Settings() {
  return (
    <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Settings</h1>

      <SettingsSection title="Notifications">
        <div className="bg-white rounded-lg shadow p-6 space-y-4">
          <ToggleSetting label="Email notifications" />
          <ToggleSetting label="Push notifications" />
          <ToggleSetting label="Weekly digest" />
        </div>
      </SettingsSection>

      <SettingsSection title="Privacy">
        <div className="bg-white rounded-lg shadow p-6 space-y-4">
          <ToggleSetting label="Make profile public" />
          <ToggleSetting label="Show online status" />
        </div>
      </SettingsSection>

      <SettingsSection title="Security">
        <div className="bg-white rounded-lg shadow p-6 space-y-4">
          <ToggleSetting label="Two-factor authentication" />
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-600">Change password</span>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Update
            </button>
          </div>
        </div>
      </SettingsSection>

      <SettingsSection title="Account">
        <div className="bg-white rounded-lg shadow p-6 space-y-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://i.pravatar.cc/300"
              alt="Profile"
              className="w-16 h-16 rounded-full"
            />
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
              Change Avatar
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Save Changes
          </button>
        </div>
      </SettingsSection>

      <SettingsSection title="Preferences">
        <div className="bg-white rounded-lg shadow p-6 space-y-4">
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-600">Language</span>
            <select className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>
          <ToggleSetting label="Dark mode" />
          <ToggleSetting label="Compact view" />
        </div>
      </SettingsSection>
    </div>
  )
}