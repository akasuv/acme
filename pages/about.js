import { track } from "@amplitude/analytics-browser";

track('Page View', { url: '/about' });

const About = () => {
    return <h1>About Page</h1>
}

export default About;