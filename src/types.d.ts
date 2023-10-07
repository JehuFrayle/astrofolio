type Project = {
    name: string,
    url: string,
    mobileImageURL: string,
    desktopImageURL: string,
    description: string,
    technologies: Technologies[]
}
type Technologies = 'HTML' | 'CSS' | 'JavaScript' | 'React' | 'NodeJS' | 'VueJS' | 'TypeScript' | 'Webpack' | 'Angular' | 'Tailwind';
type Referent = {
    name: string,
    URL: string,
    imgURL: string,
    reason?: string
}