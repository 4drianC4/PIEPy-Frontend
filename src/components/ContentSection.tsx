
import React, { ReactNode } from 'react';

interface ContentSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-python-lightblue rounded-md p-3 md:p-4 mb-4 md:mb-6 ${className}`}>
      <h3 className="text-lg md:text-xl font-medium mb-2 md:mb-4">{title}</h3>
      {children}
    </div>
  );
};

export default ContentSection;
