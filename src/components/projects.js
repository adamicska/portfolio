import * as React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"

const projects = [
  {
    name: "Bricklayer",
    role: "Lead Developer",
    stack: "Django + React.js",
    description:
      "Company management app to ease the life of building contractors. Has everything from inventory, payroll, accounting to sales, plus many reports.",
    github: "#",
    website: "",
  },
  {
    name: "Every Market Media",
    role: "Frontend Developer",
    stack: "Express.js + React.js",
    description: "Marketing data app with a big db for marketing agencies.",
    github: "https://portal.everymarketmedia.com/login",
    website: "https://everymarketmedia.com",
  },
  {
    name: "Matchapp",
    role: "Lead Developer",
    stack: "Node.js + Graphql + React.js",
    description:
      "Currently under development, this app is designed to match tennis, and other raquet sport players at similar levels, so they can meet and play.",
    github: "#",
    website: "#",
  },
  {
    name: "Portfolio app",
    role: "Fullstack Developer",
    stack: "Gatsby.js",
    description:
      "Optimized app to work as my personal presentation/portfolio website.",
    github: "https://github.com/adamicska/portfolio",
    website: "https://adamicska.dev",
  },
]

export default function Projects() {
  return (
    <div className="my-6 py-12 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Projects
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What I've been doing
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Diversity is the motto of my work experience. I enjoy getting
            involved in different kind of projects that stimulate my problem
            solving skills to always stay creative
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {projects.map(project => (
              <div
                key={project.name}
                className="relative bg-white shadow overflow-hidden sm:rounded-lg"
              >
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 lg:text-center">
                    {project.name}
                  </h3>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Role
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {project.role}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Role
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {project.stack}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Description
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {project.description}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500"></dt>
                      <dd className="mt-1 sm:mt-0 sm:col-span-2">
                        <a
                          href={project.github}
                          className=" p-1 rounded-full text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                          <FontAwesomeIcon
                            icon={faGithubAlt}
                            className="mx-2"
                            size="lg"
                          />
                        </a>
                        <a
                          href={project.website}
                          className=" p-1 rounded-full text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                          <FontAwesomeIcon
                            icon={faGlobe}
                            className="mx-2"
                            size="lg"
                          />
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
