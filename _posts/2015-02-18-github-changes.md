---
layout: post
title:  "Github Changes"
date:   2015-02-18 00:00:00
categories: cbpp update
---
+ We're going to be shuffling around some of the files on the [GitHub](https://github.com/CBPP) repo.
Specifically, moving each package to its own repo as we go through them. For
now, if you're committing to a package that's in CBPP/cbpp, keep committing
there until it's moved into it's own.
+ Why are they being moved? --In short, poor planning. Also, I'm changing the
build format used for the packages and the file changes are drastic enough
to where the file size for a singular repo will quickly be exploding. So we're
getting ahead of it here early.
+ The first separated repo is here [CBPP/cbpp-configs](https://github.com/CBPP/cbpp-configs), thanks to **nfultz**, the new
configs keep the terminal references agnostic, so you're free to change your default to whichever
terminal you desire with significantly less configuration!
+ cb-configs (now cbpp-configs) moved to its own repo and changed to acknowledge
new theme and icons with their new names.
+ crunchbang-icon-theme (with contents of faenza-crunchbang-icon-theme) now
moved to its own repo named cbpp-icon-theme.
