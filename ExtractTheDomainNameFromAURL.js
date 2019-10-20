/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/
function domainName(url) {
    //your code here
    let link = []
    let str = ''
    for (let i = 0; i < url.length; i++) {
        if (url[i] != '/' && url[i] != '.') {
            str += url[i]
        } else if (url[i] == '/' || url[i] == '.') {
            if (str) {
                link.push(str)
                str = ''
            }
        }
    }
    link.push(str)
    // console.log(link, '===>>')
    let beginDomain = ['http:', 'https:', 'www']
    let found = false
    for (let j = 0; j < beginDomain.length; j++) {
        if ('www' == link[1]) {
            found = true
            return link[2]
        } else if (beginDomain[j] == link[0]) {
            return link[1]
        }
    }
    if (found == false) {
        return link[0]
    }
}
// <<<=== best practice ===>>>
/*
function domainName(url) {
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
};
*/
console.log(domainName('icann.org'), '\nicann')
console.log(domainName("www.xakep.ru"), "\nxakep");
console.log(domainName("http://google.com"), "\ngoogle");
console.log(domainName("http://google.co.jp"), "\ngoogle");
console.log(domainName("https://youtube.com"), "\nyoutube");
console.log(domainName('http://www.codewars.com/kata/'), '\ncodewars')