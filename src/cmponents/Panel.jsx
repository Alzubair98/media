import classNames from "classnames";

const Panel = ({ children, className, ...rest }) => {
  const finalClassNames = classNames("border rounded shadow p-2", className);

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
};

export default Panel;
