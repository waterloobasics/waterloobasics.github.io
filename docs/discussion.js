const discussion__svg = document.querySelectorAll("#discussion__svg path");

for (let i = 0; i < discussion__svg.length; i++) {
    console.log(`Letter ${i} is ${discussion__svg[i].getTotalLength()}`)
}
