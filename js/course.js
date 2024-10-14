const courseData = {
    title: "蕭博士SoR美語師資13班課表",
    levels: [
      // Level 1 (existing)
      {
        level: 1,
        title: "Foundations of Modern Web Development",
        data: {
          "Core Technologies": {
            "HTML5": "Semantic markup, New elements, Accessibility",
            "CSS3": "Flexbox, Grid, Animations",
            "JavaScript": "ES6+, DOM manipulation, Events"
          },
          "Development Environment": {
            "Code Editor": "VS Code setup, Extensions, Shortcuts",
            "Version Control": "Git basics, GitHub, Branching strategies",
            "Terminal": "Basic commands, Navigation, File operations"
          },
          "Responsive Design": {
            "Mobile First": "Concept explanation, Implementation strategies",
            "Media Queries": "Breakpoints, Device targeting",
            "Flexible Images": "Max-width, Picture element, Srcset attribute"
          },
          "Web Performance": {
            "Asset Optimization": "Image compression, Minification",
            "Loading Techniques": "Lazy loading, Async/Defer scripts",
            "Performance Metrics": "Core Web Vitals, Lighthouse audits"
          },
          "Project": {
            "Description": "Personal portfolio website",
            "Requirements": "Responsive design, Performance optimized",
            "Milestones": "Wireframing, Development, Testing, Deployment"
          },
          "Assessment": {
            "Quizzes": "Weekly topic-based quizzes",
            "Code Review": "Peer and instructor reviews",
            "Final Presentation": "Project showcase and Q&A"
          },
          "Resources": {
            "Documentation": "MDN Web Docs, W3Schools",
            "Online Courses": "FreeCodeCamp, Codecademy",
            "Books": "'HTML & CSS' by Jon Duckett, 'JavaScript: The Good Parts'"
          }
        }
      },
      // Level 2 (existing)
      {
        level: 2,
        title: "Advanced Frontend Development",
        data: {
          "JavaScript Frameworks": {
            "React": "Components, State management, Hooks",
            "Vue.js": "Vue CLI, Directives, Vuex",
            "Angular": "TypeScript, Modules, Services"
          },
          "State Management": {
            "Redux": "Actions, Reducers, Store",
            "MobX": "Observables, Actions, Reactions",
            "Context API": "Provider, Consumer, useContext"
          },
          "Build Tools": {
            "Webpack": "Configuration, Loaders, Plugins",
            "Babel": "Transpilation, Polyfills, Presets",
            "npm Scripts": "Task automation, Dependencies management"
          },
          "CSS Preprocessors": {
            "Sass": "Variables, Nesting, Mixins",
            "Less": "Variables, Mixins, Operations",
            "PostCSS": "Autoprefixer, CSS Modules, Custom plugins"
          },
          "Project": {
            "Description": "Interactive dashboard application",
            "Requirements": "Real-time data updates, Responsive design",
            "Milestones": "API integration, State management implementation, Testing"
          },
          "Assessment": {
            "Coding Challenges": "Weekly framework-specific challenges",
            "Project Evaluation": "Code quality, Performance, User experience",
            "Presentation": "Architecture explanation and demo"
          },
          "Resources": {
            "Documentation": "React Docs, Vue.js Guide, Angular Docs",
            "Online Courses": "Udemy, Egghead.io, Frontend Masters",
            "Books": "'You Don't Know JS' series, 'React Up and Running'"
          }
        }
      },
      // Levels 3-15 (generated)
      ...Array.from({ length: 13 }, (_, i) => ({
        level: i + 3,
        title: `Web Development Level ${i + 3}`,
        data: {
          "Topic 1": {
            "Subtopic 1": "Description 1",
            "Subtopic 2": "Description 2",
            "Subtopic 3": "Description 3"
          },
          "Topic 2": {
            "Subtopic 1": "Description 1",
            "Subtopic 2": "Description 2",
            "Subtopic 3": "Description 3"
          },
          "Project": {
            "Description": `Level ${i + 3} project description`,
            "Requirements": "Requirement 1, Requirement 2, Requirement 3",
            "Milestones": "Milestone 1, Milestone 2, Milestone 3"
          },
          "Assessment": {
            "Task 1": "Assessment description 1",
            "Task 2": "Assessment description 2",
            "Task 3": "Assessment description 3"
          }
        }
      })),
      // Level 16 (existing)
      {
        level: 16,
        title: "Capstone Project and Career Preparation",
        data: {
          "Capstone Project": {
            "Planning": "Project scope, Architecture design, Timeline",
            "Development": "Full-stack implementation, Agile methodology",
            "Deployment": "CI/CD pipeline, Cloud hosting, Monitoring"
          },
          "Portfolio Building": {
            "Project Showcase": "Highlighting key projects and skills",
            "GitHub Profile": "README optimization, Contribution graph",
            "Personal Website": "Responsive design, SEO optimization"
          },
          "Interview Preparation": {
            "Algorithms": "Data structures, Time complexity, Problem-solving",
            "System Design": "Scalability, Database design, API architecture",
            "Behavioral Questions": "STAR method, Scenario practice"
          },
          "Career Development": {
            "Resume Writing": "ATS optimization, Highlighting achievements",
            "Networking": "LinkedIn profile, Tech meetups, Conferences",
            "Continuous Learning": "Staying updated with industry trends"
          },
          "Project": {
            "Description": "Full-stack web application solving a real-world problem",
            "Requirements": "Scalable architecture, Security best practices, Documentation",
            "Milestones": "MVP development, User testing, Final presentation"
          },
          "Assessment": {
            "Project Defense": "Technical review and Q&A session",
            "Mock Interviews": "Technical and behavioral interview simulations",
            "Career Plan": "5-year career goal presentation"
          },
          "Resources": {
            "Job Boards": "LinkedIn Jobs, Stack Overflow Jobs, GitHub Jobs",
            "Interview Prep": "LeetCode, HackerRank, InterviewCake",
            "Books": "'Cracking the Coding Interview', 'Clean Code', 'The Pragmatic Programmer'"
          }
        }
      }
    ]
  };
  
  function createLevelCard(levelData) {
    const card = document.createElement('div');
    card.className = 'level-card';
    
    let content = `
        <div class="level-header">Level ${levelData.level}: ${levelData.title}</div>
        <div class="level-content">
    `;
  
    for (const [key, value] of Object.entries(levelData.data)) {
        content += `
            <div class="data-item">
                <div class="data-key">${key}</div>
                <div class="data-value">
        `;
  
        for (const [subKey, subValue] of Object.entries(value)) {
            content += `
                <div class="sub-point">
                    <strong>${subKey}:</strong> ${subValue}
                </div>
            `;
        }
  
        content += `
                </div>
            </div>
        `;
    }
  
    content += `</div>`;
    card.innerHTML = content;
  
    // Add click event listeners to toggle data visibility
    card.querySelectorAll('.data-key').forEach(key => {
        key.addEventListener('click', () => {
            key.classList.toggle('active');
            key.nextElementSibling.classList.toggle('active');
        });
    });
  
    return card;
  }
  
  function renderDashboard() {
    const courseTitle = document.getElementById('courseTitle');
    const levelsGrid = document.getElementById('levelsGrid');
  
    courseTitle.textContent = courseData.title;
  
    courseData.levels.forEach(level => {
        levelsGrid.appendChild(createLevelCard(level));
    });
  }

  function searchItems() {
    // 获取输入框中的值
    const input = document.getElementById('search-input');
    const filter = input.value.toLowerCase();
    
    // 获取列表中的所有项目
    const items = document.querySelectorAll('#levelsGrid div');

    // 循环检查每个项目是否匹配关键字
    items.forEach(item => {
        const text = item.textContent || item.innerText;
        if (text.toLowerCase().includes(filter)) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
}
  
  renderDashboard();