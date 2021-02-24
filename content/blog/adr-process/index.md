---
title: Document your technical improvements to make them a success 🎯
date: "2020-12-15T23:03:00.121Z"
---

Many software companies are facing the same problem:

**How to prioritize Non-functional requirements vs Functional requirements?**

Let's explain first which is the difference between these requirements:

- _Functional requirements_: Come from user expectations. Example: Product feature development.
- _Non-functional requirements_: Define the system quality attributes. Example: Architecture evolution.

With the same criticality level, functional projects often looks more urgent than non-functional projects.

**The underlying reason come from the fact that non-functional projects are not as well managed as functional ones.**

- User needs are clear and documented _vs._ Engineers' needs are in the engineers' minds.
- The product roadmap is defined for the next 3 months _vs_. Non-functional projects are coming when we will have time.

The second point is inherent to the first. Lack of visibility does not give the same priority to a project.

# Use the documentation as a tool.

Using documentation to build on have many benefits in large companies.

### Having one channel to share and align people.

There are plenty of ways to share ideas in a company. It could be on Slack, JIRA, with a Pull Request or even during a coffee discussion.

Having one channel **regroups knowledge and facilitates building**.

### Include engineers in decision process.

The code base is the day-to-day engineers' tool. It is crucial to let them participate in the evolution of their platforms. **It creates ownership and better adoption of the evolutions**.

Communicating earlier also prepares engineers for later. It is much easier to participate in a project that is still under consideration than in an RP that took a month to develop.

### Educating engineers.

Sharing ideas on a dedicated channel is nice for engineers to learn practices.

Besides, **writing is a wonderful exercise to reinforce knowledge**. It helps to pose technical problems and solutions in a structured manner.

### Build your software history.

Understanding the origin and the timeline of past decisions is priceless in a company. There is nothing better than the written word to preserve the traces of the past.

[It's a perfect way to create empathy](https://firstround.com/review/empathy-driven-development-how-engineers-can-tap-into-this-critical-skill/) by understanding why old decisions were made.

## AD(R) as a template.

> An architectural decision record (ADR) is a document that captures an important architectural decision made along with its context and consequences. [[source]](https://github.com/joelparkerhenderson/architecture_decision_record)

**The AD is an excellent model to open a discussion with a structured description that makes it clear to everyone.**

It is the starting point for expressing intent and allowing people to share their opinions and build on them.

You can use [GitHub's issues](https://guides.github.com/features/issues/) or [discussions](https://github.blog/2020-05-06-new-from-satellite-2020-github-codespaces-github-discussions-securing-code-in-private-repositories-and-more/#discussions) as a tool to run this process. It's nice for writing, organizing, commenting and reacting with emojis.

Any engineer who wants to propose an idea can create a document.

## 📝 Template

1. **Context / Problems:** What is the actual problem of the system?
   Describe what is going wrong. **Why** is the current implementation problematic?
2. **Proposition:** How do you think it can be improved?
   Describe how you would like to improve the architecture. Present a plan, add diagrams. The more you're clear, the more you convince that it is a good proposition.
3. **Benefits:** Summary of how it will improve the system.
   Bullet point of good impacts that this proposition will address.
4. **Limitation:** How could the project be risky?
   Each solution has some limitations. List the different difficulties we could face on during the implementation (complexity/maintenance/lack of shared knowledge...).
5. **Deadlines**: When do you think it could be done?
6. **References:** Add relative links to other ADR, articles, videos, documentation or code.

## ⚡️ Process

The proposer has to lead this pretty simple process:

1. Open and complete the template.
2. Share it and invite commenting and reactions on the proposal.
3. When a Go is decided: Organize, animate and communicate about project progression.
4. Deliver it.
5. Celebrate 🎉.

## 🦄 Some simple rules

To make this process a success, there is some easy rules you can keep in mind:

- Do not edit original post, build in comments.
- Have a discussion if you're start struggling on writing. Then write the meeting note in a comment.
- Agree to be able to disagree on a proposition.

As any project, be sure that engineers adopt it.

**It is engineers' participation that will make it successful by creating a virtuous synergy**.

You can nominate facilitators for the process to help people work with it.

**Each proposition should be small enough** to be done in a short term.

For example, a framework migration which implies a full codebase modification cannot be treated by only one document.

This could be, at least, the beginning of a discussion on how to divide the work and conduct to the opening of other ADRs.

# Conclusion

With a better visibility, it is easier to talk about non-functional projects with leads and products.

You can defend them by collecting and sharing engineering feedback. You can also include these projects in the roadmap.

And don't forget to communicate on their success 🎉.

This process can be extended for all decisions that has to be taken in a company. From product features to company organization.

**A teammate said once: “ADR is like having a technical discussion at the coffee machine.”**

At the exception that is it in a more constructive and inclusive way.
