import React, { useState } from 'react';
import { authors } from '@/data';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Team = () => {
  const [currentView, setCurrentView] = useState<'all' | 'editor'>('all');
  
  const founder = authors.find(author => author.isFounder);
  const teamMembers = authors
    .filter(author => 
      !author.isFounder && 
      !author.isFaculty && 
      author.id !== "11" && // Mani Soni's ID
      author.id !== "12"    // Atharv Manshar's ID
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

      <Tabs defaultValue="all" className="mb-8" onValueChange={(value) => setCurrentView(value as 'all' | 'editor')}>
        <TabsList>
          <TabsTrigger value="all">All Members</TabsTrigger>
          <TabsTrigger value="editor">Editor</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Founder Section - Always visible if viewing "editor" tab */}
      {(currentView === 'editor' && founder) && (
        <div className="mb-12">
          <h2 className="font-serif text-2xl font-bold mb-6">Founder</h2>
          <div className="bg-white shadow-xl border border-gray-200 rounded-xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300 hover:shadow-2xl">
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="relative">
                  <img 
                    src={getShumailaImage(false)} 
                    alt={founder.name} 
                    className="w-40 h-40 rounded-full object-cover ring-4 ring-gray-100 shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-luChronicles-black text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Founder
                  </div>
                </div>
                <div className="text-center md:text-left flex-1">
                  <h3 className="font-serif text-2xl font-bold text-gray-900">
                    <Link to={`/author/${founder.username}`} className="hover:text-luChronicles-black transition-colors">
                      {founder.name}
                    </Link>
                  </h3>
                  <p className="text-lg text-gray-700 mt-2 font-medium">{founder.designation}</p>
                  {founder.email && (
                    <a href={`mailto:${founder.email}`} className="text-sm text-gray-600 hover:text-luChronicles-black transition-colors block mt-1">
                      {founder.email}
                    </a>
                  )}
                  {/* Social Media Links */}
                  {founder.socialMedia && (
                    <div className="flex gap-3 mt-3 justify-center md:justify-start">
                      {founder.socialMedia.linkedin && (
                        <a href={founder.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0077B5] transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      )}
                      {founder.socialMedia.twitter && (
                        <a href={`https://twitter.com/${founder.socialMedia.twitter}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#1DA1F2] transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                          </svg>
                        </a>
                      )}
                      {founder.socialMedia.instagram && (
                        <a href={founder.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#E4405F] transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                  {/* Categories */}
                  <div className="mt-4">
                    {founder.categories && (
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {founder.categories.map(category => (
                          <span 
                            key={category} 
                            className="inline-block px-3 py-1 bg-gray-100 text-sm rounded-full shadow-sm hover:shadow-md transition-shadow"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="mt-6 text-gray-700 leading-relaxed">{founder.bio}</p>
                  <Link 
                    to={`/author/${founder.username}`}
                    className="inline-flex items-center mt-6 text-sm font-medium text-luChronicles-black hover:text-luChronicles-black/80 transition-colors"
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
        </div>
      )}

      {/* Team Members Section - Visible in "all" tab or when editor tab is empty */}
      {(currentView === 'all' || (currentView === 'editor' && !founder)) && (
        <>
          {/* Render founder card first in "all" view */}
          {currentView === 'all' && founder && (
            <div className="mb-12">
              <h2 className="font-serif text-2xl font-bold mb-6">Founder</h2>
              <div className="grid grid-cols-1 gap-8">
                <div className="bg-white shadow-xl border border-gray-200 rounded-xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300 hover:shadow-2xl">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      <div className="relative">
                        <img 
                          src={getShumailaImage(true)} 
                          alt={founder.name} 
                          className="w-40 h-40 rounded-full object-cover ring-4 ring-gray-100 shadow-lg"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-luChronicles-black text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                          Founder
                        </div>
                      </div>
                      <div className="text-center md:text-left flex-1">
                        <h3 className="font-serif text-2xl font-bold text-gray-900">
                          <Link to={`/author/${founder.username}`} className="hover:text-luChronicles-black transition-colors">
                            {founder.name}
                          </Link>
                        </h3>
                        <p className="text-lg text-gray-700 mt-2 font-medium">{founder.designation}</p>
                        {founder.email && (
                          <a href={`mailto:${founder.email}`} className="text-sm text-gray-600 hover:text-luChronicles-black transition-colors block mt-1">
                            {founder.email}
                          </a>
                        )}
                        {/* Social Media Links */}
                        {founder.socialMedia && (
                          <div className="flex gap-3 mt-3 justify-center md:justify-start">
                            {founder.socialMedia.linkedin && (
                              <a href={founder.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0077B5] transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                              </a>
                            )}
                            {founder.socialMedia.twitter && (
                              <a href={`https://twitter.com/${founder.socialMedia.twitter}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#1DA1F2] transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                                </svg>
                              </a>
                            )}
                            {founder.socialMedia.instagram && (
                              <a href={founder.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#E4405F] transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
                                </svg>
                              </a>
                            )}
                          </div>
                        )}
                        {/* Categories */}
                        <div className="mt-4">
                          {founder.categories && (
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                              {founder.categories.map(category => (
                                <span 
                                  key={category} 
                                  className="inline-block px-3 py-1 bg-gray-100 text-sm rounded-full shadow-sm hover:shadow-md transition-shadow"
                                >
                                  {category}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <Link 
                          to={`/author/${founder.username}`}
                          className="inline-flex items-center mt-6 text-sm font-medium text-luChronicles-black hover:text-luChronicles-black/80 transition-colors"
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
              </div>
            </div>
          )}

          {/* Team Members */}
          <div>
            <h2 className="font-serif text-2xl font-bold mb-6">Team Members</h2>
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
                      {member.email && (
                        <a href={`mailto:${member.email}`} className="text-sm text-gray-600 hover:text-luChronicles-black transition-colors block mt-1">
                          {member.email}
                        </a>
                      )}
                      {/* Social Media Links */}
                      {member.socialMedia && (
                        <div className="flex gap-3 mt-3 justify-center">
                          {member.socialMedia.linkedin && (
                            <a href={member.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0077B5] transition-colors">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            </a>
                          )}
                          {member.socialMedia.twitter && (
                            <a href={`https://twitter.com/${member.socialMedia.twitter}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#1DA1F2] transition-colors">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                              </svg>
                            </a>
                          )}
                          {member.socialMedia.instagram && (
                            <a href={member.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#E4405F] transition-colors">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
                              </svg>
                            </a>
                          )}
                        </div>
                      )}
                      {/* Categories */}
                      <div className="mt-4">
                        {member.categories && (
                          <div className="flex flex-wrap gap-2 justify-center">
                            {member.categories.map(category => (
                              <span 
                                key={category} 
                                className="inline-block px-3 py-1 bg-gray-100 text-sm rounded-full shadow-sm hover:shadow-md transition-shadow"
                              >
                                {category}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <Link 
                        to={`/author/${member.username}`}
                        className="inline-flex items-center mt-6 text-sm font-medium text-luChronicles-black hover:text-luChronicles-black/80 transition-colors"
                      >
                        View Profile
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Team;
