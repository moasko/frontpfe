import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen    from './screens/SplashScreen';
import AuthContext from './AuthContext';
import SignAd from './screens/adminScreens/signad';
import AcceuilAd from './screens/adminScreens/Acceuil';
import {AuthReducer,initialState} from './reducers/authReducers'
const Stack =  createNativeStackNavigator();


export default function Routes () {

    const [state, dispatch] = React.useReducer(
        AuthReducer,
        initialState
      );
      React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
            const bootstrapAsync = async () => {
                let userToken;
    
                try {
                    userToken = await AsyncStorage.getItem('userToken');
                } catch (error) {
                // Restoring token failed
                    console.log("Routes | useEffect | error: ", error);
                }
    
                // After restoring token, we may need to validate it in production apps
    
                // This will switch to the App screen or Auth screen and this loading
                // screen will be unmounted and thrown away.
                dispatch({ type: 'RESTORE_TOKEN', token: userToken });
            };
    
            bootstrapAsync();
        }, []);
        
        const authContext = React.useMemo(() => ({
            signIn: async data => {
            // In a production app, we need to send some data (usually username, password) to server and get a token
            // We will also need to handle errors if sign in failed
            // After getting token, we need to persist the token using `AsyncStorage`
            // In the example, we'll use a dummy token
    
                dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            },
            signOut: () => dispatch({ type: 'SIGN_OUT' }),
            signUp: async data => {
            // In a production app, we need to send user data to server and get a token
            // We will also need to handle errors if sign up failed
            // After getting token, we need to persist the token using `AsyncStorage`
            // In the example, we'll use a dummy token
    
                dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            },
        }),[]);
        return (
            <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                <Stack.Navigator>
                    {state.isLoading ? (
                    // We haven't finished checking for the token yet
                        <Stack.Screen name="Splash" component={SplashScreen} />
                    ) : state.userToken == null ? (
                    // No token found, user isn't signed in
                        <Stack.Screen
                            name="SignIn"
                            component={SignAd}
                            options={{
                                title: 'Sign in',
                                // When logging out, a pop animation feels intuitive
                                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                            }}
                        />
                    ) : (
                    // User is signed in
                        <Stack.Screen name="Acceuil" component={AcceuilAd } />
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
        )

}