import { useEffect } from 'react';

// sets the browser tab title per page
// no personal name in here on purpose, keeps it out of seo
const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title ? `${title} — Full-Stack Developer` : 'Hi there, this is my portfolio site!';
  }, [title]);
};

export default usePageTitle;
