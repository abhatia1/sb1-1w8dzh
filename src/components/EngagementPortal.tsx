import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon, PaperClipIcon, ChatBubbleLeftIcon, CalendarIcon, CurrencyDollarIcon, UserGroupIcon, ClockIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

// Mock data to simulate form submission
const mockEngagement = {
  id: 'ENG-001',
  title: 'Digital Transformation Initiative',
  vendor: 'Innovative Systems Inc',
  startDate: '2024-01-10',
  endDate: '2024-12-31',
  budget: '250000',
  description: 'A comprehensive digital transformation project aimed at modernizing legacy systems and improving operational efficiency.',
  purpose: 'To modernize existing systems and improve overall business efficiency through digital solutions.',
  objectives: [
    'Implement cloud-based infrastructure',
    'Develop automated workflow systems',
    'Enhance data security measures',
    'Train staff on new systems'
  ],
  deliverables: [
    'Cloud migration plan and execution',
    'Automated workflow system',
    'Security audit report',
    'Training documentation and workshops'
  ],
  scope: 'Full system modernization including infrastructure, applications, and training.',
  stakeholders: [
    { name: 'John Smith', role: 'Project Manager' },
    { name: 'Sarah Johnson', role: 'Technical Lead' },
    { name: 'Mike Brown', role: 'Business Analyst' }
  ],
  timeframe: {
    duration: '12 months',
    progress: '2 months',
    remaining: '10 months'
  }
};

