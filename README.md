# crunchbangplusplus.org

This is the source code to the [#!++](https://crunchbangplusplus.org) website.

####Built with
+ [Debian](https://debian.org)
+ [Jekyll](http://jekyllrb.com)
+ [nginx](http://nginx.org/en/)
+ [Jquery](https://jquery.com/)
+ [Sass](http://sass-lang.com/)
+ [noisy.js](https://github.com/DanielRapp/Noisy)
+ [Bootstrap](http://getbootstrap.com/)

## Posting Updates
Each news items is it's own file stored in *_posts*. In order to make a new news item you must create a new file with the title *2015-01-01-title-name.md* and include this code at the top of the file.
```
---
layout: post
title:  "The Day the Crunch Stood Still"
date:   2015-02-15 00:00:00
categories: cbpp update
---
```
Below this use [markdown syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to compose your post.
After this has been created run **jekyll build** in the current directory and your update will live.  
*Be sure to save your changes back to github*!

##LICENSE
This
