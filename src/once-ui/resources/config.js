const baseURL = 'www.joejanderson.dev'

const siteColor = "rgb(240, 73, 73)";

// default customization applied to the HTML in the main layout.tsx
const style = {
    theme:       'dark',        // dark | light
    neutral:     'gray',        // sand | gray | slate
    brand:       'red',        // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'red',      // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'contrast',    // color | contrast
    solidStyle:  'flat',        // flat | plastic
    border:      'playful',     // rounded | playful | conservative
    surface:     'translucent', // filled | translucent
    transition:  'all',         // all | micro | macro
    scaling:     '100',         // 90 | 95 | 100 | 105 | 110
}

// default metadata
const meta = {
    title: 'Joe Anderson',
    description: 'A portfolio website for Joe Anderson, a developer and undergraduate student at the University of Minnesota.'
}


// default open graph data
const og = {
    title: 'Joe Anderson',
    description: 'A portfolio website for Joe Anderson, a developer and undergraduate student at the University of Minnesota.',
    type: 'website'
}

// default schema data
const schema = {
    type: 'Individual',
    name: 'Joe Anderson',
    description: 'A portfolio website for Joe Anderson, a developer and undergraduate student at the University of Minnesota.',
    email: 'and10287@umn.edu'
}

// social links
const social = {
    linkedin: 'https://www.linkedin.com/in/joe-anderson-dev/',
    github: 'https://github.com/jjoej15'
}

export { baseURL, style, meta, og, schema, social, siteColor };