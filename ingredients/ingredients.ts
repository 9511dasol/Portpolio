import { StaticImageData } from 'next/image';
import mypic from './img/me/한다솔.jpg'

import C from "./img/BE/C.png";
import CPP from "./img/BE/CPP.png";
import CSHARP from "./img/BE/CSHARP.png";
import JAVA from "./img/BE/JAVA.png";
import PYTHON from "./img/BE/PYTHON.png";
import node from "./img/BE/nodejs.png";

import MongoDB from "./img/DB/MongoDB.png";
import MySQL from "./img/DB/MySQL.jpg";
import Oracle from "./img/DB/Oracle.png";
import FireBase from "./img/DB/FireBase.png";

import CSS from "./img/FE/CSS.png";
import HTML5 from "./img/FE/HTML5.png";
import jquery from "./img/FE/jquery.png";
import JS from "./img/FE/JS.png";
import REACT from "./img/FE/REACT.png";
import TS from "./img/FE/TS.png";

import ASP_dot_Net from "./img/Framework/ASP_dot_Net.png";
import Django from "./img/Framework/Django.jpg";
import dotnet from "./img/Framework/dotnet.png";
import Flask from "./img/Framework/Flask.png";
import NEXTJS from "./img/Framework/NEXTJS.png";
import Spring from "./img/Framework/Spring.png";

import git from "./img/VC/git.png";
import github from "./img/VC/github.png";
import Vercel from "./img/VC/Vercel.png";

import card from "./img/project/card.png";
import DM from "./img/project/DM.png";
import lotto from "./img/project/lotto.png";
import Minihomepage from "./img/project/Minihomepage.png";
import portfolio from "./img/project/portfolio.png";
import shop from "./img/project/shop.png";
import taja from "./img/project/taja.png";
import instclone from "./img/project/inst-clone.png";
import schooldashboard from "./img/project/sdb.png"

import pub1 from "./img/publishing/pub1.png";
import pub2 from "./img/publishing/pub2.png";




export const myPicture: StaticImageData = mypic;

interface Skills {
    lang: string;
    img: StaticImageData;
}

export interface Ingredient {
    icon: string;
    label: string;
}

export interface Project {
    title: string;
    subheading: string;
    img: StaticImageData;
    description: string;
    link: string;
}

export const frontend: Skills[] = [
    { lang: "HTML5", img: HTML5 },
    { lang: "CSS3", img: CSS },
    { lang: "React", img: REACT },
    { lang: "TypeScript", img: TS },
    { lang: "jQuery", img: jquery },
];

export const backend: Skills[] = [
    { lang: "C", img: C },
    { lang: "C++", img: CPP },
    { lang: "JavaScript", img: JS },
    { lang: "Python", img: PYTHON },
    { lang: "C#", img: CSHARP },
    { lang: "JAVA", img: JAVA },
];

export const vercon: Skills[] = [
    { lang: "Github", img: github },
    { lang: "Git", img: git },
    { lang: "Vercel", img: Vercel },
];

export const database: Skills[] = [
    { lang: "MySQL", img: MySQL },
    { lang: "MongoDB", img: MongoDB },
    { lang: "Oracle", img: Oracle },
    { lang: "FireBase", img: FireBase },
];

export const framework: Skills[] = [
    { lang: "Next", img: NEXTJS },
    { lang: "Node", img: node},
    { lang: "Flask", img: Flask },
    { lang: "Django", img: Django },
    { lang: "Spring", img: Spring },
    { lang: "ASP.NET", img: ASP_dot_Net },
    { lang: ".NET", img: dotnet },
];



export const projects: Project[] = [

    {
        title: "카드를 추천해주는 청년들",
        subheading: "Card",
        img: card,
        description: "AI(자연어 처리)를 이용한 카드 추천 웹사이트 제작",
        link: "https://github.com/9511dasol/Card",
    },
    {
        title: "영어 타자 연습",
        subheading: "Taja",
        img: taja,
        description: "영어 긴 글 타자 연습 프로그램 만들기",
        link: "https://github.com/9511dasol/Eng_Taja_Practice",
    },
    {
        title: "Lotto Program",
        subheading: "Lotto",
        img: lotto,
        description: "오픈소프트웨어를 활용한 로또 프로그램 만들기",
        link: "https://github.com/9511dasol/Lotto",
    },
    {
        title: "포트플리오",
        subheading: "Portfolio",
        img: portfolio,
        description: "포트플리오",
        link: "https://github.com/9511dasol/portfolio",
    },
    {
        title: "쇼핑몰 홈페이지",
        subheading: "For JSP",
        img: shop,
        description: "쿠팡을 참고하여 만든 쇼핑몰 홈페이지",
        link: "https://github.com/9511dasol/MiniProject",
    },
    {
        title: "싸이월드 미니홈피(클론코딩)",
        subheading: "mini Homepage",
        img: Minihomepage,
        description: "싸이월드 메인 홈페이지와 미니홈피 클론코딩",
        link: "https://github.com/9511dasol/MiniProject_2",
    },
    {
        title: "Instagram clone coding",
        subheading: "Instagram",
        img: instclone,
        description: "인스타그램을 참고하여 만든 인스타그램",
        link: "https://github.com/9511dasol/instagram-clone",
    },
    {
        title: "School Management Dashboard",
        subheading: "School Dashboard",
        img: schooldashboard,
        description: "학교, 교사, 학생들의 성과와 진행 상황을 한눈에 볼 수 있는 웹사이트",
        link: "https://github.com/9511dasol/dashboard.git",
    },
]

export const publishing: Project[] = [

    {
        title: "퍼블리싱",
        subheading: "퍼블리싱",
        img: pub1,
        description: "퍼블리싱",
        link: "https://9511dasol.github.io/Publishing/",
    },

    {
        title: "퍼블리싱",
        subheading: "퍼블리싱-animation(MODAL연구중)",
        img: pub2,
        description: "퍼블리싱(MODAL연구중)",
        link: "https://9511dasol.github.io/publishing-animaion/",
    },

]

export const allIngredients = [
    { icon: "🖼️", label: "Image" },
    { icon: "📜", label: "Explanation" },
];
// 📜: 설명 🔗:링크, 🖼️: 이미지

const [img, explanation] = allIngredients;
export const initialTabs = [img, explanation];

export function getNextIngredient(ingredients: Ingredient[]): Ingredient | undefined {
    const existing = new Set(ingredients);
    return allIngredients.find((ingredient) => !existing.has(ingredient));
}