import { awards, education, experiences, profile, projects, skillCategories } from './data/portfolio';

function escape(value: string) {
  return value.replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
}

const symbols = {
  arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
  up: '<path d="m6 12 6-6 6 6M12 6v12"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  pin: '<path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V4H4v12h4"/>',
  education: '<path d="m2 9 10-5 10 5-10 5L2 9Zm4 2v6c4 3 8 3 12 0v-6M22 9v7"/>',
  award: '<circle cx="12" cy="8" r="5"/><path d="m8 12-1 9 5-3 5 3-1-9"/>',
};

function icon(name: keyof typeof symbols, size = 13, className = '') {
  return `<svg class="icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${symbols[name]}</svg>`;
}

function skyline(className = '', suffix = '') {
  const pattern = `skyline-windows-${suffix}`;
  return `<svg class="skyline ${className}" viewBox="0 0 680 185" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs><pattern id="${pattern}" width="10" height="12" patternUnits="userSpaceOnUse"><path d="M3 3h3v5H3z" fill="currentColor" opacity=".28"/></pattern></defs>
    <g fill="currentColor" opacity=".035"><path d="M15 166V122h25v44h13V99h30v67h16V81h34v85h15V113h30v53h30V64l20-13 20 13v102h15V94h34v72h24V43h18v123h14V106h29v60h15V77l25-17 25 17v89h13V24l17-14 17 14v142h21V82h44v84h14V115h29v51h18V94h35v72h16V128h30v38z"/></g>
    <g stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
      <path d="M0 167h680M15 167v-45h25v45m13 0V99h30v68m16 0V81h34v86m15 0v-54h30v54m30 0V64l20-13 20 13v103m15 0V94h34v73m58 0v-61h29v61m15 0V77l25-17 25 17v90m13 0V24l17-14 17 14v143m21 0V82h44v85m14 0v-52h29v52m18 0V94h35v73m16 0v-39h30v39"/>
      <path d="M99 81h34m-29 10h24m-24 9h24m-24 9h24m-24 9h24m-24 9h24m-24 9h24m-24 9h24M208 64h40m-33 9h26m-26 10h26m-26 10h26m-26 10h26m-26 10h26m-26 10h26m-26 10h26m-26 10h26M450 24v133m-11-123h22m-22 10h22m-22 10h22m-22 10h22m-22 10h22m-22 10h22m-22 10h22m-22 10h22m-22 10h22m-22 10h22m-22 10h22m-22 10h22" opacity=".55"/>
      <path d="M323 167V66m8 101V66m-12-23h16m-8-30V0"/><circle cx="327" cy="38" r="24"/><ellipse cx="327" cy="38" rx="24" ry="9"/><ellipse cx="327" cy="38" rx="12" ry="24"/><path d="M327 14v48m-23-30h46m-46 12h46" opacity=".65"/>
    </g>
    <path d="M53 100h30v66H53zM148 114h30v52h-30zM264 95h32v71h-32zM346 107h28v59h-28zM480 83h43v83h-43zM537 116h28v50h-28zM584 95h34v71h-34z" fill="url(#${pattern})"/>
    <path d="M0 179h680" stroke="currentColor" stroke-width=".6" opacity=".35"/>
  </svg>`;
}

export function renderPage(base: string) {
  const resume = escape(/^https?:\/\//.test(profile.resume) ? profile.resume : base + profile.resume.replace(/^\/+/, ''));
  const external = 'target="_blank" rel="noopener noreferrer"';
  const email = escape(profile.email);
  const github = escape(profile.github);
  const linkedin = escape(profile.linkedin);
  const nav = [
    { id: 'home', label: 'home', key: 'h' },
    { id: 'projects', label: 'projects', key: 'p' },
    { id: 'experience', label: 'work', key: 'w' },
    { id: 'skills', label: 'skills', key: 's' },
  ];

  return `
    <a class="skip-link" href="#main">Skip to content</a>
    <div class="portfolio-shell">
      <header class="site-header">
        <nav class="site-nav" aria-label="Main navigation">
          <div class="nav-links">
            ${nav.map(link => `<a href="#${link.id}" data-shortcut="${link.key}" ${link.id === 'home' ? 'aria-current="location"' : ''} title="${link.label} (Alt + ${link.key.toUpperCase()})" aria-keyshortcuts="Alt+${link.key}"><span class="nav-key" aria-hidden="true">[${link.key}]</span>${link.label}</a>`).join('')}
          </div>
          <a class="resume-link" href="${resume}" ${external} data-shortcut="r" title="Open resume (Alt + R)" aria-keyshortcuts="Alt+r"><span class="nav-key" aria-hidden="true">[r]</span>resume ${icon('arrow', 12)}</a>
        </nav>
      </header>
      <main id="main">
        <section class="hero" id="home" aria-labelledby="intro-heading">
          <div class="intro-heading">
            <div class="portrait"><img src="${base}profile.webp" alt="${escape(profile.name)}" width="78" height="78" fetchpriority="high" decoding="async"></div>
            <div><h1 id="intro-heading">${escape(profile.name.toLowerCase())}<span class="name-period">.</span></h1><p class="intro-subtitle">software engineer · backend, cloud &amp; applied ai</p></div>
          </div>
          <div class="intro-copy">
            <p>Software engineer at <a href="#experience">Goldman Sachs</a>, building Spring Boot APIs and Kafka workflows across four teams. I’ve shipped 40+ features and integrated 230+ APIs. Based in Dallas, Texas.</p>
            <p>Previously at <a href="#railpod">Railpod</a> and <a href="#avl">AVL</a>, where I built full-stack applications, automated engineering workflows, and worked on machine learning and semantic search at scale.</p>
            <p>I hold a master’s in Information Systems from Northeastern University. My work connects backend engineering, cloud infrastructure, and applied AI — turning complex problems into software that works.</p>
          </div>
          <div class="intro-meta">
            <span class="location">${icon('pin')} Dallas, TX</span><span class="meta-divider" aria-hidden="true">/</span>
            <a href="${github}" ${external}>github ${icon('arrow', 12)}</a>
            <a href="${linkedin}" ${external}>linkedin ${icon('arrow', 12)}</a>
            <a href="mailto:${email}">say hello ${icon('arrow', 12)}</a>
          </div>
          ${skyline('hero-skyline', 'hero')}
        </section>

        <section id="projects" class="content-section" aria-labelledby="projects-heading">
          <div class="section-heading"><h2 id="projects-heading">selected projects</h2><a href="${github}?tab=repositories" ${external}>all repositories ${icon('arrow', 12)}</a></div>
          ${projects.map(project => `<article class="project-row">
            <a class="project-link" href="${escape(project.githubUrl)}" ${external} aria-label="${escape(project.title)} — view source on GitHub">
              <span class="project-number" aria-hidden="true">${project.number}</span>
              <div class="project-content">
                <div class="project-title-row"><h3>${escape(project.title)}</h3>${icon('arrow', 16, 'project-arrow')}</div>
                <p class="project-summary"><span aria-hidden="true">// </span>${escape(project.summary)}</p>
                <p class="project-description">${escape(project.description)}</p>
                <p class="technology-line">${escape(project.technologies.join(' · '))}</p>
                ${project.details.length ? `<p class="project-details">${escape(project.details.join(' / '))}</p>` : ''}
              </div>
            </a>
          </article>`).join('')}
        </section>

        <section id="experience" class="content-section" aria-labelledby="experience-heading">
          <div class="section-heading"><h2 id="experience-heading">where i’ve worked</h2><span class="section-note">2019 — present</span></div>
          ${experiences.map((experience, index) => `<details class="experience-row" id="${experience.company.toLowerCase().split(' ').join('-')}" ${index === 0 ? 'open' : ''}>
            <summary>
              <span class="company-mark company-${experience.initials.toLowerCase()}" aria-hidden="true">${experience.initials}</span>
              <span class="company-info"><span class="company-name">${escape(experience.company)}${index === 0 ? '<span class="current-role">now</span>' : ''}</span><span class="company-role">${escape(experience.role)} <span aria-hidden="true">·</span> ${escape(experience.location)}</span></span>
              <span class="experience-period">${escape(experience.period)}</span>
              ${icon('chevron', 15, 'experience-chevron')}
            </summary>
            <div class="experience-body"><ul>${experience.description.map(item => `<li>${escape(item)}</li>`).join('')}</ul><p class="technology-line">${escape(experience.technologies.join(' · '))}</p></div>
          </details>`).join('')}
        </section>

        <section id="skills" class="content-section" aria-labelledby="skills-heading">
          <div class="section-heading"><h2 id="skills-heading">the toolkit</h2><span class="section-note">things i build with</span></div>
          <dl class="skills-list">${skillCategories.map(category => `<div class="skill-row"><dt>${escape(category.title)}</dt><dd>${escape(category.skills.join(' · '))}</dd></div>`).join('')}</dl>
        </section>

        <section id="education" class="content-section" aria-labelledby="education-heading">
          <div class="section-heading"><h2 id="education-heading">a little background</h2>${icon('education', 15)}</div>
          ${education.map(item => `<article class="education-row"><div class="education-title"><h3>${escape(item.university)}</h3><span>${escape(item.period)}</span></div><p class="degree">${escape(item.degree)}</p>${item.coursework.length ? `<p class="coursework">${escape(item.coursework.join(' · '))}</p>` : ''}</article>`).join('')}
        </section>

        <section id="recognition" class="content-section recognition" aria-labelledby="recognition-heading">
          <div class="section-heading"><h2 id="recognition-heading">along the way</h2>${icon('award', 15)}</div>
          ${awards.map(award => `<div class="recognition-row"><span class="recognition-star" aria-hidden="true">✳</span><div><h3>${escape(award.title)}</h3><p>${escape(award.description)}</p></div><span class="recognition-label">${escape(award.label)}</span></div>`).join('')}
        </section>

        <section id="contact" class="content-section contact" aria-labelledby="contact-heading">
          <div class="section-heading"><h2 id="contact-heading">let’s talk</h2><span class="section-note">a good conversation starts here</span></div>
          <p>Have an interesting problem, a project in mind, or just want to connect? My inbox is open.</p>
          <div class="contact-email-row">
            <a class="contact-email" href="mailto:${email}">${email}${icon('arrow', 16)}</a>
            <div class="copy-email-control">
              <button type="button" class="copy-email" hidden aria-label="Copy email address" data-email="${email}">${icon('copy')}<span class="copy-label">copy email</span></button>
              <span class="copy-status" role="status"></span>
            </div>
          </div>
          <a class="contact-phone" href="tel:${profile.phone.replace(/[^+\d]/g, '')}">${escape(profile.phone)}</a>
        </section>
      </main>

      <footer class="site-footer">
        <div class="footer-art"><span class="footer-art-label">a little corner of dallas</span>${skyline('', 'footer')}</div>
        <div class="footer-links-row">
          <div class="footer-links"><a href="${github}" ${external}>github</a><a href="${linkedin}" ${external}>linkedin</a><a href="mailto:${email}">email</a><a href="${resume}" ${external}>resume</a></div>
          <span class="local-time"><span class="time-dot" aria-hidden="true"></span><span data-clock>dallas, tx</span></span>
        </div>
        <div class="footer-bottom"><span>© <span data-year>${new Date().getFullYear()}</span> ${escape(profile.name)}</span><a href="#home">back to top ${icon('up', 11)}</a></div>
      </footer>
    </div>
  `;
}
