import React from 'react';
import { Admin, Resource } from 'react-admin';
import { createMuiTheme } from '@material-ui/core/styles';
// import PostList from './components/PostList';
// import PostCreate from './components/PostCreate';
// import PostEdit from './components/PostEdit';
// import UserList from './components/UserList';
// import UserCreate from './components/UserCreate';
// import UserEdit from './components/UserEdit';
import Voter_groupsList from './components/Voter_groupsList';
import Voter_groupsCreate from './components/Voter_groupsCreate';
import Voter_groupsEdit from './components/Voter_groupsEdit';
import Voters_krList from './components/Voters_krList';
import Voters_krCreate from './components/Voters_krCreate';
import Voters_krEdit from './components/Voters_krEdit';
// import ElectionsList from './components/ElectionsList';
// import ElectionsCreate from './components/ElectionsCreate';
// import ElectionsEdit from './components/ElectionsEdit';
import NewElectionsList from './components/NewElectionsList';
import NewElectionsCreate from './components/NewElectionsCreate';
import NewElectionsEdit from './components/NewElectionsEdit';
import Dashboard from './components/Dashboard';
import {
    FirebaseDataProvider,
    FirebaseAuthProvider,
} from 'react-admin-firebase';
import firebase from 'firebase';
//import { firebaseConfig } from './FIREBASE_CONFIG';
import CustomLoginPage from './CustomLoginPage';
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKER,
    messagingSenderId:
        process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APPID,
};
const mytheme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f43662',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});
const firebaseApp = firebase.initializeApp(firebaseConfig);
const authProvider = FirebaseAuthProvider(firebaseConfig);
const dataProvider = FirebaseDataProvider(firebaseConfig, {
    logging: true,
    // rootRef: 'rootrefcollection/QQG2McwjR2Bohi9OwQzP',
    app: firebaseApp,
    // watch: ['posts'];
    // dontwatch: ['comments'];
    persistence: 'local',
    // disableMeta: true
    dontAddIdFieldToDoc: true,
    lazyLoading: {
        enabled: true,
    },
    firestoreCostsLogger: {
        enabled: true,
    },
});

export const fire_store = firebaseApp.firestore();

function App() {
    return (
        <Admin
            loginPage={CustomLoginPage}
            dataProvider={dataProvider}
            authProvider={authProvider}
            theme={mytheme}
            dashboard={Dashboard}
            title='ElecSNU-Admin'
        >
            {/* <Resource 
      name='posts' 
      list={PostList} 
      create={PostCreate} 
      edit={PostEdit} 
      />
      <Resource 
      name='users' 
      list={UserList} 
      create={UserCreate} 
      edit={UserEdit} 
      /> */}
            <Resource
                name='voter_groups'
                list={Voter_groupsList}
                create={Voter_groupsCreate}
                edit={Voter_groupsEdit}
            />
            <Resource
                name='voters_kr'
                list={Voters_krList}
                create={Voters_krCreate}
                edit={Voters_krEdit}
            />
            {/* <Resource
                name='elections'
                list={ElectionsList}
                create={ElectionsCreate}
                edit={ElectionsEdit}
            /> */}
            <Resource
                name='newelections'
                options={{
                    label: 'Elections',
                }}
                list={NewElectionsList}
                create={NewElectionsCreate}
                edit={NewElectionsEdit}
            />
        </Admin>
    );
}

export default App;
