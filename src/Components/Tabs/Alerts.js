import { Redirect } from "react-router-dom";
import Alert from "../Alert";
import { Column } from "../Shared/Shared";

const Alerts = (props) => {
  const alerts = props?.data?.weather?.alerts;
  const AlertsColumn = () => (
    <Column>
      {alerts.map((alert) => (
        <Alert alert={alert} />
      ))}
    </Column>
  );
  return <>{alerts ? <AlertsColumn /> : <Redirect to="/Home" />}</>;
};

export default Alerts;
