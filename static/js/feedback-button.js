// Add feedback button to documentation pages
document.addEventListener('DOMContentLoaded', function() {
  // Try multiple times to ensure it works on all pages
  setTimeout(addFeedbackButton, 100);
  setTimeout(addFeedbackButton, 500);
  setTimeout(addFeedbackButton, 1000);
  
  // Also listen for navigation changes (SPA routing)
  if (window.history && window.history.pushState) {
    const originalPushState = window.history.pushState;
    window.history.pushState = function() {
      originalPushState.apply(window.history, arguments);
      setTimeout(addFeedbackButton, 500);
    };
    
    window.addEventListener('popstate', function() {
      setTimeout(addFeedbackButton, 500);
    });
  }
});

function addFeedbackButton() {
  // Don't add if already exists
  if (document.querySelector('.feedback-button')) {
    return;
  }
  
  const editButton = document.querySelector('.theme-edit-this-page');
  if (!editButton) {
    return;
  }

  // Get page information
  const pageTitle = document.title.split(' | ')[0] || 'Documentation Page';
  const currentUrl = window.location.href;
  
  // Create feedback button
  const feedbackButton = document.createElement('a');
  feedbackButton.className = 'feedback-button';
  feedbackButton.textContent = 'Feedback';
  feedbackButton.target = '_blank';
  feedbackButton.rel = 'noopener noreferrer';
  
  // Create GitHub issue URL
  const issueTitle = `Feedback to ${pageTitle}`;
  const issueBody = `Page: ${currentUrl}

I found it difficult to understand ...

<!-- Please describe what was confusing, unclear, or could be improved about this page -->`;
  
  const githubUrl = `https://github.com/use-ink/ink-docs/issues/new?` +
    `title=${encodeURIComponent(issueTitle)}&` +
    `body=${encodeURIComponent(issueBody)}`;
  
  feedbackButton.href = githubUrl;
  
  // Insert feedback button before edit button
  editButton.parentNode.insertBefore(feedbackButton, editButton);
  
  // Wrap both buttons in container if not already wrapped
  if (!editButton.parentNode.classList.contains('doc-buttons-container')) {
    const container = document.createElement('div');
    container.className = 'doc-buttons-container';
    
    editButton.parentNode.insertBefore(container, feedbackButton);
    container.appendChild(feedbackButton);
    container.appendChild(editButton);
    
    // Reset margins since container handles spacing
    feedbackButton.style.marginTop = '0';
    editButton.style.marginTop = '0';
    editButton.style.marginRight = '0';
  }
}

// Also try when window loads completely
window.addEventListener('load', function() {
  setTimeout(addFeedbackButton, 100);
}); 