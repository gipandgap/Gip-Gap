import type { Config } from "tailwindcss";
const config: Config = { content:["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"], theme:{extend:{colors:{ink:"#17202A",muted:"#66717D",brand:"#1F5F68",brandSoft:"#E7F2F1",sand:"#F4F1EB"},boxShadow:{soft:"0 24px 70px rgba(23,32,42,.10)"}}},plugins:[]};
export default config;
