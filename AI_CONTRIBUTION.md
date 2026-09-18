# AI Contribution Statement

## Tools Used:
Claude (Opus), used in the browser as a step-by-step tutor. GitHub Copilot's inline suggestions in VS Code - used once for a quick-fix, then disabled

## Prompts: 
Asked for walkthroughs of the setup workflow (Docker, fork/clone), explanations of class components, state, props, .map(), and callbacks before writing them;pasted terminal errors and asked what they meant rather asking for fixes; asked for two JSX lines with explainations since JavaScript hasn't been converted in class yet.

## What it got wrong 
Claude told me the child's console.log would appear in the Docker terminal. It doesn't - React runs in the browser, so it prints in the browswer console. I only found the click was working after opening DevTools.

## Reflection 
I understand the overall flow: state is managed in the parent component, props are passed down, callbacks send information back up, and setState triggers a re-render. I also fixed the Node 18 and Vite 7 compatibility issue in the Dockerfile on my own by reading through the error message and figuring out what needed to change. I typed out every line in the components myself. There are still a few things I would need to look up if I had to rebuild everything from scratch, such as spread syntax and the modulo (%) wraparound technique, but I’m reviewing those concepts after submitting the assignment.
