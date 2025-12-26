interface ButtonProps{
  variant: "primary"|"secondey";
  size: "sm"| "md" | "lg";
  text: string;
  startIcon?:any;
  endIcon: any;
  onClick: ()=> void;
}
export const Button=(props: ButtonProps)=>{
  return <button></button>
}
<Button endIcon={"+"} variant="primary" size="md" onClick={()=>{}} text={"assdd"} 
startIcon={"_"}/>