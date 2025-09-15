
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function LangLink({ to, ...props }) {
  const { localizePath } = useLanguage();
  const resolved =
    typeof to === "string"
      ? localizePath(to)
      : { ...to, pathname: localizePath(to.pathname || "/") };

  return <Link to={resolved} {...props} />;
}
