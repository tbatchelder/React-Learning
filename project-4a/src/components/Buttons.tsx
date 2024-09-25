interface Props {
  children: string;
  color?: "primary" | "secondary" | "success";
  onClick: () => void;
}

function Buttons({ children, color = "primary", onClick }: Props) {
  // const bName = "Booberry";

  return (

      <div>
        
        <button type="button" className={"btn btn-" + color} onClick={onClick}>
          {children}
        </button>
      </div>
  );
}

export default Buttons;
