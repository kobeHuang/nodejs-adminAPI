import App from './app';
import Home from './views/home';
import News from './views/news';
import Prizes from './views/prize';
import MyCampus from './views/my-campus';
import Life from './views/life';
import Works from './views/works';
import Detail from './views/detail';
import NoMatch from './views/noMatch';

export default [{
    path: '/',
    component: App,
    routes: [
        { 
            path: '/',
            component: Home,
            exact: true,
            loadData: Home.loadData,
            key: 'index'
        },
        { 
            path: '/my-campus',
            component: MyCampus,
            exact: true,
            key: 'my-campus'
        },
        { 
            path: '/news',
            component: News,
            exact: true,
            key: 'news'
        },
        { 
            path: '/prize',
            component: Prizes,
            exact: true,
            key: 'prize'
        },
        { 
            path: '/life',
            component: Life,
            exact: true,
            key: 'life'
        },
        { 
            path: '/works',
            component: Works,
            exact: true,
            key: 'works'
        },
        { 
            path: '/article/:type/:id',
            component: Detail,
            exact: true,
            loadData: Detail.loadData,
            key: 'article'
        },
        { 
            component: NoMatch
        }
    ]
}]