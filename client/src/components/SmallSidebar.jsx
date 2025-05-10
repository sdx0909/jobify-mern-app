import Wrapper from "../assets/wrappers/SmallSidebar";
import { Login } from "../pages";
import { useDashboardContext } from "../pages/DashboardLayout";
import Logo from "./Logo";

const SmallSidebar = () => {
  const data = useDashboardContext();
  console.log(data);
  return (
    <Wrapper>
      <h3> SmallSidebar </h3>
    </Wrapper>
  );
};
export default SmallSidebar;
