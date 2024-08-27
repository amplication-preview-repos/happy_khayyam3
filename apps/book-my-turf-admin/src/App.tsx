import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AdminList } from "./admin/AdminList";
import { AdminCreate } from "./admin/AdminCreate";
import { AdminEdit } from "./admin/AdminEdit";
import { AdminShow } from "./admin/AdminShow";
import { ManagerList } from "./manager/ManagerList";
import { ManagerCreate } from "./manager/ManagerCreate";
import { ManagerEdit } from "./manager/ManagerEdit";
import { ManagerShow } from "./manager/ManagerShow";
import { BookingList } from "./booking/BookingList";
import { BookingCreate } from "./booking/BookingCreate";
import { BookingEdit } from "./booking/BookingEdit";
import { BookingShow } from "./booking/BookingShow";
import { TurfList } from "./turf/TurfList";
import { TurfCreate } from "./turf/TurfCreate";
import { TurfEdit } from "./turf/TurfEdit";
import { TurfShow } from "./turf/TurfShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BookMyTurf"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Admin"
          list={AdminList}
          edit={AdminEdit}
          create={AdminCreate}
          show={AdminShow}
        />
        <Resource
          name="Manager"
          list={ManagerList}
          edit={ManagerEdit}
          create={ManagerCreate}
          show={ManagerShow}
        />
        <Resource
          name="Booking"
          list={BookingList}
          edit={BookingEdit}
          create={BookingCreate}
          show={BookingShow}
        />
        <Resource
          name="Turf"
          list={TurfList}
          edit={TurfEdit}
          create={TurfCreate}
          show={TurfShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
