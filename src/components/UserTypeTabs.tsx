import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUserType } from '@acweb/contexts/UserTypeContext';
import { Users, FileText, Briefcase, GraduationCap } from 'lucide-react';

const UserTypeTabs: React.FC = () => {
  const { userType, setUserType } = useUserType();
  const navigate = useNavigate();
  const location = useLocation();
  const [topOffset, setTopOffset] = useState<number>(72); // Default mobile header height
  const tabsRef = useRef<HTMLDivElement>(null);
  
  // Check if we're on the jobs page
  const isJobsPage = location.pathname === '/jobs';

  /**
   * Calculate header height and position tabs below it
   * Security: Only uses DOM measurements, no external inputs
   */
  useEffect(() => {
    const calculateOffset = () => {
      const headerElement = document.querySelector('header');
      if (headerElement) {
        const headerHeight = headerElement.offsetHeight;
        setTopOffset(headerHeight);
      }
    };

    // Calculate on mount
    calculateOffset();

    // Recalculate on resize (handles responsive changes)
    const handleResize = () => {
      calculateOffset();
    };

    window.addEventListener('resize', handleResize);
    
    // Also check after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(calculateOffset, 100);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  /**
   * Handles tab click with security validation
   * Only allows valid user types
   * Navigates to home page when clicking Provider/Employer/Resident tabs from /jobs page
   */
  const handleTabClick = (type: 'provider' | 'employer' | 'resident') => {
    // Security: Validate user type before setting
    if (type === 'provider' || type === 'employer' || type === 'resident') {
      setUserType(type);
      // If on jobs page, navigate to home to show the selected tab content
      if (isJobsPage) {
        navigate('/');
      }
    }
  };

  return (
    <div 
      ref={tabsRef}
      data-user-type-tabs
      className="bg-white border-b border-gray-200 fixed left-0 right-0 z-[90] w-full shadow-sm"
      style={{ top: `${topOffset}px` }}
    >
      <div className="container-ac">
        <div className="flex justify-center">
          <div className="flex bg-gray-100 rounded-lg p-1 my-4">
            <button
              type="button"
              onClick={() => handleTabClick('provider')}
              className={`flex items-center px-4 py-3 rounded-md font-medium transition-all duration-200 ${
                !isJobsPage && userType === 'provider'
                  ? 'bg-white text-ac-primary shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              aria-label="Switch to Provider view"
              aria-pressed={!isJobsPage && userType === 'provider'}
            >
              <FileText className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">Providers</span>
              <span className="sm:hidden">Providers</span>
            </button>
            <button
              type="button"
              onClick={() => handleTabClick('employer')}
              className={`flex items-center px-4 py-3 rounded-md font-medium transition-all duration-200 ${
                !isJobsPage && userType === 'employer'
                  ? 'bg-white text-ac-primary shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              aria-label="Switch to Employer view"
              aria-pressed={!isJobsPage && userType === 'employer'}
            >
              <Users className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">Employers</span>
              <span className="sm:hidden">Employers</span>
            </button>
            <button
              type="button"
              onClick={() => handleTabClick('resident')}
              className={`flex items-center px-4 py-3 rounded-md font-medium transition-all duration-200 ${
                !isJobsPage && userType === 'resident'
                  ? 'bg-white text-ac-primary shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              aria-label="Switch to Residents & Programs view"
              aria-pressed={!isJobsPage && userType === 'resident'}
            >
              <GraduationCap className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">Residents & Programs</span>
              <span className="sm:hidden">Residents</span>
            </button>
            <button
              type="button"
              onClick={() => navigate('/jobs')}
              className={`flex items-center px-4 py-3 rounded-md font-medium transition-all duration-200 ${
                isJobsPage
                  ? 'bg-white text-ac-primary shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              aria-label="View job listings"
              aria-pressed={isJobsPage}
            >
              <Briefcase className="h-5 w-5 mr-2" />
              <span>Jobs</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTypeTabs;