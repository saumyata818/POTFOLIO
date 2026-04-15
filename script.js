const commandInput = document.getElementById('commandInput');
const terminalBody = document.querySelector('.terminal-body');

const pages = {
  help: `Available commands:
- help             Show this help menu
- summary          Professional overview
- experience       Work history
- education        Academic background
- skills           Technical skills
- projects         Key projects
- certifications   Certifications earned
- contact          Contact information
- socials          Show GitHub and LinkedIn links
- ls               List available files
- pwd              Print working directory
- uname -a         Display system info
- cat cv           Open my CV in a new tab
- jokes            Display a random tech joke
- clear            Clear terminal output`,

  summary: `Summary:
- Aspiring DevSecOps enthusiast with a strong focus on secure software development.
- Skilled in Linux environments, CI/CD pipeline design, containerization, and web application security.
- Passionate about integrating security across the software lifecycle and delivering resilient systems.
- Focused on automation, reliability, and scalable infrastructure.`,

  experience: `Experience:
- DevOps Intern, Hazesoft Pvt. Ltd. (12/2025 – 03/2026, Baneshwor)
  • Implemented CI/CD pipelines for automated build and deployment.
  • Managed Linux systems, Git workflows, Docker, and Kubernetes.
  • Supported infrastructure reliability with development teams.

- Cybersecurity Remote Intern, Future Intern (06/2025 – 07/2025, Remote)
  • Identified vulnerabilities using OWASP ZAP, Burp Suite, and SQLMap.
  • Performed assessments, supported remediation, and monitored Splunk.
  • Built a secure file-sharing solution using AES encryption.

- New Analyst, SecurityPal (02/2025 – 05/2025, Kathmandu)
  • Supported Governance Risk and Compliance (GRC) activities, risk assessments, and compliance reviews.
  • Worked with SOC 2, ISO 27001, HIPAA, and GDPR frameworks.
  • Assisted vendor security assessments with SIG and CAIQ questionnaires.`,

  education: `Education:
- B.Sc. CSIT, Madan Bhandari Memorial College (2022 – Present)
- +2 Science, Kathmandu Model College, GPA: A (2020 – 2022)`,

  skills: `Technical Skills:
- DevOps: Docker, Kubernetes (basics), Git, GitHub, Ansible, Splunk.
- Programming: Python, SQL, HTML/CSS, React.
- Security: Web App Security Testing, Burp Suite, ZAP, OWASP Top 10, brute-force awareness.
- GRC: GDPR, HIPAA, ISO 27001, SOC 2.
- Networking: TCP/IP, NAT, DNS, DHCP, firewall basics, log and network monitoring.
- Virtualization: VMware, VirtualBox.
- Systems: Linux, Windows administration, SSH, file systems, permissions, log analysis.
- Soft Skills: communication, problem-solving, adaptability, attention to detail, analytical thinking.`,

  projects: `Projects:
- Emotion-Based Music Player (EMOCAP)
  • Developed a music player that selects songs based on detected facial emotion.
  • Built with Python, OpenCV, CNN, Tkinter, and Pygame.
  • Trained on FER2013 and automated playlist generation.

- Psono Password Management System (PPMS)
  • Created Docker Compose deployments and CI/CD automation.
  • Focused on secure credential handling, access control, and reliability.
  • Performed log analysis and troubleshooting during deployment.`,

  certifications: `Certifications:

HackerRank:
- SQL Basics (Dec 2024) Credential ID D41DF1B65A56

Stanford University:
- Supervised Machine Learning (Apr 2025)
- Advanced Learning Algorithms (May 2025)
- Machine Learning Fundamentals (May 2025) Credential ID UWKGR0F7XH4U
- CS50's Introduction to Programming with Python (Dec 2023)

DataCamp:
- Introduction to Git (Mar 2025) Credential ID 39,896,716
- Fraud Detection in Python (May 2025) Credential ID 40782940

Future Interns:
- Cyber Security Internship (Jul 2025) Credential ID FIT/JUN25/CS1967

Forage:
- Deloitte Australia Cyber Job Simulation (Jun 2025) Credential ID nvKiuaS3ju65WB527

Skillsoft — Cybersecurity and GRC:
- Certified in Cybersecurity (CC): Present Threats & Network Security Controls (May 2025) ID 142180388
- Certified in Cybersecurity (CC): Security Governance, Policies, & Controls (May 2025) ID 142089060
- Certified in Cybersecurity (CC): Data Security & System Hardening (May 2025) ID 142186438
- Certified in Cybersecurity (CC): Security Best Practices & Security Awareness (May 2025) ID 142190711
- Certified in Cybersecurity (CC): Logical Access Controls (May 2025) ID 142057521
- Certified in Cybersecurity (CC): Networking & Security Infrastructure (May 2025) ID 142084936
- Certified in Cybersecurity (CC): Incident Response (May 2025) ID 141796123
- Certified in Cybersecurity (CC): Physical Access Controls (May 2025) ID 141806643
- Certified in Cybersecurity (CC): Business Continuity Planning (Apr 2025) ID 141371145
- Certified in Cybersecurity (CC): Core Security Principles & Risk Management (Apr 2025) ID 141021352
- CISA 2022: Auditing Scenarios (Apr 2025) ID 140665985
- AWS Cloud Practitioner 2022: Core AWS Services (Apr 2025) ID 140537701
- Governance, Risk Management, and Compliance (May 2025) ID 136538605

Skillsoft — Soft Skills:
- Conveying Your Message without Words (Apr 2025) ID 139512592
- Developing Emotional Intelligence (Apr 2025) ID 139302761
- Trust Building through Effective Communication (Mar 2025) ID 138141407
- Receiving Feedback with an Open Mind (Mar 2025) ID 138138045
- Becoming a Successful Collaborator (Mar 2025) ID 137388266
- Delivering Feedback That Encourages Growth (Mar 2025) ID 137392453
- Developing a Mindset of Growth and Learning (Mar 2025) ID 137360443
`,

  contact: `Contact:
- Email: <a href="mailto:nsaumyata@gmail.com">nsaumyata@gmail.com</a>
- GitHub: <a href="https://github.com/saumyata818" target="_blank">github.com/saumyata818</a>
- LinkedIn: <a href="https://www.linkedin.com/in/saumyata-nepal-1818a5312" target="_blank">linkedin.com/in/saumyata-nepal-1818a5312</a>
- Location: Kathmandu, Nepal`,
};

const commandList = [
  ...Object.keys(pages),
  'ls',
  'pwd',
  'uname -a',
  'cat cv',
  'cat resume.txt',
  'open cv',
  'jokes',
  'clear',
  'socials',
];

function getLongestCommonPrefix(values) {
  if (!values.length) return '';
  let prefix = values[0];
  for (let i = 1; i < values.length; i += 1) {
    while (!values[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return '';
    }
  }
  return prefix;
}

const jokesList = [
  'Why do programmers prefer dark mode? Because light attracts bugs.',
  'Natraj',
  'I told my computer I needed a break. It said: “No problem — I’ll go to sleep.',
  'Why did the DevOps engineer quit? Too many deployment issues.',
  'A SQL query walks into a bar and sees two tables. It asks, “Can I join you?”',
  'Why do Java developers wear glasses? Because they don’t C#.',
  'Why did the Python developer break up with the JavaScript developer? Because they had too many issues with scope.',
  'How many DevOps engineers does it take to change a light bulb? None, it’s an infrastructure issue.',
  'Why did the programmer go broke? Because he used up all his cache.'
];

function addOutput(text) {
  const section = document.createElement('div');
  section.className = 'output';
  section.innerHTML = `<pre>${text.trim()}</pre>`;
  terminalBody.appendChild(section);
  terminalBody.scrollTop = terminalBody.scrollHeight;
}

function clearOutput() {
  const outputs = terminalBody.querySelectorAll('.output');
  outputs.forEach(node => node.remove());
  addOutput('[ OK ] Terminal output cleared. Type help to see commands.');
}

function showPage(key) {
  if (pages[key]) {
    addOutput(pages[key]);
    return;
  }

  if (key === 'ls') {
    addOutput('projects/  resume.txt  socials/\n\nHint: type cat resume.txt to view the resume');
    return;
  }

  if (key === 'socials') {
    addOutput('GitHub: <a href="https://github.com/saumyata818" target="_blank">https://github.com/saumyata818</a>\nLinkedIn: <a href="https://www.linkedin.com/in/saumyata-nepal-1818a5312" target="_blank">https://www.linkedin.com/in/saumyata-nepal-1818a5312</a>');
    return;
  }

  if (key === 'pwd') {
    addOutput('/home/saumyata/portfolio');
    return;
  }

  if (key === 'uname -a') {
    addOutput('Linux portfolio-shell 5.19.0-59-generic #59-Ubuntu SMP x86_64 GNU/Linux');
    return;
  }

  if (key === 'cat cv' || key === 'cat resume.txt' || key === 'open cv') {
    addOutput('Opening CV in a new tab...');
    window.open('cv.html', '_blank');
    return;
  }

  if (key === 'jokes') {
    const joke = jokesList[Math.floor(Math.random() * jokesList.length)];
    addOutput(`Joke: ${joke}`);
    return;
  }

  if (key === 'clear') {
    clearOutput();
    return;
  }

  addOutput(`Command not found: ${key}\nType help to see available commands.`);
}

commandInput.addEventListener('keydown', (event) => {
  if (event.key === 'Tab') {
    event.preventDefault();
    const inputValue = commandInput.value.trim().toLowerCase();
    if (!inputValue) return;

    const matches = commandList.filter((cmd) => cmd.startsWith(inputValue));
    if (matches.length === 1) {
      commandInput.value = matches[0];
      return;
    }

    if (matches.length > 1) {
      const prefix = getLongestCommonPrefix(matches);
      if (prefix.length > inputValue.length) {
        commandInput.value = prefix;
      } else {
        addOutput(`Possible completions:\n${matches.join('  ')}`);
      }
    }
    return;
  }

  if (event.key === 'Enter') {
    const value = commandInput.value.trim().toLowerCase();
    if (value) {
      showPage(value);
      commandInput.value = '';
    }
  }
});

const windowButtons = document.querySelectorAll('.window-buttons .button');
windowButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    switch (index) {
      case 0:
        addOutput('[Window] Close button clicked. Use your browser tab to close this page.');
        break;
      case 1:
        addOutput('[Window] Minimize request acknowledged. Browser windows do not support minimize from this view.');
        break;
      case 2:
        addOutput('[Window] Maximize request acknowledged. Use the browser zoom or fullscreen controls.');
        break;
      default:
        break;
    }
  });
});

commandInput.focus();
