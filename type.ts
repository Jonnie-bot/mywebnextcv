import { type } from "os";
import { IconType } from "react-icons";

export interface IService {
	title: string;
	description: string;
	Icon: IconType;
}

export interface ISkill {
	name: string;
	level: string;
	Icon: IconType;
}

export interface IProject {
	id: number;
	name: string;
	description: string;
	image_path: string;
	github_url: string;
	category: Category[];
	key_techs: string[];
}

export type Category =
	| "react"
	| "next"
	| "nest"
	| "node"
	| "django"
	| "react native"
	| "kotlin"
	| "wordpress";
