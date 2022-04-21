import * as React from "react"

import {
  LogoutIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  CloudIcon,
} from "@heroicons/react/outline"

const features = [
  {
    name: "Front-end development",
    description:
      "Always staying updated, I've been building the last apps I worked on using React and Gatsby.",
    icon: CursorClickIcon,
  },
  {
    name: "Back-end development",
    description:
      "Depending on the app, my choices for the backend are Node + Graphql, Express or Django.",
    icon: CloudIcon,
  },
  {
    name: "Native apps",
    description:
      "Using React Native, I really enjoy developing and designing hybrid native apps.",
    icon: DeviceMobileIcon,
  },
  {
    name: "Play tennis",
    description:
      "Trained to become a pro in my teen years, I left the sport to dedicate myself to filmmaking. Now I'm getting back to my favorite sport :)",
    icon: LogoutIcon,
  },
]

export default function About() {
  return (
    <div id="about" className="my-6 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Skills
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What I like to do
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            I'm a self taught programmer that started out learning vanilla
            Javascript and Python, and then moved on to explore different
            frameworks
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map(feature => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
