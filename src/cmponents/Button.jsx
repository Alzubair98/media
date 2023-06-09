import className from "classnames";
import { GoSync } from "react-icons/go";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  outblue,
  outblack,
  outgreen,
  outyellow,
  outred,
  loading,
  ...rest
}) => {
  const classes = className(
    rest.className,
    "flex items-center gap-1 px-3 py-1.5 border h-10",
    {
      "opacity-80": loading,
      "bg-blue-500 broder-blue-500 text-white": primary,
      "bg-gray-900 broder-gray-900 text-white": secondary,
      "bg-green-500 broder-green-500 text-white": success,
      "bg-yellow-400 broder-yellow-400 text-white": warning,
      "bg-red-500 broder-red-500 text-white": danger,
      // rounded
      "rounded-full": rounded,
      // outline
      "bg-white": outline,
      "text-blue-500 border-blue-500": outblue,
      "text-gray-900 border-gray-900": outblack,
      "text-green-500 border-green-500": outgreen,
      "text-yellow-400 border-yellow-400": outyellow,
      "text-red-500 border-red-500": outred,
    }
  );

  return (
    <button disabled={loading} {...rest} className={classes}>
      {loading ? <GoSync className="animate-spin" /> : children}
    </button>
  );
};

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "only one of primary, secondary, success, warning, danger, can be true "
      );
    }
  },
};
export default Button;
