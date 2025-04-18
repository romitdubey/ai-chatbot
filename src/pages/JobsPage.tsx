import React from 'react';
import { jobListings } from '../data/mockData';
import JobCard from '../components/JobCard';
import { Search, Briefcase } from 'lucide-react';

const JobsPage: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-purple-700 to-purple-600 text-white">
        <div className="flex items-center mb-2">
          <Briefcase className="mr-2" size={20} />
          <h2 className="text-xl font-bold">Job Opportunities</h2>
        </div>
        <p className="text-purple-100 text-sm">Find your perfect career match with these opportunities</p>
      </div>
      
      <div className="p-6">
        {/* Search and filter */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for jobs, skills, or companies..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          
          <div className="flex flex-wrap gap-2 mt-3">
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-1.5 pr-8 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none">
                <option>All Job Types</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Remote</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
            
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-1.5 pr-8 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none">
                <option>All Locations</option>
                <option>Remote</option>
                <option>Bangalore</option>
                <option>Mumbai</option>
                <option>Delhi NCR</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
            
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-1.5 pr-8 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none">
                <option>Experience Level</option>
                <option>Entry Level</option>
                <option>Mid Level</option>
                <option>Senior Level</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
            
            <button className="px-3 py-1.5 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors">
              Filter
            </button>
          </div>
        </div>
        
        {/* Job listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {jobListings.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">1-{jobListings.length}</span> of <span className="font-medium">42</span> jobs
          </div>
          
          <div className="flex space-x-1">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed">
              Previous
            </button>
            <button className="px-3 py-1 bg-purple-100 text-purple-700 border border-purple-300 rounded-md text-sm font-medium">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
              3
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;