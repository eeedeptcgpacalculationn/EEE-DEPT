/**
 * mailResults.js
 * 
 * This script collects all semester GPAs and the overall CGPA from the page,
 * formats them into an email body, and opens the user's default mail client
 * with a pre-filled email using a mailto: link.
 */

function mailResults() {
  // Get all semester GPA elements
  const semesterGPAs = [];
  const semesterSections = document.querySelectorAll('.semester-section');

  semesterSections.forEach(section => {
    const semesterTitle = section.querySelector('.semester-title')?.textContent || 'Unknown Semester';
    const gpaValue = section.querySelector('.semester-gpa-value')?.textContent || '0.00';
    semesterGPAs.push({ semester: semesterTitle, gpa: gpaValue });
  });

  // Get overall CGPA
  const overallCGPA = document.getElementById('overall-cgpa-value')?.textContent || '0.00';

  // Format email subject and body
  const subject = encodeURIComponent('My Semester GPAs and Overall CGPA');
  let body = 'Here are my semester GPAs and overall CGPA:%0D%0A%0D%0A';

  semesterGPAs.forEach(({ semester, gpa }) => {
    body += ${semester}: GPA = ${gpa}%0D%0A;
  });

  body += %0D%0AOverall CGPA: ${overallCGPA}%0D%0A;

  // Create mailto link
  const mailtoLink = mailto:?subject=${subject}&body=${body};

  // Open mail client
  window.location.href = mailtoLink;
}

// Attach the function to window for global access
window.mailResults = mailResults;