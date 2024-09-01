import { useState } from 'react';
import TechnologyCard from './components/TechnologyCard'
import heroImg from './images/3d-rendering-retro-computer.jpg'
import htmlIcon from './images/html.png'
import cssIcon from './images/css.png'
import jsIcon from './images/js.png'
import reactIcon from './images/react.png'
import vueIcon from './images/vue.png'
import tailwindIcon from './images/tailwind.png'
import scssIcon from './images/scss.png'
import gitlabIcon from './images/gitlab.png'
import githubIcon from './images/github.png'
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import BenimFirmam from './images/benimfirmam.PNG';
import LodosKaraburun from "./images/lodoskaraburun.PNG"
import OddoTex from "./images/oddotex.PNG"
import Sento from "./images/sento.PNG"
import Musaid from "./images/musaid.PNG"
import Weather from "./images/weather.PNG"
import Doviz from "./images/doviz.PNG"
import Todo from "./images/todo.PNG"

function App() {
  const downloadCv = () => {
    // PDF dosyasının yolunu belirtiyoruz
    const pdfUrl = '/reinocv.pdf';

    // Yeni bir link elemanı oluşturuyoruz
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'reinocv.pdf';

    // Linki tıklıyoruz ve ardından DOM'dan kaldırıyoruz
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const [navDropdown, setNavDropdown] = useState(false);
  return (
    <div className='container'>
      <header className='relative w-full h-screen pt-[20px]'>
        <nav className='p-[13px_40px] flex gap-[20px] items-center justify-between w-full h-[66px] rounded-[36px] bg-black'>
          <a className='font-semibold text-[20px] sm:text-[23px] leading-[100%] text-white' href="#">reino.dev</a>
          <ul className='hidden md:flex justify-center items-center gap-[20px]'>
            <li className='font-normal text-[17px] text-white'><a href="#technologies">Technologies</a></li>
            <li className='font-normal text-[17px] text-white'><a href="#experiences">Experiences</a></li>
            <li className='font-normal text-[17px] text-white'><a href="#projects">Projects</a></li>
          </ul>
          <a className='hidden md:inline-block p-[8px_32px] bg-white rounded-[16px] text-black font-normal text-[16px]' href="#footer">Contact</a>
          <svg className='md:hidden' style={{ cursor: 'pointer' }} onClick={() => setNavDropdown(!navDropdown)} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
        </nav>
        <nav className={`absolute w-full md:hidden transition-all duration-300 max-h-0 ${navDropdown ? 'max-h-[230.5px] p-[24px_40px] mt-[12px]' : 'max-h-0 p-0 m-0'} overflow-hidden flex flex-col items-center justify-center gap-[26px] bg-black rounded-[36px]`}>
          <ul className='flex flex-col items-center gap-[20px]'>
            <li className='font-normal text-[17px] text-white'><a href="#technologies">Technologies</a></li>
            <li className='font-normal text-[17px] text-white'><a href="#experiences">Experiences</a></li>
            <li className='font-normal text-[17px] text-white'><a href="#projects">Projects</a></li>
          </ul>
          <a className='p-[8px_32px] bg-white rounded-[16px] text-black font-normal text-[16px]' href="#footer">Contact</a>
        </nav>
        <section className='flex flex-col items-center justify-center gap-[50px] max-w-[740px] mx-auto py-[40px] h-[calc(100vh-86px)]'>
          <div className='section-title items-center'>
            <span className='!w-max'>👋 Welcome</span>
            <h1 className='text-center'>Hello, I'm Ali. I'm interested in the Front End field.</h1>
            <p className='text-center'>Since around September 2023, I have been providing freelance front-end services on various web projects. Currently, I am working towards becoming a full-stack web developer, and I am developing a simple online messaging application, which I plan to publish as a real project on the web.</p>
          </div>
          <div className='w-full h-full lg:h-[474px] rounded-[50px] overflow-hidden'>
            <img className='w-full h-full object-cover object-center' src={heroImg} alt="" />
          </div>
        </section>
      </header>
      <section id='technologies' className='section'>
        <div className='section-title max-w-[400px]'>
          <span>Technologies</span>
          <h1>Some of the Technologies I Use</h1>
          <p>Check out the technologies I can use and have used in previous projects.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] w-full'>
          <TechnologyCard icon={htmlIcon} title="HTML" description="HTML (Hypertext Markup Language) is a markup language that serves as the fundamental building block of web pages." />
          <TechnologyCard icon={cssIcon} title="CSS" description="CSS (Cascading Style Sheets) is a styling language used to design the appearance and layout of web pages." />
          <TechnologyCard icon={jsIcon} title="Javascript" description="JavaScript is a dynamic and high-level programming language." />
          <TechnologyCard icon={reactIcon} title="React JS" description="React is an open-source JavaScript library used for building user interfaces." />
          <TechnologyCard icon={vueIcon} title="Vue JS" description="Vue.js is an open-source tool used for building user interfaces and single-page applications (SPAs)." />
          <TechnologyCard icon={tailwindIcon} title="Tailwind CSS" description="Tailwind CSS is a utility-first CSS framework used for designing modern web pages quickly and flexibly." />
          <TechnologyCard icon={scssIcon} title="SCSS" description="(Sassy CSS) is one of the popular syntaxes of Sass (Syntactically Awesome Style Sheets) and is a preprocessor that extends the capabilities of CSS." />
          <TechnologyCard icon={gitlabIcon} title="GitLab" description="GitLab is a web-based platform used for managing software development processes, providing version control, and supporting DevOps practices." />
          <TechnologyCard icon={githubIcon} title="GitHub" description="GitHub is a Git-based version control and collaboration platform used for hosting and managing software development projects." />
        </div>
      </section>
      <section id='experiences' className='flex flex-col md:flex-row gap-[50px] justify-between w-full mt-[100px]'>
        <div className='section-title max-w-[520px]'>
          <span>Experiences</span>
          <h1>My Work Experience, Background</h1>
          <p>Areas I have worked in and services I have provided.</p>
        </div>
        <ExperienceCard history="2023 - ..." job="Freelance Front End Developer" description="- I began providing freelance front-end services for Kumsal Ajans's web projects.
- I designed and developed web projects to put my knowledge into practice and to add to my portfolio.
- My current goal is to improve my Back End skills in the web projects I develop and to reach more companies and agencies to offer services as a Freelance Fullstack Web Developer." />
      </section>
      <section id='projects' className='section items-center'>
        <div className="section-title items-center max-w-[700px]">
          <span>Projects</span>
          <h1 className='text-center'>Projects I Have Worked On</h1>
          <p className='text-center'>Projects where I applied the skills I've learned or provided freelance services.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-x-[20px] gap-y-[30px]'>
          <ProjectCard img={Musaid} projectName="Musaid" link="https://front.musaid.de/" />
          <ProjectCard img={BenimFirmam} projectName="BenimFirmam" link="https://benimfirmam.com/" />
          <ProjectCard img={LodosKaraburun} projectName="Lodos Karaburun" link="https://lodoskaraburun.com/" />
          <ProjectCard img={OddoTex} projectName="Oddo Tekstil" link="https://oddotex.com/" />
          <ProjectCard img={Sento} projectName="Sento" link="https://sento.com.tr/" />
          <ProjectCard img={Weather} projectName="Weather App" link="https://weather-app-reino.vercel.app/" />
          <ProjectCard img={Doviz} projectName="Currency Exchange Rate Tracker" link="https://doviz-kuru-takip.vercel.app/" />
          <ProjectCard img={Todo} projectName="To-Do List" link="https://reino-todo-list.vercel.app/" />
        </div>
      </section>
      <footer id='footer' className='flex flex-col pb-[20px] items-center gap-[40px] w-full mt-[100px]'>
        <div className='flex flex-col sm:flex-row gap-[30px] items-center justify-between w-full'>
          <a className='font-semibold text-[23px] text-black' href="#">reino.dev</a>
          <div className='flex gap-[20px]'>
            <a className='w-fit' target='_blank' href="https://www.instagram.com/reino.dev/">
              <div className='cursor-pointer bg-white rounded-[8px] border-[1px] border-black20 transition-all duration-300 hover:shadow-[0px_3px_4px_rgba(0,0,0,0.1)] flex items-center justify-center w-fit min-h-[40px] min-w-[40px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </div>
            </a>
            <a className='w-fit' target='_blank' href="mailto:reinodevv@gmail.com">
              <div className='cursor-pointer bg-white rounded-[8px] border-[1px] border-black20 transition-all duration-300 hover:shadow-[0px_3px_4px_rgba(0,0,0,0.1)] flex items-center justify-center w-fit min-h-[40px] min-w-[40px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
              </div>
            </a>
            <a className='w-fit' target='_blank' href="https://www.linkedin.com/in/ali-d%C3%BCzen-467405248/">
              <div className='cursor-pointer bg-white rounded-[8px] border-[1px] border-black20 transition-all duration-300 hover:shadow-[0px_3px_4px_rgba(0,0,0,0.1)] flex items-center justify-center w-fit min-h-[40px] min-w-[40px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </div>
            </a>
            <a className='w-fit' target='_blank' href="https://github.com/reinoo16">
              <div className='cursor-pointer bg-white rounded-[8px] border-[1px] border-black20 transition-all duration-300 hover:shadow-[0px_3px_4px_rgba(0,0,0,0.1)] flex items-center justify-center w-fit min-h-[40px] min-w-[40px]'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_84_3)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C15.523 0 20 4.58993 20 10.2529C20 14.7819 17.138 18.624 13.167 19.981C12.66 20.082 12.48 19.7618 12.48 19.4888C12.48 19.1508 12.492 18.0468 12.492 16.6748C12.492 15.7188 12.172 15.0949 11.813 14.7769C14.04 14.5229 16.38 13.6558 16.38 9.71777C16.38 8.59777 15.992 7.68382 15.35 6.96582C15.454 6.70682 15.797 5.66395 15.252 4.25195C15.252 4.25195 14.414 3.97722 12.505 5.30322C11.706 5.07622 10.85 4.96201 10 4.95801C9.15 4.96201 8.295 5.07622 7.497 5.30322C5.586 3.97722 4.746 4.25195 4.746 4.25195C4.203 5.66395 4.546 6.70682 4.649 6.96582C4.01 7.68382 3.619 8.59777 3.619 9.71777C3.619 13.6458 5.954 14.5262 8.175 14.7852C7.889 15.0412 7.63 15.4928 7.54 16.1558C6.97 16.4178 5.522 16.8712 4.63 15.3042C4.63 15.3042 4.101 14.3191 3.097 14.2471C3.097 14.2471 2.122 14.2341 3.029 14.8701C3.029 14.8701 3.684 15.1851 4.139 16.3701C4.139 16.3701 4.726 18.2001 7.508 17.5801C7.513 18.4371 7.522 19.2448 7.522 19.4888C7.522 19.7598 7.338 20.0769 6.839 19.9819C2.865 18.6269 0 14.7829 0 10.2529C0 4.58993 4.478 0 10 0Z" fill="#161616" />
                  </g>
                  <defs>
                    <clipPath id="clip0_84_3">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </a>
          </div>
        </div>
        <span className='font-normal text-[14px] text-center text-black70'>© 2024 Reino Dev. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;
