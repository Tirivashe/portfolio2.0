import React from 'react'
import Bar from '../components/Bar'
import { languages, tools } from '../data'
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation } from '../animations'
import Head from 'next/head'

const Resume = () => {

  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-6 py-2"
    >
      <Head>
        <title>Web Dev Portfolio | Resume</title>
      </Head>
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 font-bold text-md">
              BSc. in Computer Science (2015-2019)
            </h5>
            <p className="font-semibold">Lipscomb University</p>
            <p className="my-3">
              Completed a 4-year degree in Computer Science with a concentration
              in Mobile Development
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Latest Experience</h5>
          <div>
            <h5 className="my-2 font-bold text-md">React Web Developer</h5>
            <p className="font-semibold">
              Letshego Holding Limited (2022-Present)
            </p>
            <p className="my-3 text-sm">
              Developed responsive web application using React, HTML5, CSS3, and
              JavaScript, and associated JavaScript frameworks, for desktop,
              tablet, and mobile platforms
            </p>
          </div>
        </motion.div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h6 className="my-3 text-xl font-bold">Languages & Frameworks</h6>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h6 className="my-3 text-xl font-bold">Tools And Software </h6>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Resume
