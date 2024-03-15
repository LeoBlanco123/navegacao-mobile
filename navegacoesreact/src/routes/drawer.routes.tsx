import {createDrawerNavigator} from '@react-navigation/drawer'
import 'react-native-gesture-handler';

import Home from '../screens/Home';
import Login from '../screens/Login';

const {Screen,Navigator} = createDrawerNavigator();

export function DrawerRotas(){

    return(
        <Navigator
            screenOptions={{
            }}
        >
            <Screen
                name='Home'
                component={Home}
            />
            <Screen
                name='Login'
                component={Login}
            />
        </Navigator>
    )
}

