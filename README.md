#Jekyll Bootstrap
This is the most basic assets you need to start working on a Jekyll app using Twitter Bootstrap.
####Jekyll
Jekyll is a site site generator built in ruby. It allows you use abstraction languages such as Sass and Coffeescript. It also takes care of other things like pretty urls so no need to mess around with nginx configs. For more info check out their [offical site](http://jekyllrb.com/ "Jekyll's Offical Website").
####Bootstrap
Bootstrap is a css library/framework that is designed with mobile and responsive web design in mind. It is created and maintained by Twitter. The default css used by Jekyll is very similar but for those that are more familiar with Bootstrap it can take time learning the difference. This will hopefully side-step that. [Bootstrap's Offical Site](http//getbootstrap.com/ "BootStrap's Offical Site")

##Install
To Install, simply clone this repo using
```
git clone https://github.com/Overlandandseas/minimaljekyllbootstrap.git
```
Then run **jekyll s** to start a development WEBrick server and begin making your own static site. Start by editing *_config.yml* with all the information that pertains to your site: title, description, and such.

##Layout
The layout assumes very little about your site. If you do not wish to have a "blog" then remove *posts.html*. Do add more pages just make new .md or .html files in the pages folder and include the proper heading:
```
---
layout: page
title: Blank Page 1
permalink: /page1/
---
```
This will ensure the page is generated correctly and will automatically be populated in the navbar.
The css and everything else is also stored in the assets folder. You will need to add correct paths to *head.html* if you wish to add any more additional stylesheets or javascript files.

##License
[Jekyll](https://github.com/jekyll/jekyll/blob/master/LICENSE) and [Boottrap](https://github.com/twbs/bootstrap/blob/master/LICENSE) are both MIT licensed however this specific repo is [WTFPL](../master/LICENSE). 
