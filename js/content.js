var globalData = {
    title: 'KSMVC',
    brandLogo: 'KSMVC',
    navLinks: [
        {
            name: 'About', 
            dropdown: false,
            url: '#!/about'
        },
        {
            name: 'Random', 
            dropdown: false,
            url: '#!/random'
        },
        {
            name: 'Dropdown', 
            dropdown: true,
            links: [
                {
                    name: 'Materialize',
                    url: '#!/materialize'
                },
                {
                    name: 'Error',
                    url: '#!/err'
                }
            ],
        },
    ],
    footerText: [
        'KSMVC is a pretty simple PHP MVC Framework',
        'We are now using materializeCSS and Vue.js'
    ],
    connectLinks: [
        {
            title: 'GIDCS LTD',
            url: 'https://www.gidcs.net/'
        },
        {
            title: 'My Blog',
            url: 'https://www.guyusoftware.com/'
        }
    ]
}

var indexData = {
    contents: [
        {
            class: 'parallax',
            title: 'KSMVC',
            text: 'KSMVC is a nearly dead PHP MVC Framework.',
            imageUrl: './images/background.jpg',
            buttonName: 'about us',
            url: '/',
        },
        {
            class: 'container',
            colNum: 3, // 2 or 3
            cols: [
                {
                    icon: 'flash_on',
                    title: 'Speeds up development',
                    text: [ 
                        'We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.'
                    ]
                },
                {
                    icon: 'group',
                    title: 'User Experience Focused',
                    text: [ 
                        'By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.'
                    ]
                },
                {
                    markdown: true,
                    icon: 'settings',
                    title: 'Speeds up development',
                    text: [ 
                        'We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.'
                    ]
                }
            ]
        },
    ],
}

var randomData = {
    contents: [
        {
            class: 'parallax',
            imageUrl: './images/background.jpg',
        },
        {
            class: 'container',
            colNum: 2, // 2 or 3
            cols: [
                {
                    markdown: true,
                    text: [ '# randomText' ]
                },
                {
                    markdown: true,
                    text: [ '### randomText2' ]
                },
            ],
        }
    ]
}

var materializeData = {
    contents: [
        {
            class: 'markdown',
            text: ''
        }
    ]
}

var aboutData = {
    contents: [
        {
            class: 'editor',
            text: ''
        }
    ]
}

var markdownGet = {
    'about': 'https://raw.githubusercontent.com/gidcs/ksmvc/master/README.md',
    'materialize': 'https://raw.githubusercontent.com/Dogfalo/materialize/master/README.md',
}

$.each(markdownGet, function(key, value){
    $.get(value, function(data){
        eval(key+'Data').contents[0].text = data
    })
})