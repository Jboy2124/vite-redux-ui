import Main from "../components/main/Main";
import Schedule from "../components/schedule/Schedule";
import Settings from "../components/settings/Settings";
import AboutUs from "../components/about/AboutUs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../slices/authSlice";

export function displaySelector(selectedId) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let content;

  switch (selectedId) {
    case 0:
      content = <Main />;
      break;
    case 1:
      content = <Schedule />;
      break;
    case 2:
      content = <AboutUs />;
      break;
    case 3:
      content = <Settings />;
      break;
    case 4:
      setTimeout(() => {
        dispatch(userLogout({ user: [] }));
        navigate("/");
      }, 2000);

      break;
    default:
      content = <Main />;
      break;
  }

  return content;
}
