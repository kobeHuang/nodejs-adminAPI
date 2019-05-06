import rename from './rename';
import upload from './upload';
import banner from './admin/banner';
import content from './admin/content';
import info from './admin/info';
import life from './admin/life';
import menu from './admin/menu';
import user from './admin/user';

export default {
    rename,
    upload,
    'admin': {
        banner,
        content,
        info,
        life,
        menu,
        user
    }
}