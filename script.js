document.addEventListener('DOMContentLoaded',  function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const userActions = document.querySelector('.user-actions');
    
    if (menuToggle) {
      menuToggle.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        userActions.style.display = userActions.style.display === 'flex' ? 'none' : 'flex';
        
        if (navLinks.style.display === 'flex') {
          navLinks.style.flexDirection = 'column';
          navLinks.style.position = 'absolute';
          navLinks.style.top = '60px';
          navLinks.style.left = '0';
          navLinks.style.width = '100%';
          navLinks.style.backgroundColor = 'white';
          navLinks.style.padding = '1rem';
          navLinks.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
          
          userActions.style.flexDirection = 'column';
          userActions.style.position = 'absolute';
          userActions.style.top = navLinks.scrollHeight + 60 + 'px';
          userActions.style.left = '0';
          userActions.style.width = '100%';
          userActions.style.backgroundColor = 'white';
          userActions.style.padding = '1rem';
          userActions.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        }
      });
    }
    
    // Course Progress Animation
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0';
      
      setTimeout(() => {
        bar.style.transition = 'width 1s ease-in-out';
        bar.style.width = width;
      }, 500);
    });
    
    // Chart Animation
    const chartFills = document.querySelectorAll('.chart-fill');
    
    chartFills.forEach(fill => {
      const height = fill.style.height;
      fill.style.height = '0';
      
      setTimeout(() => {
        fill.style.transition = 'height 1s ease-in-out';
        fill.style.height = height;
      }, 800);
    });
    
    // Search Functionality
    const searchInput = document.querySelector('.search-container input');
    const searchButton = document.querySelector('.search-container button');
    
    if (searchButton) {
      searchButton.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
          // Simulate search - in a real app, this would redirect or filter courses
          alert(`Searching for: ${query}`);
        }
      });
    }
    
    // Video Preview Click
    const videoThumbnail = document.querySelector('.video-thumbnail');
    
    if (videoThumbnail) {
      videoThumbnail.addEventListener('click', function() {
        // In a real app, this would open the video player
        alert('Video player would open here');
      });
    }
    
    // Smooth Scrolling for Navigation
    const navAnchors = document.querySelectorAll('.nav-links a');
    
    navAnchors.forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#') && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
            
            // Update active link
            navAnchors.forEach(a => a.classList.remove('active'));
            this.classList.add('active');
          }
        }
      });
    });
  });
    