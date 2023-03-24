# for every index.html file in www/vanilla-web-components replace '="/' with '="/vanilla-web-components/'
find www/vanilla-web-components -name index.html -exec sed -i 's/="\//="\/vanilla-web-components\//g' {} \;
