+++
date = '2025-01-22T10:36:57-05:00'
draft = false
title = 'IT Academy'
layout = 'casestudy'
slug = 'it-academy'
tools = 'Figma, AngularJS, Java, Amazon Web Services (RDS, API Gateway, Lambda)'
employer = 'Charter Communications'
role = 'Consulting, wireframes, design, development, logo design'
type = 'Single page application'
designs = 'https://www.figma.com/design/olA5VkrQgGw9ngSDQGa5WN/IT-Academy-Walkthough?node-id=126-2&t=jpEmPh4YnmM2is2A-1'
prototype = ''
image = '/images/it-academy-fp.jpg'
desc = 'The IT Academy portal is a sleek single-page application designed for Charter Communications IT employees. It provides quick access to definitions of terms specific to internal IT teams and includes a dedicated area for browsing IT training materials via the IT Academy, streamlining both learning and team collaboration.'
+++

{{< meta-card >}}

## Problem

## Goal

The IT Academy team aimed to create a centralized platform to store internal IT jargon, definitions, and training documents, ensuring information was easily accessible for learning and development. Their goal included providing an intuitive interface that allowed users to quickly and efficiently find information while enabling team members to seamlessly add, edit, or remove terms as needed.

## Impact

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

### Refreshed design

After several years of gaining additional experience in user experience and design, I decided to refresh this application. While I no longer had access to the original Figma file, I used old screenshots as a reference to guide the redesign process.

The updated design retains much of the original layout but introduces a modernized look and feel. The most significant change is on the dictionary page. I reimagined the layout to feature alphabetized sections of words, giving users a bird's-eye view of the dictionary's contents. As users begin filtering, the view seamlessly transitions to a clean, list-based format with definitions, enhancing usability and clarity.

### Focusing on simplicity and functionality

The primary objective for this project's design was to ensure a clean, minimalist user interface. The directive for the homepage was clear: emulate Google's simplicity by placing a prominent, central search component. Interior pages followed a consistent design pattern, featuring a left-aligned sidebar with controls and the main content displayed to the right, creating a cohesive and user-friendly experience.

{{< figure src="/images/it-academy-ui.jpg" alt="Screenshot of a dictionary application's UI" >}}

#### Sketches and wireframes

For every project, I start by sketching ideas on paper before transitioning to Figma to create wireframes for approval. While I no longer have the original Figma file for this project, the foundational process remains a critical part of my workflow.

#### Prototyping

Before moving onto high-fidelity mockups, I like to build simple prototypes in the browser to get a proof of concept. The trickiest of the bunch was the folder component, which needed to be recursive and display information from nested folders.

## Admin functionality

The IT Academy team needed functionality to add, edit, and remove dictionary items seamlessly. The application integrates Single Sign-On (SSO) to identify users and determine administrative access based on their user ID.

When an admin accesses the IT Academy portal, they are presented with additional controls on the dictionary page, including options to edit or remove existing definitions via modals. An "Add a new term" button is also available in the sidebar for creating new entries. All changes are written to the database and trigger the application to reload upon saving, ensuring updates are reflected immediately.

{{< grid-2 >}}
{{< figure src="/images/it-academy-defs-admin.jpg" alt="Screenshot of an additional admin control in an app UI" >}}
{{< figure src="/images/it-academy-admin-modal.jpg" alt="Screenshot of a modal UI for editing a dictionary term" >}}
{{< /grid-2 >}}

## User testing

Prior to launch, extensive user testing was conducted to ensure the application operated seamlessly. I led the testing process, utilizing a structured walkthrough document to guide users through the application while documenting any issues or areas for improvement. These sessions involved collaboration with both the Learning and Development team and members of the IT Academy team, ensuring a comprehensive evaluation from diverse perspectives.

## Achievements and reflections

The IT Academy portal was very well received. Multiple IT teams began to contribute to the dictionary as well as the file browser, as the portal made it much easier to find specific information.

### Lessons learned

Originally, I was asked to implement AWS Lambda functions using Java. However, this approach caused significant delays during cold starts due to Java's compilation overhead, resulting in initial page loads taking up to five seconds. To address this, I was tasked with optimizing the performance. While I managed to reduce the load time by 1-2 seconds through targeted improvements, I identified Java as the primary bottleneck. Proactively, I rewrote the Lambda functions in JavaScript, drastically improving response times. Post-optimization, REST calls became nearly instantaneous, achieving a 5x performance boost.

Thank you for viewing.
