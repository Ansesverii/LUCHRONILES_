import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const FacultyContribution = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 pb-6 border-b border-gray-200">
        <h1 className="font-serif text-4xl font-bold mb-2">Faculty Contributions</h1>
        <p className="text-gray-600">
          A platform for faculty members to share their expertise, research insights, and academic perspectives with the university community.
        </p>
      </header>

      <div className="bg-white shadow-xl border border-gray-200 rounded-xl p-8">
        <div className="text-center py-12">
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We are currently preparing to publish faculty contributions. This space will feature insightful articles, 
            research highlights, and expert commentary from our distinguished faculty members.
          </p>
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-700 font-medium">Interested in contributing?</p>
            <Button asChild className="bg-luChronicles-black hover:bg-luChronicles-black/90">
              <a href="mailto:Theluchronicles@gmail.com" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-xl border border-gray-200 rounded-xl p-8 mt-8">
        <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Contribution Guidelines</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">Article Types</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Research Highlights</li>
              <li>Expert Commentary</li>
              <li>Policy Analysis</li>
              <li>Academic Perspectives</li>
              <li>Field Studies</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Submission Process</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Email your article proposal</li>
              <li>Include your credentials and expertise</li>
              <li>Attach relevant research materials</li>
              <li>Specify target audience</li>
              <li>Mention preferred publication timeline</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyContribution; 