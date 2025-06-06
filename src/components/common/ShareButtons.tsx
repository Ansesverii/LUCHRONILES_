import React from 'react';
import { FaLinkedin, FaInstagram, FaLink } from 'react-icons/fa';

interface ShareButtonsProps {
  url: string;
  title: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    instagram: `https://www.instagram.com/create/story?url=${encodedUrl}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm text-gray-600">Share:</span>
      
      {/* LinkedIn Share */}
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#0077B5] hover:text-[#005582] transition-colors"
        title="Share on LinkedIn"
      >
        <FaLinkedin className="w-5 h-5" />
      </a>

      {/* Instagram Share */}
      <a
        href={shareLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#E4405F] hover:text-[#C13584] transition-colors"
        title="Share on Instagram"
      >
        <FaInstagram className="w-5 h-5" />
      </a>

      {/* Copy Link */}
      <button
        onClick={copyToClipboard}
        className="text-gray-600 hover:text-gray-800 transition-colors"
        title="Copy link"
      >
        <FaLink className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ShareButtons; 