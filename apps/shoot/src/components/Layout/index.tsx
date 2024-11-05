import { LoaderFunction } from 'react-router-dom';

export function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {

  return (
    <div className="">
      {/* <div className={classes.header} /> */}
      <div className="">{children}</div>
    </div>
  );
}
