---
layout: blocks
title: Home
permalink: "/"
js_file: "/assets/js/index.js"
page_sections:
- template: carousel
  id: home-carousel
  carousel_items:
  - background_image: "/uploads/1.jpg"
    title: Hi, I'm Aminata
    mini_title: About
    text: Learn more about why I started this blog.
    button:
      text: About Me
      internal_link: _static/about.md
  - background_image: "/uploads/2.jpg"
    title: Quote about Courage
    mini_title: Inspiration
    text: Check out my latest inspirational quote!
    button:
      text: Read More
      internal_link: _inspiration/march-3-2020.md
  - background_image: "/uploads/3.jpg"
    title: Demo Content and Everything
    mini_title: Featured on the blog
    text: Check out my latest blog post!
    button:
      text: Read More
      internal_link: _posts/2018-06-30-demo-content-and-everything.md
- template: image-left-text-right
  id: about
  background_color: white
  image: "/uploads/about_me.jpeg"
  title: Hi, I'm Aminata
  text: Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel
    augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis
    ornare vel eu leo. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus,
    porta ac consectetur ac, vestibulum at eros. Maecenas faucibus mollis interdum.
    Curabitur blandit tempus porttitor.
  button:
    text: About Me
    internal_link: _static/about.md
- template: image-right-text-left
  id: section_2
  background_color: pink
  image: "/uploads/6.jpg"
  title: Section 2
  text: Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel
    augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis
    ornare vel eu leo. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus,
    porta ac consectetur ac, vestibulum at eros. Maecenas faucibus mollis interdum.
    Curabitur blandit tempus porttitor.
  button:
    text: ''
    internal_link: ''
- template: recent-blog-post
  id: blog
  background_color: white
- template: centered-text-w-bg-image
  id: cta
  background_image: "/uploads/7.jpg"
  mini_title: ''
  title: Section 3
  text: Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel
    augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis
    ornare vel eu leo. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus,
    porta ac consectetur ac, vestibulum at eros. Maecenas faucibus mollis interdum.
    Curabitur blandit tempus porttitor.
  button:
    text: ''
    link: ''
- template: recent-inspiration
  id: inspiration
  background_color: pink
  title: Inspiration

---
