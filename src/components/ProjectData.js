import AlgoviserIMG from '../assets/icons/project-algoviser.jpg';
import NewsMonkeyIMG from '../assets/icons/project-newsmonkey.jpg';
import TranspilerIMG from '../assets/icons/project-transpiler.jpg';
import ChatAppIMG from '../assets/icons/project-chatapp.jpg';
import TextUtilsIMG from '../assets/icons/project-textutils.jpg';
import iNotebookIMG from '../assets/icons/project-inotebook.jpg';

const projectList = [
    {
        id: 'algoviser',
        title: 'Algoviser',
        type: 'Algorithm Visualizer',
        year: '2025',
        img: AlgoviserIMG,
        description: 'Interactive algorithm visualization platform',
        Modaldescription: 'An interactive algorithm visualization platform that helps students and developers understand complex algorithms through dynamic visual representations. Features step-by-step execution, customizable speed controls, and comprehensive algorithm coverage including sorting, searching, and graph algorithms.',
        approach: 'Built using React.js with custom animation libraries to create smooth, interactive visualizations. Implemented a modular architecture where each algorithm is a separate component, making it easy to add new visualizations. Used Canvas API for rendering complex graphics and animations with precise control over timing and visual effects.',
        learnings: 'Mastered advanced React concepts including custom hooks, context management, and performance optimization techniques. Gained deep understanding of algorithm complexity analysis and how to represent abstract concepts visually. Learned to create intuitive user interfaces for educational tools and the importance of clear visual feedback in learning applications.',
        difficulties: 'The main challenge was creating smooth animations while maintaining performance, especially for large datasets. Solved this by implementing efficient rendering techniques and using requestAnimationFrame for optimal performance. Another challenge was making complex algorithms understandable visually - addressed this through iterative user testing and feedback incorporation.',
        technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'CSS3 Animations', 'Responsive Design', 'Algorithm Implementation'],
        liveUrl: 'https://algoviser-five.vercel.app/',
        githubUrl: 'https://github.com/harshit-46/AlgoViser',
        duration: "3 months",
        teamSize: "Solo Project",
        status: "Completed"
    },
    {
        id: 'newsmonkey',
        title: 'NewsMonkey',
        type: 'News Application',
        year: '2023',
        img: NewsMonkeyIMG,
        description: 'Real-time news aggregation app',
        Modaldescription: 'A comprehensive news aggregation application that delivers real-time news from multiple sources. Features categorized news sections, search functionality, bookmarking system, and personalized news recommendations based on user preferences.',
        approach: 'Developed using React.js with a focus on component reusability and clean architecture. Integrated multiple news APIs to provide diverse content sources. Implemented infinite scrolling for better user experience and used React Router for seamless navigation between different news categories.',
        learnings: 'Gained extensive experience with API integration and data management in React applications. Learned about responsive design principles and mobile-first development approach. Developed skills in state management using Context API and optimizing API calls to reduce bandwidth usage.',
        difficulties: 'Managing API rate limits and handling different response formats from various news sources was challenging. Implemented caching mechanisms and error handling to ensure smooth user experience. Another challenge was optimizing image loading for better performance - solved using lazy loading and image compression techniques.',
        technologies: ['React.js', 'News API', 'Context API', 'React Router', 'Bootstrap', 'Responsive Design', 'API Integration'],
        liveUrl: '',
        githubUrl: 'https://github.com/harshit-46/News-App-React',
        duration: "3 months",
        teamSize: "Solo Project",
        status: "Completed"
    },
    {
        id: 'transpiler',
        title: 'Transpiler',
        type: 'Code Converter',
        year: '2025',
        img: TranspilerIMG,
        description: 'Language-to-language code transpiler',
        Modaldescription: 'A powerful code transpilation tool that converts code between different programming languages. Supports multiple language pairs including JavaScript to Python, C++ to Java, and more. Features syntax highlighting, error detection, and optimization suggestions.',
        approach: 'Built the core transpilation engine using abstract syntax trees (AST) for accurate code parsing and conversion. Implemented a modular plugin system where each language converter is a separate module. Used Monaco Editor for professional code editing experience with syntax highlighting and auto-completion.',
        learnings: 'Deepened understanding of programming language fundamentals, compiler design, and AST manipulation. Learned about different programming paradigms and how to map concepts between languages. Gained experience with complex text processing and pattern recognition algorithms.',
        difficulties: 'The biggest challenge was handling language-specific nuances and ensuring semantic correctness during conversion. Developed comprehensive test suites and validation mechanisms. Another difficulty was optimizing conversion speed for large codebases - implemented incremental parsing and caching strategies.',
        technologies: ['Node.js', 'AST Parsing', 'Monaco Editor', 'Express.js', 'Language Grammars', 'Compiler Design', 'Algorithm Optimization'],
        liveUrl: '',
        githubUrl: 'https://github.com/harshit-46/Transpiler',
        duration: "3 months",
        teamSize: "Solo Project",
        status: "Completed"
    },
    {
        id: 'textutils',
        title: 'TextUtils App',
        type: 'Text Utility',
        year: '2024',
        img: TextUtilsIMG,
        description: 'Text manipulation and formatting tool',
        Modaldescription: 'A comprehensive text manipulation and formatting tool with multiple utility functions. Features include text case conversion, word counting, character analysis, text formatting, find and replace, and text encryption/decryption capabilities.',
        approach: 'Developed using React.js with a focus on creating a clean, intuitive user interface. Implemented each text utility as a separate component for modularity and reusability. Used custom hooks for text processing logic and added real-time preview functionality for immediate feedback.',
        learnings: 'Enhanced JavaScript string manipulation skills and learned various text processing algorithms. Gained experience in creating user-friendly interfaces for utility applications. Developed understanding of text encoding, regular expressions, and pattern matching techniques.',
        difficulties: 'Handling large text inputs efficiently while maintaining real-time updates was challenging. Implemented debouncing and optimization techniques to ensure smooth performance. Another challenge was creating intuitive UX for multiple utility functions - solved through careful UI/UX design and user testing.',
        technologies: ['React.js', 'JavaScript', 'Regular Expressions', 'Custom Hooks', 'Bootstrap', 'Text Processing Algorithms'],
        liveUrl: '',
        githubUrl: 'https://github.com/harshit-46/TextUtils-React',
        duration: "3 months",
        teamSize: "Solo Project",
        status: "Completed"
    },
    {
        id: 'chatApp',
        title: 'Chat App',
        type: 'Real-time Chat',
        year: '2024',
        img: ChatAppIMG,
        description: 'Modern real-time messaging platform',
        Modaldescription: 'A modern real-time messaging platform with support for individual and group chats. Features include message encryption, file sharing, emoji reactions, typing indicators, online status, and message history with search functionality.',
        approach: 'Built using React.js for the frontend and Node.js with Socket.io for real-time communication. Implemented JWT authentication for secure user sessions and used MongoDB for data persistence. Created a responsive design that works seamlessly across desktop and mobile devices.',
        learnings: 'Mastered real-time communication concepts using WebSockets and Socket.io. Gained experience with full-stack development, database design, and user authentication systems. Learned about security best practices for messaging applications including data encryption and input validation.',
        difficulties: 'Managing real-time state synchronization across multiple clients was complex. Implemented efficient state management and conflict resolution strategies. Another challenge was ensuring message delivery reliability - added acknowledgment systems and offline message queuing.',
        technologies: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'JWT Authentication', 'Express.js', 'Real-time Communication'],
        liveUrl: '',
        githubUrl: 'https://github.com/harshit-46/onChat-App',
        duration: "3 months",
        teamSize: "Solo Project",
        status: "Completed"
    },
    {
        id: 'inotebook',
        title: 'iNoteBook App',
        type: 'Note Management',
        year: '2024',
        img: iNotebookIMG,
        description: 'Cloud-based note management system',
        Modaldescription: 'A comprehensive cloud-based note management system with rich text editing capabilities. Features include note organization with tags and categories, full-text search, collaborative editing, sync across devices, and export functionality to various formats.',
        approach: 'Developed using the MERN stack (MongoDB, Express.js, React.js, Node.js) with a focus on scalability and user experience. Implemented a rich text editor with formatting options and used RESTful APIs for seamless data synchronization. Added offline support with automatic sync when connectivity is restored.',
        learnings: 'Gained comprehensive experience with full-stack MERN development and database design for content management systems. Learned about implementing search functionality with text indexing and query optimization. Developed skills in creating collaborative features and handling concurrent editing scenarios.',
        difficulties: 'Implementing real-time collaborative editing while maintaining data consistency was challenging. Developed operational transformation algorithms and conflict resolution mechanisms. Another difficulty was optimizing search performance for large note collections - implemented efficient indexing and pagination strategies.',
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Rich Text Editor', 'RESTful APIs', 'JWT Authentication', 'Full-text Search'],
        liveUrl: '',
        githubUrl: 'https://github.com/harshit-46/iNotebook-React',
        duration: "3 months",
        teamSize: "Solo Project",
        status: "Completed"
    }
];

export default projectList;