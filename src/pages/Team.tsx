import React, { useState } from 'react';
import { authors } from '@/data';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Team = () => {
  const [currentView, setCurrentView] = useState<'editor' | 'members' | 'other-members' | 'anonymous'>('editor');
  
  const founder = authors.find(author => author.isFounder);
  const teamMembers = authors
    .filter(author => 
      !author.isFounder && 
      !author.isFaculty && 
      author.id !== "11" && // Mani Soni's ID
      author.id !== "12" &&    // Atharv Manshar's ID
      author.id !== "14" && // Exclude Trishla Chaudhary from 'Other Members'
      author.id !== "15" && // Exclude Anonymous (Jack Sparrow) from 'Other Members'
      author.id !== "16" && // Exclude Anonymous (gender studies) from 'Other Members'
      author.username !== "trishla-chaudhary" && // Exclude Trishla from OUR HEADS
      author.username !== "trishla" // Exclude any other Trishla profiles
    )
    .sort((a, b) => (b.articlesCount || 0) - (a.articlesCount || 0)); // Sort by article count

  // Function to get the appropriate image for Shumaila Khan
  const getShumailaImage = (isTeamView: boolean) => {
    if (isTeamView) {
      return "/Shumilaprofile.jpeg";
    }
    return founder?.image || "";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 pb-6 border-b border-gray-200">
        <h1 className="font-serif text-4xl font-bold mb-2">Our Team</h1>
        <p className="text-gray-600">
          Meet the talented individuals behind LU Chronicles who work to bring you the latest news and insightful content.
        </p>
      </header>

      <Tabs defaultValue="editor" className="mb-6" onValueChange={(value) => setCurrentView(value as 'editor' | 'members' | 'other-members' | 'anonymous')}>
        <TabsList className="flex flex-row overflow-x-auto whitespace-nowrap gap-4 w-full p-4 md:flex-row md:gap-6 md:max-w-4xl md:mx-auto">
          <TabsTrigger 
            value="editor" 
            className="min-w-[120px] px-4 py-3 text-base rounded-md shadow-sm hover:shadow-md transition-all"
          >
            Editor
          </TabsTrigger>
          <TabsTrigger 
            value="members" 
            className="min-w-[120px] px-4 py-3 text-base rounded-md shadow-sm hover:shadow-md transition-all"
          >
            MEMBERS
          </TabsTrigger>
          <TabsTrigger 
            value="other-members" 
            className="min-w-[120px] px-4 py-3 text-base rounded-md shadow-sm hover:shadow-md transition-all"
          >
            OUR HEADS
          </TabsTrigger>
          <TabsTrigger 
            value="anonymous" 
            className="min-w-[120px] px-4 py-3 text-base rounded-md shadow-sm hover:shadow-md transition-all"
          >
            ANONYMOUS
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Editor Section */}
      {currentView === 'editor' && founder && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-xl border border-gray-200 rounded-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
            <div className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <img 
                    src={getShumailaImage(true)} 
                    alt={founder.name} 
                    className="w-32 h-32 rounded-full object-cover ring-4 ring-gray-100 shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-luChronicles-black text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Editor
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900">
                  <Link to={`/author/${founder.username}`} className="hover:text-luChronicles-black transition-colors">
                    {founder.name}
                  </Link>
                </h3>
                <Link 
                  to={`/author/${founder.username}`}
                  className="inline-flex items-center mt-4 text-sm font-medium text-luChronicles-black hover:text-luChronicles-black/80 transition-colors"
                >
                  View Full Profile
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Members Section */}
      {currentView === 'members' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-xl border border-gray-200 rounded-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
            <div className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <img 
                    src="/Trishla.jpeg" 
                    alt="Trishla Chaudhary" 
                    className="w-32 h-32 rounded-full object-cover ring-4 ring-gray-100 shadow-lg"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900">
                  Trishla Chaudhary
                </h3>
                <Link 
                  to="/author/trishla-chaudhary"
                  className="inline-flex items-center mt-4 text-sm font-medium text-luChronicles-black hover:text-luChronicles-black/80 transition-colors"
                >
                  View Full Profile
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-xl border border-gray-200 rounded-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
            <div className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <img 
                    src="/Manasvi.jpeg" 
                    alt="Manasvi Srivastava" 
                    className="w-32 h-32 rounded-full object-cover ring-4 ring-gray-100 shadow-lg"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900">
                  Manasvi Srivastava (B.sc)
                </h3>
                <Link 
                  to="/author/manasvi-srivastava"
                  className="inline-flex items-center mt-4 text-sm font-medium text-luChronicles-black hover:text-luChronicles-black/80 transition-colors"
                >
                  View Full Profile
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Other Members Section */}
      {currentView === 'other-members' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map(member => (
            <div 
              key={member.id} 
              className="bg-white shadow-xl border border-gray-200 rounded-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl"
            >
              <div className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-32 h-32 rounded-full object-cover ring-4 ring-gray-100 shadow-lg"
                    />
                    {member.designation && (
                      <div className="absolute -bottom-2 -right-2 bg-luChronicles-black text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        {member.designation}
                      </div>
                    )}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-gray-900">
                    <Link to={`/author/${member.username}`} className="hover:text-luChronicles-black transition-colors">
                      {member.name}
                    </Link>
                  </h3>
                  <Link 
                    to={`/author/${member.username}`}
                    className="inline-flex items-center mt-4 text-sm font-medium text-luChronicles-black hover:text-luChronicles-black/80 transition-colors"
                  >
                    View Full Profile
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Anonymous Section */}
      {currentView === 'anonymous' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {authors.filter(author => author.id === "15").map(anonymousAuthor => (
            <div 
              key={anonymousAuthor.id} 
              className="bg-white shadow-xl border border-gray-200 rounded-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl"
            >
              <div className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <img 
                      src={anonymousAuthor.image} 
                      alt={anonymousAuthor.name} 
                      className="w-32 h-32 rounded-full object-cover ring-4 ring-gray-100 shadow-lg"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-gray-900">
                    <Link to={`/author/${anonymousAuthor.username}`} className="hover:text-luChronicles-black transition-colors">
                      {anonymousAuthor.name}
                    </Link>
                  </h3>
                  <Link 
                    to={`/author/${anonymousAuthor.username}`}
                    className="inline-flex items-center mt-4 text-sm font-medium text-luChronicles-black hover:text-luChronicles-black/80 transition-colors"
                  >
                    View Full Profile
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Team;
