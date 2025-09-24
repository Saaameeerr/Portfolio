import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import todo from "../assets/img/todo.jpg";
import ecommerce from "../assets/img/ecommerce.jpg";
import calculator from "../assets/img/calculator.jpg";


export default function Projects() {
return (
<section id="projects" className="py-20 px-8 max-w-6xl mx-auto">
<h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
<div className="grid md:grid-cols-3 gap-8">

<Card  className="hover:shadow-xl transition-all">
<CardContent className="p-4">
<img src={todo} alt="project" className="rounded-lg mb-4 h-60" />
<h3 className="text-xl font-semibold mb-2">Todo</h3>
<div className="flex gap-2">
<a href="https://i-todo-seven.vercel.app"><Button size="sm">Demo</Button></a>
<a href="https://github.com/Saaameeerr/iTodo/blob/main/src/App.jsx"><Button size="sm" variant="secondary">Code</Button></a>
</div>
</CardContent>
</Card>
<Card  className="hover:shadow-xl transition-all">
<CardContent className="p-4">
<img src={ecommerce} alt="project" className="rounded-lg mb-4 h-60" />
<h3 className="text-xl font-semibold mb-2">E-Commerce</h3>
<div className="flex gap-2">
<a href="https://zay-sam.netlify.app"><Button size="sm">Demo</Button></a>
<a href="https://github.com/Saaameeerr/Ecommerce-front-end/blob/main/e-commerce/index.html"><Button size="sm" variant="secondary">Code</Button></a>
</div>
</CardContent>
</Card>
<Card  className="hover:shadow-xl transition-all">
<CardContent className="p-4">
<img src={calculator} alt="project" className="rounded-lg mb-4 h-60 w-90" />
<h3 className="text-xl font-semibold mb-2">Calculator</h3>
<div className="flex gap-2">
<a href="https://calculator-delta-gray-99.vercel.app"><Button size="sm">Demo</Button></a>
<a href="https://github.com/Saaameeerr/Calculator/blob/main/src/App.jsx"><Button size="sm" variant="secondary">Code</Button></a>
</div>
</CardContent>
</Card>
</div>
</section>
);
}