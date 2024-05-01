import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import {
	AiOutlineAntDesign,
	AiOutlineApi,
	AiOutlineCode,
} from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { IProject, IService, ISkill } from "./type";

export const services: IService[] = [
	{
		Icon: RiComputerLine,
		title: "Frontend Development",
		description:
			"I can build a beautiful and scalable <b>Web App</b> using <b>Tailwind Css</b>,<b>React.js</b> and <b>Next.js</b> ",
	},
	{
		Icon: FaServer,
		title: "Backend  Development",
		description:
			"I can handle database, server, api using <b>Node Js </b> & other popular frameworks like <b>Node and Express Framework </b>",
	},
	{
		Icon: AiOutlineApi,
		title: "API Development",
		description:
			"I can develop robust  REST API using <b>Node js</b> with <b>Express</b> using <b>Nest js Framework</b> ",
	},
	{
		Icon: AiOutlineAntDesign,
		title: "UI/UX designer",
		description:
			"Stunning user interface designer using <b>Figma</b>  and  <b>Canva</b> ",
	},
	{
		Icon: MdDeveloperMode,
		title: "Mobile App Development",
		description:
			"I can build a beautiful and scalable mobile app using <b> React Native and Expo</b>",
	},
];

export const languages: ISkill[] = [
	{
		Icon: BsCircleFill,
		name: "Python",
		level: "40%",
	},
	{
		Icon: BsCircleFill,
		name: "Java Script",
		level: "80%",
	},
	{
		Icon: BsCircleFill,
		name: "Next Js",
		level: "80%",
	},
	{
		Icon: BsCircleFill,
		name: "React Js",
		level: "70%",
	},
	{
		Icon: BsCircleFill,
		name: "Django",
		level: "30%",
	},
	{
		Icon: BsCircleFill,
		name: "Tailwind",
		level: "70%",
	},
	{
		Icon: BsCircleFill,
		name: "Node Js",
		level: "70%",
	},
	{
		Icon: BsCircleFill,
		name: "Nest Js",
		level: "60%",
	},
];

export const tools: ISkill[] = [
	{
		Icon: BsCircleFill,
		name: "Figma",
		level: "60%",
	},
	{
		Icon: BsCircleFill,
		name: "Canva",
		level: "50%",
	},
];

export const projects: IProject[] = [
	{
		id: 1,
		name: "Calculator",
		description: "This is calculator app",
		image_path: "/images/calc.png",
		github_url: "https://github.com/Jonnie-bot/React_Calculator",
		category: ["react"],
		key_techs: ["React"],
	},

	{
		id: 2,
		name: "StudyBudy",
		description: "This study web app. One could create groups of study.",
		image_path: "/images/study_budy.png",
		github_url: "https://github.com/Jonnie-bot/studybudy",
		category: ["django"],
		key_techs: ["Django"],
	},

	{
		id: 3,
		name: "MyNotes",
		description: "This notes web app. One could write notes and save.",
		image_path: "/images/notes_app.png",
		github_url: "https://github.com/Jonnie-bot/mynotes",
		category: ["react"],
		key_techs: ["React"],
	},

	{
		id: 4,
		name: "CRM",
		description: "This crm web app. One could use this for checking the leads.",
		image_path: "/images/crm_Dj.png",
		github_url: "",
		category: ["django"],
		key_techs: ["Django"],
	},
	{
		id: 5,
		name: "Web_CV",
		description: "This web portfolio.",
		image_path: "/images/myWeb_cv.png",
		github_url: "https://github.com/Jonnie-bot/MyWebCv",
		category: ["react"],
		key_techs: ["React"],
	},

	{
		id: 6,
		name: "To_Do_List",
		description:
			"This to do list web app. One could use this for writing and saving there tasks .",
		image_path: "/images/toDoList_Dj.png",
		github_url: "",
		category: ["django"],
		key_techs: ["Django"],
	},

	{
		id: 7,
		name: "Blog",
		description: "This blog web app. Blogging about charity.",
		image_path: "/images/wordpress.png",
		github_url: "",
		category: ["wordpress"],
		key_techs: ["Wordpress"],
	},

	{
		id: 8,
		name: "Chat",
		description: "This chat android app. One could use this for chatting.",
		image_path: "/images/chat_android_app.png",
		github_url: "https://github.com/Jonnie-bot/ChatApplication",
		category: ["kotlin"],
		key_techs: ["Kotlin"],
	},

	{
		id: 9,
		name: "Web Cv",
		description: "This web portfolio.",
		image_path: "/images/next.png",
		github_url: "https://github.com/Jonnie-bot/mywebnextcv",
		category: ["next"],
		key_techs: ["Next", "Tailwind", "Typescript"],
	},

	{
		id: 10,
		name: "React Native App",
		description: "Coming soon...",
		image_path: "/images/coming_soon.png",
		github_url: "",
		category: ["react native"],
		key_techs: ["React Native"],
	},
];