export function EngagementPortal() {
  const { id } = useParams();
  const [message, setMessage] = useState('');

  // In a real app, fetch engagement data based on ID
  const engagement = mockEngagement;

  const messages = [
    {
      id: 1,
      author: 'Jay Logan',
      content: 'Hey Team! Here\'s the progress on the latest task. Please let me know if you need any clarification.',
      timestamp: '10 mins ago'
    },
    {
      id: 2,
      author: 'Lisa Hoffman',
      content: 'Hey Team! Here\'s the progress on the latest task. Please let me know if you need any clarification.',
      timestamp: '15 mins ago'
    }
  ];

  const githubUpdates = [
    { id: 1, title: 'Add User Authentication Module', project: 'Project 2', status: 'Completed', time: '10 Days Ago' },
    { id: 2, title: 'Add User Authentication Module', project: 'Project 2', status: 'Completed', time: '10 Days Ago' },
    { id: 3, title: 'Add User Authentication Module', project: 'Project 2', status: 'Completed', time: '10 Days Ago' },
    { id: 4, title: 'Add User Authentication Module', project: 'Project 3', status: 'Completed', time: '10 Days Ago' }
  ];

  const jiraTickets = [
    { id: 1, title: 'Fix Responsiveness Issues', project: 'Project 2', status: 'Completed', time: 'Last Activity: 10 Days Ago' },
    { id: 2, title: 'Fix Responsiveness Issues', project: 'Project 2', status: 'Completed', time: 'Last Activity: 10 Days Ago' },
    { id: 3, title: 'Fix Responsiveness Issues', project: 'Project 2', status: 'Completed', time: 'Last Activity: 10 Days Ago' },
    { id: 4, title: 'Fix Responsiveness Issues', project: 'Project 2', status: 'Completed', time: 'Last Activity: 10 Days Ago' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            Back to Dashboard
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {engagement.title}
                </h1>
                <div className="mt-1 text-sm text-gray-500">
                  <span className="mr-4">Vendor: {engagement.vendor}</span>
                  <span>ID: {engagement.id}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center text-gray-600 mb-2">
              <DocumentTextIcon className="h-5 w-5 mr-2" />
              <h2 className="text-lg font-medium">Description</h2>
            </div>
            <p className="text-gray-600">{engagement.description}</p>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Purpose:</h3>
              <p className="text-gray-600">{engagement.purpose}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Scope:</h3>
              <p className="text-gray-600">{engagement.scope}</p>
            </div>
          </div>

          {/* Overview Section */}
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-lg font-medium mb-4">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Timeline */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center text-gray-600 mb-2">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  <h3 className="font-medium">Timeline</h3>
                </div>
                <div className="space-y-1">
                  <p className="text-sm">Start: {engagement.startDate}</p>
                  <p className="text-sm">End: {engagement.endDate}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '33%' }}></div>
                  </div>
                </div>
              </div>

              {/* Budget */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center text-gray-600 mb-2">
                  <CurrencyDollarIcon className="h-5 w-5 mr-2" />
                  <h3 className="font-medium">Budget</h3>
                </div>
                <p className="text-2xl font-bold text-gray-900">${parseInt(engagement.budget).toLocaleString()}</p>
                <p className="text-sm text-gray-500">Total Budget</p>
              </div>

              {/* Timeframe */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center text-gray-600 mb-2">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  <h3 className="font-medium">Timeframe</h3>
                </div>
                <div className="space-y-1">
                  <p className="text-sm">Duration: {engagement.timeframe.duration}</p>
                  <p className="text-sm">Progress: {engagement.timeframe.progress}</p>
                  <p className="text-sm">Remaining: {engagement.timeframe.remaining}</p>
                </div>
              </div>

              {/* Stakeholders */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center text-gray-600 mb-2">
                  <UserGroupIcon className="h-5 w-5 mr-2" />
                  <h3 className="font-medium">Key Stakeholders</h3>
                </div>
                <div className="space-y-2">
                  {engagement.stakeholders.map((stakeholder, index) => (
                    <div key={index} className="text-sm">
                      <p className="font-medium">{stakeholder.name}</p>
                      <p className="text-gray-500 text-xs">{stakeholder.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Rest of the content */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Objectives */}
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-4 py-3 border-b border-gray-200">
                  <h2 className="text-lg font-medium">Objectives</h2>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    {engagement.objectives.map((objective, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{objective}</span>
                        <button className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200">
                          Mark As Completed
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Deliverables */}
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-4 py-3 border-b border-gray-200">
                  <h2 className="text-lg font-medium">Deliverables</h2>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    {engagement.deliverables.map((deliverable, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{deliverable}</span>
                        <button className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200">
                          Mark As Completed
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* File Sharing */}
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-4 py-3 border-b border-gray-200">
                  <h2 className="text-lg font-medium">File Sharing</h2>
                </div>
                <div className="p-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <div className="mx-auto flex justify-center">
                      <PaperClipIcon className="h-12 w-12 text-gray-400" />
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      Click to upload or drag and drop
                    </p>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span>Document.pdf</span>
                      <button className="text-gray-400 hover:text-gray-500">
                        <ArrowLeftIcon className="h-5 w-5 rotate-90" />
                      </button>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span>Document.pdf</span>
                      <button className="text-gray-400 hover:text-gray-500">
                        <ArrowLeftIcon className="h-5 w-5 rotate-90" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Github Updates */}
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-4 py-3 border-b border-gray-200">
                  <h2 className="text-lg font-medium">Github Updates</h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {githubUpdates.map((update) => (
                    <div key={update.id} className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-sm font-medium">{update.title}</h3>
                          <p className="text-xs text-gray-500">{update.project}</p>
                        </div>
                        <span className="text-xs text-gray-500">{update.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Analysis Board */}
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-4 py-3 border-b border-gray-200">
                  <h2 className="text-lg font-medium">Analysis Board</h2>
                </div>
                <div className="p-4">
                  {/* Placeholder for chart - in a real app, use a charting library */}
                  <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    Chart would go here
                  </div>
                </div>
              </div>

              {/* Jira Tickets */}
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-4 py-3 border-b border-gray-200">
                  <h2 className="text-lg font-medium">Jira Tickets</h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {jiraTickets.map((ticket) => (
                    <div key={ticket.id} className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-sm font-medium">{ticket.title}</h3>
                          <p className="text-xs text-gray-500">{ticket.project}</p>
                        </div>
                        <span className="text-xs text-gray-500">{ticket.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message Board */}
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-4 py-3 border-b border-gray-200">
                  <h2 className="text-lg font-medium">Message Board</h2>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    {messages.map((msg) => (
                      <div key={msg.id} className="flex space-x-3">
                        <div className="flex-1 bg-gray-50 rounded-lg p-3">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium">{msg.author}</span>
                            <span className="text-xs text-gray-500">{msg.timestamp}</span>
                          </div>
                          <p className="text-sm text-gray-600">{msg.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex">
                    <input
                      type="text"
                      placeholder="Write your message..."
                      className="flex-1 rounded-l-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700">
                      <ChatBubbleLeftIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}