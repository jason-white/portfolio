+++
date = '2025-01-22T10:36:57-05:00'
draft = false
title = 'IT Academy Portal'
layout = 'casestudy'
slug = 'it-academy'
tools = 'Figma, AngularJS, Java, Amazon Web Services (RDS, API Gateway, Lambda)'
employer = 'Charter Communications'
role = 'Consulting, wireframes, design, development, logo design'
type = 'Single page application'
designs = ''
prototype = 'https://www.figma.com/proto/olA5VkrQgGw9ngSDQGa5WN/IT-Academy-Walkthough?node-id=126-5&t=l75Tmqy0SsU5ari9-1&scaling=min-zoom&content-scaling=fixed&page-id=126%3A2&starting-point-node-id=126%3A5'
image = '/images/it-academy-ui.webp'
desc = 'The IT Academy portal is a sleek single-page application designed for Charter Communications IT employees. It provides quick access to definitions of terms specific to internal IT teams and includes a dedicated area for browsing IT training materials via the IT Academy, streamlining both learning and team collaboration.'
+++

{{< meta-card >}}

## Problem

The IT Academy team struggled with scattered and inconsistent information storage, making it challenging for employees to access up-to-date documentation and training materials. Additionally, the internal IT teams relied heavily on jargon specific to Charter Communications, which further emphasized the need for a consolidated resource. This lack of a centralized system resulted in slower onboarding and training processes, along with an increased dependency on senior staff for clarification.

## Goal

The IT Academy team aimed to create a centralized platform to store internal IT jargon, definitions, and training documents, ensuring information was easily accessible for learning and development. Their goal included providing an intuitive interface that allowed users to quickly and efficiently find information while enabling team members to seamlessly add, edit, or remove terms as needed.

## Impact

The IT Academy portal enabled multiple IT teams to centralize training and onboarding, reducing redundancy and improving knowledge transfer. By keeping all resources in one place, new hires could onboard more efficiently, and existing team members had quick access to up-to-date documentation and learning materials. This streamlined approach led to faster ramp-up times, reduced training overhead, and improved overall team productivity.

The demo of the application was extremely well-received, with other IT teams immediately expressing interest in adding their own terms to the database, further expanding its value across the organization.

The application also garnered high praise from the Executive Vice President of Software Development and IT, highlighting its effectiveness and potential impact within Charter Communications.

## Design process

At the start of the project, much of the initial information was communicated through my director, who had been closely collaborating with the IT Academy team on various ongoing initiatives. Once the requirements and timeline were finalized, I dove into brainstorming and developing concepts for the portal. To ensure alignment and maintain momentum, I held weekly meetings with a member of the IT Academy team. These sessions not only provided progress updates but also served as a creative space to exchange ideas and refine the vision for the project.

{{< twocol >}}

{{< heading-list title="Business goals" >}}

- A dictionary of internal IT terms specific to Charter Communications
- A search feature that provided results for both term definitions as well as files stored on Cherwell
- Filter dictionary quickly and efficiently
  {{< /heading-list >}}

{{< heading-list title="Administrative needs" >}}

- Capability to add, edit, and delete dictionary terms
  {{< /heading-list >}}

{{< heading-list title="Technical requirements" >}}

- Cherwell API integration
- Custom API via AWS API Gateway and Lambda functions
- Database storage for all dictionary terms via AWS RDS
  {{< /heading-list >}}

{{< /twocol >}}

### Focusing on simplicity and functionality

The primary objective for this project's design was to ensure a clean, minimalist user interface. The directive for the homepage was clear: emulate Google's simplicity by placing a prominent, central search component. Interior pages followed a consistent design pattern, featuring a left-aligned sidebar with controls and the main content displayed to the right, creating a cohesive and user-friendly experience.

### Refreshed design

<two-up class="my-two-up radius shadow">
    <img alt="Screenshot of a dictionary application's original front page UI" src="/images/it-academy-og-fp.webp">
    <img alt="Screenshot of a dictionary application's new front page UI" src="/images/it-academy-fp.webp">
</two-up>

After several years of gaining additional experience in user experience and design, I decided to refresh this application. While I no longer had access to the original Figma file, I used old screenshots as a reference to guide the redesign process.

The updated design retains much of the original layout but introduces a modernized look and feel. The most significant change is on the dictionary page. I reimagined the layout to feature alphabetized sections of words, giving users a bird's-eye view of the dictionary's contents. As users begin filtering, the view seamlessly transitions to a clean, list-based format with definitions, enhancing usability and clarity.

I added a copy button to each term in the list of definitions, allowing users to quickly copy the content to their clipboard. While this feature wasn’t originally requested, I felt it would be a useful addition for easy access to definitions. I also included a copy button in the definition modal for consistency.

{{< grid-2 >}}
{{< figure src="/images/it-academy-def-list.webp" alt="Screenshot of IT definitions within the UI" width="404" height="438">}}
{{< figure src="/images/it-academy-modal.webp" alt="Screenshot of a modal UI for displaying a dictionary term" width="404" height="438" >}}
{{< /grid-2 >}}

#### Sketches and wireframes

For every project, I start by sketching ideas on paper before transitioning to Figma to create wireframes for approval. While I no longer have the original Figma file for this project, the foundational process remains a critical part of my workflow.

#### Prototyping

Before moving onto high-fidelity mockups, I like to build simple prototypes in the browser to get a proof of concept. The trickiest of the bunch for this particular project was the folder component, which needed to be recursive and display information from nested folders.

## Admin functionality

The IT Academy team needed functionality to add, edit, and remove dictionary items seamlessly. The application integrates Single Sign-On (SSO) to identify users and determine administrative access based on their user ID.

When an admin accesses the IT Academy portal, they are presented with additional controls on the dictionary page, including options to edit or remove existing definitions via modals. An "Add a new term" button is also available in the sidebar for creating new entries. All changes are written to the database and trigger the application to reload upon saving, ensuring updates are reflected immediately.

{{< grid-2 >}}
{{< figure src="/images/it-academy-defs-admin.webp" alt="Screenshot of an additional admin control in an app UI" width="404" height="438">}}
{{< figure src="/images/it-academy-admin-modal.webp" alt="Screenshot of a modal UI for editing a dictionary term" width="404" height="438" >}}
{{< /grid-2 >}}

## User testing

Prior to launch, extensive user testing was conducted to ensure the application operated seamlessly. I led the testing process, utilizing a structured walkthrough document to guide users through the application's happy path, while documenting any issues or areas for improvement.

Users would be grouped based on testing criteria, such as specific browsers for consistency, mobile devices for responsive behavior, and keyboard-only navigation to ensure adherence to WCAG 2.1 standards.

These sessions involved collaboration with both the Learning and Development team and members of the IT Academy team, ensuring a comprehensive evaluation from diverse perspectives.

This served as a final round of testing before addressing any remaining bugs, and launching the application.

## Achievements and reflections

The IT Academy portal was very well received. Multiple IT teams began to contribute to the dictionary as well as the file browser, as the portal made it much easier to find specific information.

### Lessons learned

Originally, I was asked to implement AWS Lambda functions using Java. However, this approach caused significant delays during cold starts due to Java's compilation overhead, resulting in initial page loads taking up to five seconds. To address this, I was tasked with optimizing the performance. While I managed to reduce the load time by 1-2 seconds through targeted improvements, I identified Java as the primary bottleneck. Proactively, I rewrote the Lambda functions in JavaScript, drastically improving response times. Post-optimization, REST calls became nearly instantaneous, achieving a 5x performance boost.
