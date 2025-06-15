import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticleBySlug, getArticlesByCategory } from '@/data';
import NewsCard from '@/components/ui/NewsCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ShareButtons from '@/components/common/ShareButtons';

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || '');
  const relatedArticles = article 
    ? getArticlesByCategory(article.category.toLowerCase().replace(' ', '-')).filter(a => a.id !== article.id).slice(0, 3)
    : [];

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <Button asChild>
          <Link to="/" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    );
  }

  // Get the current URL for sharing
  const shareUrl = window.location.href;

  return (
    <div>
      {/* Article Header */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <Link 
          to={`/category/${article.category.toLowerCase().replace(' ', '-')}`}
          className="inline-block text-sm text-gray-600 hover:underline mb-2"
        >
          {article.category}
        </Link>
        
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {article.title}
        </h1>
        
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex items-center">
            <img 
              src={Array.isArray(article.author) ? article.author[0]?.image : article.author?.image} 
              alt={Array.isArray(article.author) ? article.author[0]?.name : article.author?.name} 
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              {Array.isArray(article.author) ? (
                <div className="flex flex-wrap gap-1">
                  <span className="text-gray-600">By </span>
                  {article.author.map((author, idx) => (
                    <React.Fragment key={author.username}>
                      <Link
                        to={`/author/${author.username}`}
                        className="author-link font-medium text-luChronicles-black hover:underline"
                      >
                        {author.name}
                      </Link>
                      {Array.isArray(article.author) && idx < article.author.length - 1 && <span className="text-gray-600">, </span>}
                    </React.Fragment>
                  ))}
                </div>
              ) : (
                article.author && (
                  <div className="flex items-center gap-1">
                    <span className="text-gray-600">By </span>
                    <Link to={`/author/${article.author.username}`} className="author-link font-medium text-luChronicles-black hover:underline">
                      {article.author.name}
                    </Link>
                  </div>
                )
              )}
              <span className="text-sm text-gray-500">{article.date}</span>
            </div>
          </div>
        </div>
        
        {/* Article Content */}
        <div className="max-w-3xl mx-auto">
          <div 
            className="article-content prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ 
              __html: article.content.replace(/<h1[^>]*>.*?<\/h1>/g, '') 
            }}
          />
          
          {/* Social Sharing */}
          <div className="border-t border-b border-gray-200 py-4 my-8">
            <ShareButtons url={shareUrl} title={article.title} />
          </div>
          
          {/* Author Info */}
          <div className="bg-gray-50 p-6 rounded-lg my-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
              {Array.isArray(article.author) ? (
                <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                  {article.author.map((author) => (
                    <div key={author.username} className="flex flex-col items-center sm:items-start">
                      <img 
                        src={author.image} 
                        alt={author.name} 
                        className="w-24 h-24 rounded-full mb-2"
                      />
                      <Link
                        to={`/author/${author.username}`}
                        className="font-serif text-xl font-bold hover:underline text-center sm:text-left"
                      >
                        {author.name}
                      </Link>
                      <p className="text-gray-700 mt-1 text-center sm:text-left">
                        Author at LU Chronicles
                      </p>
                      <Link 
                        to={`/author/${author.username}`}
                        className="inline-block mt-2 text-sm font-medium text-luChronicles-black hover:underline"
                      >
                        View Profile and Articles
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <img 
                    src={article.author?.image} 
                    alt={article.author?.name} 
                    className="w-24 h-24 rounded-full"
                  />
                  <div className="text-center sm:text-left">
                    <Link to={`/author/${article.author?.username}`} className="font-serif text-xl font-bold hover:underline">
                      {article.author?.name}
                    </Link>
                    <p className="text-gray-700 mt-2">
                      Author at LU Chronicles
                    </p>
                    <Link 
                      to={`/author/${article.author?.username}`}
                      className="inline-block mt-2 text-sm font-medium text-luChronicles-black hover:underline"
                    >
                      View Profile and Articles
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-12">
            <h2 className="font-serif text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Article;
