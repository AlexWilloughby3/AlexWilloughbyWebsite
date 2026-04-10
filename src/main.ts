import './style.css';
import { postFormalization } from './posts/formalization';

const app = document.querySelector<HTMLDivElement>('#app')!;

const pages: Record<string, string> = {
  professional: `
    <div class="section-header">
      <h2>Professional</h2>
      <div class="header-links">
        <a href="https://github.com/AlexWilloughby3" class="header-link" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/alexander-willoughby-r/" class="header-link" target="_blank">LinkedIn</a>
        <a href="mailto:alexanderwilloughbyr@gmail.com" class="header-link">Email</a>
        <a href="/Willoughby, Alexander Resume.pdf" class="resume-link" target="_blank">Resume</a>
      </div>
    </div>

    <div class="position-block">
      <h3>Quantitative Trader Intern</h3>
      <a href="https://www.imc.com/us" class="company-link" target="_blank">IMC Trading</a>
      <p class="dates">June 2026 - Aug 2026</p>
    </div>

    <div class="position-block">
      <h3>Software Engineer Intern</h3>
      <a href="https://nuvo.com/" class="company-link" target="_blank">Nuvo</a>
      <p class="dates">Jan 2026 - May 2026</p>
    </div>

    <div class="position-block">
      <h3>Teaching Assistant</h3>
      <a href="https://www.cs.cmu.edu/" class="company-link" target="_blank">Carnegie Mellon University School of Computer Science</a>
      <p class="dates">Jan 2025 - Dec 2025</p>
    </div>

    <div class="position-block">
      <h3>Software Engineer Intern</h3>
      <a href="https://www.cmegroup.com/" class="company-link" target="_blank">CME Group</a>
      <p class="dates">May 2025 - July 2025</p>
    </div>

    <div class="position-block">
      <h3>Data Contractor</h3>
      <a href="https://www.advancelocal.com/" class="company-link" target="_blank">Advance Local</a>
      <p class="dates">June 2024 - Aug 2024</p>
    </div>
  `,
  music: `
    <h2>Music</h2>

    <div class="song-block">
      <h3>Satellite Stone and Rail Performance</h3>
      <p class="credits">Perfomers: Dennis P, Hima B, Mason C, Maggie R, Adrian K, Alex W</p>
      <div class="video-embed">
        <iframe
          src="https://www.youtube.com/embed/jw2oy8ApOQg"
          title="Song Title"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    </div>

    <div class="song-block">
      <h3>Sad and Lonely Boy</h3>
      <p class="credits">Composers and Performers: Alex W and Dennis P</p>
      <div class="video-embed">
        <iframe
          src="https://www.youtube.com/embed/JcCos4vfqCk"
          title="Song Title"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    </div>
  `,
  writing: `
    <h2>Writing</h2>

    <div class="post-item">
      <a href="#post-formalization" class="post-title">The Case for Formal Software in the Age of AI Agents</a>
      <span class="post-date">April 2026</span>
    </div>
  `,
  'post-formalization': postFormalization,
  about: `
    <img src="/Alex.jpg" alt="Alex" class="profile-photo" />
    <h2>About</h2>
    <p>Hello!</p>
    <p>My name is Alexander Willoughby and I'm a third-year student at Carnegie Mellon University studying math and computer science. I'm particularly interested in analysis, logic, and their applications to computer science and machine learning. I built this site to share some of my work and projects.</p>
  `,
};

function render() {
  const page = window.location.hash.slice(1) || 'professional';
  const content = pages[page] || pages.professional;

  app.innerHTML = `
    <nav>
      <a href="#professional" class="${page === 'professional' ? 'active' : ''}">Professional</a>
      <a href="#music" class="${page === 'music' ? 'active' : ''}">Music</a>
      <a href="#writing" class="${page === 'writing' || page.startsWith('post-') ? 'active' : ''}">Writing</a>
      <a href="#about" class="${page === 'about' ? 'active' : ''}">About</a>
    </nav>

    <main>
      ${content}
    </main>
  `;
}

window.addEventListener('hashchange', render);
render();
