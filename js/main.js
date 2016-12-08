var readyFunc = function(){
    if($('.drag-target').length==0){
        $('.button-collapse').sideNav();
    }
    $('.parallax').parallax();
    $(".dropdown-button").dropdown();
    $('.collapsible').collapsible();
    $('select').material_select();
    $('.materialize-textarea').trigger('autoresize');
    $('.indicator').addClass('teal');
    $('.nav-link').click(function() {
        //console.log('nav-link')
        $("html,body").animate({ scrollTop: 0 }, 100);

    });
    $('.nav-mobile-link').click(function() {
        $("html,body").animate({ scrollTop: 0 }, 100);
        $('.button-collapse').sideNav('hide');
    });
}

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
});

var header = new Vue({
    el: '#header',
    data: { 
        title: globalData.title,
        description: globalData.description,
        brandLogo: globalData.brandLogo,
        navLinks: globalData.navLinks,
    },
    created: function() {
        document.title = this.title
    },
})

var footer = new Vue({
    el: '#footer',
    data: { 
        brandLogo: globalData.brandLogo,
        footerText: globalData.footerText,
        connectLinks: globalData.connectLinks,
    }
})

var vm = new Vue({
    el: '#app',
    data: { 
        contents: {},
    },
    updated: function(){
        readyFunc()
    }
})

var routes = [
    { path: '/', component: indexData },
    { path: '/about', component: aboutData },
    { path: '/random', component: randomData },
    { path: '/materialize', component: materializeData }
]

var routesFunc = function(routes){
    var currentRoute = window.location.hash
    var isRoute = false
    if(currentRoute==''){
        location = '#!/'
        return
    }
    for (var i in routes) {
        if(currentRoute == '#!'+routes[i].path){
            isRoute = true
            vm.contents = routes[i].component.contents
            break
        }
    }
    if(isRoute==false){
        vm.contents = {}
    }
}

window.addEventListener("hashchange", function(){
    routesFunc(routes)
})
routesFunc(routes)