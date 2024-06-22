import React from "react";
import { techStackDetails } from "../Details";

const Technologies = () => {
  const {
    html,
    css,
    js,
    nextjs,
    php,
    wordpress,
    laravel,
    vue,
    nuxt,
    pinia,
    react,
    redux,
    mysql,
    postresql,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={nextjs} title="Nextjs" alt="" />
        <img src={vue} title="Vue" alt="" />
        <img src={nuxt} title="Nuxt" alt="" />
        <img src={pinia} title="Pinia" alt="" />
        <img src={php} title="Php" alt="" />
        <img src={wordpress} title="Wordpress" alt="" />
        <img src={laravel} title="Laravel" alt="" />
        <img src={react} title="React" alt="" />
        <img src={mysql} title="Mysql" alt="" />
        <img src={postresql} title="Postresql" alt="" />
        <img src={redux} title="Redux" alt="" />
        <img src={tailwind} title="Tailwind CSS" alt="" />
        <img src={bootstrap} title="Bootstrap" alt="" />
        <img src={sass} title="SASS" alt="" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={figma} title="Figma" alt="Figma" />
        <img src={npm} title="NPM" alt="NPM" />
        <img src={postman} title="Postman" alt="Postman" />
      </section>
    </main>
  );
}

export default Technologies;
