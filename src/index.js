
import React from "react";
import ReactDOM from "react-dom";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PostList } from './posts';
import { UserList } from './users';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

const Index = () => {
  const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
  return <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>;
};

ReactDOM.render(<Index />, document.getElementById("index"));