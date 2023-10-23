function PageContent(props) {
  return (
    <div
      id={props.id}
      className=" flex h-screen flex-col items-center justify-center bg-slate-500 align-middle "
    >
      <div className="h-[8vh]"></div>
      {props.children}
    </div>
  );
}

export default PageContent;
