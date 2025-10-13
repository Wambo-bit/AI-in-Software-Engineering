// Sample course data
const courses = [
    {
      id: 1,
      title: "Introduction to HTML",
      lessons: [
        "HTML Basics",
        "Headings and Paragraphs",
        "Lists and Links",
        "Images and Media"
      ]
    },
    {
      id: 2,
      title: "CSS Fundamentals",
      lessons: [
        "Selectors and Properties",
        "Box Model",
        "Flexbox",
        "Grid Layout"
      ]
    },
    {
      id: 3,
      title: "JavaScript Essentials",
      lessons: [
        "Variables and Data Types",
        "Functions and Loops",
        "DOM Manipulation",
        "Events and Listeners"
      ]
    }
  ];
  
  // Detect which page we are on
  const currentPage = document.body.querySelector('main');
  
  if (currentPage) {
    // Home page logic
    const coursesContainer = document.getElementById("courses");
    if (coursesContainer) {
      courses.forEach(course => {
        const div = document.createElement("div");
        div.className = "course-card";
        div.innerHTML = `
          <span>${course.title}</span>
          <button onclick="goToCourse(${course.id})">View Course</button>
        `;
        coursesContainer.appendChild(div);
      });
    }
  
    // Course detail page logic
    const courseTitle = document.getElementById("course-title");
    const lessonList = document.getElementById("lesson-list");
  
    if (courseTitle && lessonList) {
      // Get course id from URL param
      const params = new URLSearchParams(window.location.search);
      const courseId = parseInt(params.get("id"));
      const course = courses.find(c => c.id === courseId);
  
      if (course) {
        courseTitle.textContent = course.title;
  
        course.lessons.forEach((lesson, index) => {
          const div = document.createElement("div");
          div.className = "lesson-card";
          div.innerHTML = `
            <span>${lesson}</span>
            <button id="btn-${index}" onclick="markCompleted(${index})">Mark Completed</button>
          `;
          lessonList.appendChild(div);
        });
      }
    }
  }
  
  // Navigation function
  function goToCourse(id) {
    window.location.href = `course.html?id=${id}`;
  }
  
  // Mark lesson completed
  function markCompleted(index) {
    const btn = document.getElementById(`btn-${index}`);
    btn.textContent = "Completed ✅";
    btn.disabled = true;
  }
  