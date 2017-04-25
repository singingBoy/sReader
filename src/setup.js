import MainNavigator from './MainNavigator';
import ConfigDrawerNavigator from './ConfigDrawerNavigator';
import startUp from './utils/crawling/snwx8';

const setup =()=> {
    // TODO 初始化操作
    startUp();

    //返回routers
    return ConfigDrawerNavigator;
    // return MainNavigator;
};

export default setup