---
id: sap-c01
title: SAP-C01
sidebar_label: SAP-C01
description: SAP-C01SAP-C01
keywords:
  - rmuif
  - docs
  - pages
image: img/illustrations/pages.png
hide_title: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{ textAlign: "center" }}>
  <img style={{ width: "75%", marginBottom: "32px" }} alt="Illustration" src={useBaseUrl('img/illustrations/pages.svg')} />
  <h1>Pages</h1>
  <p>
    RMUIF uses React Router as its routing solution.
  </p>
</div>

## Creating a page

A page wraps a `MuiThemeProvider` and `ErrorBoundary`, the former is for theming components with the correct theme, and the latter for catching errors in a user-friendly way. The content of a page uses `CssBaseline` from Material-UI for basic styling.

### Defining the route

The first step in creating a page is to create a route for the page. In this example, we’ll create a page for messages. The route could look like this inside `Router`:

<Tabs
defaultValue="Router.js"
values={[
{ label: 'Router.js', value: 'Router.js' }
]
}>
<TabItem value="Router.js">

```jsx {6,24-26}
...

import HomePage from "../HomePage";
import AdminPage from "../AdminPage";
import UserPage from "./UserPage";
import MessagesPage from "../MessagesPage";
import NotFoundPage from "../NotFoundPage";

...

<Switch>
  <Route path="/" exact>
    <HomePage user={user} openSnackbar={openSnackbar} />
  </Route>

  <Route path="/admin">
    {user && roles.includes("admin") ? <AdminPage /> : <Redirect to="/" />}
  </Route>

  <Route path="/user/:userId">
    {user ? <UserPage /> : <Redirect to="/" />}
  </Route>

  <Route path="/messages">
    {user ? <MessagesPage /> : <Redirect to="/" />}
  </Route>

  <Route>
    <NotFoundPage />
  </Route>
</Switch>

...
```

</TabItem>
</Tabs>

The `/messages` route requires the user to be signed in to access the page, hence the ternary inside the route. If you want everyone to be able to access your route, you can include the page like `NotFoundPage`.

:::note

URL parameters are placeholders in the URL that begins with a colon, like the `:userId` parameter in the `/user/:userId` route. A similar convention exists for matching dynamic segments in other popular frameworks like Rails and Express.

:::

### Creating the files

After you’ve defined the route, you can create the actual page. The first step is to create a directory for your page. The structure should look like:

- /src
  - /MessagesPage
    - index.js
    - MessagesPage.js
    - MessagesPage.test.js

:::info

Page components are in the `/src` directory of your project.

:::

There are three files in total, and they look like:

<Tabs
defaultValue="index.js"
values={[
{ label: 'index.js', value: 'index.js' },
{ label: 'MessagesPage.js', value: 'MessagesPage.js' },
{ label: 'MessagesPage.test.js', value: 'MessagesPage.test.js' }
]
}>
<TabItem value="index.js">

This file’s purpose is to make it easier to import your page component. It sets the default export value to your actual component, so you don’t have to write your component name two times when importing it.

```jsx
export { default } from "./MessagesPage";
```

</TabItem>
<TabItem value="MessagesPage.js">

```jsx
import React from "react";

import EmptyState from "../EmptyState";

function MessagesPage() {
  return <EmptyState title="Messages" />;
}

export default MessagesPage;
```

</TabItem>
<TabItem value="MessagesPage.test.js">

```jsx
import React from "react";

import ReactDOM from "react-dom";

import { MemoryRouter, Route } from "react-router-dom";

import MessagesPage from "./MessagesPage";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <MemoryRouter>
      <MessagesPage />
    </MemoryRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
```

</TabItem>
</Tabs>

Now when you navigate to `/messages` you see your new page, displaying ”Messages“ in the center.
