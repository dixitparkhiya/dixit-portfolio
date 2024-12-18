import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import ShineBorder from "@/components/ui/shine-border";
import Link from "next/link";
import Markdown from "react-markdown";
import EmailCopy from "@/components/EmailCopy";
import HireMe from '@/components/hireMe'

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              {/* <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={
                  <>
                    Hi, 
                    I&apos;m {' '}
                    <span
                      className={cn(
                        `inline animate-gradient retro-2  bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                      )}
                    >
                      {DATA.name}
                    </span>
                    
                  </>
                }
              /> */}
              <BlurFade 
                delay={BLUR_FADE_DELAY}
                
                // yOffset={8}
              >
                <div className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, 
                  I&apos;m {' '}
                  <span
                    className={cn(
                      `inline animate-gradient retro-2  bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                    )}
                  >
                    {DATA.name}
                  </span>
                </div>
              </BlurFade>
              <div className="h-1"></div>
              <BlurFadeText
                className="max-w-[600px] md:text-lg "
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border shadow-lg">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About ✨</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-base text-muted-foreground dark:prose-invert">
            {/* {DATA.summary} */}
          </Markdown>
          <div className="prose max-w-full text-pretty font-sans text-base text-muted-foreground dark:prose-invert">
          Experienced Software Developer with an <span className="sunset-2 font-semibold">MTech in Computer Science from IIT Madras</span> and hands-on experience at <span className="sunset-2 font-semibold">Crayon Data</span>. Skilled in React, Next.js, FastAPI, Docker, and Kubernetes. Strong background in building dynamic UIs, backend services, and scalable architectures.
          </div>
        </BlurFade>
        
      </section>

      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <HireMe/>
      </BlurFade>
      
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience 🧑🏻‍💻</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education 🎓</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills 🛠</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {/* {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))} */}
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
              <Marquee pauseOnHover className="[--duration:30s] p-1">
              {DATA.skills.slice(0, DATA.skills.length/3).map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
              </Marquee>
              <Marquee pauseOnHover className="[--duration:30s] p-1" reverse>
              {DATA.skills.slice(DATA.skills.length/3,2*DATA.skills.length/3,).map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
              </Marquee>
              <Marquee pauseOnHover className="[--duration:30s] p-1">
              {DATA.skills.slice(2*DATA.skills.length/3,).map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white dark:from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                {/* <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div> */}
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  // video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      {/* <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section> */}
      <section id="contact ">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} 
            className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <div className="space-y-3">
              {/* <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div> */}
              <br/>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl ">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">

                {/* You’re welcome to connect with me on  {" "}<Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-blue-500 retro-2 hover:underline"
                >
                 LinkedIn
                </Link> or 
                email me at <span className="coffee-2">parkhiyadixit@gmail.com</span> with any questions. 
                I’ll do my best to reply as soon as I can! */}
                You’re welcome to connect with me on{" "}
            <Link
              href={DATA.contact.social.LinkedIn.url}
              className="text-blue-500 retro-2 hover:underline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>{" "}
            or email me at{" "}
            <EmailCopy className="retro-3"/>{" "}
            with any questions. I’ll do my best to reply as soon as I can!
              </p>
              <br/>
            </div>
            </ShineBorder>
            
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
