---
layout: blocks
title: Home
permalink: "/"
js_files:
- "/assets/js/blocks.js"
- "/assets/js/index.js"
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
  text: I am a young Muslim athlete. My mission is to inspire and motivate all who
    yearn to be the best version of themselves. Life is full of lessons and we all
    experience things that make us who we are. Through this blog; I will voice who
    I am, who I've become, advise on how to deal with what life throws at us, but
    most importantly my hope is that through my experiences you can learn how to become
    the best version of  you. Together we will discover ways to move forward, grow,
    and love ourselves.
  button:
    text: About Me
    internal_link: _static/about.md
- template: recent-blog-post
  id: blog
  background_color: white
  title: Latest Blog Post
- template: recent-inspiration
  id: inspiration
  background_color: pink
  title: Inspiration

---
<!-- Modal -->
<div class="modal fade" id="newsletterModal" tabindex="-1" role="dialog" aria-labelledby="newsletterModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="newsletterModalLabel">{{site.data.general.newsletter.title}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h3 class="newsletter-title">Get the latest updates on Active Minds Yearn</h3>
        <p class="newsletter-description">{{site.data.general.newsletter.description}}</p>
        {% include mailchimp.html %}
      </div>
    </div>
  </div>
</div>