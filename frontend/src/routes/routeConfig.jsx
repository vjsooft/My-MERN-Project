import { lazy } from "react";

export const Home = lazy(()=> import('../pages/Home'));
export const About = lazy(()=> import('../pages/About'));
export const Services = lazy(()=> import('../pages/Services'));
export const Contact = lazy(()=> import('../pages/Contact'));

export const Login = lazy(()=>import('../pages/auth/Login'));
export const Signup = lazy(()=>import('../pages/auth/Signup'));

export const Profile = lazy(()=>import('../pages/Profile'));
