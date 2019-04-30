## @magic/example-minimal

[![Greenkeeper badge](https://badges.greenkeeper.io/magic/example-minimal.svg)](https://greenkeeper.io/)

This is a minimal example app for [@magic](https://github.com/magic) features.

at the time of writing this line, this page loads:
* 9140 bytes of javascript (3811 bytes zopfli gzipped)
* 1482 bytes of css (669 bytes zopfli gzipped)
* 571 bytes index.html (307 bytes zopfli gzipped)

#### load stats
ms are approximations:

system: firefox, linux, lenovo x280, wifi
location: vienna, austria, europe

* 4 requests (index.html, magic.js, magic.css, favicon.ico)
* 11.93 KB / 8.25 KB transferred
* Finish: 250 ms
* DOMContentLoaded: 250 ms
* load: 250 ms

[100% google pagespeed score](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fmagic.github.io%2Fexample-minimal)

[w3 css validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmagic.github.io%2Fexample-minimal%2Fmagic.css)

[w3 html validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmagic.github.io%2Fexample-minimal%2F)

actual transmitted sizes are a bit larger because for now we host on github,
which ignores static .gz files when sending compressed responses.

this will change once @magic hosts itself.

thats all.


[demo](https://magic.github.io/example-minimal)

#### install:
```bash
git clone https://github.com/magic/example-minimal
```

