import React from "react";

const projects = [
	{
		title: "Global Capital Quiz",
		stack: "Java | Springboot | Mondodb | React | Tailwind CSS",
		description: "A dynamic website for testing geographical knowledge with multiple-choice quizzes on states and countries. Features include time tracking, user accounts for progress tracking, and a leaderboard for competitive learning.",
		githubLink: "https://github.com/arunrai3/USACapitalQuiz",
		ProjectLink: "https://google.com",
		isLive: false,
		isDeveloping: true,
		isCompleted: false,		
	},

	{
		title: "New Stock City",
		stack: "Python | Flask | React | MySQL | Tailwind CSS",
		description: "An advanced service for active traders, offering an interactive chatroom for strategy discussions. As well as a comprehensive charting platform that provides tools backtesting and deploying live market strategies.",
		githubLink: "https://github.com/arunrai3",
		ProjectLink: "https://newstockcity.com",
		isLive: false,
		isDeveloping: true,
		isCompleted: false,
	},

	{
		title: "Portfolio Website",
		stack: "TypeScript | Next JS | Tailwind CSS",
		description: "A personal portfolio website showcasing my skills and projects, utilizing cutting-edge technologies like vanta.js for interactive backgrounds, Next.js for server-side rendering, and Tailwind CSS for responsive design.",
		githubLink: "https://github.com/arunrai3/PortfolioWebsite",
		ProjectLink: "https://arunraiportfolio.com",
		isLive: true,
		isDeveloping: false,
		isCompleted: false,		
	},

	{
		title: "Path Finder Pro",
		stack: "Python",
		description: "Developed an application for optimal pathfinding, integrating Dijkstra's, Greedy, and Nearest Neighbor algorithms with custom data structures like hash tables to enhance efficiency in terms of time and space.",
		githubLink: "https://github.com/arunrai3/PathFinderPro",
		ProjectLink: "https://google.com",
		isLive: false,
		isDeveloping: false,
		isCompleted: true,		
	},
	{
		title: "Stock Market Prediction Model",
		stack: "Python | Yahoo finance API | NumPy | Pandas",
		description: "Implemented machine learning models using scikit-learn and TensorFlow, achieving over 60% prediction accuracy on AAPL stock from January to August 2023. Included detailed quantitative metrics for comprehensive data analysis.",
		githubLink: "https://github.com/arunrai3/StockMarketPredicitionModel",
		ProjectLink: "https://google.com",
		isLive: false,
		isDeveloping: false,
		isCompleted: true,		
	},

	{
		title: "Technology Career Chatbot",
		stack: "Python | OpenAI API",
		description: "Built an interactive chatbot using NLTK Libraries and integrated OpenAI API, designed to guide users in exploring technology career paths and provide personalized, real-time career resources.",
		githubLink: "https://github.com/arunrai3/TechCareerChatbot",
		ProjectLink: "https://google.com",
		isLive: false,
		isDeveloping: false,
		isCompleted: true,		
	},
	{
		title: "Appointment Manager",
		stack: "Java | MySQL",
		description: "This project helps users manage appointments through a JavaFX-based dashboard, coupled with MySQL database integration for improved data handling.",
		githubLink: "https://github.com/arunrai3/AppointmentManager",
		ProjectLink: "https://google.com",
		isLive: false,
		isDeveloping: false,
		isCompleted: true,		
	},

];

const Project: React.FC = () => {
	return (
		<div className='min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center'>
			<h1 className='text-white text-4xl lg:text-5xl font-bold  mt-12 '>
				Projects
			</h1>
			<div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20 bg-slate-950 w-full min-h-screen '>
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						title={project.title}
						stack={project.stack}
						description={project.description}
						githubLink={project.githubLink}
						ProjectLink={project.ProjectLink}
						isLive={project.isLive}
						isDeveloping={project.isDeveloping}
						isCompleted={project.isCompleted}
					/>
				))}
			</div>
		</div>
	);
};

const ProjectCard: React.FC<{
	title: string;
	stack: string;
	description: string;
	githubLink: string;
	ProjectLink: string;
	isLive: boolean;
	isDeveloping: boolean;
	isCompleted: boolean;
}> = ({ title, stack, description, githubLink, ProjectLink, isLive, isDeveloping, isCompleted }) => {
	return (
		<div className='bg-slate-950 rounded-xl p-4 glow-border relative flex flex-col'>
        {isLive && (
          <div className='absolute top-0 right-0 flex items-center mr-2 mt-2'>
            <div className='h-4 w-4 bg-green-500 rounded-full mr-2'></div>
            <p className='text-green-500 text-md font-bold uppercase'>Live on web</p>
          </div>
        )}
  
  		{isDeveloping && (
          <div className='absolute top-0 right-0 flex items-center mr-2 mt-2'>
            <div className='h-4 w-4 bg-yellow-500 rounded-full mr-2'></div>
            <p className='text-yellow-500 text-md font-bold uppercase'>In Development</p>
          </div>
        )}

		{isCompleted && (
          <div className='absolute top-0 right-0 flex items-center mr-2 mt-2'>
            <div className='h-4 w-4 bg-green-500 rounded-full mr-2'></div>
            <p className='text-green-500 text-md font-bold uppercase'>Completed (Local)</p>
          </div>
        )}
		<br></br>
		<div className="flex flex-col justify-center h-full">
		  <h3 className='tracking-wider text-white text-3xl font-bold mb-2'>
			{title}
		  </h3>
		  <p className='tracking-wider text-white text-sm font-bold mb-2 uppercase'>
			{stack}
		  </p>
		  <p className='tracking-wider text-gray-300 pr-6 font-light'>
			{description}
		  </p>
		  <div className='mt-4 flex space-x-4'>
			<a
			  href={githubLink}
			  target='_blank'
			  rel='noopener noreferrer'
			  className='tracking-wider bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-blue-600'>
			  GitHub
			</a>
			{isLive && (
            <a
              href={ProjectLink}
              target='_blank'
              rel='noopener noreferrer'
              className='tracking-wider border-blue-800 border-2 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-blue-600 hover:border-blue-800'>
              Website
            </a>
          	)}
		  </div>
		</div>
	  </div>
	);
};

export default Project;
