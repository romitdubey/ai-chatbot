import React from 'react';
import { JobListing } from '../types';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { formatDate } from '../utils/helpers';

interface JobCardProps {
  job: JobListing;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg text-gray-800">{job.title}</h3>
        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
          {job.type}
        </span>
      </div>
      
      <p className="font-medium text-gray-700 mb-2">{job.company}</p>
      
      <div className="flex items-center text-gray-500 text-sm mb-2">
        <MapPin size={14} className="mr-1" />
        <span>{job.location}</span>
      </div>
      
      <div className="flex items-center text-gray-500 text-sm mb-3">
        <Calendar size={14} className="mr-1" />
        <span>Posted on {formatDate(job.postedDate)}</span>
      </div>
      
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{job.description}</p>
      
      <div className="flex flex-wrap gap-1 mb-3">
        {job.skills.slice(0, 3).map((skill, index) => (
          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
            {skill}
          </span>
        ))}
        {job.skills.length > 3 && (
          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
            +{job.skills.length - 3} more
          </span>
        )}
      </div>
      
      <a 
        href={job.url} 
        className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-800"
      >
        <Briefcase size={14} className="mr-1" />
        View Job Details
      </a>
    </div>
  );
};

export default JobCard;