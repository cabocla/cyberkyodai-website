import bgClass from "../ui/bg-image.module.css";

function PageContent(props) {
  return (
    <div
      id={props.id}
      className={`${bgClass.bgImage} flex h-screen flex-col items-center justify-center bg-black align-middle `}
    >
      <div className="h-[8vh]"></div>
      {props.children}
    </div>
  );
}

export default PageContent;
