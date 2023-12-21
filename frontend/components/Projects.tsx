import React from "react";

const projects = [
	{
		title: "New Stock City",
		stack: "Python | Flask | React | MySQL | Tailwind CSS",
		description: "An advanced service for active traders, offering AI-driven trade alerts, an interactive chatroom for strategy discussions, and a comprehensive charting platform for backtesting and deploying live market strategies.",
		githubLink: "https://github.com/arunrai3",
		ProjectLink: "https://newstockcity.com",
	},
	{
		title: "Global Capital Quiz",
		stack: "Java | Springboot | Mondodb | React | Tailwind CSS",
		description: "A dynamic website for testing geographical knowledge with multiple-choice quizzes on states and countries. Features include time tracking, user accounts for progress tracking, and a leaderboard for competitive learning.",
		githubLink: "https://github.com/arunrai3/USACapitalQuiz",
		ProjectLink: "https://google.com",
	},
	{
		title: "Portfolio Website",
		stack: "Next JS | Tailwind CSS",
		description: "A personal portfolio website showcasing my skills and projects, utilizing cutting-edge technologies like vanta.js for interactive backgrounds, Next.js for server-side rendering, and Tailwind CSS for responsive design.",
		githubLink: "https://github.com/arunrai3/PortfolioWebsite",
		ProjectLink: "https://google.com",
	},

	{
		title: "Path Finder Pro",
		stack: "Python | Django | React | PostgreSQL | HTML | CSS | Javascript",
		description: "Developed an application for optimal pathfinding, integrating Dijkstra's, Greedy, and Nearest Neighbor algorithms with custom data structures like hash tables to enhance efficiency in terms of time and space.",
		githubLink: "https://github.com/arunrai3/PathFinderPro",
		ProjectLink: "https://google.com",
	},
	{
		title: "Stock Market Prediction Model",
		stack: "Python | sickit-learn | MySQL | Flask | React | Bootstrap",
		description: "Implemented machine learning models using scikit-learn and TensorFlow, achieving over 60% prediction accuracy on AAPL stock from January to August 2023. Included detailed quantitative metrics for comprehensive data analysis.",
		githubLink: "https://github.com/arunrai3/StockMarketPredicitionModel",
		ProjectLink: "https://google.com",
	},

	{
		title: "Technology Career Chatbot",
		stack: "Python | OpenAI API | Flask | Vue.js | Bootstrap",
		description: "Built an interactive chatbot using NLTK Libraries and integrated OpenAI API, designed to guide users in exploring technology career paths and provide personalized, real-time career resources.",
		githubLink: "https://github.com/arunrai3/TechCareerChatbot",
		ProjectLink: "https://google.com",
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
}> = ({ title, stack, description, githubLink, ProjectLink }) => {
	return (
		<div className='bg-slate-950 rounded-xl  p-4 glow-border flex flex-col justify-center'>
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
					className=' tracking-wider bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-blue-600'>
					GitHub
				</a>
				<a
					href={ProjectLink}
					target='_blank'
					rel='noopener noreferrer'
					className='tracking-wider border-blue-800 border-2  text-white py-2 px-4 rounded-md transition duration-300 hover:bg-blue-600 hover:border-blue-800'>
					Website
				</a>
			</div>
		</div>
	);
};

export default Project;
