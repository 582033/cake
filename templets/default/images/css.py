import urllib2, re, os
def css (url):
    con = urllib2.urlopen(url)
    content = con.read()
    css = re.findall("url\((http:.*)\)", content)
    print content
    for cs in css:
        os.system('wget ' + cs)

css('http://shop.aiju.com/app/shop/css/aiju_sc_index.css')
