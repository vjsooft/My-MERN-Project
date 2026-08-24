import { lazy } from "react";

export const Home = lazy(()=> import('../pages/share-page/Home'));
export const About = lazy(()=> import('../pages/share-page/About'));
export const Services = lazy(()=> import('../pages/share-page/Services'));
export const Contact = lazy(()=> import('../pages/share-page/Contact'));

export const Login = lazy(()=>import('../pages/auth/Login'));
export const Signup = lazy(()=>import('../pages/auth/Signup'));
