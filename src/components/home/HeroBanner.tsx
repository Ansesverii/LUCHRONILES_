import React from 'react';
import { Link } from 'react-router-dom';
import { getHeroArticle } from '@/data';

const HeroBanner: React.FC = () => {
  const heroArticle = getHeroArticle();

  if (!heroArticle) {
    return null;
  }

  return (
    <section className="relative w-full bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Article Image */}
          <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-lg">
            <img 
              src={heroArticle.image} 
              alt={heroArticle.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>

          {/* Article Content */}
          <div className="flex flex-col justify-center space-y-4">
            <Link 
              to={`/category/${heroArticle.category.toLowerCase().replace(' ', '-')}`}
              className="inline-block text-sm text-gray-600 hover:underline"
            >
              {heroArticle.category}
            </Link>
            
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold">
              <Link to={`/article/${heroArticle.slug}`} className="hover:text-blue-600 transition-colors">
                {heroArticle.title}
              </Link>
            </h1>
            
            <p className="text-lg text-gray-700 line-clamp-3">
              {heroArticle.excerpt}
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <img 
                  src={heroArticle.author.image} 
                  alt={heroArticle.author.name} 
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <Link to={`/author/${heroArticle.author.username}`} className="author-link block">
                    {heroArticle.author.name}
                  </Link>
                  <span className="text-sm text-gray-500">{heroArticle.date}</span>
                </div>
              </div>
            </div>
            
            <Link 
              to={`/article/${heroArticle.slug}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Read More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
