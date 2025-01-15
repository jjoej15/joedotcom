# Portfolio Website

A continuous project, I built this site to show off my work, school, and project experiences and also make it easier for
potential employers or collaborators to get to know me. I also viewed it as an opportunity to enhance my web development skills.
As of right now it only has a front-end, which is written in TypeScript and built using Next.js, MDX, and SASS for styling. For
ease-of-development I decided to use a component library, and I went with Once UI because of it's emphasis on easy styling 
and accessibility. Website deployed at https://joejanderson.dev

## Table of Contents

- [Local Installation](#local-installation)
- [Development](#development)
- [Technologies Used](#technologies-used)

## Local Installation
This requires you to have Git and Node.js installed.

To run the front-end locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/jjoej15/joedotcom.git
   cd joedotcom
   ```

2. **Install dependencies and start development server:**
   ```sh
   npm install
   npm run dev
   ```

3. **Open on local server**

## Development

Feel free to use the source code for this site as a template. Having a working knowledge of React and Next.js' routing system is necessary. For help with Once UI components, refer to their [docs](https://once-ui.com/docs). Here's how you can customize the content and create your own portfolio website:

### Site Layout and Styling
- Navigate to ```src/app/layout.tsx``` to edit site layout
- Navigate to ```src/once-ui/resources/config.js``` to edit themes, default styling, and metadata
- Navigate to ```public/images``` and replace ```favicon.ico``` to change website favicon
- Edit SASS files in ```src/app/styles``` to change styling for specific components

### Home Page
- Navigate to ```src/app/page.tsx``` to change Home page bio
- Navigate to ```src/app/assets/images``` and replace ```headshot.jpg``` to change Home page headshot image
- Navigate to ```src/once-ui/modules/layout/Header.rsx``` to change site title in site header
- Navigate to ```src/app/components/LinkButtons.tsx``` to change site link buttons in Header and Footer
- Navigate to ```src/app/components/Footer.tsx``` to change Footer

### Experiences
- Navigate to ```src/app/assets/experiences.ts``` to edit experiences on Experiences page

### Projects
- Navigate to ```src/app/assets/projects.ts``` to edit projects on Projects page
- To create custom projects pages, create new folder in ```src/app/projects```
- Then create ```page.tsx``` inside new folder 
- Copy + paste code from ```src/app/projects/wings/page.tsx``` into ```page.tsx``` to get started
- Navigate to ```src/app/assets/markdown``` to create MDX markdown content to embed into specific project pages

### Contact
- Navigate to ```src/app/contact/page.tsx``` to edit contact infomation on Contact page

### Images
- Add images into ```src/app/assets/images```
- Edit ```src/app/assets/images/index.ts``` to easily import images throughout project

## Technologies Used

- Front-end code written in [**TypeScript**](https://www.typescriptlang.org/)
- [**Next.js**](https://nextjs.org/) as a reactive web framework
- [**SASS**](https://sass-lang.com/) for easy styling
- [**MDX**](https://mdxjs.com/) for creating markdown content with JSX components
- [**Once UI**](https://once-ui.com/) for their component library
- Website deployed to [**Vercel**](https://vercel.com/)
