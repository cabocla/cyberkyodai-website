import bgClass from "../ui/bg-image.module.css";

function PageContent(props) {
  // ${bgClass.bgImage}
  return (
    <div
      id={props.id}
      className={`
      flex h-screen flex-col items-center justify-center align-middle `}
    >
      <div className="h-[8vh]"></div>
      {props.children}
    </div>
  );
}

export default PageContent;
