+++
date = '2025-01-22T10:37:12-05:00'
draft = false
title = 'Recruiting Solutions Central'
layout = 'casestudy'
slug = 'recruiting-solutions'
tools = 'Figma, AngularJS, Directus CMS'
employer = 'Charter Communications'
role = 'Consultant, wireframes, design, development'
type = 'Single page application'
designs = 'https://www.figma.com/design/LVUJSwejonV7dOXbzIzDH8Z3/Recruiting?node-id=686-750&t=NcjS6HvhTK3vVY73-1'
prototype = 'https://www.figma.com/proto/LVUJSwejonV7dOXbzIzDH8Z3/Recruiting?node-id=686-754&p=f&t=6QHJdydESe1UBQyN-1&scaling=min-zoom&content-scaling=fixed&page-id=686%3A750&starting-point-node-id=686%3A754'
image = '/images/recruiting-solutions-fp.webp'
desc = 'The Recruiting Solutions Central portal is a modern single-page application developed for the corporate recruiting team. It serves as a centralized hub for up-to-date information and comprehensive documentation on all aspects of recruiting at Charter Communications.'
+++

{{< meta-card >}}

## The problem

The corporate recruiting team at Charter Communications was responsible not only for recruiting new leadership roles within the corporate sector but also for providing vital information and documentation to recruiters across the company. To reduce the time spent in meetings and responding to emails, the team sought to create a centralized repository where other recruiters could easily access the resources they needed on their own.

## The goal

Design a visually engaging, brochure-style single-page application that is both inviting and informative, while also enabling the corporate recruiting team to easily manage and update content through a headless CMS.

## Impact

The Recruiting Solutions Central application was a success, with the recruiting team frequently updating and maintaining it on their own. One of the key achievements for me was that, after launch, I was able to step back and let the team manage the platform independently—something that was especially rewarding given my typically heavy involvement in change requests for other projects.

## Design process

### Stakeholder interview

The initial kickoff meeting provided an opportunity to collaborate with the corporate recruiting team and gather their key needs and aspirations. We identified essential must-have features and explored additional nice-to-have options, contingent on timeline feasibility.

{{< twocol >}}

{{< heading-list title="Business goals" >}}

- A central hub for all internal recruiting documents
- Document search with filtering capabilities
- Newsletter signup & newsletter archive
  {{< /heading-list >}}

{{< heading-list title="Technical requirements" >}}

- Sharepoint API integration
- Headless CMS
  {{< /heading-list >}}

{{< /twocol >}}

### Sketches

More often than not, I will sketch ideas on paper before moving to Figma. The more sketches, the better.

{{< figure src="/images/recruiting-solutions-sketch.webp" alt="Photo of UI sketches in a sketchbook" width="831" height="554" >}}

### Wireframes

I developed several wireframe variations to explore the most effective way to display information. Collaborating closely with the VP and a senior recruiter, we ensured the content was organized in the most intuitive and user-friendly manner.

{{< figure src="/images/recruiting-solutions-wf.webp" alt="Screenshot of wireframes for a web application" width="831" height="554" >}}

### Finding the right CMS

The backend engineer and I worked with our manager to identify a headless CMS that was both user-friendly and cost-effective, ensuring it met the project’s needs and budget. We went with Directus as a free option that had a lot of flexibility and documentation.

### High fidelity mockups

{{< figure src="/images/recruiting-solutions-hifi.webp" alt="Screenshot of high fidelity mockups for a web application" width="831" height="554" >}}

#### Design refresh

In late 2024, I decided to refresh this application, starting with a much-needed modern update to the homepage's look and feel. I removed the testimonials section, as it was rarely utilized.

The internal pages received minor updates to components and typography, along with an improved, more intuitive design for the newsletter archive page.

## User testing

Before launch, we conducted thorough user testing to ensure the application met all requirements and functioned smoothly across various platforms. Once the application was ready for testing, I prepared a detailed user testing document for every member of the Learning and Development team. This document served as a step-by-step guide for a bug-bashing session, outlining specific tasks and areas to test.

If possible, the team convened in a single conference room to review the document and test collaboratively, fostering a more efficient feedback process. To ensure comprehensive coverage, users were divided into groups, each focusing on specific environments: IE11, Google Chrome, Android mobile devices, and iOS. This approach allowed us to identify and address platform-specific issues, ensuring a seamless experience for all users.

## Achievements and reflections

The Recruiting Solutions Central application made a significant impact, empowering the recruiting team to take full ownership of its updates and maintenance. This was my first time building an Angular project as well as working with a headless CMS. Overall I think the project went really well. As with most new projects, I learned a lot that I can take with me to the next.

I also gained valuable consulting experience on this project, as I took full ownership of leading meetings and driving discussions—an opportunity that exceeded my involvement in previous projects.

### Headless CMS

The headless CMS we selected, while the most cost-effective option (free), proved to be less user-friendly than anticipated. It was challenging to install and maintain using their out of date doc site. It required us to write extensive documentation for the recruting team. The editing process felt more like managing a database than using a typical CMS, making it harder for the team to navigate and update content efficiently.

### Testimonials section

One of the nice-to-have features requested by the recruiting team was a testimonials section, or 'storytelling,' as they referred to it. This feature allowed users to submit their own stories. While the concept had potential, it saw little engagement, with no more than two submissions during the rest of my time at Charter.

Thank you for viewing.
