const courses = [
    {
      title: "Full Stack Development",
      tagline : "Develop dynamic web applications by mastering both front-end and back-end technologies.",
      description: "Become a versatile developer with our Full Stack Development course. This comprehensive program covers both front-end and back-end technologies, including HTML, CSS, JavaScript, React, and Node.js. You'll gain practical experience by building dynamic web applications, allowing you to create complete solutions from start to finish.",
      syllabus: [
        "Introduction to Web Development",
        "HTML, CSS, and JavaScript Basics",
        "React.js and Front-End Development",
        "Node.js and Back-End Development",
        "Database Management (SQL & NoSQL)",
        "Full Stack Project Development"
      ],
      duration: "6 months",
      courseImg: "https://www.codingbytes.com/wp-content/uploads/2022/03/full-stack-web-development.jpg",
      brochureURL: "https://drive.google.com/uc?export=download&id=1ugGaTS_7YDQfQ4xeWSb5Zr3bywKJBYbx",
    },
    {
      title: "Data Analysis",
      tagline : "Master the art of analyzing data to uncover valuable insights and drive informed decisions.",
      description: "Dive deep into the world of data with our Data Analysis course. You'll learn to analyze complex data sets using powerful tools and programming languages like Python, R, and SQL. Through hands-on projects, you'll develop the skills to interpret data, uncover trends, and make data-driven decisions that can impact businesses.",
      syllabus: [
        "Introduction to Data Analysis",
        "Python for Data Analysis",
        "Data Visualization with R",
        "Statistical Analysis and Hypothesis Testing",
        "SQL for Database Management",
        "Capstone Project: Data-Driven Insights"
      ],
      duration: "4 months",
      courseImg: "https://img.freepik.com/free-photo/business-data-analysis_53876-95296.jpg?size=626&ext=jpg",
      brochureURL: "https://drive.google.com/uc?export=download&id=10_CARUHiLCaW2B4r21RfrpFiPgsG-4RN",
    },
    {
      title: "AI and Machine Learning",
      tagline : "Explore the cutting-edge world of AI and ML, and learn to build intelligent systems that shape the future.",
      description: "Explore the forefront of technology with our AI/ML course. You'll delve into machine learning algorithms, neural networks, and practical applications using tools like TensorFlow and PyTorch. This course prepares you to design and implement intelligent systems that can analyze data, learn from it, and make predictions.",
      syllabus: [
        "Introduction to AI and Machine Learning",
        "Supervised and Unsupervised Learning",
        "Neural Networks and Deep Learning",
        "Natural Language Processing",
        "AI/ML Algorithms and Tools",
        "Final Project: Building AI Models"
      ],
      duration: "8 months",
      courseImg: "https://img.freepik.com/free-photo/ai-machine-learning-enabling-computers-replicate-human-brain-functioning-self-learning-algorithms-based-data-mining-pattern-recognition-used-solve-complex-tasks-3d-render-animation_482257-68439.jpg?t=st=1727075752~exp=1727079352~hmac=bf10c594c60ff40d3dc4cb84ee5165fcb013f7defbb7d45344c55df31acc6a0c&w=996",
      brochureURL: "https://drive.google.com/uc?export=download&id=1fSRawOpEfVFJrnhLhcR3TR7-SG_zGBNZ",
    },
    {
      title: "Digital Marketing",
      tagline :  "Harness the power of online strategies to elevate your brand and reach your target audience effectively.",
      description: "Transform your marketing strategies with our Digital Marketing course. Learn to navigate the digital landscape by mastering SEO, social media marketing, content creation, and analytics. This course equips you with the tools to create impactful online campaigns that drive engagement and conversions.",
      syllabus: [
        "Introduction to Digital Marketing",
        "SEO Fundamentals",
        "Social Media Marketing Strategies",
        "Content Marketing and Copywriting",
        "Analytics and Performance Tracking",
        "Final Project: Digital Marketing Campaign"
      ],
      duration: "3 months",
      courseImg: "https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg?ga=GA1.1.2058582480.1727075688&semt=ais_hybrid",
      brochureURL: "https://drive.google.com/uc?export=download&id=1WZ2QPMbbmLI2znzffO8NRtuauWG62bc6",
    },
    {
      title: "Graphic Design",
      tagline : "Design impactful visuals that communicate your message and captivate your audience.",
      description: "Express your artistic vision with our Graphic Design course. You'll develop a strong foundation in design principles using industry-standard tools like Adobe Photoshop and Illustrator. Through creative projects, you'll learn to create visually compelling graphics, branding, and marketing materials that capture attention.",
      syllabus: [
        "Introduction to Graphic Design",
        "Design Principles and Color Theory",
        "Adobe Photoshop Basics",
        "Adobe Illustrator and Vector Art",
        "Logo and Branding Design",
        "Portfolio Project: Personal Branding"
      ],
      duration: "4 months",
      courseImg: "https://img.freepik.com/free-vector/cartoon-graphic-design-landing-page_52683-70881.jpg?ga=GA1.1.2058582480.1727075688&semt=ais_hybrid",
      brochureURL: "https://drive.google.com/uc?export=download&id=13HoFcooJWFaXt5IxDF4ZTVSyi7EloESz",
    },
    {
      title: "Professional Accounting and MIS Specialist",
      tagline :  "Navigate the complexities of finance with precision and develop essential management information skills.",
      description:"Gain a competitive edge in finance with our Professional Accounting & MIS Specialist course. This program covers essential accounting practices and financial reporting, while also exploring management information systems. You'll learn to analyze financial data effectively and apply best practices to real-world scenarios.",
      syllabus: [
        "Introduction to Professional Accounting",
        "Financial Reporting and Analysis",
        "Accounting Software and Tools",
        "Management Information Systems (MIS)",
        "Data Analytics for Accounting",
        "Final Project: Financial Reporting and Analysis"
      ],
      duration: "5 months",
      courseImg: "https://img.freepik.com/free-photo/businessmen-hands-white-table-with-documents-drafts_176420-357.jpg?t=st=1727076463~exp=1727080063~hmac=701b9d14d2a348c9ab10142811e6b56356ba1626b3b8aabcbac00f1360f3a7ca&w=900",
      brochureURL: "https://drive.google.com/uc?export=download&id=1_QbeC-9oEUHGF3gR3ZKZy8wGxroYqODu",
    },
    {
        title: "Website Designing",
        tagline :"Create visually stunning and user-friendly websites that enhance user experience and engagement.",
        description: "Unlock your creativity with our Website Design course. You'll explore the principles of effective design, usability, and visual aesthetics while learning how to create stunning and functional websites. Through practical projects, you'll develop a portfolio that showcases your design skills and understanding of user experience.",
        syllabus: [
          "Introduction to Web Design",
          "HTML and CSS Basics",
          "Responsive Design Techniques",
          "UI/UX Principles",
          "Web Accessibility",
          "Final Project: Create a Personal Website"
        ],
        duration: "4 months",
        courseImg: "https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg?ga=GA1.1.2058582480.1727075688&semt=ais_hybrid",
        brochureURL: "https://drive.google.com/uc?export=download&id=1sJRCfxPPlBP6iQ7Ce_45i2qGJubXRYv9",
    },
    {
        title: "MS Office + Taxation",
        tagline : "Master essential office tools to boost productivity while gaining a solid understanding of taxation principles to navigate financial regulations confidently.",
        description: "Enhance your professional skill set with our combined MS Office & Taxation course. Master essential office applications to streamline your work processes while gaining a thorough understanding of taxation regulations and principles. This course empowers you to manage financial documentation confidently and effectively.",
        syllabus: [
          "Introduction to MS Office",
          "Excel for Data Analysis",
          "Word for Documentation",
          "PowerPoint for Presentations",
          "Basics of Taxation",
          "Data Management Techniques"
        ],
        duration: "3 months",
        courseImg: "https://img.freepik.com/free-vector/tax-audit-analysis-color-background-with-laptop-tax-form-magnifying-glass-bundles-banknotes-isometric-icons-vector-illustration_1284-72069.jpg?ga=GA1.1.2058582480.1727075688&semt=ais_hybrid",
        brochureURL: "https://drive.google.com/uc?export=download&id=1dRs6ZQDv9ACpc0PL26SbUFtCndkgH54s",
    }
];
  
module.exports = { data: courses };